import app from './app.js'
//import("dotenv/config")

const PORTA = 3000;

app.listen(PORTA, () =>{
    console.log(`API rodando na porta ${PORTA}`);
});