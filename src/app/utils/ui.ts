export class Ui {
    lock(element: string) {
        document.getElementById(element).classList.add('is-loading');
        document.getElementById(element).setAttribute('disabled', 'disabled');
    }
    unlock(element: string) {
        document.getElementById(element).classList.remove('is-loading');
        document.getElementById(element).removeAttribute('disabled');
    }
    setActive(element: string) {
        document.getElementById(element).classList.add('is-active');
    }
    setInactive(element: string) {
        document.getElementById(element).classList.remove('is-active');
    }
}
