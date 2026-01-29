import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { Grain } from '../../classes/grain';
import { GrainService } from '../../services/grain.service';
import { DatePickerModule, DatePicker } from 'primeng/datepicker';
import { Panel } from "primeng/panel";
import { Button } from "primeng/button";
import { NgClass } from "@angular/common";
import { InputNumber } from "primeng/inputnumber";
import { Tooltip } from "primeng/tooltip";

@Component({
  selector: 'app-grain-edit',
  imports: [
    FormsModule,
    DatePickerModule,
    Panel,
    Button,
    RouterLink,
    InputNumber,
    Tooltip
  ],
  templateUrl: './grain-edit.html',
  styleUrl: './grain-edit.css',
})



export class GrainEdit implements OnInit {


  private grainSubscription: Subscription | undefined;

  operation!: string;

  grain!: Grain;

  buttonLabel!: string
  feedback: any = {};
  enteredDate: Date = new Date();


  constructor(private router: Router, private service: GrainService) { }

  ngOnInit(): void {

    this.grain = history.state.grain;
    if (typeof this.grain === 'undefined') {
      console.log("new grain");
      this.grain = new Grain();
      this.operation = 'add';
      this.buttonLabel = 'Add';
    } else {
      console.log("loading grain ..." + this.grain.name + " " + this.grain.date);
      this.buttonLabel = 'Update';
    }



  }

  save(grain: Grain) {

    console.log("saving grain: ", this.grain);

    this.operation = (this.buttonLabel === 'Update') ? 'put' : 'post';

    this.grainSubscription = this.service.saveGrain(this.operation, grain).subscribe({
      next: () => {
        this.feedback = { type: 'success', message: 'Grain added successfully.' };
        console.log("grain added");
      },
      error: (err) => {
        this.feedback = {
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to add grain: ' + err.message,
          life: 5000,
        };
        console.error('Error adding grain', err);
      },
      complete: () => {
        console.log("operation complete");
        setTimeout(() => {
          this.router.navigate(['/grain-list']);
        }, 1000);

      }
    });

  }

  dateChanged() {
    console.log("date changed: " + this.grain.date);

  }

}
