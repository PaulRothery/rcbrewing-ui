import { Component, OnInit } from '@angular/core';
import { Grain } from '../../classes/grain';
import { GrainService } from '../../services/grain.service';
import { TableModule } from "primeng/table";
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from "@angular/common";
import { Button, ButtonDirective, ButtonLabel } from "primeng/button";
import { Router, RouterLink } from "@angular/router";
import { PrimeTemplate } from "primeng/api";

@Component({
  selector: 'app-grain-list',
  imports: [TableModule, AsyncPipe, DatePipe, Button, RouterLink, ButtonDirective, ButtonLabel, PrimeTemplate],
  templateUrl: './grain-list.html',
  styleUrl: './grain-list.css',
})
export class GrainList implements OnInit {

  loading = true;
  feedback: any = {};


  grains$!: Observable<Grain[]>;


  constructor(private grainService: GrainService, private router: Router) { }

  ngOnInit() {


    this.grains$ = this.grainService.getAll();
    this.loading = false;

  }


  editGrain(grain: Grain) {
    console.log("editing grain: ", grain.id);
    this.router.navigate(['/grain-edit', grain.id], {
      state: { grain: grain }
    });
  }

  deleteGrain(id: string) {

    console.log("deleting grain: ", id);
    if (confirm("Are you sure you want to delete this grain?")) {

      this.grainService.delete(id).subscribe({
        next: (data: Grain[]) => {
          console.log('Record deleted successfully');
          this.grains$ = this.grainService.getAll();

        },
        error: (err) => {
          console.error('Error deleting grain', err);
        }
      });
    }

    this.ngOnInit

  }
} 
