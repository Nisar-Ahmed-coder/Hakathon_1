import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function About() {
  return (
    <Layout
      title="About PhysicalAI"
      description="Learn about the PhysicalAI platform and its mission">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>About PhysicalAI</h1>
            <p>
              PhysicalAI is an educational platform dedicated to the intersection of artificial intelligence and robotics.
              Our mission is to democratize access to knowledge in robotics, AI, and cognitive systems.
            </p>

            <h2>Our Vision</h2>
            <p>
              We envision a future where humans and robots collaborate seamlessly, with AI serving as the cognitive
              bridge between human intention and robotic action. Our platform aims to educate the next generation
              of roboticists, AI researchers, and engineers who will build this future.
            </p>

            <h2>AI + Robotics Focus</h2>
            <p>
              Our curriculum emphasizes the integration of artificial intelligence with physical robotic systems.
              We believe that true autonomy comes from the tight coupling of perception, cognition, and action -
              the core principles of Vision-Language-Action (VLA) systems.
            </p>

            <h2>Educational Purpose</h2>
            <p>
              PhysicalAI provides comprehensive learning modules covering ROS 2 fundamentals, digital twin simulation,
              AI-robot brains, and cognitive planning systems. Our goal is to provide both theoretical knowledge
              and practical skills needed to build the next generation of intelligent robotic systems.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}