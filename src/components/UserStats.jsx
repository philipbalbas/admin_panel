import React from 'react'
import {
  BarChart,
  ResponsiveContainer,
  XAxis,
  CartesianGrid,
  Bar,
  YAxis,
  Tooltip,
  Legend,
  LabelList
} from 'recharts'

const ageGroups = [
  '85 >',
  '65-84',
  '55-64',
  '45-54',
  '35-44',
  '25-34',
  '15-24',
  '< 14'
]

let ageGroupDataAccumulator = {}
ageGroups.map((ageGroup, index) => {
  ageGroupDataAccumulator[ageGroups[index]] = {
    male: 0,
    female: 0
  }
})

const UserStats = ({ users }) => {
  const ageGroupData = users.reduce((accumulator, currentUser) => {
    // console.log(accumulator['85 >'])
    if (currentUser.age >= 85) {
      if (currentUser.sex === 'Male') {
        accumulator[ageGroups[0]].male += 1
      } else {
        accumulator[ageGroups[0]].female += 1
      }
    } else if (currentUser.age >= 65) {
      if (currentUser.sex === 'Male') {
        accumulator[ageGroups[1]].male += 1
      } else {
        accumulator[ageGroups[1]].female += 1
      }
    } else if (currentUser.age >= 55) {
      if (currentUser.sex === 'Male') {
        accumulator[ageGroups[2]].male += 1
      } else {
        accumulator[ageGroups[2]].female += 1
      }
    } else if (currentUser.age >= 45) {
      if (currentUser.sex === 'Male') {
        accumulator[ageGroups[3]].male += 1
      } else {
        accumulator[ageGroups[3]].female += 1
      }
    } else if (currentUser.age >= 35) {
      if (currentUser.sex === 'Male') {
        accumulator[ageGroups[4]].male += 1
      } else {
        accumulator[ageGroups[4]].female += 1
      }
    } else if (currentUser.age >= 25) {
      if (currentUser.sex === 'Male') {
        accumulator[ageGroups[5]].male += 1
      } else {
        accumulator[ageGroups[5]].female += 1
      }
    } else if (currentUser.age >= 15) {
      if (currentUser.sex === 'Male') {
        accumulator[ageGroups[6]].male += 1
      } else {
        accumulator[ageGroups[6]].female += 1
      }
    } else if (currentUser.age >= 0) {
      if (currentUser.sex === 'Male') {
        accumulator[ageGroups[7]].male += 1
      } else {
        accumulator[ageGroups[7]].female += 1
      }
    }
    return accumulator
  }, ageGroupDataAccumulator)

  console.log(ageGroupData)

  return (
    <ResponsiveContainer width="50%" height={1500}>
      <BarChart data={ageGroupData} layout="vertical">
        <XAxis type="number" />
        <YAxis type="category" dataKey="age" />
        <Bar dataKey="age" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default UserStats
