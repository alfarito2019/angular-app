import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: number = 0;

  @Input() title!:string;

  @Output() counterEmit:EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    if (typeof sessionStorage !== 'undefined') { // Verifica si localStorage está disponible
      const storedCounter = sessionStorage.getItem('counter');
      this.counter = storedCounter ? parseInt(storedCounter, 10) : 0;
    }
  }

  setCounter(): void {
    if (typeof sessionStorage !== 'undefined') { // Verifica si localStorage está disponible
      this.counter++;
      sessionStorage.setItem('counter', this.counter.toString());
      
      this.counterEmit.emit(this.counter);
    }
  }
}
