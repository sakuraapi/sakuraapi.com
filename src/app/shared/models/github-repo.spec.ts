import {GithubRepo} from './github-repo';

describe('GithubRepo', () => {
  it('fromJson', () => {
    const source = orgReposResponseJson[0];
    const result = GithubRepo.fromJson(source);

    expect(result.id).toBe(source.id);
    expect(result.name).toBe(source.name);
    expect(result.fullName).toBe(source.full_name);
    expect(result.repoUrl).toBe(source.html_url);
    expect(result.description).toBe(source.description);
    expect(result.apiUrl).toBe(source.url);
    expect(result.forks).toBe(source.forks);
    expect(result.openIssues).toBe(source.open_issues);
    expect(result.watchers).toBe(source.watchers);

  });

  it('fromJsonArray', () => {
    const source = orgReposResponseJson;
    const result = GithubRepo.fromJsonArray(source);

    expect(result.length).toBe(2);

    expect(result[0].id).toBe(source[0].id);
    expect(result[0].name).toBe(source[0].name);
    expect(result[0].fullName).toBe(source[0].full_name);
    expect(result[0].repoUrl).toBe(source[0].html_url);
    expect(result[0].description).toBe(source[0].description);
    expect(result[0].apiUrl).toBe(source[0].url);
    expect(result[0].forks).toBe(source[0].forks);
    expect(result[0].openIssues).toBe(source[0].open_issues);
    expect(result[0].watchers).toBe(source[0].watchers);

    expect(result[1].id).toBe(source[1].id);
    expect(result[1].name).toBe(source[1].name);
    expect(result[1].fullName).toBe(source[1].full_name);
    expect(result[1].repoUrl).toBe(source[1].html_url);
    expect(result[1].description).toBe(source[1].description);
    expect(result[1].apiUrl).toBe(source[1].url);
    expect(result[1].forks).toBe(source[1].forks);
    expect(result[1].openIssues).toBe(source[1].open_issues);
    expect(result[1].watchers).toBe(source[1].watchers);

  });
});

