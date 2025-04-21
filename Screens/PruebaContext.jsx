// src/App.js
import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import { BackendContext } from "../Context/BackendContext";

export default function App({ navigation }) {
  const { apiUrl, setApiUrl } = useContext(BackendContext);

  const testEndpoint = `${apiUrl}/prueba-endpoint`;

  return (
    <View>
      <Text>URL del Backend:</Text>
      <Text>{apiUrl}</Text> {}
      <Text>Endpoint de prueba sin datos:</Text>
      <Text>{testEndpoint}</Text> {}
      <Button
        title="Cambiar URL"
        onPress={() => setApiUrl("http://nuevo-servidor.com")}
      />
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </View>
  );
}
