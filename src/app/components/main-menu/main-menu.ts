import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { RouterLinkActive, RouterLink } from "@angular/router";

@Component({
  selector: 'app-main-menu',
  imports: [TooltipModule, RouterLinkActive, RouterLink],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css',
})
export class MainMenu {

}
