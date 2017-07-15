import { Component, OnInit } from '@angular/core';
import { CamperService } from './camper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  recentCampers = [];
  alltimeCampers = [];
  mainCampers = [];
  isRecent = true;

  constructor(private camperService: CamperService) { }

  ngOnInit() {

    this.camperService.getRecent().subscribe(
      (res) => {
        this.recentCampers = res.json();
        this.swapArray();
      }
    );

    this.camperService.getAlltime().subscribe(
      (res) => {
        this.alltimeCampers = res.json();
        this.swapArray();
      }
    );

  }

  swapArray() {
    if (this.isRecent) {
      this.mainCampers = this.recentCampers;
    } else {
      this.mainCampers = this.alltimeCampers;
    }
  }

  changeSorting(rec) {
    if (!rec === this.isRecent) {
      this.isRecent = !this.isRecent;
      this.swapArray();
    }
  }

}
