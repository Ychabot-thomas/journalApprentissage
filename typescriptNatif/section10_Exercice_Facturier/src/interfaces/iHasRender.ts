import { hasHTMLFormat } from "./iHasHTMLFormat.js";

export interface hasRender {
  render(docObj: hasHTMLFormat, docType: string): void;
}
