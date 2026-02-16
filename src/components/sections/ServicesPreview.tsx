"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Utensils, Bath, Paintbrush, Sun, ChevronRight, Hammer, Grid, Wrench, ShieldCheck } from "lucide-react";

const services = [
    {
        id: "kitchen",
        icon: Utensils,
        image: "/portfolio/cocina-moderna-isla-marmol.jpg"
    },
    {
        id: "bathroom",
        icon: Bath,
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "interior",
        icon: Paintbrush,
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "terrace",
        icon: Sun,
        image: "https://images.unsplash.com/photo-1493397212122-2b85edf8106b?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "painting",
        icon: Paintbrush,
        image: "https://images.unsplash.com/photo-1562663474-d30235c93216?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "maintenance",
        icon: Wrench,
        image: "/portfolio/impermeabilizacion-terrazas-tejados.jpg"
    },
    {
        id: "plastering",
        icon: Hammer,
        image: "https://images.unsplash.com/photo-1621905252507-93ae3464168c?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "flooring",
        icon: Grid,
        image: "https://images.unsplash.com/photo-1581404917879-53e19259fddd?auto=format&fit=crop&q=80&w=800"
    },
];

export const ServicesPreview = () => {
    const t = useTranslations("Services");

    // Pillar 1: Management & Maintenance
    const managementServices = [
        {
            id: "management",
            icon: ShieldCheck,
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" // Keys/Handover
        },
        {
            id: "maintenance",
            icon: Wrench,
            image: "/portfolio/impermeabilizacion-terrazas-tejados.jpg"
        }
    ];

    // Pillar 2: Construction & Design
    const constructionServices = [
        {
            id: "new_build",
            icon: Hammer,
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" // Modern Villa
        },
        {
            id: "renovation",
            icon: Paintbrush,
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" // Interior
        },
        {
            id: "kitchen",
            icon: Utensils,
            image: "/portfolio/cocina-moderna-isla-marmol.jpg"
        },
        {
            id: "pool",
            icon: Sun,
            image: "https://images.unsplash.com/photo-1572331165267-854da2b00ca1?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const renderServiceCard = (service: any, index: number) => {
        const Icon = service.icon;
        const title = t(`${service.id}.title`);
        const description = t(`${service.id}.description`);
        const benefits = t.raw(`${service.id}.benefits`) as string[];

        return (
            <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative h-[480px] group overflow-hidden rounded-2xl shadow-2xl shadow-navy/10"
            >
                <Link
                    href={`/services/${service.id}`}
                    className="block h-full w-full relative"
                >
                    {/* Image Background */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${service.image})` }}
                        role="img"
                        aria-label={`${title} - J&D Elite Builders`}
                    />

                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

                    {/* Content Wrapper */}
                    <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-14 h-14 bg-bronze/90 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 text-white shadow-lg">
                            <Icon size={28} />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                            {title}
                        </h3>

                        <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-3">
                            {description}
                        </p>

                        <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="flex items-center gap-2 text-white/90 text-xs font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-bronze" />
                                    {benefit}
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-bronze-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Ver Detalles <ChevronRight size={14} />
                        </div>
                    </div>
                </Link>
            </motion.div>
        );
    };

    return (
        <section id="services" className="py-24 bg-cream overflow-hidden">
            <div className="container mx-auto px-6">

                {/* PILLAR 1: PROPERTY MANAGEMENT */}
                <div className="mb-24">
                    <div className="max-w-3xl mb-12">
                        <span className="text-bronze font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block flex items-center gap-2">
                            <ShieldCheck size={16} /> Property Care
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-4">
                            {t("pillar_management.title")}
                        </h2>
                        <p className="text-stone text-lg max-w-2xl">{t("pillar_management.subtitle")}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {managementServices.map((service, index) => renderServiceCard(service, index))}
                    </div>
                </div>

                {/* PILLAR 2: CONSTRUCTION */}
                <div>
                    <div className="max-w-3xl mb-12">
                        <span className="text-bronze font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block flex items-center gap-2">
                            <Hammer size={16} /> Projects
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-4">
                            {t("pillar_construction.title")}
                        </h2>
                        <p className="text-stone text-lg max-w-2xl">{t("pillar_construction.subtitle")}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {constructionServices.map((service, index) => renderServiceCard(service, index))}
                    </div>
                </div>

            </div>
        </section>
    );
};
