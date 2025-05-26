const company = {
  name: 'TechCorp',
  departments: {
    dev: { employees: 15, budget: 100000 },
    hr: { employees: 3, budget: 50000 }
  }
};

const company_values = Object.values(company)
console.log(company_values)

const company_keys = Object.keys(company)
console.log(company_keys)

const company_entries = Object.entries(company)
console.log(company_entries)

const people = {
    ali: 23,
    jay: 31,
    reza: 32
}

const people_value = Object.values(people)
let sum = null

people_value.forEach((num) => {
    sum = sum + num
})
console.log(sum/people_value.length)

const numbers = [1,2,3,4]
const sumOfNumbers = numbers.reduce((acc, cur) => {
    console.log(acc)
    console.log(cur)
    return acc + cur
}, 0) // ghable parantez meghdar avalie hast, hatman meghdar avalie tayin kon ko dar mohasebate pichide gir nakoni
// hama ro baa ham jam mikone
console.log(sumOfNumbers)

const strs = ['a', 'b', 'c', 'd']
const sumOfStrs = strs.reduce((acc, cur) => {
    return acc + cur
})
console.log(sumOfStrs)

//rahe asoon tar
console.log(strs.join())
// age bala voroodi nadi ba virgool michasboone
//age meghdar tayin koni:
console.log(strs.join(':'))
console.log(strs.join('')) //bedoone hichi bechasboon

const listInStr = 'Jay, Ali, Pedram' 

console.log(listInStr.split())
// dar in halat meghdar ro mikone too array
// age bedooni ba , joda shode mitooni toosh bedi:
console.log(listInStr.split(','))
//age '' bezari ke hameye horoof ro joda mikone
console.log(listInStr.split(''))

// tabei ke beshmore esme voroodi chand ta character dare
const count_chars = (inpName) => {
    const chars = inpName.split('')
    return chars.length
}
console.log(count_chars('reza'))
console.log(count_chars('javid'))

//peyda kardane index:
let indexOfB = strs.indexOf('b')
console.log(indexOfB) //index 1 'b' hast
//age onn item nabashe too adad -1 barmigardoone
let indexOfR = strs.indexOf('r')
console.log(indexOfR)

const indexOfD = strs.findIndex((item) => {
    return item.toUpperCase() === 'D'
})
console.log(indexOfD)

const peopleAsString = 'Shakiba,Pedram,Maryam'
// ina ro tabdil be ye object kon ke key haa esm ba horoofe koochik bashe: tedade charakteresh:
// {
//     shakiba: 7,
//     pedram: 6,
//     Maryam: 6
// }
const people_arr = peopleAsString.split(',')
console.log(people_arr)
const step2 = people_arr.map((item) => {
    return [item.toLocaleLowerCase(), item.length]
})
console.log(step2)
const peopleAsObject = Object.fromEntries(step2) //Object.fromentries array do bodi ro mikone ye object
console.log(peopleAsObject)

//raveshe tamiz tar
const peopleAsobject2 = Object.fromEntries(
    peopleAsString.split(',').map((item) => {
    return [item.toLocaleLowerCase(), item.length]
})
)
console.log(peopleAsobject2)

const students = [
  {
    name: "Alice",
    courses: {
      math: 18,
      english: 14,
      history: 12
    }
  },
  {
    name: "Bob",
    courses: {
      math: 10,
      chemistry: 16,
      physics: 19
    }
  },
  {
    name: "Charlie",
    courses: {
      biology: 13,
      english: 17,
      math: 15
    }
  },
  {
    name: "Diana",
    courses: {
      art: 20,
      music: 18,
      english: 16
    }
  },
  {
    name: "Ethan",
    courses: {
      geography: 11,
      history: 14,
      math: 9
    }
  }
];

const getFailedPeople = (courseName) => {
    let failed_person = []
    const step4=students.map((person) => {
        return [person.name,person.courses[courseName]]
    })
    step4.forEach((person) => {
        if (person[1]<10) {
            failed_person.push(person[0])
        }
    })
    return failed_person
}
console.log(getFailedPeople('math'))


const studentHasCourse = (personName, courseName) => {
    const personTotal =  students.find((person) => {
        return person.name === personName
    })
    const person_courses = personTotal.courses
    const person_courses_arr = Object.keys(person_courses)
    
    const exist = person_courses_arr.some((course) => {
        return course === courseName
    })
    return exist
}
console.log(studentHasCourse('Ethan', 'music'))

const getCourseAverage = (courseName) => {
    const step1 = students.map((person) => {
        return person.courses
    })
    step1.forEach((course) => {
        return Object.values(course)
    })
    let course_sum =null
    return step1
}
console.log(getCourseAverage('math'))


const aliceTotal = students.find((person) => {
    return person.name === 'Alice'
})
console.log(aliceTotal)

const AliceValues = Object.values(aliceTotal)
console.log(AliceValues)

const AliceEntries = Object.entries(aliceTotal)
console.log(AliceEntries)

console.log(undefined || 124)
console.log(0 || 'رایگان')
