import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Calculator({ navigation }) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const [data, setData] = useState([]);

  const calculate = (operator) => {
    if (operator === "+") {
      const calc = parseFloat(number1) + parseFloat(number2);
      setResult(calc);
      setNumber1(0);
      setNumber2(0);
      const entry = number1 + " + " + number2 + " = " + calc;
      setData([...data, { key: entry }]);
    } else {
      const calc = parseFloat(number1) - parseFloat(number2);
      setResult(calc);
      setNumber1(0);
      setNumber2(0);
      const entry = number1 + " - " + number2 + " = " + calc;
      setData([...data, { key: entry }]);
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>Result: {result.toFixed(2)}</Text>
        <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}}  keyboardType = 'numeric' onChangeText={number1 => setNumber1(number1)}  value={number1}/>
        <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}}  keyboardType = 'numeric' onChangeText={number2 => setNumber2(number2)}  value={number2}/>
      </View>

      <View style={styles.buttons}>
        <Button title="+" onPress={() => calculate("+")}/>
        <Button title='-' onPress={() => calculate("-")}/>
        <Button title="History" onPress={() => navigation.navigate("History", {data: data})} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    width: 165
  }
});
