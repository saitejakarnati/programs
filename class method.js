class person {
    constructor(name, gender, age, marks) {
        this.name = name
        this.gender = gender
        this.age = age
        this.marks = marks
    }
    average() {
        let avg = 0
        let n = this.marks.length
        for (let i = 0; i < n; i++) {
            avg += this.marks[i] / n
        }
        return avg
    }

}
let x = new person("sai", "male", 25, [30, 20, 40, 50, 60, 70])
console.log(x.name + " " + "Average marks:" + " " + x.average())