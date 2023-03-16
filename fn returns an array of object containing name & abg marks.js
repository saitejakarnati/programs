function students(name, age, marks, name1, age1, marks1) {

    let p = [
        {
            name: name,
            age: age,
            avgmarks: function () {
                let x = 0
                let n = marks.length
                for (i = 0; i < n; i++)
                    x += marks[i] / n
                return x
            }
        },
        {
            name: name1,
            age: age1,
            avgmarks: function () {
                let x = 0
                let n = marks1.length
                for (i = 0; i < n; i++)
                    x += marks1[i] / n
                return x
            }

        }
    ]
    p[0].avgmarks = p[0].avgmarks().toString();
    p[1].avgmarks = p[1].avgmarks().toString();

    return p


}

x = students("sai", 24, [30, 20, 40, 50, 60, 70], "teja", 25, [35, 45, 55, 65, 75, 85])
let y = JSON.stringify(x)
let z = JSON.parse(y)
console.log(y)
console.log(z)