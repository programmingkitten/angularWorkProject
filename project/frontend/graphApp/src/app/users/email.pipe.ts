import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]) {
    return value.split('@')[0];
  }

}



