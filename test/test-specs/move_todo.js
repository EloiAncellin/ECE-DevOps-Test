var assert = require('chai').assert;
var dbConnection = require('./../../src/dbConnection');
var mysql = require('mysql');
var functions = require('./../../src/functions')

// déclaration de constantes

testTodoList = [
	[ 241, 'vefd', 'eloi', '  15 Nov à 19:43:28' ],
	[ 242, 'zfebn', 'paul', '  15 Nov à 19:43:38' ],
	[ 243, 'ffd', 'pierre', ' 15 Nov à 19:43:45' ],
	[ 244, 'efz', 'Jean', ' 15 Nov à 19:48:45' ]
]


<<<<<<< HEAD:test/test-specs/move_todo.js
describe('Moving todolist functions', function(){
=======
var dbConfig = {
		    user: 'root',
		    password: 'root',
		    host: '127.0.0.1',
		    database: 'td_list_test',
		    port: 8889
		}
const connection = mysql.createConnection(dbConfig);
var connected;
connection.connect((err) => {
  	if (err){
  		connected = false;
	}else{
	  	connected= true;
	}



describe('Database connection', function(){
	it('should return true if the dbcon has been done', function() {
		  	assert.equal(connected, true);
		});
	});
});

describe('Retrieving the tdl from db', function(){
	it('Should return an array of length 4', function(){
		var todoList=[];
		dbConnection.getTodoList(connection, todoList, () => {
			console.log(todoList);
			//assert(Array.isArray(todoList));
			assert.equal(todoList[0].length, 4);
		});

	});
});

describe('Saving todoList to db. ', function (){
	it('should return true if the saved todoList is the same that the one that is loaded right after.', function(){
		var todoList;
		dbConnection.saveTodoList(connection, testTodoList, function () {
			dbConnection.getTodoList(connection, todoList, function(){
				assert.equal(testTodoList, getTodoList);
			});
		});
	})
})

>>>>>>> c17985e25ab021133861a528baadcbe6652abfad:test/test.js

describe('Go up 1', function(){
	describe('Element to move up is not the last one.', function(){
		it('should return a list with the elemen n now in position n+1', function(){
			var i = Math.floor(Math.random()* testTodoList.length) ;
			var elem = testTodoList[i];
			functions.goUp(testTodoList, i, function(){
				assert.equal(testTodoList[i+1], elem);
			});
		})
	});
})


describe('Go up 2', function(){
	describe('Element to move up is the last one.', function(){
		it('shuold return true if the list has not changed', function(){
			var i = testTodoList.length-1;
			var elem = testTodoList[i];
			functions.goUp(testTodoList, i, function(){
				assert.equal(testTodoList[i], elem);
			});
		})
	});
})


describe('Go down 1', function(){
	describe('Element to move down is not the first one.', function(){
		it('shuold return a list with the eleme n now in position n+1', function(){
			var i = Math.floor(Math.random()* testTodoList.length) +1;
			var elem = testTodoList[i];
			functions.goDown(testTodoList, i, function(){
				assert.equal(testTodoList[i+1], elem);
			});
		})
	});
})


describe('Go down 2', function(){
	describe('Element to move up is the fist one.', function(){
		it('shuold return true if the list has not changed', function(){
			var i = 0;
			var elem = testTodoList[i];
			functions.goDown(testTodoList, i, function(){
				assert.equal(testTodoList[i], elem);
			});
		})
	});
})

<<<<<<< HEAD:test/test-specs/move_todo.js
})
=======




>>>>>>> c17985e25ab021133861a528baadcbe6652abfad:test/test.js
