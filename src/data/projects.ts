/**
 * Projects Data Structure
 * Easy to update - just add new projects to this array
 */

export interface Project {
    id: string;
    title: {
        es: string;
        en: string;
        nl: string;
        sv: string;
    };
    description: {
        es: string;
        en: string;
        nl: string;
        sv: string;
    };
    category: 'renovation' | 'new_build' | 'pool' | 'kitchen' | 'bathroom' | 'management';
    location: string;
    year: number;
    images: string[]; // Array of image paths
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: 'luxury-bathroom-nerja',
        title: {
            es: 'Baño de Lujo con Mármol Dorado',
            en: 'Luxury Bathroom with Golden Marble',
            nl: 'Luxe Badkamer met Gouden Marmer',
            sv: 'Lyxigt Badrum med Guldmarmor'
        },
        description: {
            es: 'Reforma integral de baño principal con acabados de lujo. Ducha de mármol dorado, iluminación LED integrada y materiales premium.',
            en: 'Complete master bathroom renovation with luxury finishes. Golden marble shower, integrated LED lighting, and premium materials.',
            nl: 'Volledige renovatie van de hoofdbadkamer met luxe afwerkingen. Gouden marmeren douche, geïntegreerde LED-verlichting en premium materialen.',
            sv: 'Komplett renovering av huvudbadrum med lyxiga ytbehandlingar. Guldmarmor dusch, integrerad LED-belysning och premiummaterial.'
        },
        category: 'bathroom',
        location: 'Nerja',
        year: 2025,
        images: ['/portfolio/bano-ducha-marmol-dorado.jpg'],
        featured: true
    },
    {
        id: 'modern-kitchen-island',
        title: {
            es: 'Cocina Moderna con Isla de Mármol',
            en: 'Modern Kitchen with Marble Island',
            nl: 'Moderne Keuken met Marmeren Eiland',
            sv: 'Modernt Kök med Marmorö'
        },
        description: {
            es: 'Diseño contemporáneo con isla central de mármol, electrodomésticos de alta gama y almacenamiento optimizado.',
            en: 'Contemporary design with central marble island, high-end appliances, and optimized storage.',
            nl: 'Eigentijds ontwerp met centraal marmeren eiland, hoogwaardige apparatuur en geoptimaliseerde opslag.',
            sv: 'Samtida design med central marmorö, högklassiga apparater och optimerad förvaring.'
        },
        category: 'kitchen',
        location: 'Frigiliana',
        year: 2025,
        images: ['/portfolio/cocina-moderna-isla-marmol.jpg'],
        featured: true
    },
    {
        id: 'luxury-living-reform',
        title: {
            es: 'Reforma Integral Salón de Lujo',
            en: 'Complete Luxury Living Room Reform',
            nl: 'Volledige Luxe Woonkamer Renovatie',
            sv: 'Komplett Lyxig Vardagsrumsrenovering'
        },
        description: {
            es: 'Transformación completa de espacio habitable con acabados premium, iluminación diseñada y mobiliario integrado.',
            en: 'Complete transformation of living space with premium finishes, designer lighting, and integrated furniture.',
            nl: 'Volledige transformatie van leefruimte met premium afwerkingen, designverlichting en geïntegreerd meubilair.',
            sv: 'Komplett transformation av vardagsrum med premiumytbehandlingar, designbelysning och integrerade möbler.'
        },
        category: 'renovation',
        location: 'Nerja',
        year: 2024,
        images: ['/portfolio/reforma-luxury-living.jpg'],
        featured: true
    },
    {
        id: 'terrace-spa',
        title: {
            es: 'Terraza & Spa Privado',
            en: 'Terrace & Private Spa',
            nl: 'Terras & Privé Spa',
            sv: 'Terrass & Privat Spa'
        },
        description: {
            es: 'Creación de zona exterior de relax con jacuzzi integrado, pérgola bioclimática y zona chill-out.',
            en: 'Creation of outdoor relaxation area with integrated jacuzzi, bioclimatic pergola, and chill-out zone.',
            nl: 'Creatie van buitenontspanningsruimte met geïntegreerde jacuzzi, bioklimatische pergola en chill-out zone.',
            sv: 'Skapande av utomhus avkopplingsområde med integrerad jacuzzi, bioklimatisk pergola och chill-out zon.'
        },
        category: 'renovation',
        location: 'Costa del Sol',
        year: 2024,
        images: ['/portfolio/reforma-terrace-spa.jpg'],
        featured: false
    },
    {
        id: 'forest-green-kitchen',
        title: {
            es: 'Cocina de Diseño Verde Bosque',
            en: 'Forest Green Designer Kitchen',
            nl: 'Bosgroen Designer Keuken',
            sv: 'Skogsgrön Designkök'
        },
        description: {
            es: 'Cocina contemporánea con acabado verde bosque mate, encimera de cuarzo y electrodomésticos integrados.',
            en: 'Contemporary kitchen with matte forest green finish, quartz countertop, and integrated appliances.',
            nl: 'Eigentijdse keuken met mat bosgroene afwerking, kwarts werkblad en geïntegreerde apparatuur.',
            sv: 'Samtida kök med matt skogsgrön finish, kvartsbänkskiva och integrerade apparater.'
        },
        category: 'kitchen',
        location: 'Frigiliana',
        year: 2024,
        images: ['/portfolio/reforma-cocina-verde.jpg'],
        featured: false
    }
];

// Helper function to get projects by category
export function getProjectsByCategory(category: Project['category']): Project[] {
    return projects.filter(p => p.category === category);
}

// Helper function to get featured projects
export function getFeaturedProjects(): Project[] {
    return projects.filter(p => p.featured);
}
