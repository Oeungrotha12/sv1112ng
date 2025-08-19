// src/app/pipe/to-khr.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKHR',
  standalone: true
})
export class ToKhrPipe implements PipeTransform {
  transform(value: number): string {
    // Convert USD to KHR (assuming 1 USD = 4000 KHR)
    const exchangeRate = 4000;
    const khrAmount = value * exchangeRate;
    return khrAmount.toLocaleString('en-US') + ' ៛';
  }
}