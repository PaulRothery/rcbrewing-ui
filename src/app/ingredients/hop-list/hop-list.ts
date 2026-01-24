import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hop } from '../../classes/hop';
import { HopService } from '../../services/hop.service';
import { ButtonLabel, ButtonDirective, Button } from "primeng/button";
import { RouterLink } from "@angular/router";
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

  constructor(private hopService: HopService) { }

  ngOnInit() {



    this.hops$ = this.hopService.getAll();
    this.loading = false;

  }

  editHop(Hop: Hop) {
    /*     console.log("editing Hop: ", Hop.id);
        this.router.navigate(['/Hop-edit', Hop.id], {
          state: { Hop: Hop }
        }); */
  }

  deleteHop(id: string) {

    /*     if (confirm("Are you sure you want to delete this Hop?")) {
          console.log("deleting Hop: ", id);
          this.HopSubscription = this.HopService.delete(id).subscribe({
            next: () => {
              this.feedback = { type: 'success', message: 'Hop deleted successfully.' };
              setTimeout(() => {
                this.ngOnInit();
              }, 1000);
            },
            error: (err) => {
              this.feedback = {
                severity: 'error',
                summary: 'Error',
                detail: 'Failed to delete Hop: ' + err.message,
                life: 5000,
              };
              console.error('Error deleting Hop', err);
            }
          });
    
    
          this.HopSubscription = this.HopService.get().subscribe({
            next: (data: Hop[]) => {
              this.Hops = data;
              this.loading = false;
              this.feedback = {};
            },
    
            error: (err) => {
              this.feedback = { type: 'error', message: 'Failed to load Hop list: ' + err.message };
              console.error('Error loading Hop list', err);
            }
          });
    
    
        } */
  }

}
