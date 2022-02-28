import { Datas } from "../classes/Datas.js";
import { Display } from "../classes/Display.js";
import { Print } from "../classes/Print.js";
import { hasHTMLFormat } from "../interfaces/iHasHTMLFormat.js";
import { hasRender } from "../interfaces/iHasRender.js";
import { iHasPrint } from "../interfaces/isHasPrint.js";

class FormInput {
  form: HTMLFormElement;
  type: HTMLSelectElement;
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  address: HTMLInputElement;
  country: HTMLInputElement;
  town: HTMLInputElement;
  zip: HTMLInputElement;
  product: HTMLInputElement;
  price: HTMLInputElement;
  quantity: HTMLInputElement;
  tva: HTMLInputElement;
  docContainer: HTMLDivElement;
  hiddenDiv: HTMLDivElement;
  btnPrint: HTMLButtonElement;
  btnReload: HTMLButtonElement;
  btnGetInvoice: HTMLButtonElement;
  btnGetEstimate: HTMLButtonElement;
  stroredEl: HTMLDivElement;

  constructor() {
    this.form = document.getElementById("form") as HTMLFormElement;
    this.type = document.getElementById("type") as HTMLSelectElement;
    this.firstName = document.getElementById("firstName") as HTMLInputElement;
    this.lastName = document.getElementById("lastName") as HTMLInputElement;
    this.address = document.getElementById("address") as HTMLInputElement;
    this.country = document.getElementById("country") as HTMLInputElement;
    this.town = document.getElementById("town") as HTMLInputElement;
    this.zip = document.getElementById("zip") as HTMLInputElement;
    this.product = document.getElementById("product") as HTMLInputElement;
    this.price = document.getElementById("price") as HTMLInputElement;
    this.quantity = document.getElementById("quantity") as HTMLInputElement;
    this.tva = document.getElementById("tva") as HTMLInputElement;

    this.docContainer = document.getElementById(
      "document-container"
    ) as HTMLDivElement;
    this.hiddenDiv = document.getElementById("hiddenDiv") as HTMLDivElement;
    this.stroredEl = document.getElementById("stored-data") as HTMLDivElement;

    this.btnPrint = document.getElementById("print") as HTMLButtonElement;
    this.btnReload = document.getElementById("reload") as HTMLButtonElement;
    this.btnGetInvoice = document.getElementById(
      "stored-invoices"
    ) as HTMLButtonElement;
    this.btnGetEstimate = document.getElementById(
      "stored-estimates"
    ) as HTMLButtonElement;

    // Listener
    this.submitForm();
    this.printPage(this.btnPrint, this.docContainer);
    this.reloadPage(this.btnReload);
    this.getStorage();
  }

  private submitForm(): void {
    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  private printPage(btnPrint: HTMLButtonElement, docContainer: HTMLDivElement) {
    btnPrint.addEventListener("click", () => {
      let availableDoc: iHasPrint;

      availableDoc = new Print(docContainer);
      availableDoc.print();
    });
  }

  private reloadPage(btnReload: HTMLButtonElement) {
    btnReload.addEventListener("click", () => {
      document.location.reload();
      window.scroll(0, 0);
    });
  }

  private getStorage(): void {
    this.btnGetInvoice.addEventListener(
      "click",
      this.getItemStorage.bind(this, "invoice")
    );
    this.btnGetEstimate.addEventListener(
      "click",
      this.getItemStorage.bind(this, "estimate")
    );
  }

  private getItemStorage(docType: string): void {
    if (this.stroredEl.hasChildNodes()) {
      this.stroredEl.innerHTML = "";
    }

    if (localStorage.getItem(docType)) {
      let array: string | null;
      array = localStorage.getItem(docType);

      if (array !== null && array.length > 2) {
        let arrayData: string[];
        arrayData = JSON.parse(array);

        arrayData.map((doc: string): void => {
          let card: HTMLDivElement = document.createElement("div");
          let carBody: HTMLDivElement = document.createElement("div");
          let cardClasses: Array<string> = ["card", "mt-5"];
          let cardBodyClasses: string = "cardBody";
          card.classList.add(...cardClasses);
          carBody.classList.add(cardBodyClasses);

          carBody.innerHTML = doc;
          card.append(carBody);
          this.stroredEl.append(card);
        });
      } else {
        this.stroredEl.innerHTML =
          "<div class='p-5'>Aucune data disponible</div>";
      }
    }
  }

  private handleSubmit(e: Event) {
    e.preventDefault();

    const inputsDataValidate = this.inputDatas();

    if (Array.isArray(inputsDataValidate)) {
      const [
        type,
        firstName,
        lastName,
        address,
        country,
        town,
        zip,
        product,
        price,
        quantity,
        tva,
      ] = inputsDataValidate;

      let docData: hasHTMLFormat;
      let date: Date = new Date();

      docData = new Datas(
        type,
        firstName,
        lastName,
        address,
        country,
        town,
        zip,
        product,
        price,
        quantity,
        tva,
        date
      );

      let template: hasRender;
      template = new Display(this.docContainer, this.hiddenDiv, this.btnPrint);
      template.render(docData, type);
    }
  }

  private inputDatas():
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        number,
        string,
        number,
        number,
        number
      ]
    | void {
    const type = this.type.value;
    const firstName = this.firstName.value;
    const lastName = this.lastName.value;
    const address = this.address.value;
    const country = this.country.value;
    const town = this.town.value;
    const zip = this.zip.valueAsNumber;
    const product = this.product.value;
    const price = this.price.valueAsNumber;
    const quantity = this.quantity.valueAsNumber;
    const tva = this.tva.valueAsNumber;

    if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {
      return [
        type,
        firstName,
        lastName,
        address,
        country,
        town,
        zip,
        product,
        price,
        quantity,
        tva,
      ];
    } else {
      alert("Les valeurs numériques doivent être supérieurs à 0");
      return;
    }
  }
}

export default FormInput