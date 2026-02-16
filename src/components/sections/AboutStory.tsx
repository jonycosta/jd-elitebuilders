"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, Zap, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export const AboutStory = () => {
    const t = useTranslations("About");

    const features = [
        { id: "local", icon: Globe },
        { id: "dutch", icon: ShieldCheck },
        { id: "youth", icon: Zap },
    ];

    return (
        <section id="about" className="py-24 bg-cream relative overflow-hidden">
            {/* Design Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/[0.02] transform skew-x-12 translate-x-1/4" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Visual Representation / Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-bronze font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
                            {t("subtitle")}
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-navy leading-tight mb-8">
                            {t("title")}
                        </h2>

                        <div className="space-y-6 text-stone text-lg leading-relaxed mb-10">
                            <p>{t("story")}</p>
                            <p className="italic text-navy/80 font-medium py-1">
                                "{t("satisfaction")}"
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6 justify-items-center">
                            {features.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={feature.id} className="flex flex-col items-center gap-3">
                                        <div className="w-12 h-12 bg-navy text-white rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-6 transition-transform">
                                            <Icon size={24} />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-navy leading-tight text-center">
                                            {t(`features.${feature.id}`)}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
