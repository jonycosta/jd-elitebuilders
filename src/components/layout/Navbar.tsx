"use client";

import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { Link } from "@/i18n/routing";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Navbar = () => {
    const t = useTranslations("Navbar");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { key: "home", href: "/" },
        { key: "services", href: "#services" },
        { key: "quote", href: "/quote" },
        { key: "about", href: "#about" },
        { key: "portfolio", href: "#portfolio" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-40 transition-all duration-300 border-b border-transparent px-6 py-4",
                scrolled
                    ? "bg-white/90 backdrop-blur-xl border-stone/10 py-4 shadow-lg"
                    : "bg-white/80 backdrop-blur-lg lg:bg-transparent py-6" // Mobile needs bg, desktop transparent
            )}
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="relative h-20 w-64 transition-transform hover:scale-105">
                    <Image
                        src="/logo.png"
                        alt="J&D Elite Builders"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 lg:gap-12">
                    {navLinks.map((item) => (
                        <Link
                            key={item.key}
                            href={item.href}
                            className="text-xs uppercase tracking-widest text-navy font-bold relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-bronze after:transition-all hover:after:w-full hover:text-bronze transition-colors"
                        >
                            {t(item.key)}
                        </Link>
                    ))}
                </div>

                {/* Right Side: Lang & Contact */}
                <div className="flex items-center gap-4">
                    <LanguageSwitcher />

                    <button className="hidden sm:block bg-navy border-2 border-navy text-white px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-navy hover:border-navy transition-smooth shadow-lg">
                        {t("contact")}
                    </button>
                </div>
            </div >
        </nav >
    );
};
