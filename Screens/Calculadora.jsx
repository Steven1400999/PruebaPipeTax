import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { styles } from "../styles/AppStyles";

export default function Calculadora({ navigation }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    const suma = parseInt(num1) + parseInt(num2);
    setResultado(suma);
  };

  const restar = () => {
    const resta = parseInt(num1) - parseInt(num2);
    setResultado(resta);
  };

  const multiplicar = () => {
    const multiplicacion = parseInt(num1) * parseInt(num2);
    setResultado(multiplicacion);
  };

  const dividir = () => {
    const dividir = parseInt(num1) / parseInt(num2);
    setResultado(dividir);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Prueba para sumar dos numeros</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa el primer número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingresa el segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.button}>
        <Button title="Sumar" onPress={sumar} />
      </View>
      <View style={styles.button}>
        <Button title="Restar" onPress={restar} />
      </View>
      <View style={styles.button}>
        <Button title="Multiplicar" onPress={multiplicar} />
      </View>
      <View style={styles.button}>
        <Button title="Dividir" onPress={dividir} />
      </View>
      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}

      <View style={styles.button}>
        <Button
          title="Ir a otra pantalla"
          onPress={() => navigation.navigate("PruebaConext")}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
