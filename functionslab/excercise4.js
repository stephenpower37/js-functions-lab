fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const todos = json; 
     const completed = todos.filter(todo => todo.completed === true)
     const completedAccum = completed.reduce( (total, todo) => {
        return total + todo.completed
     }, 0)
     console.log(`Number of Completed Todos: ${completedAccum}`)
     })
  
  .catch(function(err) { 
    console.log(err);
  });