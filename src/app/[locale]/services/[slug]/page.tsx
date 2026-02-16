import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ChevronRight, CheckCircle2, ArrowLeft } from "lucide-react";
import Image from "next/image";

interface ServicePageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps) {
    const { locale, slug } = await params;
    const t = await getTranslations({ locale, namespace: `SEO.services.${slug}` });

    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { locale, slug } = await params;
    const t = await getTranslations({ locale, namespace: "Services" });
    const tCommon = await getTranslations({ locale, namespace: "ServicePage" });

    // Validate slug
    const validSlugs = ["management", "new_build", "renovation", "extension", "pool", "rehabilitation", "waterproofing", "maintenance", "painting", "kitchen", "bathroom", "interior", "terrace", "plastering", "flooring"];
    if (!validSlugs.includes(slug)) {
        notFound();
    }

    const title = t(`${slug}.title`);
    const description = t(`${slug}.description`);
    const benefits = t.raw(`${slug}.benefits`) as string[];

    // Specialized content for management
    const hasDetailedProcess = slug === "management";
    const vision = hasDetailedProcess ? t(`${slug}.vision`) : null;
    const managementSteps = hasDetailedProcess ? t.raw(`${slug}.how_it_works.steps`) as { title: string; desc: string }[] : [];

    const serviceImages: Record<string, string> = {
        management: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
        kitchen: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200",
        bathroom: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200",
        interior: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
        terrace: "https://images.unsplash.com/photo-1493397212122-2b85edf8106b?auto=format&fit=crop&q=80&w=1200",
        painting: "https://images.unsplash.com/photo-1562663474-d30235c93216?auto=format&fit=crop&q=80&w=1200",
        plastering: "https://images.unsplash.com/photo-1621905252507-93ae3464168c?auto=format&fit=crop&q=80&w=1200",
        flooring: "https://images.unsplash.com/photo-1581404917879-53e19259fddd?auto=format&fit=crop&q=80&w=1200",
        new_build: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
        renovation: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200",
        extension: "https://images.unsplash.com/photo-1493397212122-2b85edf8106b?auto=format&fit=crop&q=80&w=1200",
        pool: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200",
        rehabilitation: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200",
        waterproofing: "https://images.unsplash.com/photo-1563302111-eeb4b1ca3d79?auto=format&fit=crop&q=80&w=1200",
        maintenance: "https://images.unsplash.com/photo-1581244276725-aa238235371c?auto=format&fit=crop&q=80&w=1200"
    };

    const imageUrl = serviceImages[slug] || `https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200`;

    return (
        <main className="min-h-screen bg-background pt-32">
            {/* Breadcrumb / Back Link */}
            <div className="container mx-auto px-6 mb-8">
                <Link href="/" className="inline-flex items-center gap-2 text-stone hover:text-navy transition-colors text-sm font-bold uppercase tracking-widest">
                    <ArrowLeft size={16} /> {tCommon("back_home")}
                </Link>
            </div>

            {/* Hero Section of Service */}
            <section className="relative py-20 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-1 bg-bronze/10 text-bronze rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                                {tCommon("construction_services")}
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-black text-navy mb-8 leading-tight">
                                {title}
                            </h1>
                            <p className="text-xl text-stone leading-relaxed mb-10 max-w-xl">
                                {description}
                            </p>

                            <div className="space-y-4 mb-12">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3 text-navy font-bold italic">
                                        <CheckCircle2 className="text-bronze" size={20} />
                                        {benefit}
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-3 bg-navy text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-bronze transition-all shadow-xl hover:shadow-bronze/20"
                            >
                                {tCommon("request_quote")} <ChevronRight size={20} />
                            </Link>
                        </div>

                        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <Image
                                src={imageUrl}
                                alt={title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Design Accents */}
                <div className="absolute top-0 right-0 w-1/4 h-full bg-bronze/5 -skew-x-12 -z-10" />
            </section>

            {/* Detailed Management Content */}
            {hasDetailedProcess && (
                <section className="py-24 bg-white border-y border-stone/10">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-3 gap-16">
                            <div className="lg:col-span-1">
                                <h2 className="text-3xl font-black text-navy mb-6 tracking-tight">{tCommon("vision_title")}</h2>
                                <p className="text-lg text-stone leading-relaxed italic border-l-4 border-bronze pl-6 py-2">
                                    "{vision}"
                                </p>
                            </div>
                            <div className="lg:col-span-2">
                                <h2 className="text-3xl font-black text-navy mb-12 tracking-tight">{t(`${slug}.how_it_works.title`)}</h2>
                                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
                                    {managementSteps.map((step, index) => (
                                        <div key={index} className="relative pl-16">
                                            <div className="absolute left-0 top-0 w-12 h-12 bg-navy text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                                                {index + 1}
                                            </div>
                                            <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                                            <p className="text-stone leading-relaxed">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Promo Banner */}
                                <div className="mt-16 bg-navy p-8 rounded-2xl text-white shadow-2xl relative overflow-hidden group">
                                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                        <p className="text-xl font-bold leading-relaxed flex-1 italic">
                                            {tCommon("promo_msg")}
                                        </p>
                                        <Link
                                            href="/#contact"
                                            className="whitespace-nowrap bg-bronze text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white hover:text-bronze transition-all shadow-lg"
                                        >
                                            {tCommon("request_quote")}
                                        </Link>
                                    </div>
                                    {/* Accent background decoration */}
                                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Why Us / Spanish-Dutch Story Snippet */}
            <section className="py-24 bg-cream">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-black text-navy mb-6">{tCommon("why_trust_title")}</h2>
                        <p className="text-stone leading-relaxed italic text-lg">
                            "{tCommon("why_trust_text")}"
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
