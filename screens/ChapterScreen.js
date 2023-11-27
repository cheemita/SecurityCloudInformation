import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  FlatList,
  SafeAreaView,
  RefreshControl,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";

const CARD_SIZE = Platform.OS === "web" ? 300 : 150; // Tamaño diferente para web y dispositivos móviles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "web" ? 20 : 0, // Espacio superior diferente para web y dispositivos móviles
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  card: {
    width: 300,
    height: 120,
    backgroundColor: "#2B2D42", // Cambiar al color de fondo deseado
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 50,
    marginTop: 50
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    color: "#fff", // Texto blanco
  },
  cardDescription: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
    color: "#fff", // Texto blanco
    paddingBottom: 15,
  },
  viewButton: {
    backgroundColor: "#869DC6", // Cambiar al color deseado
    padding: 8,
    borderRadius: 5,
    position: "absolute",
    bottom: -10,
    left: "30%",
    bottom: -20,
    width: "40%",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
        fontSize: 17,
        textAlign: "center",
        marginRight: 5, // Agregar margen a la derecha del texto
        paddingLeft: 14,
  },
  icon: {
    alignSelf: "center",
    paddingLeft: 15, // Alinear verticalmente al centro
  },
});

const ChapterScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([
    {
      id: 1,
      title: "MODULO 1: \n Educacion de Ciberseguridad",
      description: "Aquí encontrarás 6 temas diferentes que pueden ser de tu interés, anímate. \n ¡Vive seguro!",
      route: "TopicsScreen", // Define la ruta para el primer botón
    },
    {
      id: 2,
      title: "MODULO 2: \n Amenazas Actuales",
      description: "¡Podrás mantenerte informad@ sobre las amenazas que afectan a Mexico! \n Incluye estafas y métodos de Phishing",
      route: "TaskFormScreen", // Define la ruta para el segundo botón
    },
    {
      id: 3,
      title: "MODULO 3: \n Módulo de Denuncias",
      description: "¡Te guiaremos por el camino correcto para denunciar en caso de ser víctima de ciber ataques, estafas o robos de identidad!",
      route: "RUTA_PARA_MODULO_3", // Define la ruta para el tercer botón
    },
  ]);

  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  const onRefresh = () => {
    setRefreshing(true);
    // Lógica para cargar nuevamente los datos si es necesario
    setRefreshing(false);
  };

  useEffect(() => {
    // Lógica para cargar los datos iniciales si es necesario
  }, [isFocused]);

  const navigateToTaskForm = (route) => {
    navigation.navigate(route);
  };

  const renderItem = ({ item }) => (
    <ImageBackground>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.viewButton} onPress={() => navigateToTaskForm(item.route)}>
        <Text style={styles.buttonText}>View</Text>
          <Icon name="arrow-right" size={14} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

  return (
    <ImageBackground
      source={require("../assets/liquid-cheese.png")} // Cambia la ruta de la imagen de fondo
      style={styles.backgroundImage}
    >
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#78e08f"]}
            progressBackgroundColor="#0a3d62"
          />
        }
      />
    </SafeAreaView>
    </ImageBackground>
  );
};

export default ChapterScreen;
