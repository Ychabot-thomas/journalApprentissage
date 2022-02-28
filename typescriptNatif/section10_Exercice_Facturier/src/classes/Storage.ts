import { iHasSetItem } from "../interfaces/iHasSetItem";

export class Storage implements iHasSetItem {
  oldData: string[] = [];

  constructor(typeValue: string, htmlString: string) {
    this.setItem(typeValue, htmlString);
  }

  static checkLocalStorage(): void {
    if (!localStorage.getItem("invoice")) {
      localStorage.setItem("invoice", "[]");
    }

    if (!localStorage.getItem("estimate")) {
      localStorage.setItem("estimate", "[]");
    }
  }

  setItem(typeValue: string, htmlString: string): void {
    let arrayData: string | null;
    arrayData = localStorage.getItem(typeValue);
    if (arrayData !== null) {
      this.oldData = JSON.parse(arrayData);
      this.oldData.push(htmlString);
      localStorage.setItem(typeValue, JSON.stringify(this.oldData));
    } else {
      document.location.reload();
    }
  }
}
