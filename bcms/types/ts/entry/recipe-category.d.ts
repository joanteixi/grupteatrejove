import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';

export interface RecipeCategoryEntryMetaItem {
    title: string;
    slug: string;
}

export interface RecipeCategoryEntryMeta {
    en?: RecipeCategoryEntryMetaItem;
}

export interface RecipeCategoryEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: RecipeCategoryEntryMeta;
    content: BCMSEntryContentParsed;
}