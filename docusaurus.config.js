module.exports = {
  title: 'Reactor',
  tagline: 'Mod framework for Among Us',
  url: 'https://docs.reactor.gg',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'NuclearPowered', // Usually your GitHub org/user name.
  projectName: 'Dropship.Website.Docs', // Usually your repo name.
  themeConfig: {
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
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://reactor.gg',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/Zcmsb9UGuq',
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
    image: 'img/logo.png',
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['csharp', 'ini']
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/NuclearPowered/Dropship.Website.Docs/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
