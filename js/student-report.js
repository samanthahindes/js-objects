var message= '';
var student;

function print(message){
  document.write("<section" + message + "</section>");
}

for (var i= 0; i<students.length; i++){
  // your code will go here
  student = students[i];
  message += '<h2>' + student.name + '</h2>';
  message+= '<p>' + student.track + '</p>'
}

print(message);
