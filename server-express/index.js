const express =  require('express');
const app = express();

//Rotas

app.get('/', (request, response) => {
    console.log('Servidor foi ligado UHU');
    return response.send('Funcionou!');
});

app.get('/users', (request, response) => {
    console.log('Servidor foi ligado UHU');
    return response.send('Página de usuários');
});

app.listen(3333);
