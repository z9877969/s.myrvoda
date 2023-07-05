// const express = require('express');
// const { connectToDb, getDb } = require('./db');
// const { ObjectId } = require('mongodb');

// const PORT = 3000;
// const app = express();

// let db;

// connectToDb(err => {
//   if (!err) {
//     app.listen(PORT, err => {
//       err ? console.log(err) : console.log(`Listening port ${PORT}`);
//     });
//     db = getDb();
//   } else {
//     console.log(`DB connection error: ${err}`);
//   }
// });

// const handleError = (res, error) => {
//   res.status(500).json({ error });
// };

// // GET ALL

// app.get('/spares', (req, res) => {
//   const spares = [];
//   db.collection('spares')
//     .find() // cursor - hasNext, next, forEach
//     .forEach(spare => {
//       spares.push(spare);
//     })
//     .then(() => {
//       res.status(200).json(spares);
//     })
//     .catch(() => handleError(res, 'Sonthing goes wrong'));
// });

// // GET ONE

// app.get('/spares/:id', (req, res) => {
//   if (ObjectId.isValid(req.params.id)) {
//     db.collection('spares')
//       .findOne({ _id: ObjectId(req.params.id) }) // cursor - hasNext, next, forEach
//       .then(doc => {
//         res.status(200).json(doc);
//       })
//       .catch(() => handleError(res, 'Sonthing goes wrong'));
//   } else {
//     handleError(res, 'Wrong id');
//   }
// });

// // DELETE

// app.delete('/spares/:id', (req, res) => {
//   if (ObjectId.isValid(req.params.id)) {
//     db.collection('spares')
//       .deleteOne({ _id: ObjectId(req.params.id) }) // cursor - hasNext, next, forEach
//       .then(result => {
//         res.status(200).json(result);
//       })
//       .catch(() => handleError(res, 'Sonthing goes wrong'));
//   } else {
//     handleError(res, 'Wrong id');
//   }
// });
