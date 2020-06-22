module.exports = {
  title: 'Dental Wikipedia',
  tagline: 'Source of dental standards, definitions and guides used by Denther.',
  url: 'https://docs.denther.com',
  baseUrl: '/',
  favicon: 'img/favicon-32x32.ico',
  organizationName: 'Denther', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Denther',
      logo: {
        alt: 'Denther Logo',
        src: 'img/Vector.svg',
      },
      links: [
        {
          href: 'https://denther.com',
          label: 'Denther',
          position: 'right',
        },
        {
          to: 'docs/introduction',
          activeBasePath: 'docs',
          label: 'About',
          position: 'right',
        },
        {
          to: 'docs/introduction-standards',
          activeBasePath: 'docs',
          label: 'Standards',
          position: 'right',
        },
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'right'},
        {
          href: 'https://github.com/tomislavmamic/wiki',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/denther-health',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/DentherH',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tomislavmamic/wiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Verified Diagnosis, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
