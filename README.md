# clinic-manager

## RODAR API

### DB da aplicação (MySQL):

> Configure um banco de dados MySQL
> <br/>

### - No back-end da aplicação (IntelliJ - Java):

> - Java 17
>
> - `[RECOMENDADO]` instale em sua máquina o ambiente de desenvolvimento - [IntelliJ Idea](https://www.jetbrains.com/pt-br/idea/download/)


Entre no diretório 'clinic-manager-api' e abra o projeto no IntelliJ, automaticamente a ferramenta Maven, deve buscar e atualizar todas as dependências, 
mas caso isso não ocorra, vá na aba **View -> Tool Windows -> Maven -> LifeCycle -> Install**, para caso, fique faltando algo, seja instalado.
  
> Configure as variáveis de ambiente do projeto no IntelliJ em **Application -> EditConfigurations -> Environment variables**  OU em modify run configuration em Run:

![image](https://github.com/IanFarias/clinic-manager/assets/64112672/f6776c7a-da95-4b61-886b-e5862448f663)


```
    DB_USER=<usuario do banco>;
    DB_PASSWORD=<senha>;
    DB_URL=<URL do banco>;
```

Com as variáveis de ambiente configuradas, a aplicação poderá ser iniciado. Ao iniciar, o FlyWay automaticamente rodará as migrations das tabelas no banco configurado.

Para rodar a aplicação, encontre o arquivo: `ClinicmanagerApplication.java` e clique em Run (➥ / ▷)
Por padrão, a aplicação ira rodar nessa URL: http://localhost:8080/api


<br/>

### - RODAR APP:

> `[RECOMENDADO]` Baixe o editor de código fonte [Visual Studio Code](https://code.visualstudio.com/) e instale em sua máquina um dos gerenciadores de pacote a seguir [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable) ou [NodeJs(NPM)](https://nodejs.org/en/download/)

<p>
Entre no diretório clinic-manager-app e abra o projeto no VSCode, abra o terminal (Ctrl+ ' ) e digite: yarn install ou npm install (dependendo do gerenciador acima escolhido)
 
> Crie e Configure o arquivo na '.env' na raíz no projeto da forma como está no arquivo '.env.example'. E coloque a URL que está rodando a API.
 ```
 VITE_API_URL=<URL api>
 ```
 
Para rodar a aplicação, digite yarn dev ou npm run dev e aguarde iniciar a rota: http://localhost:5173/
</p>
