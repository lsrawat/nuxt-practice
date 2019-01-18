### How to run the project:
Run the following commands at root after cloning the project.
```
npm install
npm run dev
```
### Test cases
Run the following command at root after cloning the project.

```
npm run test:unit
```

#### Assignment:

A simple todo app. It should remove a todo task from pending list and add it to the completed list. it should get data on server side and serve the rendered HTML to the browser (Nuxt implementation).

#### Frameworks used: 
  Vuejs + Nuxtjs

#### Approach followed:
+  Fetched a todo list and stored it in the store. The todo-list component displays the two lists using computed values and filtering.

+  The add todo component emits a new todo which is added to the list mantained in the store.
 
+  The pending component emits the todo to be marked as completed.
 
+  The completed component is only for presentational purposes which shows the completed tasks as line through.
 
+  Added test cases for some of the components.
  
#### Extra feature:
+ Implemented an id-generator for generating an id in front end using Vuex store for avoiding repetiotion in v-for key bindings. (Although in real life scenarios this part will always happen in back-end, I did this here to mantain consistency in data and implement Vuex).
  
+ Created a local mixin for filtering the list according to pending or completed status (Could also be achieved using normal utils, but wanted to try out mixins).
  
