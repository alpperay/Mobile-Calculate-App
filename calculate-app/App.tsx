import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React,{ useState } from "react";

const HesapMakinesi = () => {
  
  const [sayiBir, setSayiBir] = useState("");
  const [sayiIki, setSayıIki] = useState("");
  const [sonuc, setSonuc] = useState("");

  const topla = (sayi1: number, sayi2: number) => {
    sayiBir === "" || sayiIki === ""
      ? setSonuc("Tüm Alanları Doldurunuz!")
      : setSonuc((sayi1 + sayi2).toString());
  };

  const cikar = (sayi1: number, sayi2: number) => {
    sayiBir === "" || sayiIki === ""
      ? setSonuc("Tüm Alanları Doldurunuz!")
      : setSonuc((sayi1 - sayi2).toString());
  };

  const carp = (sayi1: number, sayi2: number) => {
    sayiBir === "" || sayiIki === ""
      ? setSonuc("Tüm Alanları Doldurunuz!")
      : setSonuc((sayi1 * sayi2).toString());
  };

  const bol = (sayi1: number, sayi2: number) => {
    sayi2 == 0
      ? setSonuc("0'a bölme hatası!")
      : setSonuc((sayi1 / sayi2).toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Birinci Sayıyı Giriniz...</Text>
      <TextInput
        style={styles.input}
        placeholder="Sayı Gir..."
        value={sayiBir}
        onChangeText={setSayiBir}
      />
      <Text style={styles.text}>İkinci Sayıyı Giriniz...</Text>
      <TextInput
        style={styles.input}
        placeholder="Sayı Gir..."
        value={sayiIki}
        onChangeText={setSayıIki}
      />

      <TouchableOpacity
        style={styles.buton}
        onPress={() => topla(Number(sayiBir), Number(sayiIki))}
      >
        <Text style={styles.sembol}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buton}
        onPress={() => cikar(Number(sayiBir), Number(sayiIki))}
      >
        <Text style={styles.sembol}>-</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buton}
        onPress={() => carp(Number(sayiBir), Number(sayiIki))}
      >
        <Text style={styles.sembol}>*</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buton}
        onPress={() => bol(Number(sayiBir), Number(sayiIki))}
      >
        <Text style={styles.sembol}>/</Text>
      </TouchableOpacity>

      <Text style={styles.sonuc}>Sonuç : {sonuc}</Text>
    </View>
  );
};

export default HesapMakinesi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontFamily: "Arial",
    margin: 15,
  },
  input: {
    borderWidth: 1,
    width: "50%",
    height: 50,
    textAlign: "center",
    margin: 15,
    fontSize: 20,
  },
  buton: {
    width: "45%",
    height: 45,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
  },
  sembol: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  sonuc: {
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#8ecae6",
    width: "50%",
    height: 60,
    textAlign: "center",
    margin: 10,
    fontSize: 30,
    paddingTop:5,
  },
});
