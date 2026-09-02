# language: pt

Funcionalidade: consultar usuários

Contexto:
  Dado que a api está disponível

Esquema do Cenário: consultar usuário por id

Quando pesquiso um usuário pelo id <id>
Então o resultado deve ser código <codigo>

Exemplos: 
| id | codigo |
| 1 | 200 |
| 11 | 404 | 
| 4 | 200 |