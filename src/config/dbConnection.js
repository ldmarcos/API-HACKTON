import mongoose from 'mongoose';

const connectInDataBase = async () => {
    try {
        const connection = await mongoose.connect('mongodb+srv://admin:tVmnz85MqzXnbFkd@cluster0.3nimcnt.mongodb.net/desempenho_alunos?retryWrites=true&w=majority');
        return connection;
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

export default connectInDataBase;
