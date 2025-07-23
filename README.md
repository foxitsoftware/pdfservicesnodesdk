# Foxit PDF Services SDK

This SDK lets developers more easily use the Foxit APIs, including [PDF Services](https://developer-api.foxit.com/pdf-services/) and [Document Generation](https://developer-api.foxit.com/document-generation/). You will need a [free set of credentials](https://app.developer-api.foxit.com/pricing) in order to call the APIs.

## Usage

Copy your credentials to the environment and then instantiate the SDK. Here's a sample:

```js
import { PDFServiceSDK } from "./PDFServiceSDK.mjs";

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const pdfService = new PDFServiceSDK(clientId, clientSecret);

await pdfService.wordToPDF('assets/input/input.docx', 'assets/output/output_from_nodesdk.pdf');
console.log("PDF conversion completed successfully.");

// v2 change that uses new conversion method
await pdfService.conversion('assets/input/input.docx', 'assets/output/output_from_nodesdk_v2.pdf');
console.log("PDF conversion (second version)completed successfully.");
```

## Methods Supported

* conversion(inputPath, outputPath) - general conversion method
* excel_to_pdf, html_to_pdf, image_to_pdf, pdf_to_excel, pdf_to_html, pdf_to_image, pdf_to_powerpoint, pdf_to_text, pdf_to_word, powerpoint_to_word, text_to_pdf, word_to_pdf - all take an inputPath and outputPath argument
* url_to_pdf(url, outputPath) - convert a URL to pdf
* extract(inputPath, outputPath, type (one of TEXT, IMAGE, PAGE), page_range) - extracts either text, images (zip), or pages (new pdf)
* download(docId, outputPath) - given a document id and path, will stream the data down
* upload(path) - upload a document and return a path
* compress(inputPath,outputPath,compressionLevel) - compresses a PDF, default level is LOW
* linearize(inputPath,outputPath) - linearizes a PDF
* flatten(inputPath,outputPath) - flattens a PDF
* combine(inputPaths[], outputPath, options) - combines a set of PDFs

## To Do: 

* remove-password, protect, manipulate, split, compare
* Make output path optional and just return the doc id
* Make checking a task public and a utility pollTask to handle repeating (this and the previous two methods would let devs chain calls)
