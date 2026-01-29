import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { DatePickerModule, DatePicker } from 'primeng/datepicker';
import { InputNumber } from 'primeng/inputnumber';
import { Panel } from 'primeng/panel';
import { Subscription } from 'rxjs';
import { Hop } from '../../classes/hop';
import { HopService } from '../../services/hop.service';

@Component({
  selector: 'app-hop-edit',
  imports: [
    FormsModule,
    DatePickerModule,
    Panel,
    Button,
    RouterLink,
    DatePicker,
    InputNumber,
  ],
  templateUrl: './hop-edit.html',
  styleUrl: './hop-edit.css',
})
export class HopEdit implements OnInit {


  private hopSubscription: Subscription | undefined;

  operation!: string;

  hop!: Hop;

  buttonLabel!: string
  feedback: any = {};

  constructor(private router: Router, private service: HopService) { }

  ngOnInit(): void {

    this.hop = history.state.hop;
    if (typeof this.hop === 'undefined') {
      console.log("new hop");
      this.hop = new Hop();
      this.operation = 'add';
      this.buttonLabel = 'Add';
    } else {
      console.log("loading hop ..." + this.hop.name + this.hop.date);
      this.buttonLabel = 'Update';
    }



  }

  save(hop: Hop) {

    console.log("saving hop: ", this.hop);

    this.operation = (this.buttonLabel === 'Update') ? 'put' : 'post';

    this.hopSubscription = this.service.saveHop(this.operation, hop).subscribe({
      next: () => {
        this.feedback = { type: 'success', message: 'Hop added successfully.' };
        console.log("hop added");
      },
      error: (err) => {
        this.feedback = {
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to add hop: ' + err.message,
          life: 5000,
        };
        console.error('Error adding hop', err);
      },
      complete: () => {
        console.log("operation complete");
        setTimeout(() => {
          this.router.navigate(['/hop-list']);
        }, 1000);

      }
    });

  }

  dateChanged() {
    console.log("date changed: ", this.hop.date);
  }

}

