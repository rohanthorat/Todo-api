var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'grocery shopping',
	completed: false
}, {
	id: 2,
	description: 'homework completion',
	completed: false
}, {
	id: 3,
	description: 'lunch with friends',
	completed: true
}];


app.get('/', function (req, res) {
	res.send('Todo API Root');
 });

app.get('/todos', function (req, res) {
		res.json(todos);
});


app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var jsonToSend;

	todos.forEach( function (arrayItem) {
		if (arrayItem.id === todoId) {
				jsonToSend = arrayItem;
		}
	});	

	if (jsonToSend) {
		res.json(jsonToSend);
	} else {
		res.status(404).send();
	}

});

app.listen(PORT, function () {

	console.log('Express listening on port ' + PORT + '!');
});

