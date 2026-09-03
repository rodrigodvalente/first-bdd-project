import { Given, When, Then } from "@cucumber/cucumber";
import { strictEqual } from "assert";

Given("que a API está disponível", async function () {
  this.statusApi = await fetch("https://jsonplaceholder.typicode.com/posts/");
});

When("envio o conteúdo do post:", async function (dataTable) {
  this.conteudoPost = dataTable.hashes()[0];

  this.response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: this.conteudoPost.titulo,
      body: this.conteudoPost.corpo,
      userId: Number(this.conteudoPost.idUsuario),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  this.responseJson = await this.response.json();
});

Then("devo receber o código {int}", function (codigoEsperado) {
  strictEqual(this.response.status, codigoEsperado);
});

Then("o post criado deve ter o título {string}", function (tituloEsperado) {
  strictEqual(this.responseJson.title, tituloEsperado);
});
