import React, { Component } from 'react'
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer
} from 'recharts'
import { getMonth, getDate, getYear, isThisMonth, isThisYear } from 'date-fns'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const monthAccumulator = months.map((month, index) => {
  return {
    month: months[index],
    category: months[index]
      .substring(0, 3)
      .replace(/\w/g, l => l.toUpperCase()),
    count: 0
  }
})

class SignUpGraph extends Component {
  state = {
    data: []
  }

  monthlyJoinDateData = undefined
  dailyJoinDateData = undefined
  yearlyJoinDateData = undefined

  componentDidMount () {
    const { users } = this.props
    this.monthlyJoinDateData = users.reduce((accumulator, currentUser) => {
      if (isThisYear(currentUser.joinDate)) {
        const joinMonth = months[getMonth(currentUser.joinDate)]
        if (joinMonth === months[0]) {
          accumulator[0].count += 1
        } else if (joinMonth === months[1]) {
          accumulator[1].count += 1
        } else if (joinMonth === months[2]) {
          accumulator[2].count += 1
        } else if (joinMonth === months[3]) {
          accumulator[3].count += 1
        } else if (joinMonth === months[4]) {
          accumulator[4].count += 1
        } else if (joinMonth === months[5]) {
          accumulator[5].count += 1
        } else if (joinMonth === months[6]) {
          accumulator[6].count += 1
        } else if (joinMonth === months[7]) {
          accumulator[7].count += 1
        } else if (joinMonth === months[8]) {
          accumulator[8].count += 1
        } else if (joinMonth === months[9]) {
          accumulator[9].count += 1
        } else if (joinMonth === months[10]) {
          accumulator[10].count += 1
        } else if (joinMonth === months[11]) {
          accumulator[11].count += 1
        }
        return accumulator
      }
      return accumulator
    }, monthAccumulator)

    this.dailyJoinDateData = users
      .reduce((accumulator, currentUser) => {
        if (isThisMonth(currentUser.joinDate)) {
          const date = getDate(currentUser.joinDate)
          if (accumulator.some(obj => obj.hasOwnProperty('category'))) {
            if (accumulator.some(obj => obj.category === date)) {
              const index = accumulator.findIndex(obj => obj.category === date)
              accumulator[index].count += 1
            } else {
              accumulator.push({
                category: date,
                count: 1
              })
            }
          } else {
            accumulator.push({
              category: date,
              count: 1
            })
          }
          return accumulator
        }
        return accumulator
      }, [])
      .sort((curVal, nextVal) => curVal.category - nextVal.category)

    this.yearlyJoinDateData = users
      .reduce((accumulator, currentUser) => {
        const year = getYear(currentUser.joinDate)
        if (accumulator.some(obj => obj.hasOwnProperty('category'))) {
          if (accumulator.some(obj => obj.category === year)) {
            const index = accumulator.findIndex(obj => obj.category === year)
            accumulator[index].count += 1
          } else {
            accumulator.push({
              category: year,
              count: 1
            })
          }
        } else {
          accumulator.push({
            category: year,
            count: 1
          })
        }
        return accumulator
      }, [])
      .sort((curVal, nextVal) => curVal.category - nextVal.category)

    this.setState({ data: this.monthlyJoinDateData })
  }

  handleClick = e => {
    const { value } = e.target
    if (value === 'daily') {
      this.setState({ data: this.dailyJoinDateData })
    } else if (value === 'monthly') {
      this.setState({ data: this.monthlyJoinDateData })
    } else if (value === 'yearly') {
      this.setState({ data: this.yearlyJoinDateData })
    }
  }

  render () {
    return (
      <div className="graph1 bg-white">
        <button onClick={this.handleClick} value="daily">
          Daily
        </button>
        <button onClick={this.handleClick} value="monthly">
          Monthly
        </button>
        <button onClick={this.handleClick} value="yearly">
          Yearly
        </button>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={this.state.data}>
            <XAxis
              dataKey="category"
              type="category"
              padding={{ left: 30, right: 30 }}
            />
            <YAxis dataKey="count" type="number" domain={[ 'auto', 'auto' ]} />
            <Line dataKey="count" stroke="#52C2B0" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default SignUpGraph
