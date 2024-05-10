DOCKER MONGODB

Referencia: https://medium.com/dockerbr/mongodb-no-docker-dd3b72c7efb7

Comandos:

Download imagem do mongoDB:
docker pull tutum/mongodb

Criação de servidor especificando uma senha
docker run -d -p 27017:27017 -p 28017:28017 -e MONGODB_PASS="mypass" tutum/mongodb

Subir o seu servidor mongo:
docker start <hach>

Listar containers:
docker ps -a