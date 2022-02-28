import { hasHTMLFormat } from "../interfaces/iHasHTMLFormat.js";
import { hasRender } from "../interfaces/iHasRender.js";
import { Storage } from "./Storage.js";

export class Display implements hasRender {
  formContainer: HTMLDivElement;

  constructor(
    private container: HTMLDivElement,
    private hiddenDiv: HTMLDivElement,
    private btnPrint: HTMLButtonElement
  ) {
    this.formContainer = document.getElementById(
      "form-container"
    ) as HTMLDivElement;
  }

  render(docObj: hasHTMLFormat, docType: string) {
    const htmlString: string = docObj.htmlFormat();
    this.container.innerHTML = htmlString;

    new Storage(docType, htmlString);

    if (docType === "invoice") {
      this.btnPrint.innerHTML = "Imprimer la facture";
    } else {
      this.btnPrint.innerHTML = "Imprimer le devis";
    }

    this.hiddenDiv.classList.remove("invisible");
    this.formContainer.innerHTML = "";
  }
}
