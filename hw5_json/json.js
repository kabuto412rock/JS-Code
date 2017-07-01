var george = {
  'name': 'George',
  'age': 25,
  'friends': [
    {'name': 'John', 'age': 22},
    {'name': 'Mary', 'age': 28}
  ]
}
var print = console.log
print('george.age=' + george.age)
print('george.friends:')
var friends = george.friends
for (var i in friends) {
  print('    ' + friends[i].name + ' is ' + friends[i].age + ' years old!')
}
