import 'select2';
import 'jquery';

import { Component, OnInit, forwardRef, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const NGQ_SELECT2_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgqSelect2Component),
  multi: true
};

@Component({
  selector: 'ngq-select2',
  templateUrl: './ngq-select2.component.html',
  styleUrls: ['./ngq-select2.component.css'],
  providers: [NGQ_SELECT2_VALUE_ACCESSOR]
})
export class NgqSelect2Component implements ControlValueAccessor, OnInit, AfterViewInit {

  _jQueryElement: JQuery;
  _opts: Select2Options;
  _data: any[];
  _value: any;
  _placeholder: string;

  @ViewChild('select') select: ElementRef;

  @Input('opts')
  set opts(opts: Select2Options) {
    this._opts = opts;
  }

  @Input('data')
  set data(data: any[]) {
    this._data = data;
  }

  constructor() { }

  ngOnInit() {
    this._jQueryElement = jQuery(this.select.nativeElement);
  }

  ngAfterViewInit() {
    this._jQueryElement.val(this._value);
    this._jQueryElement.trigger('change');
    this._jQueryElement.select2(this._opts)
      .on('change', () => {
        this.propagateChange(this._jQueryElement.val());
      })
      .on('select2:open', () => {
        jQuery('.select2-container--open').addClass('select2-dropdown--below');
        jQuery('.select2-container--open').removeClass('select2-dropdown--above');
      });
  }

  propagateChange = _ => {};

  writeValue(obj: any): void {
    this._value = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this._jQueryElement.prop('disabled', isDisabled);
  }
}
