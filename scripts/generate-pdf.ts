import { chromium, Browser, Page } from "playwright";
import resumeData from "../src/resume.json";

interface PdfConfig {
  outputPath: string;
  url: string;
  options: {
    path?: string;
    scale?: number;
    displayHeaderFooter?: boolean;
    headerTemplate?: string;
    footerTemplate?: string;
    printBackground?: boolean;
    landscape?: boolean;
    pageRanges?: string;
    format?: string;
    width?: string | number;
    height?: string | number;
    margin?: {
      top?: string | number;
      right?: string | number;
      bottom?: string | number;
      left?: string | number;
    };
    preferCSSPageSize?: boolean;
  };
}

const DEFAULT_CONFIG: PdfConfig = {
  outputPath: "public/" + resumeData.header.pdf,
  url: "http://localhost:4321/",
  options: {
    printBackground: false,
    format: "A4",
    margin: {
      top: "0.5in",
      right: "0.5in",
      bottom: "0.5in",
      left: "0.5in",
    },
  },
};

async function setupBrowser(): Promise<{ browser: Browser; page: Page }> {
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    return { browser, page };
  } catch (error) {
    throw new Error(
      `Failed to setup browser: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

async function generatePdf(config: PdfConfig = DEFAULT_CONFIG): Promise<void> {
  let browser: Browser | null = null;

  try {
    const { browser: initializedBrowser, page } = await setupBrowser();
    browser = initializedBrowser;

    await page.goto(config.url, { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "print" });

    await page.pdf({
      path: config.outputPath,
      ...config.options,
    });

    console.log(`PDF generated successfully at: ${config.outputPath}`);
  } catch (error) {
    throw new Error(
      `Failed to generate PDF: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

async function main(): Promise<void> {
  try {
    await generatePdf();
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

main();
