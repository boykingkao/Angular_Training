import {
  Component,
  signal,
  OnInit,
  WritableSignal,
  effect,
  computed,
  untracked,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from '../main.service';

@Component({
  selector: 'app-item-list',
  template: `
    Welcome to Angular!
  `,
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
})
export class ItemListComponent implements OnInit {
  data = signal(0);
  // count: WritableSignal<number> = signal(0);
  // doubleData = signal(() => this.data() * 2);

  protected mainService = inject(MainService)
  constructor(
    // protected mainService: MainService
    ) {
    effect(() => {
      // ภายใน effect() ต้องการการกระทำที่เกีั่ยวกับ signal ถึงจะทำงาน
      console.log(`item data is changed : ${this.data()}`);
    });

    effect(() => {
      untracked(() => {
        console.log(`data class is changed : ${this.mainService.testData.count()}`);
      })
      
    });

  }

  ngOnInit(): void {

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
    this.data.update((n) => n + 1);
    this.mainService.data.update((n) => n + 1);
    this.mainService.testData.count.update((n) => n + 1);
    this.mainService.oldData += 1;
    console.log(this.conditionalCount());
  }

  decrease() {
    this.data.update((n) => n - 1);
    this.mainService.data.update((n) => n - 1);
    this.mainService.testData.count.update((n) => n - 1);
    this.mainService.oldData -= 1;
    console.log(this.conditionalCount());
  }
}
