import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrivalTime'
})
export class ArrivalTimePipe implements PipeTransform {

  transform(value: string): string {
    const arrivalTime = new Date(value).getTime()
    const minutesUntil = Math.trunc((arrivalTime - Date.now()) / 1000 / 60)
    return minutesUntil > 1 ? `${minutesUntil} min` : `Due`
  }

}
