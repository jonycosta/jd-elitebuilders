'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Calendar } from 'lucide-react';
import type { Project } from '@/data/projects';
import type { Locale } from '@/lib/contacts';

interface ProjectCardProps {
    project: Project;
    locale: Locale;
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
    const title = project.title[locale];
    const description = project.description[locale];

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={project.images[0]}
                    alt={`${title} - J&D Elite Builders`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {project.featured && (
                    <div className="absolute top-4 right-4 bg-bronze text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-bronze transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                    {description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                    </div>
                </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <button className="w-full bg-bronze text-white py-3 rounded-lg font-semibold hover:bg-bronze/90 transition-colors">
                    Ver Detalles
                </button>
            </div>
        </motion.article>
    );
}
