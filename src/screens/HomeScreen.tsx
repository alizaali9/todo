import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import styles from '../styles/HomeScreenStyles'
import SwipableTasks from '../components/SwipableTasks'
import APIs from '../apis/apis'
import { colors } from '../constants/colors'

const HomeScreen = (() => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<{ id: string }[]>([]);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [loading, setLoading] = useState(false);

  const memoizedTasks = useMemo(() => tasks, [tasks]);

  const fetchTasks = async () => {
    const tasksData = await APIs.getTasks();
    console.log("Data:", tasksData);
    const notCompletedTasksCount = (tasksData as { id: string; completed: boolean }[]).filter(taskData => !taskData.completed).length;
    setPendingTasks(notCompletedTasksCount);
    setTasks(tasksData);
  };

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await fetchTasks();
      setLoading(false);
    }
    fetch();
  }, []);

  const handleAddTask = async (task: any) => {
    if (task != '') {
      setLoading(true);
      await APIs.addTask(task);
      await fetchTasks();
      setTask('');
      setLoading(false);
    }
  };

  const handleDeleteTask = async (taskId: any) => {
    setLoading(true);
    await APIs.deleteTask(taskId);
    await fetchTasks();
    setLoading(false);
  };


  const handleToggleCompletion = async (taskId: any) => {
    setLoading(true);
    await APIs.updateTask(taskId);
    await fetchTasks();
    setLoading(false);
  };



  return (
    (
      <SafeAreaView style={styles.safearea}>
        <Text style={styles.heading}>TODO App</Text>
        <View style={styles.addTask}>
          <TextInput
            style={styles.input}
            value={task}
            onChangeText={(text) => setTask(text)}
            placeholder="Add your new todo"
            placeholderTextColor={"#83878D"}
          />
          <TouchableOpacity onPress={() => {
            handleAddTask(task);
          }} style={styles.addButton} activeOpacity={0.7}>
            <Image source={require('../assets/add.png')} />
          </TouchableOpacity>
        </View>
        {
          loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size={"large"} color={colors.primary} />
            </View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ overflow: 'hidden' }} style={{ marginTop: 10, marginBottom: 80 }}>
              {memoizedTasks.map((task, index) => (
                <SwipableTasks
                  key={index}
                  task={task}
                  handleDeleteTask={() => handleDeleteTask(task.id)}
                  handleToggleCompletion={() => handleToggleCompletion(task.id)}
                />
              ))}
            </ScrollView>
          )
        }


        <View style={styles.pendingTasksCon}>
          <Text style={styles.taskText}>You have {pendingTasks} pending tasks</Text>
          <TouchableOpacity style={styles.clearAll}
            activeOpacity={0.7}
            onPress={async () => {
              if (memoizedTasks.length != 0) {
                setLoading(true);
                await APIs.deleteAllTasks();
                await fetchTasks();
                setLoading(false);
              }
            }}><Text style={[styles.taskText, { color: colors.white }]}>Clear All</Text></TouchableOpacity>
        </View>

      </SafeAreaView>
    )
  )
})

export default HomeScreen