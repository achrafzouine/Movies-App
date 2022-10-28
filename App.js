import { StyleSheet, Text, View, ScrollView } from "react-native";
import Navigator from "./routes/Navigator";

const App = () => {
  return <Navigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#edeff2",
  },
});

export default App;
