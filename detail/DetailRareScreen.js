import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import axios from "axios";

const DetailRareScreen = ({ route }) => {
  const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          await axios
          .get('https://api.npoint.io/66b68fb3be60185f1d69/rarehero/' + (route.params.msg - 1))
          .then(res => setData(res.data))
          .catch((e) => alert("System failed!!!", e.message))
        };
    fetchData();
    }, []);

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{flexDirection: "row", alignSelf: "center", paddingVertical: 7}}></View>
        <View style={styles.headerContainer}>
          <Image
            source={{
              uri: data.avatar
            }}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>
            Name : {data.nama}
          </Text>
          <Text style={styles.headerTextDesc}>Role : {data.role}</Text>
          <Text style={styles.headerTextDesc}>Element : {data.element}</Text>
        </View>
        <View style={{flexDirection: "row", alignSelf: "center", paddingVertical: 7}}></View>
        <ScrollView contentContainerStyle={styles.profileContainer}>
          <Text style={styles.headerText}>Story : </Text>
          <Text style={styles.headerTextDesc}>{data.story}</Text>
        </ScrollView>
        <View style={{flexDirection: "row", alignSelf: "center", paddingVertical: 7}}></View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 0
    },
    headerContainer: {
      backgroundColor: "#424242",
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
    profileContainer: {
      backgroundColor: "#424242",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    blankContainer: {
      paddingVertical: 10,
      backgroundColor: "#5FDDEF",
      borderRadius: 120,
      alignSelf: "center",
      width: "33%"
    },
    blankDarkContainer: {
      paddingVertical: 10,
      backgroundColor: "#27c7ff",
      borderRadius: 120,
      alignSelf: "center",
      width: "33%"
    }
  });

export default DetailRareScreen;