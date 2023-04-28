import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonPress = (value) => {
    setInput(input + value);
  };

  const evaluateExpression = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const Button = ({ label, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "+", "-", "*", "/"].map((item) => (
          <Button
            key={item}
            label={item.toString()}
            onPress={() => handleButtonPress(item.toString())}
          />
        ))}
        <Button label="C" onPress={clearInput} />
        <Button label="=" onPress={evaluateExpression} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  resultContainer: {
    marginBottom: 20,
    alignItems: "flex-end",
  },
  input: {
    fontSize: 24,
    marginBottom: 10,
  },
  result: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    alignItems: "center",
    margin: 5,
    minWidth: 50,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
