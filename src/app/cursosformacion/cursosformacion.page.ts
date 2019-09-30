import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursosformacion',
  templateUrl: './cursosformacion.page.html',
  styleUrls: ['./cursosformacion.page.scss'],
})
export class CursosformacionPage {
oculto = 10;
  slidesOfers= {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:false,
    pagination: true
  }
}
