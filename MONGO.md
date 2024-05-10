
criar VOLUME
docker volume crate VOLUME01

Criar rede
docker network create REDE01

Rodar docker:
docker run -d --network REDE01 -h mongo --name mongo-job3 -e MONGO_INITDB_ROOT_USERNAME=job3 -e MONGO_INITDB_ROOT_PASSWORD=123456 -p 27017:27017 -v VOLUME01/data/db mongo

Acessar o banco via linha de comando
docker exec -it mongo-job3 mongosh -u job3 -p 123456

Exibir bancos
show dbs 

Criar banco
use job3_mongo

Inserindo campos do document dentro de uma colection
db.callbaclPayer.insertOne({
    "type": "INPUT",
    "origin": "NOTA_FISCAL",
    "data": {
        "correlationId": "4af40e08-e5a0-42fa-83b6-e939ec074bc2",
        "flow": "SYNC",
        "receiver": {
            "companyId": "000001",
            "storeId": "0001",
            "terminalId": "98"
        },
        "message": {
            "idPayer": "20230208165636",
            "operationType": "PAYMENT",
            "companyId": "000001",
            "storeId": "0001",
            "terminalId": "98",
            "transactionDateTime": "2023-02-08T16:56:38.89",
            "value": 1,
            "paymentType": "CASH",
            "paymentMethod": "CASH",
            "paymentMethodSubType": null,
            "installments": null,
            "statusTransaction": "APPROVED",
            "rejectionInfo": null,
            "acquirer": "CASH",
            "flag": "CASH",
            "thirdPartyId": "20230208165636",
            "authorizerId": null,
            "documentNumber": null,
            "service": null,
            "shopTextReceipt": "Payer Compra\n Via estabelecimento\n DINHEIRO \n 08/02/2023 16:56 \n****************************************\nValor Pago R$1,00\nValor Recebido R$1,00\nTroco R$0,00\n****************************************\nID Empresa: 000001 ID Loja: 0001\nID Checkout: 98\nID Transacao: 20230208165636\n CUPOM NAO FISCAL ",
            "customerTextReceipt": "Payer Compra\n Via cliente\n DINHEIRO \n 08/02/2023 16:56 \n****************************************\nValor Pago R$1,00\nValor Recebido R$1,00\nTroco R$0,00\n****************************************\nID Empresa: 000001 ID Loja: 0001\nID Checkout: 98\nID Transacao: 20230208165636\n CUPOM NAO FISCAL ",
            "reducedShopPaymentReceipt": " PAYER \nDATA/HORA 08/02/2023 16:56:38\nCNPJ 00.000.000/0000-00\nTIPO PAGAMENTO\nVALOR R$1,00\nADQUIRENTE DINHEIRO\nBANDEIRA DINHEIRO\nID 20230208165636\n CUPOM NAO FISCAL \n",
            "reducedCustomerPaymentReceipt": " PAYER \nDATA/HORA 08/02/2023 16:56:38\nCNPJ 00.000.000/0000-00\nTIPO PAGAMENTO\nVALOR R$1,00\nADQUIRENTE DINHEIRO\nBANDEIRA DINHEIRO\nID 20230208165636\n CUPOM NAO FISCAL \n"
        }
    }
})

vizualizar os documents na collection
db.callbaclPayer.find({ type: "INPUT" })

criar user

use beca_bd db.createUser( { user: "beca", pwd:  "beca@2212&",  roles:[{role: "dbOwner" , db:"beca_bd"}] } );