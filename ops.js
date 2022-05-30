let person = {name: 'John', JobTitle: 'Developer', email: 'almabetter.com',isVerified : false}
console.log(person.name);
console.log(person.isVerified);

person.isVerified = true;
delete person.name;
person.firstName = 'John';
person.lastName = 'Snow';
//print the final object person.
console.log(person); 

const userDetails = { name: { first: "John", last: "Snow", }, jobTitle: "JS Instructor@Almabetter.com", email: { work: "kapil@google.com", personal: '' }, status: { isOnline: true, isVerified: false, } }

//Add new status property isProMember to the new object and set it to false.
userDetails.isProMember = false; 
console.log(userDetails);


//Use the destructuring syntax to store only the values of name, jobTitle and work properties to respective variables
const userActivity3 = { name: "Rahul", jobTitle: "JS Instructor@almabetter.com", work: "rahul@microsoft.com", region: "Hyderabad", };
let {name, jobTitle, work} = userActivity3; 
console.log(name + " " + jobTitle + " " + work); console log all 3 variables together
