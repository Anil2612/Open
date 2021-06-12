import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  loanForm: any;
  minValue = 100000;
  scrollIncomelValue = 100000;
  scrollExpenseValue = 100000;
  emiAmount = 15000;
  maxRangeValue = 300000;


  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  /** 
    * Build form for applying loan
    */
  private buildForm() {
    this.loanForm = this.fb.group({
      monthlyIncome: [0],
      monthlyExpense: [0],
      repaymentTenure: [0],
      haveLoans: [true],
      emi: [null]
    })
  }

  /**
   * Submitting the form with form data
   */
  getLoan() {
    console.log(this.loanForm.value);
  }

  /**
   * 
   * @param $event To get value when slider changes.
   * @param formControl Differentiate between monthly income and monthly expense.
   * Set form value when slider is changed
   * 
   */
  clickRange($event: any, formControl: string) {
    if (formControl === 'monthlyIncome') {
      this.scrollIncomelValue = Number($event.target.value);
    } else {
      this.scrollExpenseValue = Number($event.target.value);
    }
    this.loanForm.value[formControl] = $event.target.value;
  }


  /**
   * 
   * @param $event To get wheel event when scroller scrolls.
   * @param className Change slider when scrolling by getting element using classname.
   * @param formControl Differentiate between monthly income and monthly expense.
   * Set form value when slider is changed
   * 
   */
  changeRange($event: any, className: string, formControl: string) {
    const slider: any = document.getElementsByClassName(className)[0];
    if (formControl === 'monthlyIncome') {
      if ($event.deltaY > 0) {
        this.scrollIncomelValue += 1000;
        slider.value = this.scrollIncomelValue;
      } else {
        this.scrollIncomelValue -= 1000;
        slider.value = this.scrollIncomelValue;
      }
    } else {
      if ($event.deltaY > 0) {
        this.scrollExpenseValue += 1000;
        slider.value = this.scrollExpenseValue;
      } else {
        this.scrollExpenseValue -= 1000;
        slider.value = this.scrollExpenseValue;
      }
    }
    this.loanForm.patchValue({
      [formControl]: Number(slider.value)
    });
  }

}
