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


describe('Delete_length', function(){
	describe('We delete an element and we check if the lenght of the list has changed', function(){
		it('should return true if length  = length-1', function(){
			var i = Math.floor(Math.random()* testTodoList.length) ;
			var length = testTodoList.length;
			var elem = testTodoList[i];
			functions.removeTask(testTodoList, i, function(){
				assert.equal(length-1, testTodoList.length);
			});
		})
	});
})


describe('Delete_object', function(){
	describe('We delete an element and we check if the deleted object is still in the array', function(){
		it('should return true if the object has not been found', function(){
			var i = Math.floor(Math.random()* testTodoList.length) ;
			var length = testTodoList.length;
			var elem = testTodoList[i];
			var isDeleted= true;
			functions.removeTask(testTodoList, i, function(){
				for(i=0; i<testTodoList.length; i++){
					if(testTodoList[i] === elem){
						isDeleted = false;
					}
				}

				assert.equal(isDeleted, false);
			});
		})
	});
})













