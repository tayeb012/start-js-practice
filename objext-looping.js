let student = {
  id: 12,
  name: "Tanvir",
  class: 14,
  marks: 95,
  section: "B",
};
console.log(student);

// When you need all keys in that object in a ary
let properties = Object.keys(student);
console.log(properties);
// When you need all value of keys in that object in a ary
let propertiesValues = Object.values(student);
console.log(propertiesValues);

// [ 'id', 'name', 'class', 'marks', 'section' ]
// [ 12, 'Tanvir', 14, 95, 'B' ]
// loop
for (let i = 0; i < properties.length; i++) {
  let propertiesName = properties[i];
  let propertiesValues = student[propertiesName];
  console.log(propertiesName, propertiesValues);
}

// also we can do like this
//  for in loop
for (let propertiesName in student) {
  let value = student[propertiesName];
  console.log(propertiesName, value);
}
