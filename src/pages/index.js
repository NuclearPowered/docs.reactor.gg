import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Simple to use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Reactor is an all in one package that allows one to easily create mods.
        We automatically handle all the difficult stuff, so you can focus on programming.
      </>
    ),
  },
  {
    title: 'Documented',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Pretty good documentation, if we say so ourselves! Aspects of the Reactor
        architecture and Among Us modding are covered here.
      </>
    ),
  },
  {
    title: 'Active Community',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Join our Discord if you're having trouble, or just want to show off the cool mods you've made!
        We also have a mod launcher where you can distribute your mods.
        Upload your mods on the <a href="https://reactor.gg">homepage</a>,
        and you can <a href="https://github.com/NuclearPowered/Dropship/releases/latest">
        download the launcher</a> here
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title}/>
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
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
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
