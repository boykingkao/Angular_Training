import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';
import { MainService } from './main.service';
import liff from '@line/liff';

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
  lineProfileData: any;

  data = 5;
  array_Data: number[] = [1, 2, 3, 4, 5, 6, 7];
  env = environment;

  constructor(protected mainService: MainService) {}

  ngOnInit() {
    // liff.init({ liffId: '2001663398-y2RzdBoj' });

    liff
      .init({ liffId: '2001663398-y2RzdBoj' })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login();
        }
      })
      .catch((err) => {
        console.error(err);
        liff.closeWindow();
      });
  }

  async doFunction() {
    this.lineProfileData = null;
    // await liff.login({
    //   redirectUri: window.location.origin+'/items',

    // });
    // alert(`${window.location.origin}/items`)
    const liffData = await liff.getProfile();
    alert(liff.getOS());

    console.log(liffData);
    this.lineProfileData = liffData;
    // console.log(liffData)
    // alert(JSON.stringify(liffData));
  }

  // effect(() => {
  //   console.log(`The current count is:`);
  // });
}
