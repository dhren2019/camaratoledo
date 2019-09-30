import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slidesOptions = {
    slidesPerView: 2
  };

  slidesOptionsTop = {
    slidesPerView: 2
  };
 
  slidesOfers= {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    pager: true 
  };
  
}


