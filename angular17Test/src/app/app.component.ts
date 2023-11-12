import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, HomeComponent],
})
export class AppComponent implements OnInit {
  title = 'angular17Test';
  count = signal(50);
  

  data = 5;
  array_Data: number[] = [1, 2, 3, 4, 5, 6, 7];
  env = environment;


  ngOnInit() {
    // Signals are getter functions - calling them reads their value.
    console.log('The count is: ' + this.count());
  }
}
