'use strict'
namespace SplitObject {
  export class Split {
    splitobject(arrayobject: any[]):any {
      let array = [], k = 0
      for (const i of arrayobject) {
        for (const j of i.quantity) {
          array[k] = {
            name: i.name, quantity: 1
          }
          k++
        }
      }
      return array;
    }
  }
}
