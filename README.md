# Atividade Avaliativa 2

Esta atividade avaliativa visa a integração dos conteúdos vistos durante o decorrer do Tópico 3. Para a atividade:

- Desenvolva usando Node.js

- Adicione as seguintes libs no seu projeto (usando npm):
  - express - para implementar a API no servidor
  - node-persist - para persistir as notícias e a lista de e-mails
  - node-mailer - para enviar e-mails (crie uma conta de teste em https://ethereal.email)
  - axios - para implementar os clientes que acessam a API

Na implementação, a parte servidor deve usar Async-Await, enquanto que os clientes devem usar promises tradicionais. A implementação deve ser obrigatoriamente realizada por partes (commits), conforme especificado:

# Commit #1

No servidor:
* post /noticia { titulo: "", resumo: "", url: "" } - adiciona uma notícia, gerando um identificador (id) único
* get /noticia - retorna todas as notícias salvas

# Commit #2

Ainda no servidor:
* get /noticia/{id} - retorna somente a notícia identificada pelo id
* post /inscricao { email: ..} - registra o email em uma lista

# Commit #3

Implemente um cliente (cliente1.js) que adicione 5 notícias e 7 e-mails, usando a API. Lembre de usar apenas promises tradicionais.

# Commit #4

No servidor:
* put /enviar/{id} - enviar a notícia com o id para todos os e-mails registrados. O título do e-mail é o mesmo título da notícia, e o corpo é o resumo da notícia e a url da fonte original. Os e-mails não podem ser disparados todos de uma vez: envie um e-mail e aguarde 2 segundos antes de enviar o próximo e-mail. Ao final do envio dos e-mails, retorne a lista de todos os e-mails para os quais as notícias foram enviadas.

# Commit #5

Implemente um cliente (cliente2.js) que mostra todas as notícias existentes, faz o get em uma delas e depois dispara os e-mails. Lembre de usar apenas promises tradicionais.

# Commit #6

Faça um video curto narrando brevemente como você implementou e executando os cenários solicitados. Qualquer software de gravação pode ser utilizado como OBStudio, Zoom, RecordMyDesktop, etc. O video é obrigatório para a correção.
