import React, { Component } from 'react';
import { SafeAreaView, Button, StyleSheet, View, Text } from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoInput: '',
    }
  }

  render() {
    console.log('Main Props', this.props)
    
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Redux To Do List</Text> 
        </View>

        <View>
          <Button 
              title="Add Task"
              onPress={() => this.handleSubmit()}
          />
          <Button 
              title="Remove Completed"
              onPress={() => this.props.clearAllTasks()}
          />
          <Button 
              title="Empty List"
              onPress={() => this.props.deleteAllTasks()}
          />
 
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

// Task: Connect this function to redux
export default Main;
