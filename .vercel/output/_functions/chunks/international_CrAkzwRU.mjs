const globe = new Proxy({"src":"/_astro/international.Cz7nqYMN.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/assets/icons/international.png";
							}
							
							return target[name];
						}
					});

export { globe as g };
