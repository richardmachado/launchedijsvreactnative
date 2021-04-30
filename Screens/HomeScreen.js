import React from "react";
import { View, Button, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{ width: 375, height: 325 }}
        source={{
          uri: "https://ijsv.netlify.app/static/media/logo.9d4984e3.jpg",
        }}
      />
      <View style={{ marginBottom: 30, marginTop: 20 }}>
        <Button title="Bibles" onPress={() => navigation.navigate("Bibles")} />
      </View>
      <View>
        <Button title="Temas" onPress={() => navigation.navigate("Temas")} />
      </View>
    </View>
  );
}
