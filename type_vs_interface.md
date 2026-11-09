Title=>Blog1: Type vs Interface in TypeScript and When should we choose one over the other

Introduction => 
TypeScript provide two powerful ways to define custom types: type aliases and interfaces. Both are help developers describe data structures and improve code readability. 


Detailed Body Paragraphs with Code Examples=>
An interface is primarily created to define the structure of an object. It specifies which properties and methods an object should have.
interface's code example is given below:

interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "Tanjim",
  age: 23,
  email: "tanjim@gmail.com"
};

A type alias can also define the structure of an object, but it is much more flexible.It supports unions, intersections, tuples etc.
type alias's code example is given below:

type Student = {
  name: string;
  age: number;
};

type Address = {
  city: string;
  country: string;
};

type StudentInfo = Student & Address;

const student: StudentInfo = {
  name: "Tanjim",
  age: 23,
  city: "Dhaka",
  country: "Bangladesh"
};

One of the  important difference is that, with interfaces, the same name can be used multiple times in TypeScript automatically merges them. In contrast, type aliases cannot be defined more than once using the same name.

Conclusion=>
We should use interface when we want to describe the structure of an object, such as a Student or User, and we should also use type when we need to combine types or work with different types, such as strings, numbers, and unions.