import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const addition = () => {
    let num = parseInt(number1) + parseInt(number2);
    setResult(num);
  }

  const subtraction = () => {
    let num = parseInt(number1) - parseInt(number2);
    setResult(num)
  }
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={{textAlign: "center"}}>Result: {result}</Text>
        <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}}  keyboardType = 'numeric' onChangeText={number1 => setNumber1(number1)}  value={number1}/>
        <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}}  keyboardType = 'numeric' onChangeText={number2 => setNumber2(number2)}  value={number2}/>
      </View>
      
      <View style={{flexDirection: "row"}}>
        <Button style={styles.button} title="+" onPress={addition} />
        <Button style={styles.button} title='-' onPress={subtraction} />
      </View>
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
  button: {
    marginTop: 8,
    marginHorizontal: 10,
    alignItems: "center"
  },
  });
