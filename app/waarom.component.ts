import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyFooterComponent } from './myfooter.component';

@Component({
  selector: 'waarom',
  templateUrl: 'app/waarom.component.html',
  styleUrls: ['app/waarom.component.css']
})

export class WaaromComponent {

  constructor(private router: Router)
{
}
}
