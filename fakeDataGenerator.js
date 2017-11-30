import faker from 'faker'
import fs from 'fs'
import path from 'path'

const data = {}

function randomGender () {
  const rand = Math.round(Math.random())
  return rand ? 'Male' : 'Female'
}

function randomAge () {
  return Math.floor(Math.random() * 101)
}

function userGenerator (num) {
  let id = 1
  let users = []
  for (let i = 0; i < num; i++) {
    users.push({
      id,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      joinDate: faker.date.past(),
      phoneNumber: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      sex: randomGender(),
      age: randomAge()
    })
    id += 1
  }
  return users
}

data.users = userGenerator(1000)

fs.appendFileSync(path.resolve('server', 'data.json'), JSON.stringify(data))
