import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';

export interface LegalPageEntryMetaItem {
    title: string;
    slug: string;
}

export interface LegalPageEntryMeta {
    en?: LegalPageEntryMetaItem;
}

export interface LegalPageEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: LegalPageEntryMeta;
    content: BCMSEntryContentParsed;
}