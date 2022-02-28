export class Storage {
    constructor(typeValue, htmlString) {
        this.oldData = [];
        this.setItem(typeValue, htmlString);
    }
    static checkLocalStorage() {
        if (!localStorage.getItem("invoice")) {
            localStorage.setItem("invoice", "[]");
        }
        if (!localStorage.getItem("estimate")) {
            localStorage.setItem("estimate", "[]");
        }
    }
    setItem(typeValue, htmlString) {
        let arrayData;
        arrayData = localStorage.getItem(typeValue);
        if (arrayData !== null) {
            this.oldData = JSON.parse(arrayData);
            this.oldData.push(htmlString);
            localStorage.setItem(typeValue, JSON.stringify(this.oldData));
        }
        else {
            document.location.reload();
        }
    }
}
