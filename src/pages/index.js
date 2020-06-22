import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Dive deep into dental market</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Learn about inherent problems of modern dental industry and how Denther is 
        designed to address them. Decide for yourself if you want to be part of this movement.
      </>
    ),
  },
  {
    title: <>Refresh your dental knowledge</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Dental wikipedia is a public resource with definitions and standards of dental diseases.
        It is meant to be used by our dentists when providing remote dental services.
      </>
    ),
  },
  {
    title: <>Get started with Denther</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Check out our guides and tutorials so you can start using Denther quickly and easily.
        Read our blog to find latest news and announcements.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Denther`} // title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
