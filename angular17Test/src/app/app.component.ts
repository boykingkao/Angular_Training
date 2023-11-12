import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, HomeComponent]
})
export class AppComponent {
  title = 'angular17Test';

  data = 5
  array_Data:number[] = [1,2,3,4,5,6,7]
  env = environment;
}
