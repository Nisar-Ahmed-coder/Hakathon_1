import React from 'react';
import Link from '@docusaurus/Link';

type ModuleCardProps = {
  title: string;
  description: string;
  modulePath: string;
  imageUrl?: string;
};

const ModuleCard: React.FC<ModuleCardProps> = ({ title, description, modulePath, imageUrl }) => {
  return (
    <div className="module-card">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          style={{ width: '100%', height: 'auto', marginBottom: '1rem', borderRadius: '4px' }}
        />
      )}
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
};

export default ModuleCard;