import { Component, OnDestroy, OnInit  } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'filos community';
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() : void {
    this.primengConfig.ripple = true;
  }

  ngOnDestroy() : void {
  }
}
