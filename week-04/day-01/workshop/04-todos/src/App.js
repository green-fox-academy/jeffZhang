import React, { Component } from 'react'
import Item from './Item'

class App extends Component {
  state = {
    todo: [
      {
        text: 'Feed the monkey',
        prio: 2
      },
      {
        text: 'Buy milk',
        prio: 1
      }
    ],
    doneTodo: [
      {
        text: 'Sleep 8 hours',
        prio: 2
      },
      {
        text: 'Mentoring others',
        prio: 1
      }
    ]
  }

  doneTodo = (item, event) => {
    let indexOfItem = this.state.todo.indexOf(item)
    let todos = this.state.todo
    let newDone = todos.splice(indexOfItem, 1)
    let doneTodos = this.state.doneTodo
    doneTodos.push(...newDone)

    this.setState({ todo: todos, doneTodo: doneTodos })
  }

  deleteTodo = (item, event) => {
    let indexOfItem = this.state.doneTodo.indexOf(item)
    let doneTodos = this.state.doneTodo
    doneTodos.splice(indexOfItem, 1)

    this.setState({ doneTodo: doneTodos })
  }

  compareFunction = (firstEl, secondEl) => {
    return firstEl.prio - secondEl.prio
  }

  //just use sort, no time for using efficient sort method
  orderItems = itemArray => {
    return itemArray.sort(this.compareFunction)
  }

  render() {
    let todos = this.orderItems(this.state.todo)
    let doneTodos = this.orderItems(this.state.doneTodo)

    return (
      <div className="App">
        {/* this todo and done-todos should be a component, improve it in the future */}
        <div className="todo">
          <h4>TODOS</h4>
          <ul>
            {todos.map(item => (
              <Item
                {...item}
                buttonText={'done'}
                action={this.doneTodo.bind(this, item)}
                key={item.text}
              />
            ))}
          </ul>
        </div>
        <div className="done-todos">
          <h4>DONE TODOS</h4>
          <ul>
            {doneTodos.map(item => (
              <Item
                {...item}
                buttonText={'delete'}
                action={this.deleteTodo.bind(this, item)}
                key={item.text}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
