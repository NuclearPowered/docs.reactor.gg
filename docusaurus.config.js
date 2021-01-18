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
          to: 'docs',
          activeBasePath: 'docs/basic',
          label: 'Getting Started',
          position: 'left',
        },
        {
          to: 'docs/advanced',
          activeBasePath: 'docs/advanced',
          label: 'Advanced Docs',
          position: 'left'
        },
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
              to: 'docs/',
            },
            {
              label: 'Advanced Docs',
              to: 'docs/advanced/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Dropship Online',
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
        },
        {
          title: 'More',
          items: [
            {
              label: 'About',
              to: 'docs/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NuclearPowered`,
    },
    colorMode: {
      defaultMode: 'dark'
    },
    image: 'img/logo.png'
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
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
