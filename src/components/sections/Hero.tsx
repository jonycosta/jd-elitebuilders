"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const Hero = () => {
    const t = useTranslations("Hero");
    const tStats = useTranslations("Stats");

    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Background Image - Light, bright Mediterranean Villa */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[30s] scale-110 motion-safe:animate-slow-zoom"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop')", // Bright modern villa
                    filter: "brightness(0.9) contrast(1.1)" // Less dark, just crisp
                }}
            />

            {/* Gradient Overlay - Light & Airy instead of Black */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent lg:opacity-100" />

            <div className="relative z-10 container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Brand Overlay Integration - Elegant Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none -z-10 select-none mix-blend-soft-light">
                    <img src="/logo.png" alt="J&D Elite Builders Watermark" className="w-full h-full object-contain filter brightness-0 invert" />
                </div>

                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block text-bronze font-black tracking-[0.3em] uppercase text-base mb-4 border-b-2 border-bronze/20 pb-2">
                            {t("tagline")}
                        </span>

                        {/* Psychological marketing hook */}
                        <p className="text-sm sm:text-base text-navy font-semibold mb-4 tracking-wide">
                            🥂 <em>¿Tu propiedad en la Costa del Sol te genera estrés?</em> Nosotros lo resolvemos — tú solo disfrutas.
                        </p>
                        <h1 className="text-xl sm:text-2xl lg:text-4xl font-black text-navy leading-tight mb-4">
                            {t("title_start")} <span className="text-bronze italic font-serif" title="Elite Construction & Management">{t("title_highlight")}</span> {t("title_end")}
                        </h1>

                        {/* Collaborator badge */}
                        <div className="flex flex-col gap-2 mb-8">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-gray-300 text-[11px] font-bold text-gray-900 uppercase tracking-widest w-fit">
                                    🤝 Empresa colaboradora con <strong>GrupoCostaVisor</strong>
                                </span>
                                <a
                                    href="mailto:grupocostavisor@gmail.com"
                                    className="text-xs text-gray-900 hover:text-bronze transition-colors font-medium tracking-wide sm:ml-2"
                                >
                                    grupocostavisor@gmail.com
                                </a>
                            </div>
                            <a
                                href="https://www.costavisor.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-gray-300 text-[11px] font-bold text-gray-900 uppercase tracking-widest w-fit hover:border-bronze hover:text-bronze transition-colors"
                            >
                                🌐 www.costavisor.com
                            </a>
                        </div>
                        <p className="text-lg lg:text-xl text-navy-light max-w-2xl mb-8 font-medium tracking-wide leading-relaxed">
                            {t("description")}
                        </p>

                        {/* Trust Badges - Simple & Direct */}
                        <div className="flex flex-wrap gap-4 mb-10">
                            <span className="px-4 py-2 bg-navy/5 rounded-full text-xs font-bold text-navy uppercase tracking-widest border border-navy/10 flex items-center gap-2">
                                🇪🇸 🇬🇧 {t("badges.bilingual")}
                            </span>
                            <span className="px-4 py-2 bg-bronze/10 rounded-full text-xs font-bold text-bronze uppercase tracking-widest border border-bronze/20 flex items-center gap-2">
                                🔑 {t("badges.management")}
                            </span>
                            <span className="px-4 py-2 bg-navy/5 rounded-full text-xs font-bold text-navy uppercase tracking-widest border border-navy/10 flex items-center gap-2">
                                🏗️ {t("badges.renovations")}
                            </span>
                            <span className="px-4 py-2 bg-bronze/10 rounded-full text-xs font-bold text-bronze uppercase tracking-widest border border-bronze/20 flex items-center gap-2">
                                🛡️ {t("badges.maintenance")}
                            </span>
                        </div>


                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/quote" className="bg-navy text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-navy-light transition-smooth flex items-center justify-center gap-3 shadow-xl shadow-navy/20 group">
                                {t("cta_primary")}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/services/management"
                                className="border-2 border-navy/10 backdrop-blur-sm bg-white/50 text-navy px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-white hover:text-bronze transition-smooth hover:border-bronze shadow-lg text-center"
                            >
                                {t("cta_secondary")}
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Stats - Glassmorphism Light Style */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="hidden lg:flex flex-col gap-6"
                >
                    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl border border-white shadow-2xl shadow-navy/5 flex flex-col items-center min-w-[180px]">
                        <span className="block text-4xl font-black text-gradient-navy mb-1">+15</span>
                        <span className="text-xs uppercase tracking-widest text-stone font-bold">{tStats("experience")}</span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl border border-white shadow-2xl shadow-navy/5 flex flex-col items-center min-w-[180px]">
                        <span className="block text-4xl font-black text-gradient-navy mb-1">200+</span>
                        <span className="text-xs uppercase tracking-widest text-stone font-bold">{tStats("projects")}</span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl border border-white shadow-2xl shadow-navy/5 flex flex-col items-center min-w-[180px]">
                        <span className="block text-4xl font-black text-gradient-navy mb-1">100%</span>
                        <span className="text-xs uppercase tracking-widest text-stone font-bold">{tStats("guarantee")}</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Darker for visibility */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[2px] h-12 bg-gradient-to-t from-navy to-transparent" />
                <span className="text-[10px] uppercase tracking-widest text-navy font-bold opacity-50">{t("scroll")}</span>
            </motion.div>
        </section>
    );
};
