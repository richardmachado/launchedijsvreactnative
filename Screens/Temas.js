import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import { SafeAreaView } from "react-native-safe-area-context";

export default function Temas() {
  const [temas, setTemas] = useState([]);

  useEffect(() => {
    axios
      .get("https://ijsv-backend.herokuapp.com/api/temas")
      .then((response) => {
        setTemas(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!temas) {
    return (
      <Text style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        Loading...
      </Text>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textBox}>
        {temas.map((themes) => {
          return (
            <View key={themes.id}>
              <Text style={styles.title}>{themes.title}</Text>
              <Text style={styles.body}>{themes.body1}</Text>
              <Text style={styles.body}>{themes.body2}</Text>
              <Text style={styles.body}>{themes.body3}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "skyblue",
    paddingTop: 20,
    paddingBottom: 10,
  },
  textBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 25,
  },
  header: {
    textAlign: "center",
    fontSize: 32,
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },

  body: {
    textAlign: "left",
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
});
