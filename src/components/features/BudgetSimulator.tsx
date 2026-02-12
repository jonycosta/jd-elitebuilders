"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, AlertTriangle, CheckCircle, ChevronRight, RotateCcw, Utensils, Bath, Paintbrush, Sun, Hammer, Grid } from "lucide-react";
import { cn } from "@/lib/utils";

// New Core Types based on User Focus
type ProjectType = 'kitchen' | 'bathroom' | 'interior' | 'terrace' | 'painting' | 'plastering' | 'flooring';

interface CalculatorData {
    type: ProjectType | null;
    size: number;
}

// Pricing Strategy: "Aggressive Lead Magnet" - Attractive entry prices to drive calls & visits.
const PRICES = {
    kitchen: 420,
    bathroom: 380,
    interior: 450,
    terrace: 180,
    painting: 5,
    plastering: 15,
    flooring: 28
};

const QUALITY_MULTIPLIER = 1.0;

const LIMITS = {
    kitchen: 25,
    bathroom: 15,
    interior: 80,
    terrace: 100,
    painting: 250, // Standard apartments/houses for painting estimation
    plastering: 400,
    flooring: 200
};

export const BudgetSimulator = () => {
    const t = useTranslations("BudgetSimulator");
    const [step, setStep] = useState(0);
    const [data, setData] = useState<CalculatorData>({
        type: null,
        size: 50
    });

    const calculateRange = () => {
        const typeToUse = data.type || 'interior';
        const sizeToUse = data.size;

        const base = PRICES[typeToUse] * sizeToUse * QUALITY_MULTIPLIER;

        return {
            min: Math.round(base * 0.85),
            max: Math.round(base * 1.15)
        };
    };

    const range = calculateRange();

    const getWhatsAppUrl = () => {
        const phone = "34612345678"; // Generic placeholder
        const typeText = data.type ? t(`types.${data.type}`) : "";
        const sizeText = `${data.size}m²`;
        const investmentText = data.size < LIMITS[data.type || 'interior']
            ? `${range.min}€ - ${range.max}€`
            : "Estudio de Gran Envergadura";

        const text = `Hola J&D, acabo de usar vuestro simulador web:
- Proyecto: ${typeText}
- Tamaño: ${sizeText}
- Inversión estimada: ${investmentText}

Me gustaría solicitar una visita y valoración gratuita.`;

        return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    };

    const handleNext = () => {
        setStep((prev) => prev + 1);
    };

    const handleRestart = () => {
        setData({ type: null, size: 50 });
        setStep(0);
    };

    return (
        <section id="simulator" className="py-24 bg-cream relative overflow-hidden">
            {/* Background Accent - Soft Bronze/Navy */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-bronze/5 blur-[100px] rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 text-bronze font-bold tracking-[0.2em] uppercase text-xs mb-4">
                            <Calculator size={16} />
                            {t("title")}
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-black text-navy mb-6 leading-tight">
                            {t("subtitle")}
                        </h2>

                    </div>
                </div>

                <div className="bg-white/80 border border-white/50 rounded-2xl p-8 lg:p-12 backdrop-blur-xl shadow-2xl shadow-navy/5 min-h-[500px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {/* MANUAL MODE STEPS */}
                        {step === 0 && (
                            <motion.div
                                key="manual-step0"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8 w-full"
                            >
                                <h3 className="text-2xl font-bold text-navy text-center">{t("type_label")}</h3>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                    {(['kitchen', 'bathroom', 'interior', 'terrace', 'painting', 'plastering', 'flooring'] as const).map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setData({ ...data, type })}
                                            className={cn(
                                                "flex flex-col items-center justify-center p-4 py-8 rounded-xl border transition-all duration-300 group h-full hover:shadow-lg",
                                                data.type === type
                                                    ? "bg-navy border-navy text-white shadow-xl scale-105"
                                                    : "bg-white border-stone/10 text-navy-light hover:border-bronze hover:bg-stone-50"
                                            )}
                                        >
                                            {type === 'kitchen' && <Utensils size={28} className="mb-3 opacity-90 group-hover:scale-110 transition-transform" />}
                                            {type === 'bathroom' && <Bath size={28} className="mb-3 opacity-90 group-hover:scale-110 transition-transform" />}
                                            {type === 'interior' && <Paintbrush size={28} className="mb-3 opacity-90 group-hover:scale-110 transition-transform" />}
                                            {type === 'terrace' && <Sun size={28} className="mb-3 opacity-90 group-hover:scale-110 transition-transform" />}
                                            {type === 'painting' && <Paintbrush size={28} className="mb-3 opacity-90 group-hover:scale-110 transition-transform text-bronze group-hover:text-white" />}
                                            {type === 'plastering' && <Hammer size={28} className="mb-3 opacity-90 group-hover:scale-110 transition-transform text-bronze group-hover:text-white" />}
                                            {type === 'flooring' && <Grid size={28} className="mb-3 opacity-90 group-hover:scale-110 transition-transform text-bronze group-hover:text-white" />}
                                            <span className="font-bold uppercase tracking-widest text-[10px] sm:text-xs text-center leading-tight">{t(`types.${type}`)}</span>
                                        </button>
                                    ))}
                                </div>
                                <div className="flex justify-end pt-4">
                                    <button
                                        onClick={handleNext}
                                        disabled={!data.type}
                                        className="bg-bronze disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-bronze-light transition-smooth flex items-center gap-2 shadow-lg hover:shadow-bronze/20"
                                    >
                                        {t("next")} <ChevronRight size={20} />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 1 && (
                            <motion.div
                                key="manual-step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-12 w-full"
                            >
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end">
                                        <h3 className="text-xl font-bold text-navy">{t("size_label")}</h3>
                                        <span className="text-3xl font-black text-bronze">{data.size} m²</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="2"
                                        max={LIMITS[data.type || 'kitchen']}
                                        step="1"
                                        value={data.size}
                                        onChange={(e) => setData({ ...data, size: parseInt(e.target.value) })}
                                        className="w-full h-2 bg-stone/20 rounded-lg appearance-none cursor-pointer accent-bronze hover:accent-bronze-light transition-all"
                                    />
                                    <div className="flex justify-between text-xs text-stone uppercase tracking-widest">
                                        <span>2 m²</span>
                                        <span>{LIMITS[data.type || 'kitchen']} m²</span>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        onClick={handleNext}
                                        className="bg-bronze text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-bronze-light transition-smooth flex items-center gap-2 shadow-lg"
                                    >
                                        {t("calculate")} <Calculator size={20} />
                                    </button>
                                </div>
                            </motion.div>
                        )}


                        {/* COMMON RESULT STEP (Step 2) */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="text-center space-y-8 w-full"
                            >
                                <CheckCircle size={64} className="text-bronze mx-auto mb-4" />

                                {data.size < LIMITS[data.type || 'interior'] ? (
                                    <>
                                        <div>
                                            <span className="text-stone uppercase tracking-widest text-sm font-bold">{t("result_title")}</span>
                                            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-4">
                                                <span className="text-3xl sm:text-5xl font-black text-navy">{range.min.toLocaleString()}€</span>
                                                <span className="text-stone/40 text-xl font-light">-</span>
                                                <span className="text-3xl sm:text-5xl font-black text-bronze">{range.max.toLocaleString()}€</span>
                                            </div>
                                        </div>

                                        {data.type === 'painting' && (
                                            <div className="bg-navy/5 border-l-4 border-navy p-6 rounded-r-lg text-left max-w-2xl mx-auto flex gap-4 mt-4 animate-in fade-in slide-in-from-left-4">
                                                <Paintbrush className="text-navy shrink-0 mt-1" size={24} />
                                                <div>
                                                    <h4 className="text-navy font-bold uppercase tracking-widest text-xs mb-2">{t("painting_note.title")}</h4>
                                                    <p className="text-navy/70 text-sm leading-relaxed italic">
                                                        {t("painting_note.text")}
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        <div className="bg-bronze/5 border-l-4 border-bronze p-6 rounded-r-lg text-left max-w-2xl mx-auto flex gap-4 mt-8">
                                            <AlertTriangle className="text-bronze shrink-0 mt-1" size={24} />
                                            <div>
                                                <h4 className="text-bronze font-bold uppercase tracking-widest text-xs mb-2">{t("disclaimer.title")}</h4>
                                                <p className="text-navy/70 text-sm leading-relaxed">
                                                    {t("disclaimer.text")}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="max-w-2xl mx-auto py-8">
                                        <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-6">
                                            <ChevronRight size={32} />
                                        </div>
                                        <h3 className="text-2xl font-black text-navy mb-4">{t("large_scale.title")}</h3>
                                        <p className="text-stone leading-relaxed mb-8">
                                            {t("large_scale.text")}
                                        </p>
                                    </div>
                                )}

                                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                                    <button
                                        onClick={handleRestart}
                                        className="px-6 py-4 rounded-sm font-bold uppercase tracking-widest text-stone hover:text-navy hover:bg-stone-50 transition-all flex items-center justify-center gap-2"
                                    >
                                        <RotateCcw size={16} /> {t("restart")}
                                    </button>
                                    <a
                                        href={getWhatsAppUrl()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-navy text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-navy-light transition-smooth shadow-lg hover:shadow-navy/20 flex items-center justify-center"
                                    >
                                        {t("cta_visit")}
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
