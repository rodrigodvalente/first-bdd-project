import { Given, When, Then } from "@cucumber/cucumber";
import { strictEqual } from "assert";

Given("que a api está disponível", async function () {
  this.statusApi = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  ).then((res) => res.ok);
});

When("pesquiso um usuário pelo id {int}", async function (id) {
  this.statusCode = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  ).then((res) => res.status);
});

Then("o resultado deve ser código {int}", function (codigoEsperado) {
  strictEqual(this.statusCode, codigoEsperado);
});
