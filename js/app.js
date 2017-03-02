NEJ.define([
	'util/cache/storage',
	'./todoApp.js'
], function(_t, TodoApp) {

	var todoApp = new TodoApp({
		data: {
			todos: _t._$getDataInStorage('todos-nej-regular') || [],
			filter: window.location.hash.slice(2)
		}
	}).$inject('#todoapp');
});
