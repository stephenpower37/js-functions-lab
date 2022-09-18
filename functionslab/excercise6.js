fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const todos = json; 

     const completed = todos.filter(todo => todo.completed === true)

     const idGroups = {
        1 : 0,
        2 : 0,
        3 : 0,
        4 : 0,
        5 : 0,
        6 : 0,
        7 : 0,
        8 : 0,
        9 : 0,
        10 : 0,
     }

     const idCategories = Object.keys(idGroups);

     const categoriseById = id => {
     let idCategory;
       if (id == '1') idCategory = idCategories[0];
       else if (id == '2') idCategory = idCategories[1];
       else if (id == '3') idCategory = idCategories[2];
       else if (id == '4') idCategory = idCategories[3];
       else if (id == '5') idCategory = idCategories[4];
       else if (id == '6') idCategory = idCategories[5];
       else if (id == '7') idCategory = idCategories[6];
       else if (id == '8') idCategory = idCategories[7];
       else if (id == '9') idCategory = idCategories[8];
       else idCategory = idCategories[9];
       return idCategory;
     };

     const todosByIdGroups = completed.reduce((acc, todo) => {
           const key = categoriseById(todo.userId);
           acc[key] += 1;
           return acc;
         }, idGroups);

         console.log(todosByIdGroups);
     })

  .catch(function(err) { 
    console.log(err);
  });