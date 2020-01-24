import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-ngxRenderer',
  templateUrl: './ngx-renderer.component.html',
  styleUrls: ['./ngx-renderer.component.css']
})
export class NgxRendererComponent implements OnInit {

  @Input('data') emplpoyeeList: any;
  @Output() addEmployee = new EventEmitter();
  // emplpoyeeList: any = [
  //   {
  //     name: 'Mr.A',
  //     des: 'Front End',
  //     loc: 'Chennai'
  //   },
  //   {
  //     name: 'Mr.B',
  //     des: 'Back End',
  //     loc: 'Banglore'
  //   },
  //   {
  //     name: 'Mr.C',
  //     des: 'Full Stack',
  //     loc: 'Cochin'
  //   }
  // ]
  constructor() { }

  ngOnInit() {
  }

  onSave() {
    this.addEmployee.emit(this.emplpoyeeList);
  }



}
