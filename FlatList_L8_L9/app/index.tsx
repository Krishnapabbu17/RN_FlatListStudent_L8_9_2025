import ListItemSseparator from "@/components/ListItemSeperator";
import colors from "@/styles/colors";
import defaultStyles from "@/styles/defaultStyles";
import { useState } from "react";

import { DATA, dataType } from "@/data/appData";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function Index() {


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
          extraData={selectedId}
          keyExtractor={(item: dataType) => item.id}
          ItemSeparatorComponent={() => 
          <ListItemSseparator color={colors.text.light} />}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => selectedList(item)}>
              <View style = {[styles.flatListRow,
                {
                  backgroundColor: item.id === selectedId
                  ? colors.primary
                  : colors.secondary,
                }
              ]}>
                <Text style = {[styles.titleText,
                  {
                    color: item.id === selectedId
                    ? colors.text.light
                    : colors.text.dark,
                  }
                ]}>{item.title}</Text>
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
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
