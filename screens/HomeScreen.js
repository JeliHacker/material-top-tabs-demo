import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return <View>
    <Text style={styles.text}>Material Tabs Demo</Text>
    <Button 
      onPress={() => navigation.navigate("Tabs")}  
      title="Go to Tabs Demo"
    />
  </View>
}


const styles = StyleSheet.create({
    text: {
      fontSize: 30,
    },
  });
  
  export default HomeScreen;