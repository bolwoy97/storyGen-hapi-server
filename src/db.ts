import * as mongoose from 'mongoose';

export const connect = async function() {
  try {
    const db = await mongoose.connect('mongodb://localhost/storyGen', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    return console.log('Db is connected');
  }
  catch (err) {
    return console.log(err);
  }
}
