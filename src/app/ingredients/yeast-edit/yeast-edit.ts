import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Yeast } from '../../classes/yeast';
import { YeastService } from '../../services/yeast.service';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { DatePickerModule, DatePicker } from 'primeng/datepicker';
import { InputNumber } from 'primeng/inputnumber';
import { Panel } from 'primeng/panel';
import { Tooltip } from "primeng/tooltip";

@Component({
  selector: 'app-yeast-edit',
  imports: [
    FormsModule,
    DatePickerModule,
    Panel,
    Button,
    RouterLink,
    DatePicker,
    InputNumber,
    Tooltip
  ],
  templateUrl: './yeast-edit.html',
  styleUrl: './yeast-edit.css',
})
export class YeastEdit implements OnInit {


  private yeastSubscription: Subscription | undefined;

  operation!: string;

  yeast!: Yeast;

  buttonLabel!: string
  feedback: any = {};
  enteredDate: Date = new Date();


  constructor(private router: Router, private service: YeastService) { }

  ngOnInit(): void {

    this.yeast = history.state.yeast;
    if (typeof this.yeast === 'undefined') {
      console.log("new yeast");
      this.yeast = new Yeast();
      this.operation = 'add';
      this.buttonLabel = 'Add';
    } else {
      console.log("loading yeast ..." + this.yeast.strain + " " + this.yeast.date);
      this.buttonLabel = 'Update';
    }



  }

  save(yeast: Yeast) {

    console.log("saving yeast: ", this.yeast);

    this.operation = (this.buttonLabel === 'Update') ? 'put' : 'post';

    this.yeastSubscription = this.service.saveYeast(this.operation, yeast).subscribe({
      next: () => {
        this.feedback = { type: 'success', message: 'Yeast added successfully.' };
        console.log("yeast added");
      },
      error: (err) => {
        this.feedback = {
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to add yeast: ' + err.message,
          life: 5000,
        };
        console.error('Error adding yeast', err);
      },
      complete: () => {
        console.log("operation complete");
        setTimeout(() => {
          this.router.navigate(['/yeast-list']);
        }, 1000);

      }
    });

  }

  dateChanged() {
    console.log("date changed: " + this.yeast.date);

  }

}
