import { Subcategory } from './types';

export const SUBCATEGORIES: Record<string, Subcategory> = {
  // Resources
  DOCUMENTATION: {
    id: 'documentation',
    titleKey: 'Resources.features.documentation.title',
    icon: 'description',
    path: '/resources/documentation',
  },
  CASE_STUDIES: {
    id: 'case-studies',
    titleKey: 'Resources.features.caseStudies.title',
    icon: 'analytics',
    path: '/resources/case-studies',
  },
  WHITEPAPERS: {
    id: 'whitepapers',
    titleKey: 'Resources.features.whitepapers.title',
    icon: 'article',
    path: '/resources/whitepapers',
  },
  ASSETS: {
    id: 'assets',
    titleKey: 'Resources.features.assets.title',
    icon: 'architecture',
    path: '/resources/assets',
  },
  // Tools
  CLI: {
    id: 'cli',
    titleKey: 'Tools.features.cli.title',
    icon: 'terminal',
    path: '/tools/cli',
  },
  DEV_TOOLS: {
    id: 'dev-tools',
    titleKey: 'Tools.features.devTools.title',
    icon: 'handyman',
    path: '/tools/dev-tools',
  },
  FRAMEWORKS: {
    id: 'frameworks',
    titleKey: 'Tools.features.frameworks.title',
    icon: 'widgets',
    path: '/tools/frameworks',
  },
  AUTOMATION: {
    id: 'automation',
    titleKey: 'Tools.features.automation.title',
    icon: 'settings_suggest',
    path: '/tools/automation',
  },
};
