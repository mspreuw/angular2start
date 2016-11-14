import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyFooterComponent } from './myfooter.component';

@Component({
  selector: 'wiezijnwe',
  templateUrl: 'app/wiezijnwe.component.html',
  styleUrls: ['app/waarom.component.css']
})

export class WieZijnWeComponent {

  constructor(private router: Router)
{
}
}
