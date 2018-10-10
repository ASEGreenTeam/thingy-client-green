import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  foos:any = [];


  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getFoos();
  }

  getFoos() {
    this.foos = [];
    this.rest.getFoos().subscribe((data: {}) => {
      console.log(data);
      this.foos = data;
    });
  }

}
