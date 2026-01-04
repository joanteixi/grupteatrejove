import type { PropRichTextDataParsed, PropMediaDataParsed } from '@thebcms/types';
import type { StatGroup } from '../group/stat';

export interface HomeAboutUsGroup {
    title: string;
    description: PropRichTextDataParsed;
    stats: StatGroup[];
    cover_image: PropMediaDataParsed;
}
