import {WordpressPost} from './wordpress-post';

describe('WordpressPost', () => {
  it('fromJson', () => {
    const source = listPostResponseJson[0];
    const result = WordpressPost.fromJson(source);

    expect(result.date.toISOString().startsWith(source.date_gmt)).toBeTruthy();
    expect(result.guid).toBe(source.guid);
    expect(result.id).toBe(source.id);
    expect(result.link).toBe(source.link);
    expect(result.modified.toISOString().startsWith(source.modified_gmt)).toBeTruthy();
    expect(result.slug).toBe(source.slug);
    expect(result.status).toBe(source.status);
    expect(result.type).toBe(source.type);
    expect(result.title).toBe(source.title.rendered);
    expect(result.content).toBe(source.content.rendered);
    expect(result.author).toBe(source.author);
    expect(result.excerpt).toBe(source.excerpt.rendered);
    expect(result.featuredMedia).toBe(source.featured_media);
    expect(result.commentStatus).toBe(source.comment_status);
    expect(result.pingStatus).toBe(source.ping_status);
    expect(result.format).toBe(source.format);
    expect(result.meta).toBe(source.meta);
    expect(result.sticky).toBe(source.sticky);
    expect(result.template).toBe(source.template);
    expect(result.categories).toEqual(source.categories);
    expect(result.tags).toEqual(source.tags);
  });

  it('fromJsonArray', () => {
    const source = listPostResponseJson[0];
    const result = WordpressPost.fromJsonArray(listPostResponseJson)[0];

    expect(result.date.toISOString().startsWith(source.date_gmt)).toBeTruthy();
    expect(result.guid).toBe(source.guid);
    expect(result.id).toBe(source.id);
    expect(result.link).toBe(source.link);
    expect(result.modified.toISOString().startsWith(source.modified_gmt)).toBeTruthy();
    expect(result.slug).toBe(source.slug);
    expect(result.status).toBe(source.status);
    expect(result.type).toBe(source.type);
    expect(result.title).toBe(source.title.rendered);
    expect(result.content).toBe(source.content.rendered);
    expect(result.author).toBe(source.author);
    expect(result.excerpt).toBe(source.excerpt.rendered);
    expect(result.featuredMedia).toBe(source.featured_media);
    expect(result.commentStatus).toBe(source.comment_status);
    expect(result.pingStatus).toBe(source.ping_status);
    expect(result.format).toBe(source.format);
    expect(result.meta).toBe(source.meta);
    expect(result.sticky).toBe(source.sticky);
    expect(result.template).toBe(source.template);
    expect(result.categories).toEqual(source.categories);
    expect(result.tags).toEqual(source.tags);
  });
});

