HTML Tag Escaper 🛡️

Este projeto lê um arquivo de texto, substitui caracteres especiais HTML (<, >, &) pelas suas versões "escapadas" (&lt;, &gt;, &amp;), e gera um novo arquivo com o conteúdo seguro para uso em páginas web.

📚 Sobre o Projeto
uso de promises e funções assíncronas (async/await);

Trabalhar com entrada e saída de dados no terminal;

Utilizar corretamente o Git para versionar o projeto.

Este projeto é uma parte do meu processo de estudo e prática.

⚙️ Como Funciona
O programa recebe um arquivo de entrada (.txt, .html, etc.).

Identifica os seguintes caracteres especiais:

< → &lt;

> → &gt;

& → &amp;

Gera um novo arquivo com o texto processado.

Você pode passar os caminhos dos arquivos como argumentos no terminal ou informar manualmente durante a execução.

🧩 Tecnologias utilizadas
TypeScript

Node.js (Módulos: fs/promises, path, readline/promises)

Git e GitHub

🚀 Como Executar
1- Clone o repositório:
```bash

git clone https://github.com/Cjr-pjs/Html-Tag-Escaper
```


2-Instale as dependências (caso necessário):
```bash
npm install
```
3-Compile o TypeScript (se precisar):
```bash

tsc
```
4-Execute o programa:

Com argumentos diretos:

```bash
node dist/seu-arquivo.js entrada.txt saida.txt
```
Ou, sem argumentos:
```bash

node dist/seu-arquivo.js
```

(O programa vai pedir o caminho dos arquivos no terminal.)







