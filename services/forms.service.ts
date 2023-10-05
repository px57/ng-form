import { Injectable } from "@angular/core";
import { ConfigInput } from 'src/modules/form/types';
import { DynamicFormManager } from 'src/modules/form/classes/dynamic_form';

var $localize = (msg: any) => msg;

const FORM_DJANGO_TRADUCTOR: any = {
  email: {
    exists: $localize`This email address is already in use.`,
    invalid: $localize`The email address is invalid.`,
    required: $localize`This field is required.`,
    not_encountered: $localize`This email address is not registered.`,
    'Enter a valid email address.': $localize`The email address is invalid.`,
    invalid_partner_email: $localize`The email address is invalid for this partner.`,
  },
  password: {
    password_is_alpha: $localize`Password must contain at least one number.`,
    password_is_numeric: $localize`Password must contain at least one letter.`,
    password_too_long: $localize`Password must contain at most 128 characters.`,
    password_too_short: $localize`Password must contain at least 8 characters.`,
    password_is_lower: $localize`Password must contain at least one uppercase letter.`,
    password_has_space: $localize`Password must not contain spaces.`,
    required: $localize`This field is required.`,
  },
  collegeCode: {
    invalid: $localize`The college code is invalid.`,
    required: $localize`This field is required.`,
  },
  first_name: {
    required: $localize`This field is required.`,
  },
  last_name: {
    required: $localize`This field is required.`,
  },
  __signin__: {
    not_exists: $localize`Please fill in your email and password to sign in`,
  },
};

@Injectable({
  providedIn: "root",
})
export class FormsService {
  /**
   * @description: Constructeur.
   */
  constructor() {}

  /**
   * @description: Retourne le message d'erreur associé à un champ de formulaire.
   */
  public hasError(httpResponse: any, inputName: string | undefined): boolean {
    if (httpResponse === undefined) {
      return false;
    }

    if (inputName === undefined) {
      return false;
    }
    return (
      httpResponse.form_error !== undefined &&
      httpResponse.form_error[inputName] !== undefined
    );
  }

  /**
   * @description: Retourne le message d'erreur associé à un champ de formulaire.
   */
  public notHasError(
    httpResponse: any,
    inputName: string | undefined
  ): boolean {
    return !this.hasError(httpResponse, inputName);
  }

  /**
   * @description: Retourne le message d'erreur associé à un champ de formulaire.
   * @param httpResponse: any
   * @param inputName: string | undefined
   * @param traductor: any
   */
  public getErrorMsg(
    httpResponse: any,
    inputName: string | undefined
  ): string | undefined {
    if (this.notHasError(httpResponse, inputName)) {
      return undefined;
    }

    if (inputName === undefined) {
      return undefined;
    }

    const error = httpResponse.form_error[inputName][0];
    const errorMsg = this.getErrorMsgDjango(error, inputName);
    if (errorMsg === undefined) {
      console.error("FORM-ERROR>>>>", error);
    }
    return errorMsg;
  }

  /**
   * @description: Retourne le message d'erreur associé à un champ de formulaire.
   * @param httpResponse: any
   * @param inputName: string | undefined
   */
  private getErrorMsgDjango(
    error: string,
    inputName: string
  ): string | undefined {
    if (FORM_DJANGO_TRADUCTOR.hasOwnProperty(inputName) === false) {
      return undefined;
    }

    if (FORM_DJANGO_TRADUCTOR[inputName].hasOwnProperty(error) === false) {
      return undefined;
    }

    return FORM_DJANGO_TRADUCTOR[inputName][error];
  }

  public getInput(inputList: Array<ConfigInput>, input_name: string): ConfigInput | undefined {
    for (let input of inputList) {
      if (input.name === input_name) {
        return input;
      }
    }
    throw new Error(`Input ${input_name} not found`);
  }
 
  /**
   * @description: 
   */
  public getDynamicForm(inputList: Array<ConfigInput>): DynamicFormManager {
    return new DynamicFormManager(inputList);
  }
}
