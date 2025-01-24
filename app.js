import express from "express" 
import connectInDataBase from "./src/config/dbConnection.js"
import mongoose from "mongoose";
import alunoRoutes from './src/routes/alunoRoutes.js'
import professorRoutes from './src/routes/professorRoute.js'
import turmaRoute from './src/routes/turmaRoute.js'
import notaRoute from './src/routes/notaRoute.js'

const app = express();
app.use(express.json());
app.use('/alunos', alunoRoutes)
app.use('/professores', professorRoutes)
app.use('/turmas', turmaRoute)
app.use('/notas', notaRoute)

app.get('/', (req, res)=>{
    res.status(200).send('API HACKATON')
})

await connectInDataBase();
mongoose.connection.on("open", ()=>{
    console.log('Conexao com o banco de dados feita com sucesso')
})

export default app;