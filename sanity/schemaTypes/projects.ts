import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Caso de Éxito',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Proyecto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Data & Analytics', value: 'data' },
          { title: 'Automatización & Bots', value: 'bots' },
          { title: 'Desarrollo Web', value: 'web' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagen de Portada',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'challenge',
      title: 'El Reto',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'solution',
      title: 'La Solución (Videss Smart)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'techStack',
      title: 'Stack Tecnológico',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'metrics',
      title: 'Métricas de Éxito (Solo Operativas/Técnicas)',
      description: 'IMPORTANTE: Por confidencialidad, no incluir métricas de facturación o ingresos. Usar solo tiempos, porcentajes de mejora o volumen de datos.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Etiqueta (ej. Tiempo de respuesta)', type: 'string' },
            { name: 'value', title: 'Valor (ej. -45%)', type: 'string' },
          ],
        },
      ],
    }),
  ],
});