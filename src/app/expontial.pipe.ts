import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expontial',
})
export class ExpontialPipe implements PipeTransform {
  transform(value: number): any {
    return Math.pow(value, 2);
  }
}
