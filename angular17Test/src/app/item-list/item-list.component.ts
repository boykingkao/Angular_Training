import {
  Component,
  signal,
  OnInit,
  WritableSignal,
  effect,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from '../main.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
})
export class ItemListComponent implements OnInit {
  data = signal(0);
  count: WritableSignal<number> = signal(0);

  doubleData = signal(() => this.data() * 2);

  constructor(protected mainService: MainService) {
  }

  ngOnInit(): void {
    // Signals are getter functions - calling them reads their value.
    console.log('The count is: ' + this.data());
  }

  

  conditionalCount = computed(() => {
    if (this.data() <= 10) {
      // console.log('still <= 10')
      return `<=10`;
    } else {
      // console.log('still > 10')
      return '>10';
    }
  });



  increase() {
    this.data.set(this.data() + 1);
    this.mainService.data.set(this.mainService.data() + 1);
    this.mainService.testData.count.set(this.mainService.testData.count() + 1);
    this.mainService.oldData += 1;
    console.log(this.conditionalCount())

  }

  decrease() {
    this.data.set(this.data() - 1);
    this.mainService.data.set(this.mainService.data() - 1);
    this.mainService.testData.count.set(this.mainService.testData.count() - 1);

    this.mainService.oldData -= 1;
    console.log(this.conditionalCount())


  }
}
