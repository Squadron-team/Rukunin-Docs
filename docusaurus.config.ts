import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Rukunin',
  tagline: 'Dokumentasi Aplikasi Manajemen RT/RW',
  favicon: 'img/rukunin_r_logo.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://squadron-team.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Rukunin-Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Squadron-team', // Usually your GitHub org/user name.
  projectName: 'Rukunin-Docs', // Usually your repo name.

  onBrokenLinks: 'warn', // Changed from 'throw' to 'warn' temporarily

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Squadron-team/Rukunin-Docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Rukunin',
      logo: {
        alt: 'Rukunin Logo',
        src: 'img/rukunin_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Dokumentasi',
        },
        {
          to: '/docs/getting-started',
          label: 'Mulai Cepat',
          position: 'left',
        },
        // Temporarily comment out the dropdown until pages are created
        /*
        {
          type: 'dropdown',
          label: 'Panduan Pengguna',
          position: 'left',
          items: [
            {
              label: '👤 Admin',
              to: '/docs/roles/admin/overview',
            },
            {
              label: '👔 Ketua RW',
              to: '/docs/roles/ketua-rw/overview',
            },
            {
              label: '👔 Ketua RT',
              to: '/docs/roles/ketua-rt/overview',
            },
            {
              label: '📝 Sekretaris',
              to: '/docs/roles/secretary/overview',
            },
            {
              label: '💰 Bendahara',
              to: '/docs/roles/treasurer/overview',
            },
            {
              label: '🏠 Warga',
              to: '/docs/roles/resident/overview',
            },
          ],
        },
        */
        {
          href: 'https://github.com/Squadron-team/Rukunin-App',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokumentasi',
          items: [
            {
              label: 'Mulai Cepat',
              to: '/docs/getting-started',
            },
            // Temporarily comment out until page is created
            /*
            {
              label: 'Fitur Utama',
              to: '/docs/features',
            },
            */
          ],
        },
        // Temporarily comment out until pages are created
        /*
        {
          title: 'Panduan Pengguna',
          items: [
            {
              label: 'Admin',
              to: '/docs/roles/admin/overview',
            },
            {
              label: 'Ketua RW',
              to: '/docs/roles/ketua-rw/overview',
            },
            {
              label: 'Ketua RT',
              to: '/docs/roles/ketua-rt/overview',
            },
            {
              label: 'Warga',
              to: '/docs/roles/resident/overview',
            },
          ],
        },
        */
        {
          title: 'Lainnya',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Squadron-team/Rukunin-App',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rukunin. Dibangun dengan Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['dart', 'java', 'kotlin'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
