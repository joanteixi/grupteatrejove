import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';
import type { SeoGroup } from '../group/seo';
import type { PropRichTextDataParsed } from '@thebcms/types';

export interface RecipesPageEntryMetaItem {
    title: string;
    slug: string;
    seo?: SeoGroup;
    headline: PropRichTextDataParsed;
}

export interface RecipesPageEntryMeta {
    en?: RecipesPageEntryMetaItem;
}

export interface RecipesPageEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: RecipesPageEntryMeta;
    content: BCMSEntryContentParsed;
}