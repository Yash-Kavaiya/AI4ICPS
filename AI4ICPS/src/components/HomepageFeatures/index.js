import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Hands-on Approach',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Gain hands-on expertise in AI for real-world applications using Python, 
        Google Colaboratory, PyTorch, TensorFlow, and more.
      </>
    ),
  },
  {
    title: 'Expert-led Learning',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Get trained by eminent professors from IIT Kharagpur and industry experts 
        through live lectures and hands-on sessions.
      </>
    ),
  },
  {
    title: 'Career Opportunities',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Eligible learners get minimum 3 interview opportunities. Prepare for roles 
        like Machine Learning Engineer, AI Architect, and Data Scientist.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}