"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { getWhatsAppLink, type Locale } from "@/lib/contacts";

export const WhatsAppButton = () => {
    const locale = useLocale() as Locale;
    const t = useTranslations('WhatsApp');

    const whatsappLink = getWhatsAppLink(locale, t('message'));

    return (
        <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-white border border-stone/10 px-6 py-4 rounded-full shadow-2xl hover:shadow-xl transition-smooth group"
        >
            <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase tracking-widest text-navy/60 font-bold leading-none">{t('label')}</span>
                <span className="text-sm font-bold text-navy leading-none mt-1">{t('sublabel')}</span>
            </div>
            <div className="bg-[#25D366] p-2 rounded-full text-white">
                <MessageCircle size={24} />
            </div>

            {/* Tooltip or Label - Modern Glass Style */}
            <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-navy text-white px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap shadow-lg">
                    {t('tooltip')}
                </div>
            </div>
        </motion.a>
    );
};
