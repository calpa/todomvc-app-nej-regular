# Nice Easy JavaScript / Regular.js • [TodoMVC](http://todomvc.com)

> NEJ - 跨平台WEB前端开发框架，主要提供Web端SDK用于开发Web应用，服务器端SDK用于整合解决方案的服务器端实现

> Regular.js - A concise, flexible framework for creating data-driven component

## Launch

``` bash
# install dependencies
npm install
# serve with hot reload at localhost:8080
npm run dev
```


## Resources

### NEJ

- [Website](http://nej.netease.com/)
- [Documentation](http://nej.netease.com/help/index.html)
- [Github](https://github.com/NEYouFan/nej-framework)
- [Used by](http://nej.netease.com/case/index.html)

### Regular.js

- [Website](http://regularjs.github.io//)
- [Documentation](http://regularjs.github.io/reference/)
- [Github](https://github.com/regularjs/regular)


### Articles

### NEJ

- [依赖管理](https://github.com/NEYouFan/nej-framework/blob/master/doc/DEPENDENCY.md)
- [平台适配](https://github.com/NEYouFan/nej-framework/blob/master/doc/PLATFORM.md)
- [窗体消息](https://github.com/NEYouFan/nej-framework/blob/master/doc/MESSAGE.md)
- [远程调用](https://github.com/NEYouFan/nej-framework/blob/master/doc/AJAX.md)
- [模块调度](https://github.com/NEYouFan/nej-framework/blob/master/doc/DISPATCHER.md)
- [模板系统](https://github.com/NEYouFan/nej-framework/blob/master/doc/TEMPLATE.md)
- [组件系统](https://github.com/NEYouFan/nej-framework/blob/master/doc/WIDGET.md)

### Regular.js

- [Regular.js指南](http://regularjs.github.io/guide/zh/index.html)


## Implementation

- This todo-mvc-app is made of two Regular components: `TodoApp` and `TodoItem`
- `TodoApp` is the main frame of the application, which implements some main functions, for example, adding new todo, marking all as completed, clearing completed todos, counter and routing.
- `TodoItem` is a todo item component, which displays one todo item and its own functions, like marking as completed and editing.
- The NEJ framework is used for module dependency management and persisting data using localStorage.


## Credit

Created by [mickmetalholic](https://github.com/mickmetalholic)
