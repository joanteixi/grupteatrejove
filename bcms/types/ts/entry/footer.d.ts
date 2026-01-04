import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';
import type { PropMediaDataParsed, PropRichTextDataParsed } from '@thebcms/types';
import type { FooterNavGroupGroup } from '../group/footer-nav-group';

export interface FooterEntryMetaItem {
    title: string;
    slug: string;
    logo: PropMediaDataParsed;
    description: PropRichTextDataParsed;
    nav: FooterNavGroupGroup[];
}

export interface FooterEntryMeta {
    en?: FooterEntryMetaItem;
}

export interface FooterEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: FooterEntryMeta;
    content: BCMSEntryContentParsed;
}