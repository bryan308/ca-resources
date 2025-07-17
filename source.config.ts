import { defineDocs, defineCollections, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const { docs: guides, meta: guidesMeta } = defineDocs({
  dir: 'content/guides',
});

export const { docs: resources, meta: resourcesMeta } = defineDocs({
  dir: 'content/resources',
});
