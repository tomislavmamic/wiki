module.exports = {
  title: 'Denther Documentation',
  tagline: 'Verified dental diagnosis',
  url: 'https://docs.denther.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Denther', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Denther',
      logo: {
        alt: 'Denther Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/tomislavmamic/docusaurus-2',
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
              href: 'https://github.com/tomislavmamic/docusaurus-2',
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
