# RABBITMQ

## Como funciona
Mensagem é enviada para a Exchange, e a Exchange é responsavel por enviar para a fila adequada.

## Tipos Exchange:

* Direct: a mensagem é enviada para a Exchange, que por sua vez encaminha a mensagem para a fila identificada.
    * bind: relação entre fila e Exchange. 
    * Routing key: chave que identifica a para qual fila a Exchange deve enviar.
* Fanout: a mensagem é encaminhada para toas as filas que se ligam a Exchange.
* Topic: relação mais flexivel do que a Direct, podendo adicionar condições na Routing key
* Headers:  

## RabbitMQ Simulator
https://tryrabbitmq.com/