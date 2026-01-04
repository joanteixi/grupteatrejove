import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';
import type { PropMediaDataParsed } from '@thebcms/types';
import type { HeaderNavItemGroup } from '../group/header-nav-item';

export interface HeaderEntryMetaItem {
    title: string;
    slug: string;
    logo: PropMediaDataParsed;
    nav: HeaderNavItemGroup[];
}

export interface HeaderEntryMeta {
    en?: HeaderEntryMetaItem;
}

export interface HeaderEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: HeaderEntryMeta;
    content: BCMSEntryContentParsed;
}