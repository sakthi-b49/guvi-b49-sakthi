class Person {
    constructor(firstName, lastName, age, gender){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
    } 
    getFullName() {
      return `${this.firstName}  ${this.lastName}`;
    }
    getAge(){
        return this.age;
    }
    getGender(){
        return this.gender;
    }
    setFullName(fullName){
        let [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
    setAge(age){
        this.age = age;
    }
    setGender(gender){
        this.gender =gender;
    }
}
let person1 = new Person('sakthi','ganesh',25,'Male');

console.log(person1.getFullName());
console.log(person1.getAge());
console.log(person1.getGender());

person1.setFullName('Kathir Maran');
person1.setAge(2);
person1.setGender('Male');
console.log(person1.getFullName());
console.log(person1.getAge());
console.log(person1.getGender());

