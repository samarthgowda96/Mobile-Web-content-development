import { Component } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-dingri',
  templateUrl: './dingri.page.html',
  styleUrls: ['./dingri.page.scss'],
})
export class DingriPage  {

  constructor(private router: Router) { }
  
   linktodingri2(parameter){
     this.router.navigate(
       ['dingri2',parameter]
     )
   }

}
