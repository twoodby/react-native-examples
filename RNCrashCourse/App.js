import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
        <View style={styles.inputContainer } >
          <TextInput style={styles.textInput} placeholder="Your course goal!" />
          <Button title="Add Goal" />
        </View>
        <View>
          <Text>List of goals....</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
    paddingHorizontal:20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  textInput: {
    borderWidth: 1,
    borderColor: `#cccccc`,
    width: '80%',
    marginEnd: 8,
    paddingHorizontal: 4,
  }

});
