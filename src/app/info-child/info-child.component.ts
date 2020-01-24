import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-child',
  templateUrl: './info-child.component.html',
  styleUrls: ['./info-child.component.css']
})
export class InfoChildComponent implements OnInit {

  @Input('param') information: string;
  constructor() {
    //console.log("%c Triggered Info-Child-Component => Constructor", "color : brown");
  }

  ngOnChanges(changes) {
    console.info(changes)
    console.log("%c ng-On-Changes", "color : blue");
  }

  ngOnInit() {
    //console.log("%c Triggered Info-Child-Component => ng-On-Init", "color : green");
  }

  // ngDoCheck() {
  //   console.log("%c Triggered Info-Child-Component => ng-Do-Check", "color : purple");
  // }

  // ngAfterContentInit() {
  //   console.log("%c Triggered Info-Child-Component => ng-After-Content-Init", "color : pink");
  // }

  // ngAfterContentChecked() {
  //   console.log("%c Triggered Info-Child-Component => ng-After-Content-Checked", "color : black");
  // }

  // ngAfterViewInit() {
  //   console.log("%c Triggered Info-Child-Component => ng-After-View-Init", "color : orange");
  // }

  // ngAfterViewChecked() {
  //   console.log("%c Triggered Info-Child-Component => ng-After-View-Checked", "color : blue");
  // }

  // ngOnDestroy() {
  //   console.log("%c Triggered Info-Child-Component => ng-On-Destroy", "color : red");
  // }

}
