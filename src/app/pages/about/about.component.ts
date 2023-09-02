import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  text: string = '';
  list: string[] = [];
  constructor(private dataServiceCopy: DataService) {}

  ngOnInit(): void {
    this.text = this.dataServiceCopy.getData();
    this.list = this.dataServiceCopy.getList();
  }
}
