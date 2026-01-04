import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';
import type { SeoGroup } from '../group/seo';
import type { PropRichTextDataParsed, PropMediaDataParsed } from '@thebcms/types';
import type { RecipeEntry } from '../entry/recipe';
import type { HomeAboutUsGroup } from '../group/home-about-us';

export interface HomePageEntryMetaItem {
    title: string;
    slug: string;
    seo?: SeoGroup;
    headline: PropRichTextDataParsed;
    description: PropRichTextDataParsed;
    cover_image: PropMediaDataParsed;
    recipes_title: string;
    recipes: Array<RecipeEntry>;
    about_us: HomeAboutUsGroup;
    contact_title: string;
    contact_description: PropRichTextDataParsed;
    contact_phone: PropRichTextDataParsed;
    contact_email: PropRichTextDataParsed;
}

export interface HomePageEntryMeta {
    en?: HomePageEntryMetaItem;
}

export interface HomePageEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: HomePageEntryMeta;
    content: BCMSEntryContentParsed;
}