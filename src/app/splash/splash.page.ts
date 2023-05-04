import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router:Router) { 

  
      this.router.navigateByUrl('tabs');
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }





}
