import React, { useEffect, useState } from "react";
import { FlatList, ScrollView , RefreshControl, View, StyleSheet, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Asegúrate de importar la biblioteca de iconos que desees
import { Image } from "react-native";

const CARD_SIZE = 180;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    card: {
        width: CARD_SIZE,
        height: "auto",
        backgroundColor: "#2B2D42",
        borderRadius: 10,
        margin: 10,
        padding: 10,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ffffff",
        marginBottom: 20,
    },
    cardTitle: {
        fontSize: 14,
        marginBottom: 5,
        textAlign: "center",
        color: "#ffffff",
    },
    cardDescription: {
        fontSize: 12,
        marginBottom: 2,
        textAlign: "center",
        color: "#ffffff",
    },
    viewButton: {
        backgroundColor: "#869DC6",
        padding: 8,
        borderRadius: 5,
        position: "absolute",
        bottom: -20,
        width: "60%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 12,
        textAlign: "center",
        marginRight: 10, // Agregar margen a la derecha del texto
        paddingLeft: 5,
    },
    cardImage: {
        width: "100%", // Ajusta el ancho de la imagen según tus necesidades
        height: 100, // Ajusta la altura de la imagen según tus necesidades
        marginBottom: 10, // Espacio entre la descripción y la imagen
        shadowColor: "#ffffff", // Color de la sombra
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2, // Opacidad de la sombra
        shadowRadius: 2, // Radio de la sombra
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // Opciones: 'cover', 'contain', 'stretch', 'repeat', 'center'
        width: "100%",
        height: "100%",
    },
});

const TopicsScreen = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([
        {
            id: 1,
            title: "Phishing",
            description: "Es un tipo de ataque cibernético en el que los delincuentes intentan engañar a las personas para que revelen información personal \n",
            imageURL: "https://easydmarc.com/blog/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/09/Module-4-image-768x576.png.webp",
            route: "cap1Screen1",
        },
        {
            id: 2,
            title: "Estafas en línea",
            description: "• Correos Electrónicos de Phishing \n • Sitios Web Falsos \n • Llamadas Telefónicas Fraudulentas ",
            imageURL: "https://www.pnc.com/content/dam/pnc-thought-leadership/personal-finance/save/pnc_insights_p_top-online-scams-how-to-avoid.jpg",
            route: "cap1Screen2",
        },{
            id: 3,
            title: "Robo de identidad",
            description: "Protege tus datos personales: No compartas información personal, como números de seguro social, número de identificación personal, o contraseñas a menos que estés seguro de que la solicitud es legítima\n",
            imageURL: "https://images.reporteindigo.com/wp-content/uploads/2023/02/robo-de-identidad-mexico.png",
            route: "cap1Screen3",
        },{
            id: 4,
            title: "Suplantación de identidad" ,
            description: "La suplantación de identidad o spoofing implica que un estafador se hace pasar por alguien de confianza para engañarte y obtener información personal",
            imageURL: "https://www.infosegur.net/images/blog/Spoofing.webp",
            route: "cap1Screen4",
        },
        {
            id: 5,
            title: "Ramsomware",
            description: "El ransomware es un software malicioso(virus) diseñado para bloquear el acceso a los archivos o sistemas de una víctima y luego exigir un rescate a cambio de proporcionar la clave de desbloqueo",
            imageURL: "https://www.ceupe.com/images/easyblog_articles/4074/b2ap3_large_ransomware.png",
            route: "cap1Screen5",
        },
        {
            id: 6,
            title: "Ciberbullying y sexting ",
            description: "Es un acto de acoso, intimidación o hostigamiento que ocurre en línea. Implica el uso de tecnología, como redes sociales, mensajes de texto o correo electrónico, para dañar emocionalmente a la víctima \n",
            imageURL: "https://www.redhnna.org/wp-content/uploads/Sexting-1024x675.jpg",
            route: "cap1Screen6",
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
        navigation.navigate(route); // Navegar a la ruta específica
    };

    const renderItem = ({ item }) => (
        <View style={[styles.card, { marginBottom: 60 }]}>
            <Image source={{ uri: item.imageURL }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <View style={styles.viewButton}>
                <TouchableOpacity
                    style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}
                    onPress={() => navigateToTaskForm(item.route)}
                >
                    <Text style={styles.buttonText}>View</Text>
                    <Icon name="arrow-right" size={12} color="#ffffff" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <ImageBackground source={require('../assets/liquid-cheese.png')} style={styles.backgroundImage}>
            <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={["#78e08f"]}
                        progressBackgroundColor="#0a3d62"
                    />
                }
            >
                <View style={[styles.container, { marginBottom: 20 }]}>
                    {data.map((item) => (
                        <View key={item.id} style={styles.card}>
                            <Image source={{ uri: item.imageURL }} style={styles.cardImage} />
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardDescription}>{item.description}</Text>
                            <TouchableOpacity
                                style={styles.viewButton}
                                onPress={() => navigateToTaskForm(item.route)}
                            >
                                <Text style={styles.buttonText}>View</Text>
                                <Icon name="arrow-right" size={12} color="#ffffff" />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default TopicsScreen;
