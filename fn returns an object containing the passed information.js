function student(name, gender, age, telugu, hindi, english, maths, science, social) {
    let p = {
        name: name, gender: gender, age: age,
        marks: {
            telugu: telugu,
            hindi: hindi,
            english: english,
            maths: maths,
            science: science,
            social: social
        }
    }
    return p
}
let x = student("sai", "male", 25, 45, 67, 56, 37, 78, 69);
console.log(x)
console.log(x.marks)