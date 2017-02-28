NEJ.define([
	'util/cache/storage',
	'regular!./todoApp.html',
	'./todoItem.js'
], function(_t, tpl, TodoItem) {
    
    var ENTER_KEY = 13;
    var ESCAPE_KEY = 27;

    var dom = Regular.dom;

	Regular.event('enter', function(elem, fire) {
		function update(ev) {
			if(ev.which == ENTER_KEY) {
				ev.preventDefault();
				fire(ev);
			}
		}
		dom.on(elem, 'keypress', update);
		return function destroy() {
			dom.off(elem, 'keypress', update);
		}
	});

	Regular.event('esc', function(elem, fire) {
		function update(ev) {
			if(ev.which == ESCAPE_KEY) {
				ev.preventDefault();
				fire(ev);
			}
		}
		dom.on(elem, 'keydown', update);
		return function destroy() {
			dom.off(elem, 'keydown', update);
		}
	});

	var STORAGE_NAMESPACE = 'todos-nej-regular';

	var TodoApp = Regular.extend({
		template: tpl,
		// add new todo
		addTodo: function(newTodoTitle) {
			newTodoTitle = newTodoTitle.trim();
			var data = this.data;
			if(newTodoTitle) {
				var newTodo = {title: newTodoTitle, completed: false}
				data.todos.push(newTodo);
			}
			data.newTodoTitle = '';
			this.store();
		},
		// clear completed todos
		clearCompleted: function() {
			var data = this.data;
			data.todos = data.todos.filter(function(todo) {
				return !todo.completed;
			});
			this.store();
		},
		// remove todo
		removeTodo: function(idx) {
			this.data.todos.splice(idx, 1);
			this.store();
		},
		// filter
		todoFilter: function(type) {
			if(!type || type === 'all') {
				return this.data.todos;
			} else {
				return this.data.todos.filter(function(todo) {
					return type === 'completed' ? todo.completed : !todo.completed;
				});
			}
		},
		// store todos to local storage
		store: function() {
			_t._$setDataInStorage(STORAGE_NAMESPACE, this.data.todos);
		},
		computed: {
			completedLength: 'this.todoFilter("completed").length',
			activeLength: 'this.todoFilter("active").length',
			allCompleted: {
				get: function(data) {
					return data.todos.length === this.todoFilter('completed').length;
				},
				set: function(sign, data) {
					data.todos.forEach(function(todo) {
						todo.completed = sign;
					});
					this.store();
				}
			}
		}
	});

	return TodoApp;
});
