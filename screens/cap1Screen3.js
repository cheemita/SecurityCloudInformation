import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image, Linking  } from "react-native";
import Layout from "../components/Layout";

const CARD_COLOR = "#2B2D42";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  card: {
    backgroundColor: CARD_COLOR,
    borderRadius: 10,
    margin: 20,
    padding: 20,
  },
  cardTitle: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10, // Centrar el texto
  },
  cardTitle2: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10, // Centrar el texto
  },
  cardDescription: {
    fontSize: 13,
    color: "#fff",
    textAlign: "center", 
    marginBottom: 7,// Centrar el texto
  },
  videoContainer: {
    marginTop: 20,
  },
  video: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  quizContainer: {
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: "#869DC6",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  question: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
    marginBottom: 10,
  },
});

const cap1Screen3 = () => {
  // State para seguir el progreso del quiz
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Preguntas y respuestas
  const quizData = [
    {
      question: "¿Qué es el robo de identidad?",
      correctAnswer: "b) Obtener y usar información personal de alguien sin su consentimiento para cometer fraudes u otros delitos.",
      incorrectAnswer: "a) Compartir información personal con amigos y familiares.",
    },
    {
      question: "¿Qué precaución se debe tomar al compartir información personal, como números de seguro social o contraseñas?",
      correctAnswer: "b) Compartirla solo cuando estés seguro de que la solicitud es legítima.",
      incorrectAnswer: "a) Compartirla si crees que es una solicitud oficial.",
    },
    {
      question: "¿Dónde se deben almacenar documentos importantes para protegerse del robo de identidad?",
      correctAnswer: "b) En un lugar seguro en tu hogar o en una caja de seguridad.",
      incorrectAnswer: "a) En tu escritorio o en la cocina.",
    },
    {
      question: "¿Qué tipo de contraseñas se deben utilizar para cuentas en línea?",
      correctAnswer: "b) Contraseñas seguras y únicas que no utilicen información personal fácilmente accesible.",
      incorrectAnswer: "a) Contraseñas que contengan nombres y fechas de nacimiento para evitar olvidarlas.",
    },
    {
      question: "¿Qué se debe hacer con documentos personales antes de desecharlos?",
      correctAnswer: "b) Destruirlos para evitar el robo de identidad.",
      incorrectAnswer: "a) Dejarlos en la basura sin precaución.",
    },
    {
      question: "¿Por qué se deben evitar las redes Wi-Fi públicas no seguras?",
      correctAnswer: "b) Porque los estafadores pueden interceptar datos personales en estas redes.",
      incorrectAnswer: "a) Porque son muy lentas.",
    },
    {
      question: "¿Qué tipo de alertas debes de configurar en tus cuentas?",
      correctAnswer: "b) Actividades inusuales en tus cuentas, como retiros grandes o cambios en la información de la cuenta.",
      incorrectAnswer: "a) Cambios en el pronóstico del tiempo, mensajes y alarma.",
    },
    {
      question: "¿Por qué se recomienda limitar la cantidad de información personal compartida en las redes sociales?",
      correctAnswer: "b) Porque los estafadores pueden utilizar esta información para robar tu identidad.",
      incorrectAnswer: "a) Porque compartir información personal en redes sociales suele ser seguro.",
    },
    {
      question: "¿Qué es una buena práctica para protegerse contra el robo de identidad?",
      correctAnswer: "b) Tomar precauciones adicionales al compartir información y ser consciente de las amenazas.",
      incorrectAnswer: "a) Compartir información personal en línea sin restricciones.",
    },
    {
      question: "¿Cuál es el objetivo principal de un ladrón de identidad?",
      correctAnswer: "b) Utilizar la información personal de alguien sin su consentimiento para cometer fraudes u otros delitos.",
      incorrectAnswer: "a) Ayudar a las personas a proteger su información personal de las empresas.",
    },
  ];
  

  // Función para manejar las respuestas
  const handleAnswer = (answer) => {
    if (answer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1); // Sumar al puntaje si es correcto
    }
    // Pasar a la siguiente pregunta
    setCurrentQuestion(currentQuestion + 1);
  };

  const shuffleAnswers = () => {
    const shuffledQuizData = [...quizData];
    // Recorre la matriz y, para cada pregunta, decide aleatoriamente si debes intercambiar las respuestas.
    for (let i = 0; i < shuffledQuizData.length; i++) {
      if (Math.random() < 0.5) {
        // Intercambia las respuestas correcta e incorrecta
        const temp = shuffledQuizData[i].correctAnswer;
        shuffledQuizData[i].correctAnswer = shuffledQuizData[i].incorrectAnswer;
        shuffledQuizData[i].incorrectAnswer = temp;
      }
    }
    return shuffledQuizData;
  };

  const [shuffledQuizData, setShuffledQuizData] = useState(shuffleAnswers());

  const youtubeVideoURL = 'https://www.youtube.com/watch?v=f6o290lRxQw&list=PLnZ0BHE7N9peSnQV1FkECpVSgaYbif0zS&index=4&ab_channel=JophielMart%C3%ADnez';
  
  // Función para abrir la URL en el navegador
  const openYouTubeVideo = () => {
    Linking.openURL(youtubeVideoURL);
  };

  return (
    <ImageBackground
      source={require("../assets/liquid-cheese.png")}
      style={styles.backgroundImage}
    >
      <View>
        <ScrollView>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Robo de identidad</Text>
            <Text style={styles.cardDescription}>El robo de identidad es un delito en el que un estafador obtiene y utiliza la información personal de una persona sin su consentimiento para cometer fraudes financieros u otros delitos. Existen algunas precauciones que debes tomar para protegerte contra el robo de identidad:</Text>

            <View>
      <TouchableOpacity onPress={openYouTubeVideo}>
        <Image
          source={require('../assets/robo.png')} // Reemplaza con la ruta de tu imagen
          style={styles.video}
        />
      </TouchableOpacity>
    </View>

            <Text style={styles.cardTitle2}>
    - Protege tus datos personales:
  </Text>
  <Text style={styles.cardDescription}>
    No compartas información personal, como números de seguro social, número de identificación personal (PIN), o contraseñas a menos que estés seguro de que la solicitud es legítima.
  </Text>
  <Text style={styles.cardTitle2}>
    - Mantén seguros tus documentos:
  </Text>
  <Text style={styles.cardDescription}>
    Almacena documentos importantes, como pasaportes, tarjetas de identificación y tarjetas de crédito en un lugar seguro en tu hogar o en una caja de seguridad.
  </Text>
  <Text style={styles.cardTitle2}>
    - Utiliza contraseñas fuertes:
  </Text>
  <Text style={styles.cardDescription}>
    Crea contraseñas seguras y únicas para tus cuentas en línea. Evita utilizar información personal fácilmente accesible, como nombres o fechas de nacimiento.
  </Text>
  <Text style={styles.cardTitle2}>
    - Ten cuidado con el correo y la basura:
  </Text>
  <Text style={styles.cardDescription}>
    Destruye documentos personales antes de desecharlos y ten precaución con los correos electrónicos no solicitados o correos que parezcan sospechosos.
  </Text>
  <Text style={styles.cardTitle2}>
    - Utiliza una red segura:
  </Text>
  <Text style={styles.cardDescription}>
    Evita conectarte a redes Wi-Fi públicas no seguras, estas principalmente no te piden una contraseña para unirte a la red además fíjate en el nombre de la red que aparece en tu dispositivo. Si parece extraño o poco común, evita conectarte a esa red (Megacable-685D – ejemplo de nombre de una red segura) ya que los estafadores pueden interceptar datos personales en estas redes.
  </Text>
  <Text style={styles.cardTitle2}>
    - Activa alertas de cuentas:
  </Text>
  <Text style={styles.cardDescription}>
    Configura alertas de cuenta para que te notifiquen de actividades inusuales, como retiros grandes o cambios en la información de la cuenta.
  </Text>
  <Text style={styles.cardTitle2}>
    - No compartas información en redes sociales:
  </Text>
  <Text style={styles.cardDescription}>
    Limita la cantidad de información personal que compartes en redes sociales, ya que los estafadores pueden utilizar esta información para robar tu identidad.
  </Text>

  <View style={styles.quizContainer}>
              {/* Muestra las preguntas y botones de respuesta */}
              {currentQuestion < shuffledQuizData.length ? (
  <View>
    <Text style={styles.question}>{shuffledQuizData[currentQuestion].question}</Text>
    <TouchableOpacity
      style={styles.submitButton}
      onPress={() => handleAnswer(shuffledQuizData[currentQuestion].correctAnswer)}
    >
      <Text style={styles.submitButtonText}>{shuffledQuizData[currentQuestion].correctAnswer}</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.submitButton}
      onPress={() => handleAnswer(shuffledQuizData[currentQuestion].incorrectAnswer)}
    >
      <Text style={styles.submitButtonText}>{shuffledQuizData[currentQuestion].incorrectAnswer}</Text>
    </TouchableOpacity>
  </View>
) : (
  // Muestra el puntaje al final del quiz
  <Text style={styles.cardTitle}>
    Quiz Completado. Puntaje: {score} de {shuffledQuizData.length}
  </Text>
)}
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default cap1Screen3;
