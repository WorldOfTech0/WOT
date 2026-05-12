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
  // Software
  SYSTEMS: {
    id: 'systems',
    titleKey: 'Software.features.systems.title',
    icon: 'terminal',
    path: '/software/systems',
  },
  EMBEDDED: {
    id: 'embedded',
    titleKey: 'Software.features.embedded.title',
    icon: 'memory',
    path: '/software/embedded',
  },
  FULLSTACK: {
    id: 'fullstack',
    titleKey: 'Software.features.fullstack.title',
    icon: 'layers',
    path: '/software/fullstack',
  },
  API: {
    id: 'api',
    titleKey: 'Software.features.api.title',
    icon: 'webhook',
    path: '/software/api',
  },
  // Infrastructure
  SERVER: {
    id: 'server',
    titleKey: 'Infrastructure.features.server.title',
    icon: 'dns',
    path: '/infrastructure/server',
  },
  DATA_INFRA: {
    id: 'data-infra',
    titleKey: 'Infrastructure.features.data.title',
    icon: 'database',
    path: '/infrastructure/data-infra',
  },
  NETWORK: {
    id: 'network',
    titleKey: 'Infrastructure.features.network.title',
    icon: 'hub',
    path: '/infrastructure/network',
  },
  CLOUD: {
    id: 'cloud',
    titleKey: 'Infrastructure.features.cloud.title',
    icon: 'cloud',
    path: '/infrastructure/cloud',
  },
  // Security
  INTELLIGENCE: {
    id: 'intelligence',
    titleKey: 'Security.features.intelligence.title',
    icon: 'verified_user',
    path: '/security/intelligence',
  },
  IDENTITY: {
    id: 'identity',
    titleKey: 'Security.features.identity.title',
    icon: 'lock',
    path: '/security/identity',
  },
  PRIVACY_ENG: {
    id: 'privacy-eng',
    titleKey: 'Security.features.privacy.title',
    icon: 'visibility',
    path: '/security/privacy-eng',
  },
  CRYPTO: {
    id: 'crypto',
    titleKey: 'Security.features.crypto.title',
    icon: 'key',
    path: '/security/crypto',
  },
  // Learning
  KNOWLEDGE: {
    id: 'knowledge',
    titleKey: 'Learning.features.knowledge.title',
    icon: 'menu_book',
    path: '/learning/knowledge',
  },
  SCHOOL: {
    id: 'school',
    titleKey: 'Learning.features.school.title',
    icon: 'school',
    path: '/learning/school',
  },
  LABS: {
    id: 'labs',
    titleKey: 'Learning.features.labs.title',
    icon: 'code',
    path: '/learning/labs',
  },
  INSIGHTS: {
    id: 'insights',
    titleKey: 'Learning.features.insights.title',
    icon: 'lightbulb',
    path: '/learning/insights',
  },
};
