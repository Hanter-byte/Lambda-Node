# Contador de Caracteres - Função Lambda

Esta é uma função Lambda simples que recebe uma palavra como entrada por meio de uma URL e retorna o número de caracteres presentes na palavra.

## Como Usar

Para usar esta função Lambda, faça uma chamada HTTP GET para a URL abaixo, substituindo `<palavra>` pela palavra desejada:
https://g9mosid6cj.execute-api.us-east-2.amazonaws.com/default/basicLambda?word=<palavra>


Você receberá uma resposta com o número de caracteres na palavra fornecida.

## Exemplo

Exemplo de chamada HTTP GET para contar os caracteres da palavra "exemplo":
https://g9mosid6cj.execute-api.us-east-2.amazonaws.com/default/basicLambda?word=exemplo

A resposta será um objeto JSON com a contagem de caracteres da palavra:
{
"statusCode": 200,
"body": "A palavra 'exemplo' possui 7 caracteres."
}


## Limitações

- A função Lambda suporta apenas palavras dentro dos limites permitidos pelo ambiente de execução.

## Contribuição

Este projeto é de código aberto e as contribuições são bem-vindas. Sinta-se à vontade para enviar pull requests ou abrir issues para relatar problemas ou sugestões de melhorias.