import { MetadataRoute } from 'next';

const locales = ['es', 'en', 'sv', 'nl'];
const services = ["management", "new_build", "renovation", "extension", "pool", "rehabilitation", "waterproofing", "maintenance", "painting", "kitchen", "bathroom", "interior", "terrace", "plastering", "flooring"];
const baseUrl = 'https://jdelitebuilders.com'; // Placeholder domain

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [];

    // Home pages
    locales.forEach(locale => {
        entries.push({
            url: `${baseUrl}/${locale}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        });

        // Service pages
        services.forEach(slug => {
            entries.push({
                url: `${baseUrl}/${locale}/services/${slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            });
        });
    });

    return entries;
}
