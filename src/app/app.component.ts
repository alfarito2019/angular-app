import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: string = 'Hola mundo angular!';
  subtitle: string = 'Contador con estado de sesión';
  users: string[] = ['Pepe', 'María', 'Juan', 'Andrés'];
  visible: boolean = false;
  counter: number = 0;

  switchVisible(): void {
    this.visible = !this.visible;
  }

  setCounter(event: number): void {
    this.counter = event;
  }
  ngOnInit(): void {
    if (typeof sessionStorage !== 'undefined') {
      // Verifica si localStorage está disponible
      const storedCounter = sessionStorage.getItem('counter');
      this.counter = storedCounter ? parseInt(storedCounter, 10) : 0;
    }
  }
}
