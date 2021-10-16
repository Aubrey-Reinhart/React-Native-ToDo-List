import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, clearAllTasks, deleteAllTasks, toggleToDo } from './redux/ActionCreators';
import { View, Text, Card } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

// Task:  Import functions from ActionCreators

// Task: Assign reducer to prop
const mapStateToProps = (state) => {
  return {
    todo: state.ToDo
  };
};

// Task: add functions to dispatch
const mapDispatchToProps = {
  addTodo,
  clearAllTasks,
  toggleToDo,
  deleteAllTasks
};

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoInput: '',
    }
  }

  handleSubmit() {
    if (this.state.todoInput.length > 0) {
      // Task: add a new line to dispatch the state value to the action creator
      this.props.addTodo(this.state.todoInput);
      //This line doesn't change
      this.setState({ todoInput: '' })
    }
  }

  render() {
    console.log('Main Props', this.props)
    return (
      <View>
        <Text>Redux To Do List</Text>
        <Unorderedlist><Text>
          <View>
            <input
              type='text'
              onChange={(e) => this.setState({ todoInput: e.target.value })}
              value={this.state.todoInput}
            />
            <Card>
              <button onClick={() => this.handleSubmit()}>Add Task</button>
              <button onClick={() => this.props.clearAllTasks()}>Remove Completed</button>
              <button onClick={() => this.props.deleteAllTasks()}>Empty List</button>
            </Card>
          </View>
          {/* DONE Task: create a map that displays the list item. don't forget the unique key. we will be using the index of the array*/}
            {this.props.todo.todo.map((todo, index) => {
              return (
                <View>
                  <Text key={index}>
                    <input
                      type='checkbox'
                      // Task: replace true with the property used to show completion
                      //DONE
                      checked={todo.complete}
                      // Task: dispatch toggle instead of console.log. Use the index of the array
                      //DONe
                      onChange={() => this.props.toggleToDo(index)}
                    />
                    {/* DONE Task: Replace this with task activity */}
                    {todo.activity}
                  </Text>
                </View>
              )}
            )}
        </Text></Unorderedlist>
      </View>
    )
  }
}

// Task: Connect this function to redux
export default connect(mapStateToProps, mapDispatchToProps)(Main);
