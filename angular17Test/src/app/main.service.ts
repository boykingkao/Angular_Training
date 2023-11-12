import { Injectable, signal, WritableSignal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { 
    effect(() => {
      console.log(`The current service data is: ${this.data()}`);
      // console.log(`new class data : ${this.testData.count()}`);
      // this.testData.count.set(this.data());
    })

   
  }

  // gohza = () => {
  //   effect(() => {
  //     console.log(`outside : ${this.data()}`);
  //   })
  // }


  data:WritableSignal<number> = signal(0)

  testData = new Data()

  oldData:number = 0


}


class Data{
  count = signal<number>(0)

  constructor() { 
    effect(() => {
      console.log(`count from Data class : ${this.count()}`);
      
    })

   
  }
}
