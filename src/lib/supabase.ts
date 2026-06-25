// Supabase client + image helpers for the marketing website.
// Reads from the isolated `web_images` table (public read-only via RLS).
// No Supabase image transforms used — images are served as-is from Storage.
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const BUCKET = import.meta.env.PUBLIC_SUPABASE_BUCKET ?? "kk_images";

const enabled = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export const supabase = enabled
	? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
	: null;

/** Build a raw public Storage URL (no transform). */
export function publicImageUrl(path: string): string {
	return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${encodeURIComponent(
		path,
	)}`;
}

export interface WebImage {
	src: string;
	alt: string;
	sku: string | null;
}

/**
 * Fetch active images for a collection ('product' | 'lookbook'),
 * grouped by category slug and ordered by sort_order.
 * Returns {} on any failure so callers fall back to static assets.
 */
export async function getWebImagesByCategory(
	collection: "product" | "lookbook" = "product",
): Promise<Record<string, WebImage[]>> {
	if (!supabase) return {};
	try {
		const { data, error } = await supabase
			.from("web_images")
			.select("category, image_path, alt, sku, sort_order")
			.eq("collection", collection)
			.eq("is_active", true)
			.order("category", { ascending: true })
			.order("sort_order", { ascending: true });

		if (error || !data) return {};

		const grouped: Record<string, WebImage[]> = {};
		for (const row of data) {
			(grouped[row.category] ??= []).push({
				src: publicImageUrl(row.image_path),
				alt: row.alt ?? "",
				sku: row.sku ?? null,
			});
		}
		return grouped;
	} catch {
		return {};
	}
}
