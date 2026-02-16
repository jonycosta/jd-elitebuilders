"use client";

import { useTranslations } from "next-intl";
import { MessageCircle, MapPin, FileText, Hammer } from "lucide-react";
import { motion } from "framer-motion";

export const ProcessSteps = () => {
    const t = useTranslations("Process");

    const steps = [
        { id: "step1", icon: MessageCircle },
        { id: "step2", icon: MapPin },
        { id: "step3", icon: FileText },
        { id: "step4", icon: Hammer },
    ];

    return (
        <section id="process" className="py-20 bg-white border-b border-stone/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-bronze font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
                        {t("title")}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-navy mb-4">{t("title")}</h2>
                    <p className="text-stone text-lg">{t("subtitle")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-stone/10 -z-10" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl border border-stone/10 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center group"
                            >
                                <div className="w-24 h-24 bg-navy text-white rounded-full flex items-center justify-center mb-6 text-3xl font-bold relative z-10 group-hover:scale-110 transition-transform duration-300 border-4 border-white shadow-md">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-2">{t(`${step.id}.title`)}</h3>
                                <p className="text-stone leading-relaxed text-sm">{t(`${step.id}.desc`)}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
