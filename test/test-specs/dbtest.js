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


	var dbConfig = {
			    user: 'root',
			    password: 'root',
			    host: '127.0.0.1',
			    database: 'td_list_test',
			    port: 8889
			}

	describe('Database connection', function(){
		it('should return true if the dbcon has been done', function() {		
			const connection = mysql.createConnection(dbConfig);
			var connected;
			connection.connect((err) => {
				  	if (err){
				  		connected = false;
				  		assert.equal(connected, true);
					}else{
					  	connected= true;
					  	assert.equal(connected, true);
					}
				});
			});
	});


	describe('Retrieving the tdl from db', function(){
	it('Should return an array of length 4', function(){
		var todoList=[];
		const connection = mysql.createConnection(dbConfig);
		var connected;
		connection.connect(() =>{
			dbConnection.getTodoList(connection, todoList, () => {
				console.log(todoList);
				assert.equal(todoList[0].length, 4);
			});
		});
	});
});




	describe('Saving todoList to db. ', function (){
		it('should return true if the saved todoList is the same that the one that is loaded right after.', function(){
			var todoList;
			const connection = mysql.createConnection(dbConfig);
			var connected;
			connection.connect();
	
			dbConnection.saveTodoList(connection, testTodoList, function () {
				dbConnection.getTodoList(connection, todoList, function(){
					assert.equal(testTodoList, getTodoList);
				});
			});
		})
	})


