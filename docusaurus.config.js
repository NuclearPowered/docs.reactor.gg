// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reactor',
  tagline: 'Mod framework for Among Us',
  url: 'https://docs.reactor.gg',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'favicon.ico',
  organizationName: 'NuclearPowered',
  projectName: 'docs.reactor.gg',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/NuclearPowered/docs.reactor.gg/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      })
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Reactor',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/NuclearPowered',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Website',
                href: 'https://reactor.gg',
              },
              {
                label: 'Discord',
                href: 'https://reactor.gg/discord',
              },
              {
                label: 'Github',
                href: 'https://github.com/NuclearPowered',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NuclearPowered`,
      },
      colorMode: {
        defaultMode: 'dark'
      },
      image: 'img/logo_downscaled.png',
      prism: {
        theme: require('prism-react-renderer/themes/vsLight'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
        additionalLanguages: ['csharp', 'ini']
      }
    }),
};

module.exports = config;
