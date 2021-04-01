import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


export interface RpLaunchExecution {
  description: string;
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
export class LaunchesComponent implements OnInit {
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

  dataSource = [this.rpLaunch1];

  constructor() { }

  ngOnInit(): void {
  }

}
