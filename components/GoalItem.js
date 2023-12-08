import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ itemData, deleteHandler }) => {
  return (
    <View style={styles.items}>
      <Pressable
        android_ripple={{ color: "#000" }}
        onPress={() => deleteHandler(itemData.item.id)}
      >
        <Text style={styles.text}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  items: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  text: {
    padding: 8,
    color: "white",
  },
});