export const listPostResponseJson = [
  {
    'id': 67,
    'date': '2018-02-07T17:06:06',
    'date_gmt': '2018-02-08T01:06:06',
    'guid': {
      'rendered': 'http://blog.sakuraapi.com/?p=67'
    },
    'modified': '2018-02-07T17:06:06',
    'modified_gmt': '2018-02-08T01:06:06',
    'slug': 'cli-v0-6-2-released',
    'status': 'publish',
    'type': 'post',
    'link': 'https://blog.sakuraapi.com/2018/02/07/cli-v0-6-2-released/',
    'title': {
      'rendered': 'CLI v0.6.2 released'
    },
    'content': {
      'rendered': '<p>See: https://github.com/sakuraapi/cli/releases/tag/v0.6.2</p>\n<h3>Bug fixes:</h3>\n<ul>\n<li><a class="issue-link js-issue-link tooltipped tooltipped-ne" href="https://github.com/sakuraapi/cli/pull/14">#14</a> Comment correction</li>\n<li><a class="issue-link js-issue-link tooltipped tooltipped-ne" href="https://github.com/sakuraapi/cli/issues/15">#15</a> (EmailService spec was being included even if EmailService was not included)</li>\n<li><a class="issue-link js-issue-link tooltipped tooltipped-ne" href="https://github.com/sakuraapi/cli/issues/16">#16</a> <code>SakuraApi/core@0.10.0</code> was not being properly referenced in the template for <code>package.json</code></li>\n</ul>\n<h3>Contributors:</h3>\n<ul>\n<li><a class="user-mention" href="https://github.com/carsonf">@CarsonF</a></li>\n</ul>\n',
      'protected': false
    },
    'excerpt': {
      'rendered': '<p>See: https://github.com/sakuraapi/cli/releases/tag/v0.6.2 Bug fixes: #14 Comment correction #15 (EmailService spec was being included even if EmailService was not included) #16 SakuraApi/core@0.10.0 was not being properly referenced in the template for package.json Contributors: @CarsonF</p>\n',
      'protected': false
    },
    'author': 8152311,
    'featured_media': 0,
    'comment_status': 'open',
    'ping_status': 'open',
    'sticky': false,
    'template': '',
    'format': 'standard',
    'meta': [],
    'categories': [
      604417403,
      7781
    ],
    'tags': [],
    'jetpack-related-posts': [
      {
        'id': 17,
        'url': 'https://blog.sakuraapi.com/maru_ni_sakura_inverted/',
        'url_meta': {
          'origin': 67,
          'position': 0
        },
        'title': 'Maru_ni_Sakura_inverted',
        'date': 'February 2, 2018',
        'format': false,
        'excerpt': '',
        'rel': 'nofollow',
        'context': '',
        'img': {
          'src': '',
          'width': 0,
          'height': 0
        },
        'classes': []
      },
      {
        'id': 30,
        'url': 'https://blog.sakuraapi.com/2018/02/01/9e503bcb-c11d-41f1-b5b4-c53de4866839/',
        'url_meta': {
          'origin': 67,
          'position': 1
        },
        'title': '{ "site_icon": { "value": 17,…',
        'date': 'February 1, 2018',
        'format': false,
        'excerpt': '{ "site_icon": { "value": 17, "type": "option", "user_id": 8152311, "date_modified_gmt": "2018-02-02 04:52:57" } }',
        'rel': 'nofollow',
        'context': '',
        'img': {
          'src': '',
          'width': 0,
          'height': 0
        },
        'classes': []
      },
      {
        'id': 19,
        'url': 'https://blog.sakuraapi.com/374th-airlift-wing-public-affairs/',
        'url_meta': {
          'origin': 67,
          'position': 2
        },
        'title': '374th Airlift Wing Public Affairs',
        'date': 'February 2, 2018',
        'format': false,
        'excerpt': 'Cherry blossoms are in full bloom along McGuire Avenue at Yokota Air Base, Japan, April 3, 2015, at Yokota Air Base, Japan. According to the Japan Meteorological Agency, it had reached full bloom five days earlier than in an average year. (U.S. Air Force photo by Airman 1st Class Delano…',
        'rel': 'nofollow',
        'context': '',
        'img': {
          'src': '',
          'width': 0,
          'height': 0
        },
        'classes': []
      }
    ],
    'revisions': {
      'count': 1,
      'last_id': 68
    },
    'featured_media_url': '',
    '_links': {
      'self': [
        {
          'href': 'https://public-api.wordpress.com/wp/v2/sites/blog.sakuraapi.com/posts/67'
        }
      ],
      'collection': [
        {
          'href': 'https://public-api.wordpress.com/wp/v2/sites/blog.sakuraapi.com/posts'
        }
      ],
      'about': [
        {
          'href': 'https://public-api.wordpress.com/wp/v2/sites/blog.sakuraapi.com/types/post'
        }
      ],
      'author': [
        {
          'embeddable': true,
          'href': 'https://public-api.wordpress.com/wp/v2/sites/blog.sakuraapi.com/users/8152311'
        }
      ],
      'replies': [
        {
          'embeddable': true,
          'href': 'https://public-api.wordpress.com/wp/v2/sites/blog.sakuraapi.com/comments?post=67'
        }
      ],
      'version-history': [
        {
          'href': 'https://public-api.wordpress.com/wp/v2/sites/blog.sakuraapi.com/posts/67/revisions'
        }
      ],
      'wp:attachment': [
        {
          'href': 'https://public-api.wordpress.com/wp/v2/sites/blog.sakuraapi.com/media?parent=67'
        }
      ],
      'wp:term': [
        {
          'taxonomy': 'category',
          'embeddable': true,
          'href': 'https://public-api.wordpress.com/wp/v2/sites/blog.sakuraapi.com/categories?post=67'
        },
        {
          'taxonomy': 'post_tag',
          'embeddable': true,
          'href': 'https://public-api.wordpress.com/wp/v2/sites/blog.sakuraapi.com/tags?post=67'
        }
      ],
      'curies': [
        {
          'name': 'wp',
          'href': 'https://api.w.org/{rel}',
          'templated': true
        }
      ]
    }
  }
];
