const handler = async (event) => {
    const word = event.queryStringParameters && event.queryStringParameters.word ? event.queryStringParameters.word : '';
    const letterCount = word.length;
    let response;

    if (letterCount === 1) {
        response = {
            statusCode: 200,
            body: JSON.stringify(`A palavra "${word}" possui ${letterCount} caracter.`),
        };
    } else {
        response = {
            statusCode: 200,
            body: JSON.stringify(`A palavra "${word}" possui ${letterCount} caracteres.`),
        };
    }

    return response;
};

export { handler };
