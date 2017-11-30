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

function randomType () {
  const rand = Math.floor(Math.random() * 5)
  if (rand <= 3) {
    return 'Customer'
  } else {
    return 'Provider'
  }
}

function randomDate () {
  const rand = Math.round(Math.random())
  return rand ? faker.date.recent() : faker.date.past()
}

function userGenerator (num) {
  let id = 1
  let users = []
  for (let i = 0; i < num; i++) {
    users.push({
      id,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      joinDate: randomDate(),
      phoneNumber: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      sex: randomGender(),
      age: randomAge(),
      type: randomType()
    })
    id += 1
  }
  return users
}

data.users = userGenerator(1000)

fs.appendFileSync(path.resolve('server', 'data.json'), JSON.stringify(data))
