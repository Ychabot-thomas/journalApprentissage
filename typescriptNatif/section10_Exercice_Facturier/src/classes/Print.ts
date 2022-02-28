import { iHasPrint } from "../interfaces/isHasPrint.js";

export class Print implements iHasPrint {
  constructor(private el: HTMLDivElement) {}

  print() {
    document.body.innerHTML = this.el.innerHTML;
    window.print();
    document.location.reload();
  }
}
