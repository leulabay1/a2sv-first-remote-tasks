var _ = require ("lodash")

//sorting an array using lodash
var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
  ];
   
  console.log(_.sortBy(users, [function(o) { return o.user; }]));
  // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
   
  console.log(_.sortBy(users, ['user', 'age']));
  // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
  
  //filtering users collection
  console.log(_.filter(users, (user)=> user.age >= 40))

  //finding maxvalue from a collection
  console.log(_.maxBy(users, (user)=>user.age))

  //using debounce
  function nameLogger(name){
    console.log(name)
  }
  var nameLogger2 =  _.debounce(nameLogger, 300)

  setTimeout(()=>{
    nameLogger2(`function call at 100`)
  },100)
  setTimeout(()=>{
    nameLogger2("function call at 300")
  }, 200)
  setTimeout(()=>{
    nameLogger2("function call at 300")
  }, 200)