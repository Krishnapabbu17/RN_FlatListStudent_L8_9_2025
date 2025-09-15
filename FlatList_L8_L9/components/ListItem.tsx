import {
  dataType
} from "@/data/appData";
import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, View, TouchableOpacity, FlatList, } from "react-native";


// declare data type for props here
/* I am giving this ListItem component the data it needs
to display, the status of what is selected, and the ability 
to update the selected status when clicked on
*/
type propsType = {
  item: dataType;
  isSelected: boolean;
  onPress: (item: dataType) => void
}

const ListItem:React.FC<propsType> = ({item, isSelected, onPress}) => {
  return (
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
  )};
};

export default ListItem;

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.secondary,
    padding: 5,
    height: 60,
    width: 350,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 5,
  },
  text: {
    color: colors.text.dark,
    fontSize: 20,
  },
});
