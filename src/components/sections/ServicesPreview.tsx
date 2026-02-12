"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Utensils, Bath, Paintbrush, Sun, ChevronRight, Hammer, Grid, Wrench } from "lucide-react";

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
    const tp = useTranslations("ServicesPreview");

    return (
        <section id="services" className="py-24 bg-cream overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <span className="text-bronze font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
                        {tp("title")}
                    </span>
                    <h2 className="text-4xl lg:text-6xl font-black text-navy leading-tight mb-6">
                        {tp("subtitle")}
                    </h2>
                    <div className="w-20 h-1.5 bg-bronze mb-8" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const title = t(`${service.id}.title`);
                        const description = t(`${service.id}.description`);

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="relative h-[450px] group overflow-hidden rounded-2xl shadow-2xl shadow-navy/10"
                            >
                                <Link
                                    href={`/services/${service.id}`}
                                    className="block h-full w-full relative"
                                >
                                    {/* Image Background */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${service.image})` }}
                                    />

                                    {/* Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                                    {/* Content Wrapper */}
                                    <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="w-12 h-12 bg-bronze/90 backdrop-blur-md rounded-lg flex items-center justify-center mb-6 text-white shadow-lg">
                                            <Icon size={24} />
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                                            {title}
                                        </h3>

                                        <p className="text-white/80 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                                            {description}
                                        </p>

                                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-bronze-light">
                                            Ver Detalles <ChevronRight size={14} />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
