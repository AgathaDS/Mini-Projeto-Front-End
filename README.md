# Mini-Projeto-Front-End

 - O projeto consiste em criar  uma ferramenta que possamos adicionar nossos interesses e hobbies, que podem ser acessados a qualquer momento.  Junto a lista de interesses temos uma seção que mostra as últimas notícias que são retiradas da API do IBGE (http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release).

 - Para rodar o projeto faça o download do repositório do projeto no Gitub (https://github.com/AgathaDS/Mini-Projeto-Front-End)

  <img src="https://private-user-images.githubusercontent.com/159074551/344822576-4b7ccc5c-53ac-4ea1-9704-2246e07c0904.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk4NzMwODEsIm5iZiI6MTcxOTg3Mjc4MSwicGF0aCI6Ii8xNTkwNzQ1NTEvMzQ0ODIyNTc2LTRiN2NjYzVjLTUzYWMtNGVhMS05NzA0LTIyNDZlMDdjMDkwNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcwMVQyMjI2MjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jZDhkM2VkMjU4YjVlN2MzMjVkNmUwM2Q3YWMwMTI0ZjNjNTE5NDJhM2QyM2YzNWI1NGY1ZGQ3YmE5MDc5MmZkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.S9665Y1LNR9Hp5PB19eA8csMH5C06h539OUjGAgvzTw" alt="Lista interesses">

  <img src="https://private-user-images.githubusercontent.com/159074551/344822654-f0dde325-f851-41c8-bb11-c610b0aaf4bd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk4NzMxNTgsIm5iZiI6MTcxOTg3Mjg1OCwicGF0aCI6Ii8xNTkwNzQ1NTEvMzQ0ODIyNjU0LWYwZGRlMzI1LWY4NTEtNDFjOC1iYjExLWM2MTBiMGFhZjRiZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcwMVQyMjI3MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ODczNmM5MjA2ZWRkMmVkMzJmN2Q3NGVkYWM2NDZkOWE4NzFiNDE0YWYzOTRjYmRlZGNjMzgxOTA2NGIyOTBlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Ohlr7S8Qen4bl8AzBolUUMj_08Hmq02v4A6hREKczSk" alt="LocalStorage">
  
 - Utilizei o "setInterval" para recuperar a lista e atualizá-la a cada 1 segundo.
   
 - Crie a função “todosInteresses” que recupere todos os interesses adicionados no localStorage e os coloca na lista de 
   interesses.
   
 -  A função ”adicionarInteresse” recupera o valor digitado no input, e a lista existente adicionando  o novo valor a ela. 
    Logo em seguida atualiza os  dados no localStorage.
    
 -  A função ”limparLista” Remove todos os itens da lista meus interesses e a atualiza.

 -  A função ”obterNoticia” Faz uma solicitação GET à API do IBGE. Para obter o título e o conteúdo da notícia:

   Ágatha Duarte da Silva. 
   2024

    
