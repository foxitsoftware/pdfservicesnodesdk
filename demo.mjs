import { PDFServiceSDK } from "./PDFServiceSDK.mjs";

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const pdfService = new PDFServiceSDK(clientId, clientSecret);

await pdfService.wordToPDF('assets/input/input.docx', 'assets/output/output_from_nodesdk.pdf');
console.log("PDF conversion completed successfully.");

// v2 change that uses new conversion method
await pdfService.conversion('assets/input/input.docx', 'assets/output/output_from_nodesdk_v2.pdf');
console.log("PDF conversion (second version)completed successfully.");

await pdfService.combine(['assets/input/input.pdf','assets/input/second.pdf'],'assets/output/combined.pdf');
console.log("PDF combine call done.");
