import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDelete from "../components/ListItemDelete";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "d1",
    image: require("../assets/HeadShotBB.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "d2",
    image: require("../assets/HeadShotBB.png"),
  },
];

function Messages(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // delete the meesage from messages
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListItemDelete onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "d2",
              image: require("../assets/HeadShotBB.png"),
            },
          ])
        }
      />
    </Screen>
  );
}

//const styles = StyleSheet.create({});
export default Messages;
