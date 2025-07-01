import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const prerender = false;

// Define types
type FormData = {
  name: string;
  email: string;
  company?: string;
  type: string;
  message: string;
};

type ValidatorFunction = (value: string) => string | null;

type Validators = {
  [K in keyof FormData]: ValidatorFunction;
};

// Validation functions
const validators: Validators = {
  name: (value: string) => {
    if (!value || value.length < 2 || value.length > 100) {
      return 'Name must be between 2 and 100 characters';
    }
    if (!/^[A-Za-z\s\-']+$/.test(value)) {
      return 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }
    return null;
  },
  email: (value: string) => {
    if (!value || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      return 'Please provide a valid email address';
    }
    return null;
  },
  company: (value: string) => {
    if (value && value.length > 100) {
      return 'Company name must be less than 100 characters';
    }
    return null;
  },
  type: (value: string) => {
    const validTypes = ['Factory Visit', 'MOQ', 'Prices', 'General', 'Partnership', 'Other'];
    if (!value || !validTypes.includes(value)) {
      return 'Please select a valid request type';
    }
    return null;
  },
  message: (value: string) => {
    if (!value || value.length < 10 || value.length > 1000) {
      return 'Message must be between 10 and 1000 characters';
    }
    return null;
  }
};

// Sanitize input
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove potential JavaScript protocol
    .replace(/on\w+=/gi, ''); // Remove potential event handlers
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json() as FormData;
    
    // Validate all fields
    const errors: Record<string, string> = {};
    (Object.keys(validators) as Array<keyof FormData>).forEach(field => {
      const value = data[field];
      const validator = validators[field];
      if (value !== undefined && validator) {
        const error = validator(value);
        if (error) {
          errors[field] = error;
        }
      }
    });

    // If there are validation errors, return them
    if (Object.keys(errors).length > 0) {
      return new Response(JSON.stringify({
        message: 'Validation failed',
        errors
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      company: data.company ? sanitizeInput(data.company) : '',
      type: sanitizeInput(data.type),
      message: sanitizeInput(data.message)
    };

    // Verify environment variables are loaded
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email configuration is missing. Please check your .env file.');
    }

    console.log('Attempting to send email with config:', {
      user: process.env.EMAIL_USER,
      host: 'smtp.gmail.com',
      port: 587
    });

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      throw verifyError;
    }

    // Email content with professional HTML template
    const mailOptions = {
      from: `"Kids Kreations Contact Form" <${process.env.EMAIL_USER}>`,
      to: ['pranav@kidskreationsco.com'],
      subject: `New Contact Form Submission: ${sanitizedData.type} from ${sanitizedData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #333333;">
          <!-- Email Container -->
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <!-- Header -->
            <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #f0f0f0;">
              <h1 style="color: #2563eb; margin: 0; font-size: 24px;">Kids Kreations</h1>
              <p style="color: #6b7280; margin: 5px 0 0 0;">Premium infantwear OEM/ODM manufacturer</p>
            </div>

            <!-- Main Content -->
            <div style="padding: 30px 0;">
              <h2 style="color: #2563eb; margin: 0 0 20px 0; font-size: 20px;">New Contact Form Submission</h2>
              
              <!-- Request Type Badge -->
              <div style="background-color: #eff6ff; color: #2563eb; padding: 8px 16px; border-radius: 4px; display: inline-block; margin-bottom: 20px; font-weight: bold;">
                ${sanitizedData.type}
              </div>

              <!-- Contact Information -->
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; width: 120px; color: #6b7280;">Name:</td>
                    <td style="padding: 8px 0; font-weight: 500;">${sanitizedData.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;">Email:</td>
                    <td style="padding: 8px 0; font-weight: 500;">${sanitizedData.email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;">Company:</td>
                    <td style="padding: 8px 0; font-weight: 500;">${sanitizedData.company || 'Not provided'}</td>
                  </tr>
                </table>
              </div>

              <!-- Message -->
              <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">Message</h2>
                <p style="margin: 0; white-space: pre-wrap;">${sanitizedData.message}</p>
              </div>
            </div>

            <!-- Footer -->
            <div style="text-align: center; padding: 20px 0; border-top: 2px solid #f0f0f0; color: #6b7280; font-size: 14px;">
              <div style="margin-bottom: 20px;">
                <p style="margin: 0 0 10px 0; font-weight: 500; color: #1f2937;">Contact Information</p>
                <p style="margin: 5px 0;">📧 <a href="mailto:lilsoft@kidskreationsco.com" style="color: #2563eb; text-decoration: none;">lilsoft@kidskreationsco.com</a></p>
                <p style="margin: 5px 0;">📞 +66 34 877 221</p>
                <p style="margin: 5px 0;">📍 234 Moo 10, Sedtakij Rd., Klong Ma Dua, Krathum Baen, Samut Sakhon, Thailand 74110</p>
              </div>
              
              <div style="margin-bottom: 20px;">
                <p style="margin: 0 0 10px 0; font-weight: 500; color: #1f2937;">Connect With Us</p>
                <div style="display: flex; justify-content: center; gap: 15px;">
                  <a href="https://www.linkedin.com/company/kids-kreations-company-limited/" style="color: #6b7280; text-decoration: none;">LinkedIn</a>
                  <a href="https://www.facebook.com/lilsoftbaby" style="color: #6b7280; text-decoration: none;">Facebook</a>
                  <a href="https://www.instagram.com/lilsoft_baby/" style="color: #6b7280; text-decoration: none;">Instagram</a>
                </div>
              </div>

              <p style="margin: 0 0 10px 0;">© ${new Date().getFullYear()} Kids Kreations Co., Ltd. All rights reserved.</p>
              <p style="margin: 0;">Premium infantwear OEM/ODM manufacturer in Thailand</p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: sanitizedData.email
    };

    console.log('Attempting to send email to:', mailOptions.to);

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);

        // Send confirmation email to the user
    const confirmationMailOptions = {
      from: `"Kids Kreations" <${process.env.EMAIL_USER}>`,
      to: sanitizedData.email,
      subject: "We've received your message!",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Thank you for contacting Kids Kreations!</h2>
          <p>Hi ${sanitizedData.name},</p>
          <p>We've received your message and will get back to you within 24 hours.</p>
          <p><b>Your message:</b></p>
          <blockquote style="background:#f9f9f9; padding:10px; border-left:3px solid #2563eb;">
            ${sanitizedData.message}
          </blockquote>
          <p>Best regards,<br>Kids Kreations Team</p>
        </div>
      `
    };
    await transporter.sendMail(confirmationMailOptions);

    return new Response(JSON.stringify({
      message: 'Email sent successfully'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    return new Response(JSON.stringify({
      message: 'Error sending email',
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 