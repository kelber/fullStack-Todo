
import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
    // id: Number, gera automatico
    title: String,
    description: String,
    active: Boolean,
    
});
