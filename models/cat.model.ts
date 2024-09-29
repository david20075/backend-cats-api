import { Schema, model } from 'mongoose';

const catSchema = new Schema({
  id: String,
  name: String,
  description: String,
  temperament: String,
  origin: String,
  image: {
    url: String
  }
});

export const Cat = model('Cat', catSchema);
