<p align="center">
  <img width="200" height="163" src="https://camo.githubusercontent.com/8c13dc2618dbd7f76d1d574350b98fdee1335ce5/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f626f6f7463616d702d6865616465722e706e67">
</p>
<h1 align=center>NodeJS - GoBarber Backend</h1>
<p align="center">Backend from GoBarber application, this backend was built using SOLID principles (https://www.notion.so/Princ-pios-do-SOLID-d469618bbd2049668eaf80e889194cce)</p>

## :computer: Tech:
- NodeJS
- TypeScript
- TypeOrm
- Bcryptjs
- Jsonwebtoken
- ESLint + Prettier

## :running: Run the project:
```shell
  # Clone this repository
  - git clone https://github.com/acpn/gobarber-server

  # Enter project directory
  - cd [project folder]

  # Install dependencies
  - yarn

  # Start the server
  - yarn dev
```

## :fork_and_knife: Contributing
- Fork this repository;
- Create a branch for your features;
- Push your branch.


# Recuperação de senha

**RF: Requisitos Funcionais**

- O usuário deve poder recuperar sua senha informando o seu e-mail
- O usuário deve receber um e-mail com instruções de recuperação de senha
- O usuário deve poder resetar sua senha

**RNF: Requisitos não Funcionais**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN: Regras de negócio**

- O link enviado por e-mail para resetar a senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização de perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu e-mail para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;


# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas.

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDb;
- As nmotificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento do serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- Listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário  que já passou;
- O usuário não pode agendar serviços consigo mesmo;
