import type { Schema, Attribute } from '@strapi/strapi';

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
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article.article': ArticleArticle;
    }
  }
}
