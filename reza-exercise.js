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
      math: 15,
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