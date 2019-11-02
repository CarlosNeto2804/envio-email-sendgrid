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

### Nota 1
```
A api está programada para enviar o email para o Proprietário do projeto.
Caso queira mudar remetente e/ou destinatário, altere os atributos 'from' e 'to' dor corpo da mensagem.
```

### Nota 2
```
Usuários Linux: Se ao executar o script aparecer a mensagem:
'events.js:167
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::3000
    at Server.setupListenHandle [as _listen2] (net.js:1294:14) ...'

Executar no terminal:

$ top | pgrep node
$ sudo kill -9 RESULTADOS_DO_PRIMEIRO_COMANDO
```
#### Exemplo
```
$ top | pgrep node
18610
31094

$ sudo kill -9 18610 31094
```
### Para Customizar envio
veja [Configuration Reference](https://sendgrid.com/docs/for-developers/sending-email/).