"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import { ChevronRight, ArrowRight, ShieldCheck, Ruler, Droplets } from "lucide-react";

export default function QuotePage() {
    const t = useTranslations("BudgetSimulator");

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        type: "",
        size: 50,
        // Removed quality as requested
    });

    const services = [
        { id: "humidity", icon: Droplets, label: t("humidity") },
        { id: "renovation", icon: ShieldCheck, label: t("interior") },
        { id: "kitchen", icon: Ruler, label: t("kitchen") },
        { id: "bathroom", icon: Droplets, label: t("bathroom") },
        { id: "painting", icon: Ruler, label: t("painting") },
        { id: "maintenance", icon: ShieldCheck, label: t("maintenance") }
    ];

    const calculatePrice = () => {
        // Simple base calculation logic - refined (Aggressively Low/Attractive as requested)
        let basePrice = 0;
        switch (formData.type) {
            case "humidity": basePrice = 40; break;
            case "renovation": basePrice = 220; break;
            case "kitchen": basePrice = 240; break;
            case "bathroom": basePrice = 192; break;
            case "painting": basePrice = 5; break; // Set to 5€/m² as requested
            case "maintenance": basePrice = 20; break;
            default: basePrice = 150;
        }

        // Standard premium finish implied
        return Math.round(basePrice * formData.size);
    };

    return (
        <main className="min-h-screen pt-32 pb-20 bg-stone-50">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100">
                    <div className="bg-navy p-10 text-white relative overflow-hidden">
                        <div className="relative z-10 text-center">
                            <h1 className="text-4xl font-bold font-montserrat mb-3 tracking-tight">{t("title")}</h1>
                            <p className="text-white/80 text-lg font-light tracking-wide">{t("subtitle")}</p>
                        </div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-bronze/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-bronze/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
                    </div>

                    <div className="p-10 md:p-14">
                        {step === 1 && (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold text-navy mb-2">{t("type_label")}</h2>
                                    <div className="h-1 w-20 bg-bronze mx-auto rounded-full"></div>
                                </div>
                                <div className="grid grid-cols-2 gap-5">
                                    {services.map((service) => (
                                        <button
                                            key={service.id}
                                            onClick={() => setFormData({ ...formData, type: service.id })}
                                            className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-5 group hover:shadow-xl ${formData.type === service.id
                                                ? "border-bronze bg-bronze/5 text-navy shadow-md ring-1 ring-bronze/20"
                                                : "border-stone-100 hover:border-bronze/30 bg-white"
                                                }`}
                                        >
                                            <div className={`p-4 rounded-full transition-colors ${formData.type === service.id ? "bg-white text-bronze shadow-sm" : "bg-stone-50 text-stone-400 group-hover:text-bronze group-hover:bg-bronze/10"}`}>
                                                <service.icon className="w-8 h-8" />
                                            </div>
                                            <span className="font-bold text-center text-base tracking-wide">{service.label}</span>
                                        </button>
                                    ))}
                                </div>
                                <div className="flex justify-center pt-6">
                                    <button
                                        onClick={() => formData.type && setStep(2)}
                                        disabled={!formData.type}
                                        className="bg-navy text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-navy/90 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center gap-3"
                                    >
                                        {t("next")} <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold text-navy mb-2">{t("size_label")}</h2>
                                    <p className="text-stone-500 text-sm">{t("size_label") === "Tamaño aprox (m²)" ? "Desliza para ajustar los metros cuadrados" : "Adjust size"}</p>
                                </div>

                                <div className="space-y-8 px-4">
                                    <div className="flex justify-center items-end gap-2 text-navy font-montserrat">
                                        <span className="text-6xl font-black tracking-tighter">{formData.size}</span>
                                        <span className="text-2xl font-medium text-stone-400 pb-2">m²</span>
                                    </div>

                                    <input
                                        type="range"
                                        min="10"
                                        max="150"
                                        step="5"
                                        value={formData.size}
                                        onChange={(e) => setFormData({ ...formData, size: parseInt(e.target.value) })}
                                        className="w-full h-3 bg-stone-100 rounded-full appearance-none cursor-pointer accent-bronze hover:accent-bronze/80 transition-all"
                                    />

                                    <div className="flex justify-between text-xs text-stone-400 font-bold uppercase tracking-widest">
                                        <span>Pequeño (10 m²)</span>
                                        <span>Grande (150 m²)</span>
                                    </div>
                                </div>

                                <div className="flex justify-between pt-10 border-t border-stone-100">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="text-stone-400 hover:text-navy font-bold text-sm uppercase tracking-wide px-4 py-2"
                                    >
                                        ← Back
                                    </button>
                                    <button
                                        onClick={() => setStep(3)}
                                        className="bg-navy text-white px-12 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-navy/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                                    >
                                        {t("calculate")}
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="text-center animate-in zoom-in-95 duration-500">
                                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                    <ShieldCheck className="w-12 h-12" />
                                </div>
                                <h2 className="text-xl font-bold text-stone-400 uppercase tracking-widest mb-4">{t("result_title")}</h2>

                                <div className="relative inline-block">
                                    <div className="text-7xl md:text-8xl font-black text-navy mb-8 font-montserrat tracking-tighter">
                                        {calculatePrice().toLocaleString()}<span className="text-4xl align-top opacity-60">€</span>
                                    </div>
                                </div>

                                <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-6 text-left mb-10">
                                    <div className="flex gap-4">
                                        <div className="bg-amber-100 p-2 rounded-lg h-fit">
                                            <ShieldCheck className="w-5 h-5 text-amber-700" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-navy text-sm mb-1">{t("disclaimer.title")}</h4>
                                            <p className="text-stone-600 text-sm leading-relaxed">{t("disclaimer.text")}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 max-w-md mx-auto">
                                    <a
                                        href={`https://wa.me/34664567634?text=Hola,%20me%20gustaría%20visita%20gratuita%20para%20presupuesto%20estimado%20de%20${calculatePrice()}€`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-[#25D366] text-white px-8 py-5 rounded-2xl font-bold text-lg uppercase tracking-wide hover:bg-[#20bd5a] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
                                    >
                                        <span>Solicitar Cita por WhatsApp</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                    <button
                                        onClick={() => setStep(1)}
                                        className="block w-full text-stone-400 hover:text-navy py-4 font-bold text-sm uppercase tracking-widest transition-colors"
                                    >
                                        {t("restart")}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
