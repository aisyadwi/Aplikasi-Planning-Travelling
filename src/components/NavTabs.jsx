import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Note, About, History } from "../pages";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const colorHeader = {
  headerStyle: {
    backgroundColor: "#FFC700",
  },
  headerTintColor: "#000000",
  headerTitleStyle: {
    fontSize: 20,
  },
};

const IconBottom = (props) => {
  const { color, focused } = props.data;
  let name = focused ? props.name : `${props.name}-outline`;
  let colorSelected = focused ? color : "#000000";
  return <MaterialIcons name={name} size={28} color={colorSelected} />;
};

const NavTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#FFC700",
        inactiveTintColor: "#000000",
      }}
    >
      <Tab.Screen
        name="Note"
        component={Note}
        options={{
          ...colorHeader,
          tabBarIcon: (props) => <IconBottom name="home" data={props} />,
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
            ...colorHeader,
            tabBarIcon: (props) => <IconBottom name="document-attach" data={props} />,
        }}
      />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            ...colorHeader,
            tabBarIcon: (props) => <IconBottom name="person" data={props} />,
          }}
        />
    </Tab.Navigator>
  );
};

export default NavTabs;

const styles = StyleSheet.create({});
