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

## Nota 1
```
A api está programada para enviar o email para o Proprietário do projeto.
Caso queira mudar remetente e/ou destinatário, altere os atributos 'from' e 'to' dor corpo da mensagem.
```

## Nota 2
```
Usuários Linux: Se ao executar o script aparecer a mensagem:
'events.js:167
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::3000
    at Server.setupListenHandle [as _listen2] (net.js:1294:14) ...'

Executar no terminal:

$ netstat -lnp |grep 3000
$ kill -9 NUMERO_DO_PROCESSO
```
## Exemplo
```bash
$ netstat -lnp |grep 3000
$ tcp6       0      0 :::3000                 :::*                    OUÇA       9109/lite-server   
```
```bash
$ kill -9 9109
```

### Customize configuration
See [Configuration Reference](https://sendgrid.com/docs/for-developers/sending-email/).
