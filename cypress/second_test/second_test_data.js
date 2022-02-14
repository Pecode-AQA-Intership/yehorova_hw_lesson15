import faker from 'faker'


let userDepartmentArray = ['Compliance', 'Insurance', 'Legal'];
let department = userDepartmentArray[Math.floor(Math.random() * userDepartmentArray.length)];

export const secondTestUser = [
    { selector: "#firstName", value: faker.name.firstName() },
    { selector: "#lastName", value: faker.name.lastName() },
    { selector: "#userEmail", value: faker.internet.email() },
    { selector: "#age", value: faker.datatype.number({ min: 18, max: 60 }) },
    { selector: "#salary", value: faker.datatype.number({ min: 1000, max: 15000 }), },
    { selector: "#department", value: department }
]

export const secondTestChangeUser = [
    { selector: "#firstName", value: faker.name.firstName() },
    { selector: "#lastName", value: faker.name.lastName() },
    { selector: "#userEmail", value: faker.internet.email() },
    { selector: "#age", value: faker.datatype.number({ min: 18, max: 60 }) },
    { selector: "#salary", value: faker.datatype.number({ min: 1000, max: 15000 }), },
    { selector: "#department", value: department }
]

export const currentUser = {
    currentUserFirstName: 'Alden',
    currentUserLastName: 'Cantrell',
    currentUserEmail: 'alden@example.com',
    currentUserAge: '45',
    currentUserSalary: '12000',
    curentUserDepartment: 'Compliance',
}
