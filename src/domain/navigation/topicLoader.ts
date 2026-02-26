import type { Subpage } from '@/types/navigation';

/**
 * These keys should match the main tabs shown in Combined/Topics
 * and the items exported in your Combined pages array.
 */
export type TopicKey = 'languages' | 'engines' | 'design' | 'graphics' | 'mobile';
// | "pipeline"

export const topicButtons: Array<{ key: TopicKey; name: string }> = [
  { key: 'languages', name: 'Languages' },
  { key: 'engines', name: 'Engines' },
  { key: 'design', name: 'Design' },
  { key: 'graphics', name: 'Graphics' },
  { key: 'mobile', name: 'Mobile' },
  // { key: "pipeline", name: "Pipeline" },
];

/**
 * Centralized loader for topic modules.
 * Uses dynamic imports so each topic can be code-split.
 */
const topicImporters: Record<TopicKey, () => Promise<{ default: Subpage }>> = {
  languages: () => import('@/Navigation/Combined/Topics/languages'),
  engines: () => import('@/Navigation/Combined/Topics/engines'),
  design: () => import('@/Navigation/Combined/Topics/design'),
  graphics: () => import('@/Navigation/Combined/Topics/graphics'),
  mobile: () => import('@/Navigation/Combined/Topics/mobile'),
  // pipeline: () => import("@/Navigation/Combined/Topics/pipeline"),
};

export async function loadTopic(key: TopicKey): Promise<Subpage> {
  const load = topicImporters[key];
  if (!load) {
    // This should be unreachable if TopicKey stays in sync,
    // but it's nice to keep a real runtime error.
    throw new Error(`Unknown topic key: ${String(key)}`);
  }
  return (await load()).default;
}