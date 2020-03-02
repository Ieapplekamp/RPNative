import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const App = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.containerText}>Cognative Records</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    paddingTop: 50,
    // justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "pink",
  },
  containerText: {
    fontSize: 25,
    padding: 10,
    backgroundColor: "cyan",
    
    // justifyContent: 'center',
    // alignItems: "stretch",
    // alignSelf: "stretch",

  },
});

export default App;
