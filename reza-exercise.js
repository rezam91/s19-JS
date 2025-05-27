const user = {
  name: "jay",
  age: 31,
  skills: ["html", "css", "js"],
  job: {
    title: "front end developer",
    company: "Google",
  },
};

const company = {
  name: "TechCorp",
  departments: {
    dev: { employees: 15, budget: 100000 },
    hr: { employees: 3, budget: 50000 },
  },
};

// a) Access the selected dep budget
const getSelctedDepartmentBudget = (dep) => {
    if (!Object.keys(company.departments).some((selecteddeps) => {
        return selecteddeps === dep
    })) {
        return 'There is no such department in the company!'
    }
    return company.departments[dep].budget
}
console.log(getSelctedDepartmentBudget('hr'))

// c) Calculate total employees
//Method 1
let totalEmployee =null
Object.values(company.departments).forEach((deps) => {
    totalEmployee = totalEmployee + deps.employees
})
console.log(totalEmployee)
//Method 2
const totalEmployeesArray = Object.values(company.departments).map((item) => {
    return item.employees
})
console.log(totalEmployeesArray.reduce((acc, cur) => {
    return acc + cur
},0))



const people = {
  ali: 23,
  jay: 31,
  reza: 32,
};

const agesArray = Object.values(people)
console.log(agesArray.reduce((acc, cur) => {
    return acc + cur
},0)/agesArray.length)

const peopleAsString = "Shakiba,Pedram,Maryam";
const step2 = peopleAsString.split(',').map((person) => {
    return [person.toLocaleLowerCase(), person.length]
})
console.log(Object.fromEntries(step2))

const students = [
  {
    name: "Alice",
    courses: {
      math: 18,
      english: 14,
      history: 12,
    },
  },
  {
    name: "Bob",
    courses: {
      math: 10,
      chemistry: 16,
      physics: 19,
    },
  },
  {
    name: "Charlie",
    courses: {
      biology: 13,
      english: 17,
      math: 5,
    },
  },
  {
    name: "Diana",
    courses: {
      art: 20,
      music: 18,
      english: 16,
    },
  },
  {
    name: "Ethan",
    courses: {
      geography: 11,
      history: 14,
      math: 9,
    },
  },
];

//Calculating student's average
const getAverageOfStudent = (name) => {
    const studentProfile = students.find((person) => {
        return person.name === name
    })
    if (!studentProfile) {
        return 'There is no such student'
    }
    if (!Object.values(studentProfile.courses).length) {
        return 'There is No Courses'
    }
    return Object.values(studentProfile.courses).reduce((acc, cur) => {
        return acc + cur
    },0)/Object.values(studentProfile.courses).length
}
console.log(getAverageOfStudent('Ethan'))

//Calculating selected course average in class
const getSelectedLessonAverage = (course) => {
    const selectedCourseScores = students.map((person) => {
        return person.courses[course]
    })
    const step4 = selectedCourseScores.filter((mark) => {
        return !!mark
    })
    return step4.reduce((acc, cur) => {
        return acc + cur
    },0)/step4.length
}
console.log(getSelectedLessonAverage('music'))

//Calculating score of selected course for selected student
const getscoresOfSelectedCourse = (name, course) => {
    const step3 = students.find((person)=>{
        return person.name === name
    })
    if (!step3) {
        return 'There is no such student!'
    }
    if (!step3.courses[course]) {
        return 'Selected student does not have selected lesson'
    }
    return step3.courses[course]
}
console.log(getscoresOfSelectedCourse('Ethan','math'))

//student has selected course ?
const studentHasCourse = (name, course) => {
    const step5=students.find((person) => {
        return person.name === name
    })
    if (!step5) {
        return 'There is no such student'
    }
    if (!step5.courses[course]) {
        return false
    }
    return true
}
console.log(studentHasCourse('Ethan', 'geography'))

//Get Failed people on selected course
const getFailedPeople = (course) => {
    return students.filter((students) => {
        return students.courses[course]<10
    }).map((namestu) => {
        return namestu.name
    })
}
console.log(getFailedPeople('math'))