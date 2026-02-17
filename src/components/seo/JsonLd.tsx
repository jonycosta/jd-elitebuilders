import { BUSINESS_INFO, getContactInfo, type Locale } from "@/lib/contacts";

interface JsonLdProps {
    locale: string;
}

export const JsonLd = ({ locale }: JsonLdProps) => {
    const contactInfo = getContactInfo(locale as Locale);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://jdelitebuilders.company",
        "name": BUSINESS_INFO.name,
        "image": "https://jdelitebuilders.company/logo-full.png",
        "logo": "https://jdelitebuilders.company/logo.png",
        "url": "https://jdelitebuilders.company",
        "telephone": [BUSINESS_INFO.phones[0], BUSINESS_INFO.phones[1]],
        "priceRange": "$$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": BUSINESS_INFO.address.street,
            "addressLocality": BUSINESS_INFO.address.city,
            "addressRegion": BUSINESS_INFO.address.region,
            "postalCode": BUSINESS_INFO.address.postalCode,
            "addressCountry": BUSINESS_INFO.address.country
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": BUSINESS_INFO.geo.latitude,
            "longitude": BUSINESS_INFO.geo.longitude
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
            }
        ],
        "areaServed": [
            {
                "@type": "City",
                "name": "Nerja",
                "containedIn": {
                    "@type": "AdministrativeArea",
                    "name": "Málaga"
                }
            },
            {
                "@type": "City",
                "name": "Frigiliana"
            },
            {
                "@type": "City",
                "name": "Torrox"
            },
            {
                "@type": "City",
                "name": "Málaga"
            },
            {
                "@type": "City",
                "name": "Marbella"
            },
            {
                "@type": "City",
                "name": "Fuengirola"
            },
            {
                "@type": "City",
                "name": "Mijas"
            },
            {
                "@type": "City",
                "name": "Granada"
            },
            {
                "@type": "City",
                "name": "La Herradura"
            }
        ],
        "serviceType": [
            "Property Management",
            "Key Holding",
            "Vacation Home Care",
            "Construction",
            "Home Renovation",
            "New Build",
            "Swimming Pool Construction",
            "Kitchen Renovation",
            "Bathroom Renovation",
            "Painting Services",
            "Waterproofing",
            "Property Maintenance",
            "Plastering",
            "Flooring"
        ],
        "sameAs": [
            BUSINESS_INFO.social.instagram,
            BUSINESS_INFO.social.facebook
        ],
        "description": "J&D Elite Builders provides premium construction, renovation, and property management services in Nerja and Costa del Sol. High Dutch quality meets local Spanish expertise. Specialized in luxury home care for international owners, new builds, and complete villas transformation.",
        "knowsLanguage": ["Spanish", "English", "Dutch", "Swedish"],
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
};
