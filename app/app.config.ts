export default defineAppConfig({
  ui: {
    primary: 'teal',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Lernwebapp - Dokumentation'
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: false,
    colorMode: false,
    links: [null]
  },
  footer: {
    credits: '',
    colorMode: false,
    links: [null, null, null, null]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank'
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui.nuxt.com/pro/guide',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Purchase a license',
        to: 'https://ui.nuxt.com/pro/purchase',
        target: '_blank'
      }]
    }
  }
})