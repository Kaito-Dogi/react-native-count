import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount: number) => prevCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title="Click!" onPress={handleClick}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
