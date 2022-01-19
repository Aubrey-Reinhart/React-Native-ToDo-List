import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskInputField from './src/components/TaskInputField';
import TaskItem from './src/components/TaskItem';

export default function App() {
  //establishing state using hooks for tasks and setTasks
  const [tasks, setTasks] = useState([]);
  //establishing how to add tasks via the app. If task doesn't exist return list. If there is a new task it adds the task to the task state and returns the new task list
  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }
  //establishes how to delete tasks via the app. Filters the list delets the task and the index number changes depending on the new order of the list
  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What do you need to do today?</Text>
        <ScrollView style={styles.scrollView}>
          {
            tasks.map((task, index) => {
              return (
                <View key={index} style={styles.taskContainer}>
                  <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
                </View>
              );
            })
          }
        </ScrollView>
      <TaskInputField addTask={addTask}/>
    </View>
  );
}

//stylesheets for App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 60,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
  taskInput: {
    marginBottom: 30,
  }
});