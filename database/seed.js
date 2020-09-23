const db = require('./index.js');
var tasks = [
  {
  name : 'coding',
  ratings : 10
},
{
  name : 'washing dishes',
  ratings : 1
},
{
  name : 'laundry',
  ratings : 10
},
{
  name : 'cooking',
  ratings : 10
},
{
  name : 'sleeping',
  ratings : 10
}
]

function seedMe() {
  tasks.forEach((task) => {
    db.query(`INSERT INTO tasks (name, rating) VALUES ('${task.name}', ${task.ratings});`,(err, result) => {
      if (err) {
        console.log('Seed Failed');
      } else {
        console.log('Seed Success');
      }
    })
  })
  db.end();
}

seedMe();