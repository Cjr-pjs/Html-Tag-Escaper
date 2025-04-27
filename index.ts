import * as fs from "node:fs/promises"; nas
import * as path from "node:path";
import * as readline from "node:readline/promises"; 
import { stdin as input, stdout as output } from "node:process";

run();

function escapeHtmlSpecialCharacters(text: string): string {
  return text.replace(/[<>&]/g, (match: string): string => {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      default:
        return match;
    }
  });
  return text.replace(/[<>&]/g, (match) => {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      default:
        return match;
    }
  });
}

async function escapeHtmlFile(inputFilePath: string, outputFilePath: string): Promise<void> {
  try {
    const fileContent: string = await fs.readFile(inputFilePath, "utf-8");
    const escapedContent: string = escapeHtmlSpecialCharacters(fileContent);
    await fs.writeFile(outputFilePath, escapedContent, "utf-8");
    console.log(`Arquivo escapado com sucesso: ${outputFilePath}`);
  } catch (error: any) {
    console.log("Erro:", error.message);
    process.exit(1);
  }
}

function askFilePath(question: string): Promise<string> {
  const rl: readline.Interface = readline.createInterface({ input, output });

  return new Promise((resolve) => {
    rl.question(question, (answer: string) => {
      resolve(answer);
      rl.close();
    });
  });
}

async function userInteraction(): Promise<void> {
  let inputPath: string | undefined = process.argv[2];
  if (!inputPath) {
    inputPath = await askFilePath("Informe o caminho do arquivo de entrada: ");
  }
  inputPath = path.resolve(inputPath);

  const defaultName: string = `escaped_${path.basename(inputPath)}.txt`;
  const answer: string = await askFilePath(
    `Informe o caminho do arquivo de saída (padrão: ${defaultName}): `
  );
  let outputPath: string = answer.length > 0 ? answer : defaultName;
  outputPath = path.resolve(outputPath);

  await escapeHtmlFile(inputPath, outputPath);
}

async function run(): Promise<void> {
  if (process.argv.length >= 4) {
    await escapeHtmlFile(path.resolve(process.argv[2]), path.resolve(process.argv[3]));
  } else {
    console.log("---------------------");
    console.log("HTML Tag Escaper v1.0");
    console.log("---------------------\n");
    console.log(
      "Argumentos não informados! Por favor, informe os caminhos dos arquivos para realizar o escape."
    );
    await userInteraction();
  }
}