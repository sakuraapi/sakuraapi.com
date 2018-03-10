export const repoIds = {
  authAudience: 96572652,
  authNativeAuthority: 92433776,
  authOAuthAuthority: 113482247,
  cli: 112237278,
  core: 74779104,
  manual: 111725347
};

export class GithubRepo {
  id: number;
  name: string;
  fullName: string;
  repoUrl: string;
  description: string;
  apiUrl: string;
  forks: number;
  openIssues: number;
  watchers: number;

  static fromJson(json: any): GithubRepo {
    json = json || {};

    const org = new GithubRepo();

    org.id = Number(json.id) || 0;
    org.name = json.name;
    org.fullName = json.full_name;
    org.repoUrl = json.html_url;
    org.description = json.description;
    org.apiUrl = json.url;
    org.forks = json.forks;
    org.openIssues = json.open_issues;
    org.watchers = json.watchers;

    return org;
  }

  static fromJsonArray(jsons: any[]): GithubRepo[] {
    jsons = jsons || [];

    const orgs = [];

    for (const json of jsons) {
      orgs.push(GithubRepo.fromJson(json));
    }

    return orgs;
  }
}
