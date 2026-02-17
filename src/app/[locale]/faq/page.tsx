import { getTranslations } from 'next-intl/server';
import { faqData } from '@/data/faq';
import { FAQItemComponent } from '@/components/features/FAQItem';
import type { Locale } from '@/lib/contacts';
import { generatePageMetadata } from '@/lib/metadata';

interface FAQPageProps {
    params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: FAQPageProps) {
    const { locale } = await params;
    return generatePageMetadata({
        locale,
        namespace: 'SEO.faq',
        path: '/faq'
    });
}

export default async function FAQPage({ params }: FAQPageProps) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'FAQ' });

    // Generate FAQ Schema for Google
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question[locale],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer[locale]
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <section className="relative bg-navy text-white py-20">
                    <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10" />
                    <div className="container mx-auto px-4 relative z-10">
                        <h1 className="text-4xl md:text-5xl font-black mb-6">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl">
                            {t('subtitle')}
                        </p>
                    </div>
                </section>

                {/* FAQ Content */}
                <section className="container mx-auto px-4 py-16 max-w-4xl">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        {faqData.map((faq) => (
                            <FAQItemComponent key={faq.id} faq={faq} locale={locale} />
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-navy text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">{t('cta_title')}</h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            {t('cta_subtitle')}
                        </p>
                        <a
                            href={`/${locale}/quote`}
                            className="inline-block bg-bronze text-white px-8 py-4 rounded-lg font-semibold hover:bg-bronze/90 transition-colors"
                        >
                            {t('cta_button')}
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
