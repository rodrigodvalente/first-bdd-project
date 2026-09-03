# language: pt

Funcionalidade: criar um post

Contexto:
  Dado que a API está disponível

Cenário: criar um post com sucesso

Quando envio o conteúdo do post:
| titulo | corpo | idUsuario |
| Meu primeiro post | Olá! | 1 |
Então devo receber o código 201
E o post criado deve ter o título "Meu primeiro post"