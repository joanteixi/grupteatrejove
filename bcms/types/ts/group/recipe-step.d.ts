import type { PropRichTextDataParsed, PropMediaDataParsed } from '@thebcms/types';

export interface RecipeStepGroup {
    title: string;
    description: PropRichTextDataParsed;
    cover: PropMediaDataParsed;
}
