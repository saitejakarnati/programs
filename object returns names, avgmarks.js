function students(name, age, marks, name1, age1, marks1) {

    let p = [
        {
            name: name,
            age: age,
            avgmarks: function () {
                let sum = 0
                let n = marks.length
                for (i = 0; i < n; i++)
                    sum += marks[i]
                x = sum / n
                return x
            }
        },
        {
            name: name1,
            age: age1,
            avgmarks: function () {
                let sum = 0
                let n = marks1.length
                for (i = 0; i < n; i++)
                    sum += marks1[i]
                x = sum / n
                return x
            }

        }
    ]

    let txt = ""
    for (let i in p) {
        p[i].avgmarks = p[i].avgmarks().toString()
        txt += p[i].name + " " + p[i].avgmarks + " "
    }
    return txt


}

x = students("sai", 24, [30, 20, 40, 50, 60, 70], "teja", 25, [35, 45, 55, 65, 75, 85])
console.log(JSON.stringify(x))
