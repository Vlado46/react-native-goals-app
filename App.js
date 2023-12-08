import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function startAddGoalHandler() {
    setIsVisible(true);
  }
  function endAddGoalHandler() {
    setIsVisible(false);
  }

  function addGoalHandler(input) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: input, id: Math.random().toString() },
    ]);
    setIsVisible(false);
  }

  function deleteHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((g) => g.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          endAddGoalHandler={endAddGoalHandler}
          addGoalHandler={addGoalHandler}
          isVisible={isVisible}
        />
        <View style={styles.goals}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem itemData={itemData} deleteHandler={deleteHandler} />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goals: {
    flex: 5,
  },
});
