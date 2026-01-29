import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Adjunct } from '../../classes/adjunct';
import { AdjunctService } from '../../services/adjunct.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { PrimeTemplate } from 'primeng/api';
import { Button, ButtonDirective, ButtonLabel } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-adjunct-list',
  imports: [
    TableModule,
    AsyncPipe,
    Button,
    RouterLink,
    ButtonDirective,
    ButtonLabel,
    PrimeTemplate,
    CurrencyPipe
  ],
  templateUrl: './adjunct-list.html',
  styleUrl: './adjunct-list.css',
})
export class AdjunctList implements OnInit {

  loading = true;
  feedback: any = {};


  adjuncts$!: Observable<Adjunct[]>;


  constructor(private adjunctService: AdjunctService, private router: Router) { }

  ngOnInit() {


    this.adjuncts$ = this.adjunctService.getAll();
    this.loading = false;

  }


  editAdjunct(adjunct: Adjunct) {
    console.log("editing adjunct: ", adjunct.id);
    this.router.navigate(['/adjunct-edit', adjunct.id], {
      state: { adjunct: adjunct }
    });
  }

  deleteAdjunct(id: string) {

    console.log("deleting adjunct: ", id);
    if (confirm("Are you sure you want to delete this adjunct?")) {

      this.adjunctService.delete(id).subscribe({
        next: (data: Adjunct[]) => {
          console.log('Record deleted successfully');
          this.adjuncts$ = this.adjunctService.getAll();

        },
        error: (err) => {
          console.error('Error deleting adjunct', err);
        }
      });
    }

    this.ngOnInit

  }
}

