"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Eye, Scale, ArrowRight, CheckCircle2 } from "lucide-react";
import { getWhatsAppLink, type Locale } from "@/lib/contacts";

export const IntegralManagement = () => {
    const t = useTranslations("IntegralManagement");
    const locale = useLocale() as Locale;

    const pillars = [
        {
            id: "management",
            icon: ShieldCheck,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            id: "renovations",
            icon: Wrench,
            color: "text-bronze",
            bg: "bg-bronze/10",
        },
        {
            id: "transparency",
            icon: Eye,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
        },
        {
            id: "legal",
            icon: Scale,
            color: "text-purple-500",
            bg: "bg-purple-500/10",
        }
    ];

    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-bronze rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Messaging */}
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-bronze font-bold tracking-[0.2em] uppercase text-xs mb-6 inline-block flex items-center gap-2">
                                <CheckCircle2 size={16} /> {t("philosophy")}
                            </span>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
                                {t("title").split(' ').map((word, i, arr) => {
                                    if (i >= arr.length - 3) {
                                        return <span key={i} className="text-bronze">{word} </span>;
                                    }
                                    return word + " ";
                                })}
                            </h2>

                            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 font-light">
                                {t("subtitle")}
                            </p>

                            <a
                                href={getWhatsAppLink(locale, t("whatsappMessage"))}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-bronze hover:bg-bronze-light text-navy font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                            >
                                Contactar Ahora <ArrowRight size={20} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column: Pillars Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {pillars.map((pillar, index) => {
                            const Icon = pillar.icon;
                            return (
                                <motion.div
                                    key={pillar.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300"
                                >
                                    <div className={`w-14 h-14 ${pillar.bg} ${pillar.color} rounded-xl flex items-center justify-center mb-6`}>
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {t(`pillars.${pillar.id}.title`)}
                                    </h3>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        {t(`pillars.${pillar.id}.description`)}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};
