import React from 'react'
import {
  BarChart,
  ResponsiveContainer,
  XAxis,
  Bar,
  YAxis,
  Tooltip,
  Legend
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

let ageGroupDataAccumulator = ageGroups.map((ageGroup, index) => {
  return {
    category: ageGroups[index],
    Male: 0,
    Female: 0
  }
})

const AgeGroupGraph = ({ users }) => {
  const ageGroupData = users.reduce((accumulator, currentUser) => {
    if (currentUser.age >= 85) {
      if (currentUser.sex === 'Male') {
        accumulator[0].Male += 1
      } else {
        accumulator[0].Female += 1
      }
    } else if (currentUser.age >= 65) {
      if (currentUser.sex === 'Male') {
        accumulator[1].Male += 1
      } else {
        accumulator[1].Female += 1
      }
    } else if (currentUser.age >= 55) {
      if (currentUser.sex === 'Male') {
        accumulator[2].Male += 1
      } else {
        accumulator[2].Female += 1
      }
    } else if (currentUser.age >= 45) {
      if (currentUser.sex === 'Male') {
        accumulator[3].Male += 1
      } else {
        accumulator[3].Female += 1
      }
    } else if (currentUser.age >= 35) {
      if (currentUser.sex === 'Male') {
        accumulator[4].Male += 1
      } else {
        accumulator[4].Female += 1
      }
    } else if (currentUser.age >= 25) {
      if (currentUser.sex === 'Male') {
        accumulator[5].Male += 1
      } else {
        accumulator[5].Female += 1
      }
    } else if (currentUser.age >= 15) {
      if (currentUser.sex === 'Male') {
        accumulator[6].Male += 1
      } else {
        accumulator[6].Female += 1
      }
    } else if (currentUser.age >= 0) {
      if (currentUser.sex === 'Male') {
        accumulator[7].Male += 1
      } else {
        accumulator[7].Female += 1
      }
    }
    return accumulator
  }, ageGroupDataAccumulator)

  return (
    <div className="graph2">
      <h1>Age Group</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={ageGroupData} layout="vertical">
          <XAxis type="number" />
          <YAxis type="category" dataKey="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Female" fill="#C03F68" barSize={10} />
          <Bar dataKey="Male" fill="#52C2B0" barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AgeGroupGraph
