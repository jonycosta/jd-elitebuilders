'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/data/faq';
import type { Locale } from '@/lib/contacts';

interface FAQItemProps {
    faq: FAQItem;
    locale: Locale;
}

export function FAQItemComponent({ faq, locale }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    const question = faq.question[locale];
    const answer = faq.answer[locale];

    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-bronze transition-colors group"
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-semibold text-navy group-hover:text-bronze transition-colors pr-8">
                    {question}
                </h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className="w-6 h-6 text-bronze" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-gray-600 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
