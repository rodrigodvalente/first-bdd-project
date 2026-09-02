import { Before, After, BeforeAll } from "@cucumber/cucumber";

BeforeAll(function () {
  console.log("Iniciando testes...");
});

Before(function (cenario) {
  console.log(`Iniciando cenário: ${cenario.pickle.name}`);
});

After(function (cenario) {
  console.log(`Finalizando cenário: ${cenario.pickle.name}`);
});
