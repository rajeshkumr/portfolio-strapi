import type { Schema, Attribute } from '@strapi/strapi';

export interface GridProjects extends Schema.Component {
  collectionName: 'components_projects_projects';
  info: {
    displayName: 'projects';
    icon: 'apps';
    description: '';
  };
  attributes: {
    favoriteProjects: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'grid.projects': GridProjects;
    }
  }
}
