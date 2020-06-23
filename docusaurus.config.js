module.exports = {
  title: 'Dental Wikipedia',
  tagline: 'Source of dental standards, definitions and guides used by Denther.',
  url: 'https://docs.denther.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Denther', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Denther Logo',
        src: 'img/DentherLogo.svg',
        srcDark: 'img/DentherLogoWhite.svg'
      },
      links: [
        {
          href: 'https://denther.com',
          label: 'denther.com',
          position: 'right',
        },
        {
          to: 'docs/getting-started/introduction',
          activeBasePath: 'docs/getting-started',
          label: 'Getting started',
          position: 'right',
        },
        {
          to: 'docs/industry/state',
          activeBasePath: 'docs/industry',
          label: 'Industry',
          position: 'right',
        },
        {
          to: 'docs/medical/introduction',
          activeBasePath: 'docs/medical',
          label: 'Medical',
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
          title: 'Documentation',
          items: [
            {
              label: 'About Us',
              to: 'docs/getting-started/introduction',
            },
            {
              label: 'Market',
              to: 'docs/industry/state',
            },
            {
              label: 'Diseases',
              to: 'docs/medical/diseases/classification',
            },
            {
              label: 'Records',
              to: 'docs/medical/records/state',
            },
            {
              label: 'First Exam',
              to: 'docs/getting-started/first-exam',
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
            {
              label: 'Reddit',
              href: 'https://reddit.com/r/denther',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'denther.com',
              href: 'https://denther.com',
            },
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
            'https://github.com/tomislavmamic/wiki/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tomislavmamic/wiki/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
