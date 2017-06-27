import { FormControl } from '@angular/forms';

export class CustomValidator {
    static NegativeNumberValidator(control: FormControl) {
        var value: number = control.value.toString().replace(/[^0-9]/g, '');
        if (value < 0)
            return { 'Número inválido': true };
        return null;
    }
    static ZipCodeValidator(control: FormControl) {
        var value: String = control.value.toString().replace(/[^0-9]/g, '').slice(0, 8);
        if (value.length != 8)
            return { 'CEP inválido': true };
        return null;
    }
    static SelectValidator(control: FormControl) {
        var value: number = control.value.toString();        
        if (value == 0)
            return { 'Selecione uma opção': true };
        return null;
    }
    static CnpjValidator(control: FormControl){
        return null;
    }
    static CpfValidator(control: FormControl){
        return null;
    }
}