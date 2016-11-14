import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyFooterComponent } from './myfooter.component';

@Component({
  selector: 'hoewerkenwe',
  templateUrl: 'app/hoewerkenwe.component.html',
  styleUrls: ['app/waarom.component.css']
})

export class HoeWerkenWeComponent {

  constructor(private router: Router)
{
}
}
