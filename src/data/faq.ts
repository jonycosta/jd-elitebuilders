/**
 * FAQ Data Structure
 * Optimized for Google Featured Snippets
 */

export interface FAQItem {
    id: string;
    question: {
        es: string;
        en: string;
        nl: string;
        sv: string;
    };
    answer: {
        es: string;
        en: string;
        nl: string;
        sv: string;
    };
    category: 'pricing' | 'process' | 'legal' | 'services';
}

export const faqData: FAQItem[] = [
    {
        id: 'reform-cost-nerja',
        question: {
            es: '¿Cuánto cuesta una reforma integral en Nerja?',
            en: 'How much does a complete renovation cost in Nerja?',
            nl: 'Hoeveel kost een complete renovatie in Nerja?',
            sv: 'Hur mycket kostar en totalrenovering i Nerja?'
        },
        answer: {
            es: 'El coste de una reforma integral en Nerja varía según el tamaño y alcance del proyecto. Para un apartamento de 80m², el rango típico es de 25.000€ a 45.000€. Para villas de 150m² o más, el presupuesto suele estar entre 60.000€ y 120.000€. Ofrecemos presupuestos detallados sin compromiso y trabajamos con transparencia total en cada fase del proyecto.',
            en: 'The cost of a complete renovation in Nerja varies depending on the size and scope of the project. For an 80m² apartment, the typical range is €25,000 to €45,000. For villas of 150m² or more, budgets usually range from €60,000 to €120,000. We offer detailed quotes at no obligation and work with complete transparency at every stage of the project.',
            nl: 'De kosten van een complete renovatie in Nerja variëren afhankelijk van de grootte en omvang van het project. Voor een appartement van 80m² ligt het typische bereik tussen €25.000 en €45.000. Voor villa\'s van 150m² of meer liggen de budgetten meestal tussen €60.000 en €120.000. We bieden gedetailleerde offertes zonder verplichting en werken met volledige transparantie in elke fase van het project.',
            sv: 'Kostnaden för en totalrenovering i Nerja varierar beroende på projektets storlek och omfattning. För en lägenhet på 80m² ligger det typiska intervallet mellan €25.000 och €45.000. För villor på 150m² eller mer ligger budgetarna vanligtvis mellan €60.000 och €120.000. Vi erbjuder detaljerade offerter utan förpliktelser och arbetar med fullständig transparens i varje fas av projektet.'
        },
        category: 'pricing'
    },
    {
        id: 'renovation-duration',
        question: {
            es: '¿Cuánto tiempo tarda una reforma completa?',
            en: 'How long does a complete renovation take?',
            nl: 'Hoe lang duurt een complete renovatie?',
            sv: 'Hur lång tid tar en totalrenovering?'
        },
        answer: {
            es: 'Una reforma integral típica tarda entre 8 y 16 semanas, dependiendo del alcance. Reformas de cocinas o baños individuales: 2-4 semanas. Reformas completas de apartamentos (80-100m²): 8-12 semanas. Villas grandes con múltiples áreas: 12-20 semanas. Trabajamos con cronogramas claros y te mantenemos informado semanalmente del progreso.',
            en: 'A typical complete renovation takes between 8 and 16 weeks, depending on scope. Individual kitchen or bathroom renovations: 2-4 weeks. Complete apartment renovations (80-100m²): 8-12 weeks. Large villas with multiple areas: 12-20 weeks. We work with clear timelines and keep you informed weekly of progress.',
            nl: 'Een typische complete renovatie duurt tussen 8 en 16 weken, afhankelijk van de omvang. Individuele keuken- of badkamerrenovaties: 2-4 weken. Volledige appartementrenovaties (80-100m²): 8-12 weken. Grote villa\'s met meerdere ruimtes: 12-20 weken. We werken met duidelijke tijdlijnen en houden u wekelijks op de hoogte van de voortgang.',
            sv: 'En typisk totalrenovering tar mellan 8 och 16 veckor, beroende på omfattning. Individuella kök- eller badrumsrenoveringar: 2-4 veckor. Kompletta lägenhet renoveringar (80-100m²): 8-12 veckor. Stora villor med flera områden: 12-20 veckor. Vi arbetar med tydliga tidslinjer och håller dig informerad varje vecka om framstegen.'
        },
        category: 'process'
    },
    {
        id: 'license-requirements',
        question: {
            es: '¿Necesito licencia para reformar en Nerja?',
            en: 'Do I need a license to renovate in Nerja?',
            nl: 'Heb ik een vergunning nodig om te renoveren in Nerja?',
            sv: 'Behöver jag tillstånd för att renovera i Nerja?'
        },
        answer: {
            es: 'Sí, la mayoría de reformas requieren licencia municipal. Reformas menores (pintura, suelos sin obra): generalmente no requieren licencia. Reformas de cocinas y baños: licencia de obra menor. Reformas estructurales o ampliaciones: licencia de obra mayor. Nosotros nos encargamos de toda la gestión de permisos y licencias, trabajando directamente con el Ayuntamiento de Nerja para agilizar el proceso.',
            en: 'Yes, most renovations require a municipal license. Minor renovations (painting, flooring without construction): generally no license required. Kitchen and bathroom renovations: minor works license. Structural renovations or extensions: major works license. We handle all permit and license management, working directly with Nerja Town Hall to expedite the process.',
            nl: 'Ja, de meeste renovaties vereisen een gemeentelijke vergunning. Kleine renovaties (schilderen, vloeren zonder bouwwerkzaamheden): over het algemeen geen vergunning vereist. Keuken- en badkamerrenovaties: kleine werken vergunning. Structurele renovaties of uitbreidingen: grote werken vergunning. Wij regelen alle vergunningen en licenties, en werken direct samen met het gemeentehuis van Nerja om het proces te versnellen.',
            sv: 'Ja, de flesta renoveringar kräver kommunalt tillstånd. Mindre renoveringar (målning, golv utan byggarbeten): generellt inget tillstånd krävs. Kök- och badrumsrenoveringar: mindre arbeten tillstånd. Strukturella renoveringar eller tillägg: större arbeten tillstånd. Vi hanterar all tillstånds- och licenshantering och arbetar direkt med Nerjas stadshus för att påskynda processen.'
        },
        category: 'legal'
    },
    {
        id: 'property-management-includes',
        question: {
            es: '¿Qué incluye el servicio de gestión de propiedades?',
            en: 'What does the property management service include?',
            nl: 'Wat omvat de vastgoedbeheerdienst?',
            sv: 'Vad inkluderar fastighetsförvaltningstjänsten?'
        },
        answer: {
            es: 'Nuestro servicio de gestión integral incluye: Custodia de llaves y acceso 24/7. Inspecciones mensuales con informe fotográfico. Mantenimiento preventivo (jardín, piscina, sistemas). Gestión de reparaciones urgentes. Coordinación con proveedores locales. Preparación pre-llegada (limpieza, climatización). Perfecto para propietarios internacionales que no residen permanentemente en España.',
            en: 'Our comprehensive management service includes: Key holding and 24/7 access. Monthly inspections with photo report. Preventive maintenance (garden, pool, systems). Emergency repair management. Coordination with local suppliers. Pre-arrival preparation (cleaning, climate control). Perfect for international owners who don\'t permanently reside in Spain.',
            nl: 'Onze uitgebreide beheerdienst omvat: Sleutelbeheer en 24/7 toegang. Maandelijkse inspecties met fotoverslag. Preventief onderhoud (tuin, zwembad, systemen). Noodreparatie beheer. Coördinatie met lokale leveranciers. Pre-aankomst voorbereiding (schoonmaak, klimaatbeheersing). Perfect voor internationale eigenaren die niet permanent in Spanje wonen.',
            sv: 'Vår omfattande förvaltningstjänst inkluderar: Nyckelvakt och 24/7 tillgång. Månatliga inspektioner med fotorapport. Förebyggande underhåll (trädgård, pool, system). Akut reparationshantering. Samordning med lokala leverantörer. Förberedelse före ankomst (städning, klimatkontroll). Perfekt för internationella ägare som inte bor permanent i Spanien.'
        },
        category: 'services'
    },
    {
        id: 'payment-terms',
        question: {
            es: '¿Cómo funcionan los pagos en las reformas?',
            en: 'How do payments work for renovations?',
            nl: 'Hoe werken betalingen voor renovaties?',
            sv: 'Hur fungerar betalningar för renoveringar?'
        },
        answer: {
            es: 'Trabajamos con un sistema de pagos por fases transparente: 30% al firmar el contrato (reserva de materiales y equipo). 40% a mitad de obra (tras completar estructura y fontanería). 30% final tras entrega y aprobación. Aceptamos transferencia bancaria, tarjeta y efectivo. Nunca pedimos el 100% por adelantado. Cada pago está vinculado a hitos verificables del proyecto.',
            en: 'We work with a transparent phase-based payment system: 30% upon contract signing (materials and equipment reservation). 40% mid-project (after completing structure and plumbing). 30% final upon delivery and approval. We accept bank transfer, card, and cash. We never ask for 100% upfront. Each payment is tied to verifiable project milestones.',
            nl: 'We werken met een transparant fase-gebaseerd betalingssysteem: 30% bij contractondertekening (materialen en apparatuur reservering). 40% halverwege het project (na voltooiing van structuur en loodgieterswerk). 30% eindelijk bij levering en goedkeuring. We accepteren bankoverschrijving, kaart en contant geld. We vragen nooit 100% vooraf. Elke betaling is gekoppeld aan verifieerbare project mijlpalen.',
            sv: 'Vi arbetar med ett transparent fasbaserat betalningssystem: 30% vid kontraktsignering (material och utrustning reservation). 40% mitt i projektet (efter att ha slutfört struktur och VVS). 30% slutligt vid leverans och godkännande. Vi accepterar banköverföring, kort och kontanter. Vi ber aldrig om 100% i förskott. Varje betalning är kopplad till verifierbara projekt milstolpar.'
        },
        category: 'pricing'
    },
    {
        id: 'warranty-coverage',
        question: {
            es: '¿Qué garantía ofrecen en las reformas?',
            en: 'What warranty do you offer on renovations?',
            nl: 'Welke garantie bieden jullie op renovaties?',
            sv: 'Vilken garanti erbjuder ni på renoveringar?'
        },
        answer: {
            es: 'Ofrecemos garantía completa de 2 años en todas nuestras reformas, cubriendo: Mano de obra y instalaciones. Materiales y acabados. Fontanería y electricidad. Además, los materiales premium que utilizamos tienen garantías del fabricante de hasta 10 años. Cualquier defecto o problema se resuelve sin coste adicional durante el periodo de garantía.',
            en: 'We offer a complete 2-year warranty on all our renovations, covering: Labor and installations. Materials and finishes. Plumbing and electrical. Additionally, the premium materials we use have manufacturer warranties of up to 10 years. Any defects or issues are resolved at no additional cost during the warranty period.',
            nl: 'We bieden een volledige garantie van 2 jaar op al onze renovaties, die het volgende dekt: Arbeid en installaties. Materialen en afwerkingen. Loodgieterswerk en elektriciteit. Bovendien hebben de premium materialen die we gebruiken fabrieksgaranties tot 10 jaar. Eventuele defecten of problemen worden zonder extra kosten opgelost tijdens de garantieperiode.',
            sv: 'Vi erbjuder en komplett 2-års garanti på alla våra renoveringar, som täcker: Arbete och installationer. Material och ytbehandlingar. VVS och el. Dessutom har de premiummaterial vi använder tillverkargarantier på upp till 10 år. Eventuella defekter eller problem löses utan extra kostnad under garantiperioden.'
        },
        category: 'process'
    }
];

// Helper function to get FAQs by category
export function getFAQsByCategory(category: FAQItem['category']): FAQItem[] {
    return faqData.filter(faq => faq.category === category);
}
