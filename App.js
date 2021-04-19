import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/*Tasks*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tarefas de Hoje</Text>

        <View style={styles.items}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontsize: 24,
    fontWeight: "bold",
  },
  items: {},
});
