const Person = function(name){
    this.name = name;
}
const Teacher = function(name,subject){
    Person.call(this,name);
    this.subject = subject;
}

Teacher.prototype.teach = function(){
    console.log(`${this.name} now is teaching ${this.subject}`)
}

const Jane = new Teacher("Jane","Math");
Jane.teach()

