## Instalar dependências
```
npm install
```
## Criar Arquivo de conguração
```
Crair arquivo config.js no diretóri  ./config, seguindo o formato do config-exemple.js, substituindo os valores
to:'EMAIL_DE_DESTINO',
apiKey:'CHAVE_DE_SUA_API_SENDGRID'
```

## Run
```
npm run dev
```

## Nota
```
Usuários Linux: Se ao executar o script aparecer a mensagem:
'events.js:167
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::3000
    at Server.setupListenHandle [as _listen2] (net.js:1294:14)..'

Executar no terminal:

$ top | pgrep node
$ sudo kill -9 RESULTADOS_DO_PRIMEIRO_COMANDO
```
## Exemplo
```
$ top | pgrep node
18610
31094

$ sudo kill -9 18610 31094
```






### Customize configuration
See [Configuration Reference](https://sendgrid.com/docs/for-developers/sending-email/).