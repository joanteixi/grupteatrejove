import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';
import type { SeoGroup } from '../group/seo';
import type { PropMediaDataParsed, PropRichTextDataParsed } from '@thebcms/types';
import type { RecipeCategoryEntry } from '../entry/recipe-category';
import type { QaItemGroup } from '../group/qa-item';
import type { RecipeStepGroup } from '../group/recipe-step';

export interface RecipeEntryMetaItem {
    title: string;
    slug: string;
    seo?: SeoGroup;
    cover_image?: PropMediaDataParsed;
    description: PropRichTextDataParsed;
    extended_description: PropRichTextDataParsed;
    cook_time: string;
    categories: Array<RecipeCategoryEntry>;
    popular?: boolean;
    qa: QaItemGroup[];
    ingredients: PropRichTextDataParsed[];
    steps: RecipeStepGroup[];
}

export interface RecipeEntryMeta {
    en?: RecipeEntryMetaItem;
}

export interface RecipeEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: RecipeEntryMeta;
    content: BCMSEntryContentParsed;
}