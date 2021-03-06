import { Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormlyTemplateOptions, FormlyFieldConfig } from '../components/formly.field.config';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export abstract class Field {
  @Input() form: FormGroup;
  @Input() field: FormlyFieldConfig;
  @Input() model: any;
  @Input() options;

  valueChanges: BehaviorSubject<any>;

  get key() { return this.field.key; }
  get formControl(): AbstractControl { return this.form.get(this.key); }

  /**
   * @deprecated Use `to` instead.
   **/
  get templateOptions(): FormlyTemplateOptions {
    console.warn(`${this.constructor['name']}: 'templateOptions' is deprecated. Use 'to' instead.`);

    return this.to;
  }

  get to(): FormlyTemplateOptions { return this.field.templateOptions; }

  get valid(): boolean { return this.formControl.touched && !this.formControl.valid; }

  get id(): string { return this.field.id; }

  get formState() { return this.options.formState || {}; }
}
