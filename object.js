let student = {
  id: 12,
  name: "Tanvir",
  class: 14,
  marks: 95,
  section: "B",
};
console.log(student);

// When you need to change value  of a keys
student.id = "43";
console.log(student);
// alternative
student["id"] = 55;
console.log(student)


// When you need value of a keys
console.log(student.name);

// When you know the specific property name, use dot notation to get the property value
let marksCount = student.marks;
console.log(marksCount);
// alternative system
// When you know the specific property name, use dot
let classCount2 = student["class"];
console.log(classCount2);
// another alternative
let keysName = "section";
let keysValue = student[keysName];
console.log(keysName, keysValue);

// When you need all keys in that object in a ary
let properties = Object.keys(student);
console.log(properties);
// When you need all value of keys in that object in a ary
let propertiesValues = Object.values(student);
console.log(propertiesValues);
