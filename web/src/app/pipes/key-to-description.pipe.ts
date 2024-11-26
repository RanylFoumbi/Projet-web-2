import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyToDescription'
})
export class KeyToDescriptionPipe implements PipeTransform {

  transform(key: string, type: any): string {
    const description = Object.entries(type)
      .find(([k, v]) => k === key)?.[1]?.toString();
    return description ?? '';
  }

}
