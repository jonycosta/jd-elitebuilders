"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname, Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    const languages = [
        { code: "es", label: "ES" },
        { code: "en", label: "EN" },
        { code: "sv", label: "SV" },
        { code: "nl", label: "NL" },
    ];

    return (
        <div className="flex items-center gap-2 bg-white/50 border border-stone/20 backdrop-blur-md rounded-full px-3 py-1 shadow-sm">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`relative text-[10px] font-bold uppercase tracking-widest transition-colors px-2 py-1 ${locale === lang.code ? "text-white" : "text-navy/60 hover:text-navy"
                        }`}
                >
                    {locale === lang.code && (
                        <motion.div
                            layoutId="activeLang"
                            className="absolute inset-0 bg-navy rounded-full -z-10"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                    {lang.label}
                </button>
            ))}
        </div>
    );
};
