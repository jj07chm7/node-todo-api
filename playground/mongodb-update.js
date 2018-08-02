// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectId('5b5a283a4e85220cc6fa3a10')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 		returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });
	//db.close();
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectId("5b58d1db49f4f1308d98b527")
	}, {
		$set: {
			name: 'Jon'
		},
		$inc: {
			age: 1
		}
	}, {
			returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
});
