import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {LogService} from '../../../shared/services/logs.service';

@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.css']
})
export class LogsListComponent implements OnInit {

  public logs: any;
  interval: any;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router, private logserv: LogService) {
      this.rest.getLogs().subscribe((data: {}) => {
          this.logserv.myMethod(data);
      });
  }

  ngOnInit() {
    this.getLogs();
    this.interval = setInterval(() => {
        this.getLogs();
    }, 5000);
  }

  getLogs() {
    this.rest.getLogs().subscribe((data: {}) => {
      this.logs = data;
    });
  }

  clearLogs() {
    this.rest.clearLogs().subscribe();
  }

}
