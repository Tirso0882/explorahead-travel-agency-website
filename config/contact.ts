/**
 * Contact Information Configuration
 * 
 * Centralized contact information for the website.
 * Update this file to change contact details across all legal documents and pages.
 * 
 * Usage:
 *   import { contact } from '@/config/contact';
 *   <a href={`mailto:${contact.email}`}>{contact.email}</a>
 *   <a href={`tel:${contact.phone}`}>{contact.phone}</a>
 */

export const contact = {
  /**
   * Primary contact email address
   */
  email: "info@explorahead.com",
  
  /**
   * Primary contact phone number
   * Format: +[country code] [number with spaces]
   */
  phone: "+48 503 801 994",
  
  /**
   * Company name
   */
  companyName: "ExplorAhead",
  
  /**
   * Website URL
   */
  website: "www.explorahead.com",
  
  /**
   * Full website URL with protocol
   */
  websiteUrl: "https://www.explorahead.com",
} as const;

/**
 * Helper function to get mailto link
 */
export function getMailtoLink(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  
  const query = params.toString();
  return query ? `mailto:${contact.email}?${query}` : `mailto:${contact.email}`;
}

/**
 * Helper function to get tel link
 */
export function getTelLink(): string {
  // Remove spaces and special characters for tel: links
  const phoneNumber = contact.phone.replace(/\s+/g, '');
  return `tel:${phoneNumber}`;
}

