import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hop } from '../../classes/hop';
import { HopService } from '../../services/hop.service';
import { ButtonLabel, ButtonDirective, Button } from "primeng/button";
import { Router, RouterLink } from "@angular/router";
import { AsyncPipe, DatePipe, CurrencyPipe, PercentPipe } from "@angular/common";
import { TableModule } from "primeng/table";
import { PrimeTemplate } from "primeng/api";

@Component({
  selector: 'app-hop-list',
  imports: [ButtonLabel, RouterLink, ButtonDirective, Button, AsyncPipe, TableModule, DatePipe, PrimeTemplate, CurrencyPipe, PercentPipe],
  templateUrl: './hop-list.html',
  styleUrl: './hop-list.css',
})
export class HopList implements OnInit {


  loading = true;
  feedback: any = {};


  hops$!: Observable<Hop[]>;


  constructor(private hopService: HopService, private router: Router) { }

  ngOnInit() {


    this.hops$ = this.hopService.getAll();
    this.loading = false;

  }
  editHop(hop: Hop) {
    console.log("editing hop: ", hop.id);
    this.router.navigate(['/hop-edit', hop.id], {
      state: { hop: hop }
    });
  }

  deleteHop(id: string) {

    console.log("deleting hop: ", id);
    if (confirm("Are you sure you want to delete this hop?")) {

      this.hopService.delete(id).subscribe({
        next: (data: Hop[]) => {
          console.log('Record deleted successfully');
          this.hops$ = this.hopService.getAll();

        },
        error: (err) => {
          console.error('Error deleting hop', err);
        }
      });
    }

    this.ngOnInit

  }

}
