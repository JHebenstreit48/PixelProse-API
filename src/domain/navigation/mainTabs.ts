import type { Subpage } from '@/types/navigation';

import languages from '@/Navigation/Combined/Topics/languages';
import engines from '@/Navigation/Combined/Topics/engines';
import design from '@/Navigation/Combined/Topics/design';
import graphics from '@/Navigation/Combined/Topics/graphics';
// import pipeline from '@/Navigation/Combined/Topics/pipeline';
import mobile from '@/Navigation/Combined/Topics/mobile';

const pages: Subpage[] = [
  languages,
  engines,
  design,
  graphics,
  // pipeline,
  mobile,
];

export default pages;