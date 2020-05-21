CREATE TYPE article_category AS ENUM (
  'Nature',
  'Architecture',
  'Miscellanious',
  'Masonry',
  'Carousel'
);

ALTER TABLE blogful_articles
  ADD COLUMN
    style article_category;
