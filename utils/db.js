// import mongoose from 'mongoose';

// const connection = {};



// async function connect() {
//     if (connection.isConnected) {
//         return;
//     }
//     if (mongoose.connections.length > 0) {
//         connection.isConnected = mongoose.connections[0].readyState;
//         if (connection.isConnected === 1) {
//             return;
//         }
//         await mongoose.disconnect();
//     }
//     const db = await mongoose.connect(process.env.MONGO_URL);
//     connection.isConnected = db.connections[0].readyState;
// }

// async function disconnect() {
//     if (connection.isConnected) {
//         if (process.env.NODE_ENV === 'production') {
//             await mongoose.disconnect();
//             connection.isConnected = false;
//         }
//     }
// }
// const db = { connect, disconnect };
// export default db;

import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}