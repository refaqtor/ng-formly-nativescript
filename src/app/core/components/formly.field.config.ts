import { FormGroup } from '@angular/forms';
export interface FormlyFieldConfig {
  key?: string;
  id?: string;
  templateOptions?: FormlyTemplateOptions;
  optionsTypes?: any;
  validation?: any;
  validators?: any;
  asyncValidators?: any;
  template?: string;
  component?: any;
  wrappers?: string[];
  fieldGroup?: Array<FormlyFieldConfig>;
  fieldArray?: FormlyFieldConfig;
  hideExpression?: boolean | string | ((model, formState) => boolean);
  className?: string;
  type?: string;
  expressionProperties?: any;
  focus?: boolean;
  modelOptions?: any;
  lifecycle?: FormlyLifeCycleOptions;
  defaultValue?: any;
  parsers?: [(value: any, index: number) => {}];
}

export interface FormlyTemplateOptions {
  type?: string;
  label?: string;
  placeholder?: string;
  disabled?: Boolean;
  options?: Array<any>;
  rows?: number;
  cols?: number;
  description?: string;
  hidden?: boolean;
  max?: number;
  min?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  required?: Boolean;
  tabindex?: number;
  step?: number;
  focus?: Function;
  blur?: Function;
  keyup?: Function;
  keydown?: Function;
  click?: Function;
  change?: Function;
  keypress?: Function;
  [additionalProperties: string]: any;
}

export interface FormlyLifeCycleFn {
    (form?: FormGroup, field?: FormlyFieldConfig, model?, options?): void;
}

export interface FormlyLifeCycleOptions {
  onInit?: FormlyLifeCycleFn;
  onChanges?: FormlyLifeCycleFn;
  doCheck?: FormlyLifeCycleFn;
  afterContentInit?: FormlyLifeCycleFn;
  afterContentChecked?: FormlyLifeCycleFn;
  afterViewInit?: FormlyLifeCycleFn;
  afterViewChecked?: FormlyLifeCycleFn;
  onDestroy?: FormlyLifeCycleFn;
}
