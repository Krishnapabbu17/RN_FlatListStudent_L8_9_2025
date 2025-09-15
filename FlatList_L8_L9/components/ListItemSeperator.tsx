import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type propsType = {
  color ?: string; // optional color
}

const ListItemSseparator:React.FC<propsType> = ({color}) => {
  return <View 
  style = {[styles.separator,
    {backgroundColor: color || colors.theme.light.text}
  ]}/>;
};

// sets the backgroundColor to color IF, the user passed in a prop
//  if no prop was passed in, then default is used

export default ListItemSseparator;

const styles = StyleSheet.create({
  separator: {
    height: 3,
    width: '100%', // 100% width of flatlist
   
  } as ViewStyle,
});
