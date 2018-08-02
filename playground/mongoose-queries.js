const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b5a330aa594f5890fba0de3';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('user not found')
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => console.log(e));

// var id = '5b631d50c46f4593115740b1';
//
// if (!ObjectID.isValid(id)) {
//   console.log('id not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found')
//   }
//   console.log('todo by id', todo);
// }).catch((e) => console.log(e));
