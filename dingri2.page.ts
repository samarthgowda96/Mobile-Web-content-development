import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dingri2',
  templateUrl: './dingri2.page.html',
  styleUrls: ['./dingri2.page.scss'],
})
export class Dingri2Page implements OnInit {
img : string ='';
  constructor(private active : ActivatedRoute) { }

  ngOnInit() {
    this.img = this.active.snapshot.paramMap.get('img');
  }
  

}
