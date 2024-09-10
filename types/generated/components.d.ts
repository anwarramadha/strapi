import type { Schema, Attribute } from '@strapi/strapi';

export interface ImageIcon extends Schema.Component {
  collectionName: 'components_image_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    icon: Attribute.Media<'images'>;
    darkIcon: Attribute.Media<'images'>;
  };
}

export interface ArticleArticle extends Schema.Component {
  collectionName: 'components_article_articles';
  info: {
    displayName: 'Article';
    description: '';
  };
  attributes: {
    summary: Attribute.String;
    tags: Attribute.Relation<'article.article', 'oneToMany', 'api::tag.tag'>;
    stacks: Attribute.Relation<
      'article.article',
      'oneToMany',
      'api::stack.stack'
    >;
    content: Attribute.RichText & Attribute.Required;
    heroImage: Attribute.Media<'images'>;
    readingTime: Attribute.Integer & Attribute.DefaultTo<3>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'image.icon': ImageIcon;
      'article.article': ArticleArticle;
    }
  }
}
