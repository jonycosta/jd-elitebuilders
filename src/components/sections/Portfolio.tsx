"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Maximize2 } from "lucide-react";
import Image from "next/image";

type Category = 'all' | 'renovations' | 'finishes' | 'painting' | 'maintenance';

interface Project {
    id: number;
    title: string;
    category: Category;
    image: string;
    location: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Luxury Bathroom - Golden Marble Shower",
        category: "renovations",
        image: "/portfolio/bano-ducha-marmol-dorado.jpg",
        location: "Nerja"
    },
    {
        id: 4,
        title: "Silk Finish Plastering",
        category: "finishes",
        image: "https://images.unsplash.com/photo-1621905252507-93ae3464168c?auto=format&fit=crop&q=80&w=1200",
        location: "Maro"
    },
    {
        id: 7,
        title: "Reforma Integral Luxury Living",
        category: "renovations",
        image: "/portfolio/reforma-luxury-living.jpg",
        location: "Nerja"
    },
    {
        id: 8,
        title: "Terraza & Spa Privado",
        category: "renovations",
        image: "/portfolio/reforma-terrace-spa.jpg",
        location: "Costa del Sol"
    },
    {
        id: 9,
        title: "Baño: Antes y Después",
        category: "renovations",
        image: "/portfolio/reforma-bano-antes-despues.jpg",
        location: "Nerja"
    },
    {
        id: 10,
        title: "Cocina de Diseño Forest Green",
        category: "renovations",
        image: "/portfolio/reforma-cocina-verde.jpg",
        location: "Frigiliana"
    },
    {
        id: 11,
        title: "Modern Exterior Facade Painting",
        category: "painting",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=1200",
        location: "Nerja"
    },
    {
        id: 12,
        title: "Premium Loft Interior Painting",
        category: "painting",
        image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=1200",
        location: "Torrox"
    },
    {
        id: 15,
        title: "White Bathroom Painting - Metro Tiles",
        category: "painting",
        image: "/portfolio/pintura-bano-azulejos-blancos.jpg",
        location: "Frigiliana"
    },
    {
        id: 16,
        title: "Terrace & Roof Waterproofing",
        category: "maintenance",
        image: "/portfolio/impermeabilizacion-terrazas-tejados.jpg",
        location: "Costa del Sol"
    },
    {
        id: 13,
        title: "Garden & Pool Maintenance",
        category: "maintenance",
        image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1200",
        location: "Frigiliana"
    }
];

export const Portfolio = () => {
    const t = useTranslations("Portfolio");
    const [activeCategory, setActiveCategory] = useState<Category>('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-bronze font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
                            {t("title")}
                        </span>
                        <h2 className="text-4xl lg:text-6xl font-black text-navy leading-tight">
                            {t("subtitle")}
                        </h2>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-2">
                        {(['all', 'renovations', 'finishes', 'painting', 'maintenance'] as const).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeCategory === cat
                                    ? "bg-navy text-white shadow-lg"
                                    : "bg-cream text-stone hover:bg-bronze/10 hover:text-bronze"
                                    }`}
                            >
                                {t(`categories.${cat}`)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-cream"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-bronze-light text-[10px] font-bold uppercase tracking-widest mb-2 block">
                                        {project.location}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-6 group-hover:text-bronze transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white border-b border-bronze pb-1">
                                            {t("view_project")} <ChevronRight size={14} className="text-bronze" />
                                        </button>
                                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10">
                                            <Maximize2 size={16} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};
