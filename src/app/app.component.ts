import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fg: FormGroup;
  month = new FormControl('2');
  year = new FormControl('2017');

  opts: Select2Options;
  months: { value: string, text: string }[];
  years:  { value: string, text: string }[];
  constructor() {

  }

  ngOnInit() {
    this.years = [
      { value: '2016', text: '2559' },
      { value: '2017', text: '2560' },
      { value: '2018', text: '2561' }
    ];

    this.months = [
      { value: '1', text: 'Jan' },
      { value: '2', text: 'Feb' },
      { value: '3', text: 'Mar' },
      { value: '4', text: 'Apr' },
      { value: '5', text: 'May' },
      { value: '6', text: 'Jun' },
      { value: '7', text: 'Jul' },
      { value: '8', text: 'Aug' },
      { value: '9', text: 'Sep' },
      { value: '10', text: 'Oct' },
      { value: '11', text: 'Nov' },
      { value: '12', text: 'Dec' }
    ];
    this.opts = {
      theme: 'bootstrap',
      language: { noResults: () => 'ไม่พบ' }
    };
    this.fg = new FormGroup({
      month: this.month,
      year: this.year
    });
  }

  reset() {
    this.fg.reset();
  }

  enableDisable() {
    if (this.year.disabled) {
      this.year.enable();
    } else {
      this.year.disable();
    }

  }

}
