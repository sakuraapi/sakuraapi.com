import * as moment from 'moment';

export type WordpressPostStatus = 'publish' | 'future' | 'draft' | 'pending' | 'private';
export type WordpressOpenClosed = 'open' | 'closed';
export type WordpressPostFormat =
  'standard'
  | 'aside'
  | 'chat'
  | 'gallery'
  | 'link'
  | 'image'
  | 'quote'
  | 'status'
  | 'video'
  | 'audio';

export interface IWordPressObject {
  rendered: string;
  protected?: boolean;
}

export function fromWordpressObject(obj: IWordPressObject | any): string {
  obj = obj || {} as IWordPressObject;
  return obj.rendered || '';
}

export class WordpressPost {
  date: Date;
  guid: IWordPressObject;
  id: number;
  link: string;
  modified: Date;
  slug: string;
  status: WordpressPostStatus;
  type: string;
  title: string;
  content: string;
  author: number;
  excerpt: string;
  featuredMedia: number;
  commentStatus: WordpressOpenClosed;
  pingStatus: WordpressOpenClosed;
  format: WordpressPostFormat;
  meta: any[];
  sticky: boolean;
  template: string;
  categories: number[];
  tags: number[];

  static fromJson(json: any): WordpressPost {
    // moment converts Z (gmt) to local time

    json = json || {};

    const obj = new WordpressPost();

    obj.date = moment(json.date_gmt + 'Z', moment.ISO_8601).toDate();
    obj.guid = json.guid;
    obj.id = Number(json.id) || 0;
    obj.link = json.link;
    obj.modified = moment(json.modified_gmt + 'Z', moment.ISO_8601).toDate();
    obj.slug = json.slug;
    obj.status = json.status;
    obj.type = json.type;
    obj.title = fromWordpressObject(json.title);
    obj.content = fromWordpressObject(json.content);
    obj.author = Number(json.author) || 0;
    obj.excerpt = fromWordpressObject(json.excerpt);
    obj.featuredMedia = Number(json.featuredMedia) || 0;
    obj.commentStatus = json.comment_status;
    obj.pingStatus = json.ping_status;
    obj.format = json.format;
    obj.meta = json.meta;
    obj.sticky = json.sticky;
    obj.template = json.template;
    obj.categories = (Array.isArray(json.categories))
      ? json.categories.map((v) => Number(v) || 0)
      : [];
    obj.tags = (Array.isArray(json.tags))
      ? json.tags.map((v) => Number(v) || 0)
      : [];

    return obj;
  }

  static fromJsonArray(jsons: any[]): WordpressPost[] {
    if (!Array.isArray(jsons)) {
      return [];
    }

    const results = [];
    for (const json of jsons) {
      results.push(WordpressPost.fromJson(json));
    }
    return results;
  }

}
