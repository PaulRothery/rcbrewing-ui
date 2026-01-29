import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { Button } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumber } from 'primeng/inputnumber';
import { Panel } from 'primeng/panel';
import { Tooltip } from 'primeng/tooltip';
import { Subscription } from 'rxjs';
import { Adjunct } from '../../classes/adjunct';
import { AdjunctService } from '../../services/adjunct.service';
import { RadioButton } from "primeng/radiobutton";

@Component({
  selector: 'app-adjunct-edit',
  imports: [
    FormsModule,
    DatePickerModule,
    Panel,
    Button,
    RouterLink,
    InputNumber,
    Tooltip,
    RadioButton
  ],
  templateUrl: './adjunct-edit.html',
  styleUrl: './adjunct-edit.css',
})
export class AdjunctEdit implements OnInit {


  private adjunctSubscription: Subscription | undefined;

  operation!: string;

  adjunct!: Adjunct;

  buttonLabel!: string
  feedback: any = {};
  enteredDate: Date = new Date();
  ingredient: any;


  constructor(private router: Router, private service: AdjunctService) { }

  ngOnInit(): void {


    this.adjunct = history.state.adjunct;
    if (typeof this.adjunct === 'undefined') {
      console.log("new adjunct" + this.adjunct);
      this.adjunct = new Adjunct();
      this.operation = 'add';
      this.buttonLabel = 'Add';
    } else {
      console.log("loading adjunct ..." + this.adjunct.name + " " + this.adjunct.type);
      this.buttonLabel = 'Update';
    }



  }

  save(adjunct: Adjunct) {

    console.log("saving adjunct: ", this.adjunct);

    this.operation = (this.buttonLabel === 'Update') ? 'put' : 'post';

    this.adjunctSubscription = this.service.saveAdjunct(this.operation, adjunct).subscribe({
      next: () => {
        this.feedback = { type: 'success', message: 'Adjunct added successfully.' };
        console.log("adjunct added");
      },
      error: (err) => {
        this.feedback = {
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to add adjunct: ' + err.message,
          life: 5000,
        };
        console.error('Error adding adjunct', err);
      },
      complete: () => {
        console.log("operation complete");
        setTimeout(() => {
          this.router.navigate(['/adjunct-list']);
        }, 1000);

      }
    });

  }

  dateChanged() {
    console.log("date changed: " + this.adjunct.date);

  }

}

