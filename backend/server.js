// APP principal


const app = require('./src/app')

const port = process.env.PORT || 3000


//teste
app.listen(port, ()=> {console.log('Ta funcionando na porta: ' + port);});
// DEPURAR SEMPRE O CODIGO PARA SABER AS REGRAS DE NEGOCIOS E GARANTIR QUE ESTA INDO CERTO