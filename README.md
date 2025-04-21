# FullCycle 3.0 - Nginx + Node.js + MySQL

Aplicaçāo que demonstra a integraçāo entre Nginx como proxy reverso, Node.js e MySQL usando Docker Compose.

## Funcionalidades

- Proxy reverso com Nginx
- Aplicaçāo Node.js que se conecta ao MySQL
- Persistência de dados com volume do MySQL
- Listagem de nomes cadastrados no banco de dados

## Pré-requisitos

- Docker instalado
- Docker Compose instalado

## Como executar

1. Clone o repositório:
```
git clone https://github.com/diegorezende-estudos/fc3-nginx-node.git
```



2. Acesse a pasta do projeto:

```
cd fc3-nginx-node
```

3. Inicie os containers:

```
docker-compose up -d
```

4. Acesse a aplicação no navegador:

```
http://localhost:8080
```


## Funcionamento
1. O Nginx escuta na porta 8080

2. Cada acesso à raiz ("/") gera:

3. Criação da tabela people (se não existir)

4. Inserção de 10 nomes 

5. Listagem de todos os registros

6. A cada refresh da página novos nomes são adicionados

## Estrutura do Projeto

```
.
├── docker-compose.yml
├── node
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
└── nginx
    └── nginx.conf
```

## Detalhes Técnicos
### Portas:

8080: Nginx

3000: Aplicaçāo Node.js (exposta apenas internamente)

### Volumes:

MySQL: ./mysql

Código Node.js: ./node

### Variáveis de Ambiente:

MySQL: root password, database name e usuário configurados
