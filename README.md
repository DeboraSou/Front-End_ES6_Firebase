<div align="center">
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" title="JavaScript | MDN" target="_blank" rel='noopener noreferrer'>
    <img src="src/assets/screen/javascript.png" width="200" alt="Ícone JavaScript">
  </a>
</div><br />

<div align="center" style="display: inline_block;">
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" title="HTML | MDN" target="_blank" rel='noopener noreferrer'>
    <img align="center" alt="HTML5" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
  </a>

  <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" title="CSS | MDN" target="_blank" rel='noopener noreferrer'>
    <img align="center" alt="CSS3" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
  </a>&nbsp;
  
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" title="JavaScript | MDN" target="_blank" rel='noopener noreferrer'>
    <img align="center" alt="JavaScript" title="JavaScript" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
  </a>&nbsp;

  <a href="https://firebase.google.com/docs?hl=pt-br:" title="Firebase | DOC" target="_blank" rel='noopener noreferrer'>
    <img align="center" alt="Firebase" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg" />
  </a>
</div><br />

<div align="center">
<h1>ESTRUTURA DE FRONT-END EM ES6 COM INTEGRAÇÃO FIREBASE</h1>
</div><br />

### Este repositório apresenta uma estrutura de Front-end desenvolvida em ES6, utilizando programação orientada a objetos para integração com o Firebase da Google. A estrutura inclui integração com o serviço de autenticação do Firebase.

## Visão Geral

Este projeto fornece uma base sólida para o desenvolvimento de aplicações web com funcionalidades de autenticação e armazenamento em nuvem. Utilizando o poder do ES6 e o Firebase da Google, é possível criar aplicações web modernas e seguras de forma eficiente.

## Funcionalidades Principais

- **Login e Registro de Usuários:** Os usuários podem inserir suas credenciais de e-mail e senha para fazer login. Há também a opção de registrar uma nova conta no sistema.

- **Autenticação Firebase:** O aplicativo utiliza o Firebase para autenticar usuários. As credenciais dos usuários são verificadas pelo Firebase Auth.

- **Página Inicial Personalizada:** Após o login bem-sucedido, os usuários são redirecionados para a página inicial (homee.html). Esta página apresenta uma mensagem de boas-vindas personalizada e um botão para sair da conta.

- **Estilização Personalizada:** A interface do usuário é estilizada usando CSS personalizado. Há estilos específicos para diferentes partes da interface, como páginas de login, registro e página inicial.

## Pré-requisitos

- **Ambiente de Desenvolvimento PHP:** Certifique-se de ter o PHP instalado em sua máquina.

- **Servidor Web Local:** Utilize um servidor web local para hospedar o aplicativo durante o desenvolvimento. O PHP inclui um servidor web embutido que pode ser iniciado a partir da linha de comando.

- **Navegador Web:** Você precisará de um navegador web moderno, como Google Chrome, Mozilla Firefox, Safari ou Microsoft Edge, para acessar e testar o aplicativo.

- **Firebase Account:** Certifique-se de ter uma conta no Firebase da Google, pois o aplicativo faz integração com seus serviços, especialmente para autenticação.

## Configuração do Firebase:

- **Configurar Projeto Firebase:** No Console do Firebase, crie um novo projeto ou use um existente para o aplicativo.

- **Configurar Autenticação:** Habilite o método de autenticação que deseja utilizar no aplicativo (por exemplo, e-mail/senha, Google, Facebook).

- **Obter Credenciais:** Para permitir que o aplicativo se conecte ao Firebase, obtenha as credenciais necessárias, como a chave da Web do Firebase, que será usada no código para autenticação.

## Inicialização do Servidor Local

Para que o aplicativo funcione corretamente, é necessário iniciar um servidor local. Para fazer isso, execute o seguinte comando no terminal:

```bash
php -S localhost:seu-localhost -t src
```
Isso iniciará um servidor PHP local na porta seu-localhost, servindo os arquivos do diretório src.

## Acessar o Aplicativo

Para acessar o aplicativo e suas funcionalidades completas, é necessário copiar ou clicar no endereço http disponibilizado, e abrir seu navegador para acessar.

## Estrutura de Arquivos

- **js/controllers:** Contém os controladores de aplicativo **App.js**, **AppController.js** e **GuiController.js** responsáveis pela lógica de controle e interação com a interface do usuário.

- **js/views/navPages:** Contém as páginas HTML entrar e cadastrar.

- **css:** Contém os arquivos CSS usados para estilizar a interface do usuário de acordo com as necessidades do aplicativo.

## Ilustrações

### Página Início
![Página início](/src/assets/screen/inicio.png)

### Menu
![Menu](/src/assets/screen/menu.png)

### Página Cadastrar
![Página Cadastrar](/src/assets/screen/cadastrar.png)

### Página Entrar
![Página Entrar](/src/assets/screen/entrar.png)

## Créditos

- O ícone de JavaScript utilizado neste projeto foi gentilmente disponibilizado por <a href="https://www.flaticon.com/br/icones-gratis/javascript" title="Javascript ícones" target="_blank" rel='noopener noreferrer'>Freepik - Flaticon</a>. Agradecimentos especiais aos criadores e colaboradores por disponibilizarem seu trabalho de forma gratuita.
