fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const todos = json; 
     const uncompleted = todos.filter(todo => todo.completed === false)
     const uncompletedAccum = uncompleted.reduce( (total, todo) => {
        total.push("userId: " + todo.userId + ", title: " + todo.title)
        return total
     }, ([]))
     console.log(uncompletedAccum)
     })
  .catch(function(err) { 
    console.log(err);
  });