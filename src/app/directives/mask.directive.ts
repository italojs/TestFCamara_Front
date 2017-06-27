import { Directive, ElementRef, forwardRef, Input, NgModule, OnChanges, Provider, Renderer, SimpleChanges } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import { createTextMaskInputElement } from 'text-mask-core/dist/textMaskCore'
import { createNumberMask } from 'text-mask-addons/dist/textMaskAddons'

export const MASKEDINPUT_VALUE_ACCESSOR: Provider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MaskDirective),
    multi: true
}

@Directive({
    selector: '[mask]',
    host: {
        '(input)': 'onInput($event.target.value)',
        '(blur)': '_onTouched()'
    },
    providers: [MASKEDINPUT_VALUE_ACCESSOR]
})
export class MaskDirective implements ControlValueAccessor, OnChanges {
    private maskInputElement: any;
    private element: HTMLInputElement;
    private lastValue: any;
    private maskConfig = {
        mask: null,
        guide: false,
        placeholderChar: '_',
        pipe: undefined,
        keepCharPositions: false,
    };

    constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    }

    @Input('mask') maskType: string;

    private setupMask() {
        if (this._elementRef.nativeElement.tagName === 'INPUT') {
            this.element = this._elementRef.nativeElement;
        }
        else
            this.element = this._elementRef.nativeElement.getElementsByTagName('INPUT')[0];
        if (this.element) {
            this.maskConfig.mask = this.patternList[this.maskType];
            this.maskInputElement = createTextMaskInputElement(Object.assign({ inputElement: this.element }, this.maskConfig));
        }
    }
    private updateMask(value) {
        this.maskInputElement.update(value, Object.assign({ inputElement: this.element }, this.maskConfig));
        if (this.maskType == 'phone' && value.length > 10) {
            this.maskConfig.mask = this.patternList.celPhone;
            this.maskInputElement.update(value, Object.assign({ inputElement: this.element }, this.maskConfig));
        } else {
            this.maskInputElement.update(value);
        }
    }
    private unmask(value) {
        return value.replace(/[^0-9]/g, '');
    }
    private patternList = {
        date: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
        time: [/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/],
        dateTime: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/],
        cnpj: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/],
        cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
        cep: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
        phone: ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d?/],
        celPhone: ['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        currency: createNumberMask({
            prefix: 'R$ ',
            suffix: '',
            includeThousandsSeparator: true,
            thousandsSeparatorSymbol: '.',
            allowDecimal: true,
            decimalSymbol: ',',
            decimalLimit: 2,
            integerLimit: null,
            requireDecimal: true,
            allowNegative: false,
            allowLeadingZeroes: false,
        }),
        percent: createNumberMask({
            prefix: '',
            suffix: ' %',
            includeThousandsSeparator: true,
            thousandsSeparatorSymbol: '.',
            allowDecimal: true,
            decimalSymbol: ',',
            decimalLimit: 2,
            integerLimit: null,
            requireDecimal: true,
            allowNegative: true,
            allowLeadingZeroes: false,
        }),
        integer: createNumberMask({
            prefix: '',
            suffix: '',
            includeThousandsSeparator: true,
            thousandsSeparatorSymbol: '.',
            allowDecimal: false,
            decimalSymbol: ',',
            decimalLimit: 0,
            integerLimit: null,
            requireDecimal: false,
            allowNegative: true,
            allowLeadingZeroes: true,
        }),
        decimal: createNumberMask({
            prefix: '',
            suffix: '',
            includeThousandsSeparator: true,
            thousandsSeparatorSymbol: '.',
            allowDecimal: true,
            decimalSymbol: ',',
            decimalLimit: 2,
            integerLimit: null,
            requireDecimal: true,
            allowNegative: true,
            allowLeadingZeroes: false,
        }),
    };

    _onTouched = () => { }
    _onChange = (_: any) => { }
    registerOnChange(fn: (value: any) => any): void { this._onChange = fn }
    registerOnTouched(fn: () => any): void { this._onTouched = fn }
    ngOnChanges(changes: SimpleChanges) {
        this.setupMask()
        if (this.maskInputElement !== undefined) {
            this.updateMask(this.element.value);
        }
    }
    writeValue(value: any) {
        if (!this.element) {
            this.setupMask();
        }
        let normalizedValue = value == null ? '' : value;
        this._renderer.setElementProperty(this.element, 'value', normalizedValue);
        if (this.maskInputElement !== undefined) {
            this.updateMask(normalizedValue);
        }
    }
    setDisabledState(isDisabled: boolean) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    onInput(value) {
        if (!this.element) {
            this.setupMask();
        }
        if (this.maskInputElement !== undefined) {
            this.updateMask(this.unmask(this.element.value));
            value = this.unmask(this.element.value);
            // check against the last value to prevent firing ngModelChange despite no changes
            if (this.lastValue !== value) {
                this.lastValue = value;
                this._onChange(value);
            }
        }
    }
}
