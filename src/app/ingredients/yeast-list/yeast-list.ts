import { AsyncPipe, DatePipe } from '@angular/common';
import id from '@angular/common/locales/id';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PrimeTemplate } from 'primeng/api';
import { Button, ButtonDirective, ButtonLabel } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Observable } from 'rxjs';
import { Yeast } from '../../classes/yeast';
import { YeastService } from '../../services/yeast.service';

@Component({
  selector: 'app-yeast-list',
  imports: [
    TableModule,
    AsyncPipe,
    DatePipe,
    Button,
    RouterLink,
    ButtonDirective,
    ButtonLabel,
    PrimeTemplate
  ],
  templateUrl: './yeast-list.html',
  styleUrl: './yeast-list.css',
})
export class YeastList implements OnInit {

  loading = true;
  feedback: any = {};


  yeasts$!: Observable<Yeast[]>;


  constructor(private yeastService: YeastService, private router: Router) { }

  ngOnInit() {


    this.yeasts$ = this.yeastService.getAll();
    this.loading = false;

  }


  editYeast(yeast: Yeast) {
    console.log("editing yeast: ", yeast.id);
    this.router.navigate(['/yeast-edit', yeast.id], {
      state: { yeast: yeast }
    });
  }

  deleteYeast(id: string) {

    console.log("deleting yeast: ", id);
    if (confirm("Are you sure you want to delete this yeast?")) {

      this.yeastService.delete(id).subscribe({
        next: (data: Yeast[]) => {
          console.log('Record deleted successfully');
          this.yeasts$ = this.yeastService.getAll();

        },
        error: (err) => {
          console.error('Error deleting yeast', err);
        }
      });
    }

    this.ngOnInit

  }
} 
