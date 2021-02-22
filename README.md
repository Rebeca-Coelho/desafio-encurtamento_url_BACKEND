# desafio-encurtamento_url_BACKEND

![logo](logoUrl.png)

## Olá! 😃 😃 😃

#ENCURTAMENTO DE URL

## PROJETO
Esse projeto é uma API REST desenvolvida, com Node.js e Typescript, baseada em um desafio de backend.
O intuito do desafio foi criar um serviço que recebe como parâmetro uma URL que deverá ser encurtada seguindo as seguintes regras:

1- Mínimo de 5 e máximo de 10 caracteres.

2- Apenas letras e números.

A url retornada deve ser salva no banco de dados POSTGRESQL e possuir um prazo de validade e ao receber uma url encurtada, deve fazer o redirecionamento para a url salva no banco. 

## DEPENDÊNCIAS UTILIZADAS NO CÓDIGO:
npm init

npm install

npm install express

npm install nodemon

npm install typescript

npm install dotenv

npm install pg

npm install postgresql

npm install bookshelf

## CRUD SENDO UTILIZADO COMO OS 3 NECSSÁRIOS PARA O DESAFIO:
Create = criar url
Read = ler url
Update = atualizar url
Delete = deletar url

## BANCO DE DADOS RELACIONAL
PostgreSQL


## As rotas da API:

ROUTER.get -
"/"
RETORNA index com apresentação {mensagem: "Wiser educacao - Dona da rede de idiomas Wise up."}


ROUTER.post -
"/create"
RETORNA:  "/url/add" Cria novo campo na url e retorna mensagem amigável. 


ROUTER.put - 
"/update/:id"
RETORNA:  "/url/update/description/[ID]" Atualiza somente a descrição do url por id específico e retorna mensagem amigável.
OU
"/url/atualizar/[ID]" Atualiza completamente o campo do url e retorna mensagem amigável. 


ROUTER.delete -
"/:id"
RETORNA: "/url/delete/[ID]" Deleta ourl por id específico e retorna mensagem amigável. 


## Arquitetura MVC

\ DESAFIO-ENCURTAMENTO_URL

		 |   .gitignore
		 |   package-lock.json
		 |   package.json
	         |   **server.js**
			\--📂 node_modules
			\--📂src
			    |   **app.js**
			    |
			    📂---controller
			    |       **urlController.js**
			    |
          		   📂---data
                            |     **url.json**
          		    | 
			    📂---model
			    |       **urlSchema.js
		            |	    **Repository.js**
			    |
			    📂---routes
			     |      **urlRoute.js**
			     |      **index.js**
                            📂---validator
			     |      **urlValidator.js
								

### Endpoints

- `/api/url/`

### links para testar o API

GET =  http://localhost:8081/url/

POST = http://localhost:8081/url/add

PUT =  http://localhost:8081/url/:id

DELETE = http://localhost:8081/url/:id


## PROCEDIMENTO: Exemplo ao encurtar
Seu sitema recebe uma chamada para encurtar a url http://wisereducacao.com e retorna o
seguinte json:
{ newUrl: "http://localhost:8081/abc123ab"; }
O endpoint que salva a url e retorna a url encurtada DEVE ser um POST com a rota
http://localhost:8081/encurtador recebendo no body:
{ url: "http://wisereducacao.com"; }


## PROCEDIMENTO: Exemplo ao redirecionar
Ao receber uma chamada para http://localhost:8081/abc123ab você irá retornar um
redirecionamento para a url salva no banco ( http://wisereducacao.com ), caso não seja
encontrada, retornar HTTP 404.


**O presente API "Desafio-encurtamento_url" está em constante desenvolvimento.**

Autora: Rebeca Coelho

Linkedin: www.linkedin.com/in/rebeca-coelho
