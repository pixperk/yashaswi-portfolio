import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { getDocument, GlobalWorkerOptions, OPS } from "pdfjs-dist";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



// Set up pdf.js worker (needed for Node.js)
GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

/**
 * Parses a PDF file content to HTML, including images.
 * @param pdfBuffer - The binary content of the PDF file as a Buffer.
 * @returns {Promise<string>} - HTML content extracted from the PDF.
 */
export async function parsePdfToHtml(pdfBuffer: Buffer): Promise<string> {
  const pdf = await getDocument({ data: pdfBuffer }).promise;
  let markdown = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();

    // Extract text
    const text = textContent.items.map((item: any) => item.str).join("\n");
    markdown += `## Page ${i}\n\n${text}\n\n`;

    // Extract images
    const operatorList = await page.getOperatorList();
    for (let j = 0; j < operatorList.fnArray.length; j++) {
      if (operatorList.fnArray[j] === OPS.paintImageXObject) {
        const imgObj = operatorList.argsArray[j][0]; // Extract the first image object
        const img = await page.objs.get(imgObj);
        if (img) {
          const imgSrc = `data:image/png;base64,${Buffer.from(img.data).toString("base64")}`;
          markdown += `![Image]( ${imgSrc} )\n\n`;
        }
      }
    }
  }

  // Convert Markdown to HTML
  const file = await unified().use(remarkParse).use(remarkHtml).process(markdown);
  return String(file);
}

export function processPdfContent(rawContent: any[]): string {
  return rawContent
    .map((item) => item.pageContent)
    .join("\n\n")
    .trim()
}