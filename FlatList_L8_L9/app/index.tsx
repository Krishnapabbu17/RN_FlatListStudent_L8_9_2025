import defaultStyles from "@/styles/defaultStyles";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function Index() {

  type dataType = {
    id: string; // refer to the unique identifier
    title: string; // text we will show in list
  }
  // using all caps because DATA array will not change
  // during its use
  const DATA: dataType[] = [
    {id: "1", title: "First Item"},
    {id: "2", title: "Second Item"},
    {id: "3", title: "Third Item"},
    {id: "4", title: "Fourth Item"},
  ];

  // create a simple function telling me what was selective
  const selectedList = (item: dataType) => {
    console.log(item.title);
    setSelectedId(item.id);
  };
  // add a state variable to keep track of which id is selected 
  const [selectedId, setSelectedId] = useState<string>("1");
  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList 
          data= {DATA}
          keyExtractor={(item: dataType) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => selectedList(item)}>
              <View style = {styles.flatListRow}>
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )} 
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  flatListRow: {
    backgroundColor:'lightgreen',
    marginBottom: 10,
    padding: 5,
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
