"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS_INFO, getContactInfo } from "@/lib/contacts";
import { useLocale } from "next-intl";
import { Locale } from "@/lib/contacts";

export const Footer = () => {
    const t = useTranslations("Footer");
    const locale = useLocale() as Locale;
    const contact = getContactInfo(locale);

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy text-white pt-20 pb-10 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bronze/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bronze/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-black tracking-tighter text-white">
                                J&D <span className="text-bronze">ELITE</span>
                            </span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            {t("description")}
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href={BUSINESS_INFO.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-bronze hover:border-bronze transition-all group"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} className="text-white group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href={BUSINESS_INFO.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-bronze hover:border-bronze transition-all group"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} className="text-white group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-md font-bold uppercase tracking-widest text-bronze mb-6">
                            {t("links")}
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm">
                                    {t("home")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="text-white/60 hover:text-white transition-colors text-sm">
                                    {t("about")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/#portfolio" className="text-white/60 hover:text-white transition-colors text-sm">
                                    {t("portfolio")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/#services" className="text-white/60 hover:text-white transition-colors text-sm">
                                    {t("services")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-md font-bold uppercase tracking-widest text-bronze mb-6">
                            {t("services_title")}
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/services/renovation" className="text-white/60 hover:text-white transition-colors text-sm">
                                    {t("renovations")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/new_build" className="text-white/60 hover:text-white transition-colors text-sm">
                                    {t("new_build")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/kitchen" className="text-white/60 hover:text-white transition-colors text-sm">
                                    {t("kitchens")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/maintenance" className="text-white/60 hover:text-white transition-colors text-sm">
                                    {t("maintenance")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-md font-bold uppercase tracking-widest text-bronze mb-6">
                            {t("contact")}
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a href={`tel:${contact.phone}`} className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group">
                                    <Phone size={18} className="text-bronze mt-0.5 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm">{contact.displayName}</span>
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group">
                                    <Mail size={18} className="text-bronze mt-0.5 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm">{BUSINESS_INFO.email}</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-white/60">
                                <MapPin size={18} className="text-bronze mt-0.5 shrink-0" />
                                <span className="text-sm">
                                    {BUSINESS_INFO.address.street}<br />
                                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.postalCode}<br />
                                    {BUSINESS_INFO.address.region}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-xs">
                        © {currentYear} J&D Elite Builders. {t("rights")}
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-white/40 hover:text-white text-xs transition-colors">
                            {t("privacy")}
                        </Link>
                        <Link href="/cookies" className="text-white/40 hover:text-white text-xs transition-colors">
                            {t("cookies")}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
