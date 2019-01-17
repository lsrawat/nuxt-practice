How to run the project:
1. Move to root directory.
2. Run cmd:  npm intall
3. Run cmd: npm run dev

Assignment:
  A simple todo app. It should remove a todo task from pending list and add it to the completed list. it should get data on server side and serve the rendered HTML to the browser (Nuxt implementation).

Frameworks used: 
  Vuejs + Nuxtjs

Approach followed:
  Created a component which mantains a list of all todos. It recieves the list as a property input form the page.
  
  This list mantains collection of two components; pending and completed todo tasks, and an add-todo component. 
  
  The add todo component emits a new todo which is added to the list mantained in the todo-list component.
  
  The pending component emits the todo to be marked as completed.
  
  The completed component is only for presentational purposes which shows the completed tasks as line through.
  
  Added test cases for some of the components.
  
Extra feature:
  Implemented an id-generator for generating an id in front end using Vuex store. (Although in real life scenarios this part will always happen in back-end, I did this here to mantain consistency in data and implement Vuex).
  
  Created a local mixin for filtering the list according to pending or completed status (Could also be achieved using normal utils, but wanted to try out mixins).
  
