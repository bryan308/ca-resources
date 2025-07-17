import { guides, guidesMeta, resources, resourcesMeta } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';

export const guidesSource = loader({
  baseUrl: '/guides',
  source: createMDXSource(guides, guidesMeta),
});

export const resourcesSource = loader({
  baseUrl: '/resources',
  source: createMDXSource(resources, resourcesMeta),
});
