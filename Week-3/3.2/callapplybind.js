let obj = {
  name: "asad",
  cohort: "p10",
};

function description(age, interest) {
  console.log(
    `${this.name} is a part of ${this.cohort} and is ${age} years old and is interested in ${interest}`
  );
}

//The main difference between call and apply is how the parameters are passed

//call method

description.call(obj, 21, "Web development");

//apply method

description.apply(obj, [21, "Web development"]);

//Bind method creates a new function by binding the original function with the passed context

//Bind
//We can also bind parameters by passing them
const bindedDescription = description.bind(obj);

bindedDescription(21, "Web development");
