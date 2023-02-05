import { StyleSheet, Text, View, FlatList} from 'react-native';

export default function Calculator({ route, navigation }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Text style={{fontSize: 18}}>History</Text>
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
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
  list: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center"
  }
});
