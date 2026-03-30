import { defineType } from 'sanity';

export default defineType({
  name: 'home',
  type: 'document',
  title: 'Página de Inicio',
  fields: [
    { name: 'heroTitle', type: 'string', title: 'Título Principal' },
    { name: 'heroSubtitle', type: 'text', title: 'Subtítulo' },
    {
      name: 'solutions',
      type: 'array',
      title: 'Nuestras Soluciones',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Nombre de Solución' },
          { name: 'description', type: 'text', title: 'Descripción' },
          { name: 'icon', type: 'string', title: 'Icono (Lucide Name)' }
        ]
      }]
    }
  ]
})