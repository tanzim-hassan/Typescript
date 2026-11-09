Title=>Blog 5: Access Modifiers in TypeScript OOP(Public, Private, Protected, and Readonly)
Introduction=>
TypeScript supports Object-Oriented Programming (OOP). Access modifiers control who can access the properties and methods of a class. There are four key modifiers in TypeScript: "public", "private", "protected" and "readonly". These help us manage access and keep our code clean and organized.

Detailed Body Paragraphs with Code Examples=>

Public=>
Properties and methods marked with the "public"  modifier can be accessed from anywhere. This is the default access modifier in TypeScript.

Private=>
The "private" modifier restricts access to a property or method, limiting it access to the class in which it is defined.

Protected=>
The "protected" modifier allows access within the class where it is declared and its subclasses, but not from outside these classes.

Readonly=>
A property marked as "readonly" can be assigned a value either at the time of declaration or within the constructor.After initialized, it cannot be reassigned within code checked by TypeScript.

Code Example=>
class Person {
public name: string;
private salary: number;
protected department: string;
readonly id: number;

constructor(
name: string,
salary: number,
department: string,
id: number) {
this.name = name;
this.salary = salary;
this.department = department;
this.id = id;}
public getSalary(): number {
  return this.salary;}}

class Employee extends Person {
showDepartment() {console.log(this.department);}}

const employee = new Employee("Tanjim", 50000, "SDE", 1919);

console.log(employee.name); //Tanjim
console.log(employee.id);   //1919
console.log(employee.getSalary()); //50000
employee.showDepartment(); //SDE

Here, employee.name,We can access the name because it is public.employee.id We can access the ID, but we cannot change it because it is readonly.employee.getSalary() We can get the salary using a public method, even though the salary itself is private.employee.showDepartment() We can access the department through the child class because it is protected.

Conclusion=>
Access modifiers provide controlled access to class members.By proper using it makes typeScript applications more secure,organized and maintainable.