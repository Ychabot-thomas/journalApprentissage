import { Datas } from "../classes/Datas.js";
import { Display } from "../classes/Display.js";
import { Print } from "../classes/Print.js";
class FormInput {
    constructor() {
        this.form = document.getElementById("form");
        this.type = document.getElementById("type");
        this.firstName = document.getElementById("firstName");
        this.lastName = document.getElementById("lastName");
        this.address = document.getElementById("address");
        this.country = document.getElementById("country");
        this.town = document.getElementById("town");
        this.zip = document.getElementById("zip");
        this.product = document.getElementById("product");
        this.price = document.getElementById("price");
        this.quantity = document.getElementById("quantity");
        this.tva = document.getElementById("tva");
        this.docContainer = document.getElementById("document-container");
        this.hiddenDiv = document.getElementById("hiddenDiv");
        this.stroredEl = document.getElementById("stored-data");
        this.btnPrint = document.getElementById("print");
        this.btnReload = document.getElementById("reload");
        this.btnGetInvoice = document.getElementById("stored-invoices");
        this.btnGetEstimate = document.getElementById("stored-estimates");
        // Listener
        this.submitForm();
        this.printPage(this.btnPrint, this.docContainer);
        this.reloadPage(this.btnReload);
        this.getStorage();
    }
    submitForm() {
        this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }
    printPage(btnPrint, docContainer) {
        btnPrint.addEventListener("click", () => {
            let availableDoc;
            availableDoc = new Print(docContainer);
            availableDoc.print();
        });
    }
    reloadPage(btnReload) {
        btnReload.addEventListener("click", () => {
            document.location.reload();
            window.scroll(0, 0);
        });
    }
    getStorage() {
        this.btnGetInvoice.addEventListener("click", this.getItemStorage.bind(this, "invoice"));
        this.btnGetEstimate.addEventListener("click", this.getItemStorage.bind(this, "estimate"));
    }
    getItemStorage(docType) {
        if (this.stroredEl.hasChildNodes()) {
            this.stroredEl.innerHTML = "";
        }
        if (localStorage.getItem(docType)) {
            let array;
            array = localStorage.getItem(docType);
            if (array !== null && array.length > 2) {
                let arrayData;
                arrayData = JSON.parse(array);
                arrayData.map((doc) => {
                    let card = document.createElement("div");
                    let carBody = document.createElement("div");
                    let cardClasses = ["card", "mt-5"];
                    let cardBodyClasses = "cardBody";
                    card.classList.add(...cardClasses);
                    carBody.classList.add(cardBodyClasses);
                    carBody.innerHTML = doc;
                    card.append(carBody);
                    this.stroredEl.append(card);
                });
            }
            else {
                this.stroredEl.innerHTML =
                    "<div class='p-5'>Aucune data disponible</div>";
            }
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const inputsDataValidate = this.inputDatas();
        if (Array.isArray(inputsDataValidate)) {
            const [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva,] = inputsDataValidate;
            let docData;
            let date = new Date();
            docData = new Datas(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date);
            let template;
            template = new Display(this.docContainer, this.hiddenDiv, this.btnPrint);
            template.render(docData, type);
        }
    }
    inputDatas() {
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
        }
        else {
            alert("Les valeurs numériques doivent être supérieurs à 0");
            return;
        }
    }
}
export default FormInput;
