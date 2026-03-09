/**
 * SEO Metadata Utilities for J&D Elite Builders
 * Provides centralized metadata generation with local SEO optimization
 */

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { BUSINESS_INFO, type Locale } from './contacts';

interface MetadataParams {
    locale: Locale;
    namespace?: string;
    path?: string;
}

/**
 * Base URL - Update with actual domain when confirmed
 */
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://jdelitebuilders.company';

/**
 * Generate comprehensive metadata for pages
 */
export async function generatePageMetadata({
    locale,
    namespace = 'SEO.home',
    path = ''
}: MetadataParams): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace });

    const url = `${BASE_URL}/${locale}${path}`;
    const title = t('title');
    const description = t('description');

    // Get Open Graph specific translations if available
    const ogTitle = t.has('og_title') ? t('og_title') : title;
    const ogDescription = t.has('og_description') ? t('og_description') : description;

    return {
        title,
        description,
        keywords: generateKeywords(locale),
        authors: [{ name: BUSINESS_INFO.name }],
        creator: BUSINESS_INFO.name,
        publisher: BUSINESS_INFO.name,

        // Open Graph
        openGraph: {
            type: 'website',
            locale: getOpenGraphLocale(locale),
            url,
            title: ogTitle,
            description: ogDescription,
            siteName: BUSINESS_INFO.name,
            images: [
                {
                    url: `${BASE_URL}/logo-full.png`,
                    width: 1200,
                    height: 630,
                    alt: `${BUSINESS_INFO.name} - Elite Construction and Renovation`,
                }
            ],
        },

        // Twitter Card
        twitter: {
            card: 'summary_large_image',
            title: ogTitle,
            description: ogDescription,
            images: [`${BASE_URL}/logo-full.png`],
        },

        // Alternates for multi-language
        alternates: {
            canonical: url,
            languages: {
                'es': `${BASE_URL}/es${path}`,
                'en': `${BASE_URL}/en${path}`,
                'sv': `${BASE_URL}/sv${path}`,
                'nl': `${BASE_URL}/nl${path}`,
                'x-default': `${BASE_URL}/es${path}`,
            }
        },

        // Other metadata
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },

        // Verification
        verification: {
            google: 'M8wcieDNDcl7_jF5l3_UEQ7MQxP60gi8z9rzkkgBWFc',
        },
    };
}

/**
 * Map locale to Open Graph locale format
 */
function getOpenGraphLocale(locale: Locale): string {
    const localeMap: Record<Locale, string> = {
        es: 'es_ES',
        en: 'en_GB',
        sv: 'sv_SE',
        nl: 'nl_NL',
    };
    return localeMap[locale] || 'es_ES';
}

/**
 * Generate SEO keywords based on locale
 */
function generateKeywords(locale: Locale): string {
    const keywordSets: Record<Locale, string> = {
        es: 'mantenimiento propiedades nerja, mantenimiento preventivo nerja, gestión de propiedades nerja, reformas integrales nerja, custodia de llaves nerja, construcción costa del sol, mantenimiento reformas nerja, obra nueva nerja, cuidador de casas nerja, reparaciones nerja, equipo profesional construcción nerja',
        en: 'property maintenance nerja, preventive maintenance nerja, property management nerja, full renovations nerja, key holding nerja, construction costa del sol, home care spain, builders nerja, professional maintenance team nerja, house care spain',
        sv: 'fastighetsskötsel nerja, förebyggande underhåll nerja, fastighetsförvaltning nerja, husrenovering nerja, byggare nerja, nyckelvakt nerja, totalrenovering nerja, hemvård spanien, byggföretag costa del sol',
        nl: 'vastgoedonderhoud nerja, preventief onderhoud nerja, vastgoedbeheer nerja, woningrenovatie nerja, aannemers nerja, sleutelbeheer nerja, complete renovatie nerja, woningonderhoud spanje, bouwbedrijf costa del sol',
    };
    return keywordSets[locale] || keywordSets.es;
}

/**
 * Generate service-specific metadata
 */
export async function generateServiceMetadata(
    locale: Locale,
    serviceSlug: string
): Promise<Metadata> {
    return generatePageMetadata({
        locale,
        namespace: `SEO.services.${serviceSlug}`,
        path: `/services/${serviceSlug}`
    });
}
