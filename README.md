# API STAR WARS 
skallar-dev
## INTRODUCTION
Nesse projeto existe dois containers utilizando o Docker Compose: um para o MongoDB e outro para o Node.js. Dentro do ambiente Node.js, temos um processo que interaje com a API Star Wars (https://swapi.dev/documentation) existe duas rotas; 

(API) que leia informações sobre personagens (nome, altura e gênero) e as armazene em uma collection do MongoDB.
```bash
POST 
http://localhost:3001/people 
```

(API) que recupere a lista de personagens do MongoDB, ordene-os alfabeticamente pelo nome e apresente os resultados.
```bash
GET  
http://localhost:3001/people 
```
Nessa rota GET é possivel realizar a consulta por nome tambem, passando o parametro *name*
por exemplo; 
```bash
GET  
http://localhost:3001/people?name=Luke Skywalker 
``` 

## Getting Started
```bash
docker-compose up -d 
# or para rodar apenas api mas ainda vai precisa de um banco mongo 
npm run dev 
```



