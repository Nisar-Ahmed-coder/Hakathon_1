import React from 'react';
import Layout from '@theme/Layout';

export default function Contact() {
  return (
    <Layout
      title="Contact PhysicalAI"
      description="Get in touch with the PhysicalAI team">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Contact Us</h1>
            <p>
              We'd love to hear from you! Whether you have questions about our platform, feedback on our content,
              or are interested in collaboration opportunities, please don't hesitate to reach out.
            </p>

            <h2>General Inquiries</h2>
            <p>
              For general questions about the PhysicalAI platform and educational content:
            </p>
            <ul>
              <li>Email: info@physicalai.org</li>
            </ul>

            <h2>Technical Support</h2>
            <p>
              For technical issues with the platform or content access:
            </p>
            <ul>
              <li>Email: support@physicalai.org</li>
            </ul>

            <h2>Collaboration Opportunities</h2>
            <p>
              Interested in contributing to our educational content or partnering with us?
            </p>
            <ul>
              <li>Email: partnerships@physicalai.org</li>
            </ul>

            <h2>Follow Us</h2>
            <p>
              Stay updated with our latest content and announcements:
            </p>
            <ul>
              <li>GitHub: <a href="https://github.com/physicalai" target="_blank" rel="noopener noreferrer">github.com/physicalai</a></li>
              <li>Twitter: <a href="https://twitter.com/physicalai" target="_blank" rel="noopener noreferrer">@physicalai</a></li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}