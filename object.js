function Student(n, g, a, m) {
    this.name = n
    this.gender = g;
    this.age = a;
    this.marks = m;
}
let student = new Student("raju", "male", 26, [35, 45, 56, 67, 78, 89])
console.log(student)