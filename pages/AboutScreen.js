import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import axios from "axios";

function AboutScreen() {
  const [data, setData] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api.github.com/users/nurramadhanfauzan")
      . then(res => setData(res.data))
        .catch((e) => alert("System failed!!!", e.message))
    };
    fetchData();
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: data.avatar_url
          }}
        style={styles.headerImage}
        />
        <Text style={styles.headerText}>
          Username : {data.login}
        </Text>
        <Text style={styles.headerTextDesc}>Nama : {data.name}</Text>
        <Text style={styles.headerTextDesc}>E-mail : {data.email}</Text>
        <Text style={styles.headerTextDesc}>Bio : {data.bio}</Text>
      </ View>
      <ScrollView>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutText}>Game About: </Text>
          <Text style={styles.aboutText}>
            Guardian Tales is a 2020 action role-playing video game developed by Kong Studios and published by the South Korean publisher Kakao Games. The game initially soft-launched in parts of Southeast Asia on February 24, 2020 for iOS and Android and then officially on July 28, 2020 for the rest of the world.
            A Chinese version published by Bilibili was released on April 27, 2021, and a Japanese version self-published by Kong Studios, in collaboration with Shanghai Yostar, was released on October 6, 2021. A port for the Nintendo Switch was initially announced on May 2021 and scheduled for release on the later half of the same year, but was quietly delayed to October 4, 2022.
          </Text>
          <Text> </Text>
          <Text style={styles.aboutText}>
            The game tells the story of the Guardian Knight, a newly recruited member of the Guardians, Kanterbury Kingdom's royal guard. After completing his/her first training as a Guardian, the Guardian Knight is confronted with a horde of enemies named "The Invaders" who want to rule the world. Guardian Tales was positively received by critics and players, praised for its creativity and evocations of classic JRPGs.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10
  },
  headerContainer: {
    backgroundColor: "rgba(23,18,10,0.2)",
    borderRadius: 20,
    alignItems: "center",
    paddingBottom: 10
  },
  headerImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginVertical: 10
  },
  headerText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
  },
  headerTextDesc: {
    color: "#fff",
    fontSize: 20,
  },
  aboutContainer: {
    backgroundColor: "rgba(241,227,211,0.4)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  aboutText: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default AboutScreen;