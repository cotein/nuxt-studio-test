// studio.config.ts
import { defineStudioConfig } from '@nuxthq/studio/config'

export default defineStudioConfig({
  // Define modelos de datos para tus tipos de contenido
  // Esto ayuda a Nuxt Studio a generar formularios de edición
  // en lugar de editar el Markdown/JSON directamente.
  content: {
    // Ejemplo para un "post" de blog
    blog: {
      schema: {
        title: {
          type: 'string',
          required: true,
          description: 'Título del post'
        },
        description: {
          type: 'string',
          textarea: true,
          description: 'Breve descripción del post (para SEO y listados)'
        },
        image: {
          type: 'image',
          description: 'Imagen principal del post'
        },
        author: {
          type: 'string',
          description: 'Autor del post'
        },
        // Puedes añadir más campos según tu frontmatter en Markdown
      }
    },
    // Si tienes una "página" principal en `content/index.md`
    index: {
      schema: {
        // Define aquí los campos que quieres que editen de tu página principal
        headline: {
          type: 'string',
          description: 'Título principal de la página'
        },
        body: {
          type: 'markdown', // Indica que este campo será un editor Markdown
          description: 'Contenido principal de la página'
        },
      }
    }
  }
  // Opciones de personalización del Studio
  // toolbar: {
  //   title: 'Mi CMS Personalizado',
  //   logo: '/mi-logo.svg',
  // },
})