import { Component, signal, OnInit, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent implements OnInit {

  data = signal(1)
  count: WritableSignal<number> = signal(0);

  doubleData = signal(() => this.data() * 2)

  ngOnInit(): void {
    // Signals are getter functions - calling them reads their value.
    console.log('The count is: ' + this.data());
    this.data.set(2)
    console.log('The count is: ' + this.data());

  }


  increase(){
    this.data.set(this.data() + 1)
    console.log(`data changed : ${this.data()}`)

    console.log(this.count())
  }

  decrease(){
    this.data.set(this.data() - 1)
    console.log(`data changed : ${this.data()}`)

    console.log(this.count())

  }

}
