import {
  Component,
  OnDestroy,
  OnInit
}                         from '@angular/core';
import {Observable}       from 'rxjs/Observable';
import {Subject}          from 'rxjs/Subject';
import {GithubApiService} from '../../../core/http/github-api.service';
import {
  GithubRepo,
  repoIds
}                         from '../../../core/models/github-repo';
import {GithubService}    from '../../../core/services/github.service';
import {LogService}       from '../../../core/services/log.service';

@Component({
  selector: 'app-projects-cards',
  templateUrl: './projects-cards.component.html',
  styleUrls: ['./projects-cards.component.scss']
})
export class ProjectsCardsComponent implements OnInit, OnDestroy {

  featuredRepos: GithubRepo[];
  githubAvailable = true;
  repos = new Map<number, GithubRepo>();

  private ngUnsubscribe = new Subject<void>();

  constructor(private api: GithubApiService,
              private github: GithubService,
              private log: LogService) {
  }

  getRepo(id: number): GithubRepo {
    return this.repos.get(id) || {
      name: 'unknown',
      description: 'unknown',
      hide: true
    } as any;
  }

  ngOnInit() {
    this
      .api
      .gitHubApiAvailable$
      .takeUntil(this.ngUnsubscribe)
      .do((isAvailable) => this.githubAvailable = isAvailable)
      .subscribe({error: (err) => this.log.error(err)});

    this.loadProjects();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  loadProjects() {
    this
      .github
      .getRepositories()
      .concatMap((r) => Observable.from(r))
      .map((r) => this.repos.set(r.id, r))
      .do(() => {
        this.githubAvailable = this.repos.size > 0;

        this.featuredRepos = [
          this.getRepo(repoIds.core),
          this.getRepo(repoIds.cli),
          this.getRepo(repoIds.manual),
          this.getRepo(repoIds.authNativeAuthority),
          this.getRepo(repoIds.authAudience),
          this.getRepo(repoIds.authOAuthAuthority)
        ];
      })
      .subscribe({
        error: console.log
      });
  }
}
