import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

const ModuleCard = ({ title, description, modulePath, imageUrl }) => (
  <div className="module-card">
    {imageUrl && <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />}
    <h3>{title}</h3>
    <p className="card-description">{description}</p>
    <Link
      to={modulePath}
      className="card-button button button--secondary button--lg"
    >
      Explore Module
    </Link>
  </div>
);

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  const modules = [
    {
      title: 'Module 1 – Robotic Nervous System (ROS 2)',
      description: 'Learn about the foundational ROS 2 nervous system for robotics communication and control.',
      modulePath: '/docs/module-1',
      imageUrl: '/img/module1-ros2.svg' // Placeholder - will be replaced with actual image
    },
    {
      title: 'Module 2 – Digital Twin (Gazebo & Unity)',
      description: 'Explore digital twin simulation with Gazebo and Unity for robotics development.',
      modulePath: '/docs/module-2',
      imageUrl: '/img/module2-digital-twin.svg' // Placeholder - will be replaced with actual image
    },
    {
      title: 'Module 3 – AI-Robot Brain (NVIDIA Isaac™)',
      description: 'Discover AI-powered robot brains using NVIDIA Isaac technologies for perception and navigation.',
      modulePath: '/docs/module-3',
      imageUrl: '/img/module3-ai-brain.svg' // Placeholder - will be replaced with actual image
    },
    {
      title: 'Module 4 – Vision–Language–Action (VLA)',
      description: 'Master Vision-Language-Action frameworks for cognitive robotics and human-robot interaction.',
      modulePath: '/docs/module-4',
      imageUrl: '/img/module4-vla.svg' // Placeholder - will be replaced with actual image
    }
  ];

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="PhysicalAI Book Platform - AI-Driven Robotics Education">
      <HomepageHeader />
      <main>
        <section>
          <div className="container">
            <h2>Learning Modules</h2>
            <div className="row">
              {modules.map((module, index) => (
                <div key={index} className="col col--3 margin-bottom--lg">
                  <ModuleCard
                    title={module.title}
                    description={module.description}
                    modulePath={module.modulePath}
                    imageUrl={module.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}