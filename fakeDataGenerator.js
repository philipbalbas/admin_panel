const faker = require('faker')
const fs = require('fs')
const path = require('path')

const data = {}

function randomGender () {
  const rand = Math.round(Math.random())
  return rand ? 'Male' : 'Female'
}

function randomAge () {
  return Math.floor(Math.random() * 101)
}

function userGenerator (num) {
  let users = []
  for (let i = 0; i < num; i++) {
    users.push({
      id: faker.random.number(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      joinDate: faker.date.recent(),
      phoneNumber: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      sex: randomGender(),
      age: randomAge()
    })
  }
  return users
}

data.users = userGenerator(100)

fs.appendFileSync(path.resolve('server', 'data.json'), JSON.stringify(data))
