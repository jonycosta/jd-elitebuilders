/**
 * Centralized Contact Configuration for J&D Elite Builders
 * Language-aware phone routing system
 */

export type Locale = 'es' | 'en' | 'sv' | 'nl';

interface ContactInfo {
    phone: string;
    whatsapp: string;
    languages: string[];
    displayName: string;
}

/**
 * Phone routing configuration by locale
 * - Spanish & English → +34 643216427
 * - Swedish & Dutch → +34 670764496
 */
const CONTACT_MAP: Record<Locale, ContactInfo> = {
    es: {
        phone: '+34643216427',
        whatsapp: 'https://wa.me/34643216427',
        languages: ['Español', 'English'],
        displayName: '+34 643 21 64 27'
    },
    en: {
        phone: '+34643216427',
        whatsapp: 'https://wa.me/34643216427',
        languages: ['Spanish', 'English'],
        displayName: '+34 643 21 64 27'
    },
    sv: {
        phone: '+34670764496',
        whatsapp: 'https://wa.me/34670764496',
        languages: ['English', 'Nederlands'],
        displayName: '+34 670 76 44 96'
    },
    nl: {
        phone: '+34670764496',
        whatsapp: 'https://wa.me/34670764496',
        languages: ['English', 'Nederlands'],
        displayName: '+34 670 76 44 96'
    }
};

/**
 * Get contact information for a specific locale
 */
export function getContactInfo(locale: Locale): ContactInfo {
    return CONTACT_MAP[locale] || CONTACT_MAP.es;
}

/**
 * Generate WhatsApp link with optional pre-filled message
 */
export function getWhatsAppLink(locale: Locale, message?: string): string {
    const contact = getContactInfo(locale);
    if (message) {
        return `${contact.whatsapp}?text=${encodeURIComponent(message)}`;
    }
    return contact.whatsapp;
}

/**
 * Get formatted phone number for display
 */
export function getFormattedPhone(locale: Locale): string {
    return getContactInfo(locale).displayName;
}

/**
 * Get raw phone number for tel: links and schema
 */
export function getRawPhone(locale: Locale): string {
    return getContactInfo(locale).phone;
}

/**
 * Business contact constants
 */
export const BUSINESS_INFO = {
    name: 'J&D Elite Builders',
    email: 'info@jdelitebuilders.company', // Updated domain
    address: {
        street: 'Calle de la Victoria',
        city: 'Nerja',
        region: 'Málaga',
        postalCode: '29780',
        country: 'ES'
    },
    geo: {
        latitude: 36.7441,
        longitude: -3.8767
    },
    social: {
        instagram: 'https://www.instagram.com/jdelitebuilders',
        facebook: 'https://www.facebook.com/jdelitebuilders'
    },
    // All phone numbers for schema
    phones: ['+34643216427', '+34670764496']
} as const;
