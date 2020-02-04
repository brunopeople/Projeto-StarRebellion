This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Este Projeto foi aplicado com o Framework HTML voltado para o Framework Javascript React.js((https://github.com/facebook/create-react-app)

Projeto desenvolvdido para o processo Seletivo da empresa Ilegra para a vaga de Front-end. Ele consiste em consumir a SWAPI que é a API de Star Wars e mostra o resultado deste consumo num layout com Design UX, layout consinste mostar os personagens principais da franquia e ao apertar o botão mostrar as informações sobre os personagens como data de nascimento, Cor do Cabelo e Gênero. 

Para rodar a aplicação é preciso primeiro instalar o React com o seguinte comando do Prompt

##npm install -g create-react-app

O gerenciador de pacotes javascript irá baixar o geredor de projetos para o Framework React.js e assim é possível criar um projeto com 
o seguinte comando; 

## create-react-app nome-projeto --save


Para rodar os teste é preciso digitar no comando do prompt;

##npm run test


## Instalando o Bootstrap


Neste projeto foi utilizado o Framework HTML5 para a criação do layout. Para a instalação é preciso digitar o seguinte comando no prompt

## npm install react-bootstrap --save 


## Rodar a Aplicação em Produção

Para rodar o projeto em produção é preciso rodar o comando no prompt

##npm run build 

Com isto será gerado a build do projeto e o artefato está armazenado no diretório '/dist', logo após a geração é preciso instalar o servidor, para isto digite com o seguinte comando

## npm install -g serve

e o comando para gerar o servidor local é 

##serve -s build.

