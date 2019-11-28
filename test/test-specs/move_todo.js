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


describe('Moving todolist functions', function(){

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

})