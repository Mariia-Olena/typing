import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text = lorem.sentence();
  enteredText = '';

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  OnInput(value: string): void {
    this.enteredText = value;
  }

  compare(enteredLetter: string, letter: string): string {
    if (!enteredLetter) {
      return 'pending';
    }

    return enteredLetter === letter ? 'right' : 'wrong';
  }
}
