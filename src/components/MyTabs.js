import React from "react";
import { StyleSheet } from "react-native";
import { ScrollableTab, Text, Tab, Tabs, Icon, TabHeading } from "native-base";
import ThemeColors from "../constants/ThemeColors";
import Chats from "./Chats";


const MyTabs = () => {
  return (
    <Tabs
      initialPage={1}
      renderTabBar={() => (
        <ScrollableTab style={{ backgroundColor: ThemeColors.primary }} />
      )}
    >
      <Tab
        heading={
          <TabHeading style={styles.tabStyle}>
            <Icon style={styles.tabText} name="camera" />
          </TabHeading>
        }
      >
        <Text>camera</Text>
      </Tab>
      <Tab
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.tabStyle}
        textStyle={styles.tabText}
        activeTextStyle={styles.activeTabText}
        heading="Chats"
      >
        <Chats/>
      </Tab>
      <Tab
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.tabStyle}
        textStyle={styles.tabText}
        activeTextStyle={styles.activeTabText}
        heading="status"
      >
        <Text>Status View</Text>
      </Tab>
      <Tab
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.tabStyle}
        textStyle={styles.tabText}
        activeTextStyle={styles.activeTabText}
        heading="calls"
      >
        <Text>Calls view</Text>
      </Tab>
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: ThemeColors.primary,
  },
  tabText: {
    textTransform: "uppercase",
    color: "lightgrey",
  },
  activeTabText: {
    textTransform: "uppercase",
    color: "white",
  },
});

export default MyTabs;
