import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { styles } from "./Bibles/styles/bibleStyles";

export default function BiblesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.headers}>Pick your desired bible</Text>
      <View style={styles.buttons}>
        <Button
          marginBottom="100"
          title="Old Testament"
          onPress={() => navigation.push("EnglishOldTestament")}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="New Testament"
          onPress={() => navigation.push("EnglishNewTestament")}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="Antiguo Testamento"
          onPress={() => navigation.push("Spanish Old Testament")}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="Nuevo Testamento"
          onPress={() => navigation.push("SpanishNewTestament")}
        />
      </View>

      <Button
        color="black"
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
