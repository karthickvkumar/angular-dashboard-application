import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  //Variable Declaration
  textContent: string;

  constructor() {
    console.log("%cConstructor", "color : brown");
    //Variable Initialization
    this.textContent = "";
  }

  ngOnChanges() {
    console.log("%cng-On-Changes", "color : blue");
  }

  ngOnInit() {
    console.log("%cng-On-Init", "color : green");
  }

  // ngDoCheck() {
  //   console.log("%cng-Do-Check", "color : purple");
  // }

  // ngAfterContentInit() {
  //   console.log("%cng-After-Content-Init", "color : green");
  // }

  // ngAfterContentChecked() {
  //   console.log("%cng-After-Content-Checked", "color : black");
  // }

  // ngAfterViewInit() {
  //   console.log("%cng-After-View-Init", "color : orange");
  // }

  // ngAfterViewChecked() {
  //   console.log("%cng-After-View-Checked", "color : blue");
  // }

  // ngOnDestroy() {
  //   console.log("%cng-On-Destroy", "color : red");
  // }

  onSend() {
    console.log("payments@besanttech.comMethod On - Send")
  }

}
