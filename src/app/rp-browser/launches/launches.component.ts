import {RpBrowserService} from '../rp-browser.service';
import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
// import {merge} from 'rxjs/observable/merge';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
// import {catchError} from 'rxjs/operators/catchError';
// import {map} from 'rxjs/operators/map';
// import {startWith} from 'rxjs/operators/startWith';
// import {switchMap} from 'rxjs/operators/switchMap';

export interface RpLaunchExecution {
  description: string;
}

export interface RpLaunchApi {
  content: RpLaunch[];
  page: {
    total_count: number;
    number: number; size: number; totalElements: number; totalPages: number};
  }

export interface RpLaunchDefect {
  description: string;
}
export interface RpLaunch {
  project: string;
  rerun: boolean;
  owner: string;
  share: boolean;
  description: string ;
  id: number;
  uuid: string;
  name: string;
  number: number;
  startTime: string;
  endTime: string;
  lastModified: string;
  status: string;
  statistics: { executions: RpLaunchExecution[];
  defects: RpLaunchDefect[]};
  attributes: string[];
  mode: string;
  // analysing: [];
  approximateDuration: number;
  hasRetries: boolean;
}

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements AfterViewInit {
  displayedColumns: string[] = ['description', 'name'];
  rpLaunch1 = {
    rerun: false,
    owner:  'default',
    share: false,
    description: 'Smoke test',
    id: 1,
    uuid:  'ef3de028-65e3-4c19-8421-6891bbafffae',
    name:  'AnyLaunchName',
    number: 1,
    startTime: 1617107319208,
    endTime: 1617196786566,
    lastModified: 1617196786590,
    status:  'INTERRUPTED',
    statistics: {executions: {},
      defects: {}},
    attributes: [],
    mode:  'DEFAULT',
    analysing: [],
    approximateDuration: 0.0,
    hasRetries: false};

  // dataSource = [this.rpLaunch1];
  dataSource = new MatTableDataSource();
  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sortChild!: MatSort;

  constructor(
    public service: RpBrowserService, private http: HttpClient
  ) {}

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit()');
    // If the user changes the sort order, reset back to the first page.
    // this.sortChild.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sortChild.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.service.searchLaunches('projet1'
            // this.sort.active, this.sort.direction, this.paginator.pageIndex)
          );
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.page.total_count;

          return data.content;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return of([]);
        })
      ).subscribe(data => this.dataSource.data = data);
  }

}

