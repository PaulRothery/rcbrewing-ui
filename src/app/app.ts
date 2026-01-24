import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenubarModule,
    ButtonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  constructor(private router: Router) { }

  protected readonly title = signal('rcbrewing-ui');

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Rock Cut Brewing Menu',
        style: { margin: '10px' },
        styleClass: 'font-bold text-2xl text-blue-600'
      }
    ]
  }

  navigateToRoute() {
    this.router.navigate(['/login']);
  }

}