// v3 response
export const orgReposResponseJson = [
  {
    'id': 74779104,
    'name': 'core',
    'full_name': 'sakuraapi/core',
    'owner': {
      'login': 'sakuraapi',
      'id': 23726244,
      'avatar_url': 'https://avatars1.githubusercontent.com/u/23726244?v=4',
      'gravatar_id': '',
      'url': 'https://api.github.com/users/sakuraapi',
      'html_url': 'https://github.com/sakuraapi',
      'followers_url': 'https://api.github.com/users/sakuraapi/followers',
      'following_url': 'https://api.github.com/users/sakuraapi/following{/other_user}',
      'gists_url': 'https://api.github.com/users/sakuraapi/gists{/gist_id}',
      'starred_url': 'https://api.github.com/users/sakuraapi/starred{/owner}{/repo}',
      'subscriptions_url': 'https://api.github.com/users/sakuraapi/subscriptions',
      'organizations_url': 'https://api.github.com/users/sakuraapi/orgs',
      'repos_url': 'https://api.github.com/users/sakuraapi/repos',
      'events_url': 'https://api.github.com/users/sakuraapi/events{/privacy}',
      'received_events_url': 'https://api.github.com/users/sakuraapi/received_events',
      'type': 'Organization',
      'site_admin': false
    },
    'private': false,
    'html_url': 'https://github.com/sakuraapi/core',
    'description': 'MongoDB and TypeScript MEAN Stack Framework for NodeJS',
    'fork': false,
    'url': 'https://api.github.com/repos/sakuraapi/core',
    'forks_url': 'https://api.github.com/repos/sakuraapi/core/forks',
    'keys_url': 'https://api.github.com/repos/sakuraapi/core/keys{/key_id}',
    'collaborators_url': 'https://api.github.com/repos/sakuraapi/core/collaborators{/collaborator}',
    'teams_url': 'https://api.github.com/repos/sakuraapi/core/teams',
    'hooks_url': 'https://api.github.com/repos/sakuraapi/core/hooks',
    'issue_events_url': 'https://api.github.com/repos/sakuraapi/core/issues/events{/number}',
    'events_url': 'https://api.github.com/repos/sakuraapi/core/events',
    'assignees_url': 'https://api.github.com/repos/sakuraapi/core/assignees{/user}',
    'branches_url': 'https://api.github.com/repos/sakuraapi/core/branches{/branch}',
    'tags_url': 'https://api.github.com/repos/sakuraapi/core/tags',
    'blobs_url': 'https://api.github.com/repos/sakuraapi/core/git/blobs{/sha}',
    'git_tags_url': 'https://api.github.com/repos/sakuraapi/core/git/tags{/sha}',
    'git_refs_url': 'https://api.github.com/repos/sakuraapi/core/git/refs{/sha}',
    'trees_url': 'https://api.github.com/repos/sakuraapi/core/git/trees{/sha}',
    'statuses_url': 'https://api.github.com/repos/sakuraapi/core/statuses/{sha}',
    'languages_url': 'https://api.github.com/repos/sakuraapi/core/languages',
    'stargazers_url': 'https://api.github.com/repos/sakuraapi/core/stargazers',
    'contributors_url': 'https://api.github.com/repos/sakuraapi/core/contributors',
    'subscribers_url': 'https://api.github.com/repos/sakuraapi/core/subscribers',
    'subscription_url': 'https://api.github.com/repos/sakuraapi/core/subscription',
    'commits_url': 'https://api.github.com/repos/sakuraapi/core/commits{/sha}',
    'git_commits_url': 'https://api.github.com/repos/sakuraapi/core/git/commits{/sha}',
    'comments_url': 'https://api.github.com/repos/sakuraapi/core/comments{/number}',
    'issue_comment_url': 'https://api.github.com/repos/sakuraapi/core/issues/comments{/number}',
    'contents_url': 'https://api.github.com/repos/sakuraapi/core/contents/{+path}',
    'compare_url': 'https://api.github.com/repos/sakuraapi/core/compare/{base}...{head}',
    'merges_url': 'https://api.github.com/repos/sakuraapi/core/merges',
    'archive_url': 'https://api.github.com/repos/sakuraapi/core/{archive_format}{/ref}',
    'downloads_url': 'https://api.github.com/repos/sakuraapi/core/downloads',
    'issues_url': 'https://api.github.com/repos/sakuraapi/core/issues{/number}',
    'pulls_url': 'https://api.github.com/repos/sakuraapi/core/pulls{/number}',
    'milestones_url': 'https://api.github.com/repos/sakuraapi/core/milestones{/number}',
    'notifications_url': 'https://api.github.com/repos/sakuraapi/core/notifications{?since,all,participating}',
    'labels_url': 'https://api.github.com/repos/sakuraapi/core/labels{/name}',
    'releases_url': 'https://api.github.com/repos/sakuraapi/core/releases{/id}',
    'deployments_url': 'https://api.github.com/repos/sakuraapi/core/deployments',
    'created_at': '2016-11-25T18:07:54Z',
    'updated_at': '2018-02-26T21:31:28Z',
    'pushed_at': '2018-03-04T17:51:43Z',
    'git_url': 'git://github.com/sakuraapi/core.git',
    'ssh_url': 'git@github.com:sakuraapi/core.git',
    'clone_url': 'https://github.com/sakuraapi/core.git',
    'svn_url': 'https://github.com/sakuraapi/core',
    'homepage': 'https://blog.sakuraapi.com',
    'size': 1286,
    'stargazers_count': 35,
    'watchers_count': 35,
    'language': 'TypeScript',
    'has_issues': true,
    'has_projects': false,
    'has_downloads': true,
    'has_wiki': true,
    'has_pages': true,
    'forks_count': 4,
    'mirror_url': null,
    'archived': false,
    'open_issues_count': 26,
    'license': {
      'key': 'bsd-3-clause',
      'name': 'BSD 3-Clause "New" or "Revised" License',
      'spdx_id': 'BSD-3-Clause',
      'url': 'https://api.github.com/licenses/bsd-3-clause'
    },
    'forks': 4,
    'open_issues': 26,
    'watchers': 35,
    'default_branch': 'develop',
    'permissions': {
      'admin': false,
      'push': false,
      'pull': true
    }
  },
  {
    'id': 92433776,
    'name': 'auth-native-authority',
    'full_name': 'sakuraapi/auth-native-authority',
    'owner': {
      'login': 'sakuraapi',
      'id': 23726244,
      'avatar_url': 'https://avatars1.githubusercontent.com/u/23726244?v=4',
      'gravatar_id': '',
      'url': 'https://api.github.com/users/sakuraapi',
      'html_url': 'https://github.com/sakuraapi',
      'followers_url': 'https://api.github.com/users/sakuraapi/followers',
      'following_url': 'https://api.github.com/users/sakuraapi/following{/other_user}',
      'gists_url': 'https://api.github.com/users/sakuraapi/gists{/gist_id}',
      'starred_url': 'https://api.github.com/users/sakuraapi/starred{/owner}{/repo}',
      'subscriptions_url': 'https://api.github.com/users/sakuraapi/subscriptions',
      'organizations_url': 'https://api.github.com/users/sakuraapi/orgs',
      'repos_url': 'https://api.github.com/users/sakuraapi/repos',
      'events_url': 'https://api.github.com/users/sakuraapi/events{/privacy}',
      'received_events_url': 'https://api.github.com/users/sakuraapi/received_events',
      'type': 'Organization',
      'site_admin': false
    },
    'private': false,
    'html_url': 'https://github.com/sakuraapi/auth-native-authority',
    'description': 'Middleware to support native authentication capabilities',
    'fork': false,
    'url': 'https://api.github.com/repos/sakuraapi/auth-native-authority',
    'forks_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/forks',
    'keys_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/keys{/key_id}',
    'collaborators_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/collaborators{/collaborator}',
    'teams_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/teams',
    'hooks_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/hooks',
    'issue_events_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/issues/events{/number}',
    'events_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/events',
    'assignees_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/assignees{/user}',
    'branches_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/branches{/branch}',
    'tags_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/tags',
    'blobs_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/git/blobs{/sha}',
    'git_tags_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/git/tags{/sha}',
    'git_refs_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/git/refs{/sha}',
    'trees_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/git/trees{/sha}',
    'statuses_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/statuses/{sha}',
    'languages_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/languages',
    'stargazers_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/stargazers',
    'contributors_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/contributors',
    'subscribers_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/subscribers',
    'subscription_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/subscription',
    'commits_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/commits{/sha}',
    'git_commits_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/git/commits{/sha}',
    'comments_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/comments{/number}',
    'issue_comment_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/issues/comments{/number}',
    'contents_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/contents/{+path}',
    'compare_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/compare/{base}...{head}',
    'merges_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/merges',
    'archive_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/{archive_format}{/ref}',
    'downloads_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/downloads',
    'issues_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/issues{/number}',
    'pulls_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/pulls{/number}',
    'milestones_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/milestones{/number}',
    'notifications_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/notifications{?since,all,participating}',
    'labels_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/labels{/name}',
    'releases_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/releases{/id}',
    'deployments_url': 'https://api.github.com/repos/sakuraapi/auth-native-authority/deployments',
    'created_at': '2017-05-25T18:44:28Z',
    'updated_at': '2018-02-26T21:32:17Z',
    'pushed_at': '2018-02-02T00:13:07Z',
    'git_url': 'git://github.com/sakuraapi/auth-native-authority.git',
    'ssh_url': 'git@github.com:sakuraapi/auth-native-authority.git',
    'clone_url': 'https://github.com/sakuraapi/auth-native-authority.git',
    'svn_url': 'https://github.com/sakuraapi/auth-native-authority',
    'homepage': null,
    'size': 169,
    'stargazers_count': 2,
    'watchers_count': 2,
    'language': 'TypeScript',
    'has_issues': true,
    'has_projects': false,
    'has_downloads': true,
    'has_wiki': false,
    'has_pages': false,
    'forks_count': 2,
    'mirror_url': null,
    'archived': false,
    'open_issues_count': 11,
    'license': {
      'key': 'bsd-3-clause',
      'name': 'BSD 3-Clause "New" or "Revised" License',
      'spdx_id': 'BSD-3-Clause',
      'url': 'https://api.github.com/licenses/bsd-3-clause'
    },
    'forks': 2,
    'open_issues': 11,
    'watchers': 2,
    'default_branch': 'develop',
    'permissions': {
      'admin': false,
      'push': false,
      'pull': true
    }
  }
];
