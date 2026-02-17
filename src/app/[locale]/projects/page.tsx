import { getTranslations } from 'next-intl/server';
import { projects, getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/features/ProjectCard';
import type { Locale } from '@/lib/contacts';
import { generatePageMetadata } from '@/lib/metadata';

interface ProjectsPageProps {
    params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: ProjectsPageProps) {
    const { locale } = await params;
    return generatePageMetadata({
        locale,
        namespace: 'SEO.projects',
        path: '/projects'
    });
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Projects' });

    const featuredProjects = getFeaturedProjects();
    const allProjects = projects;

    return (
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

            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-navy mb-8">
                        {t('featured')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} locale={locale} />
                        ))}
                    </div>
                </section>
            )}

            {/* All Projects */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-navy mb-8">
                    {t('all_projects')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} locale={locale} />
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
    );
}
