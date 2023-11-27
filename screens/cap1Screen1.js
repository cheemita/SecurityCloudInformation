import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image, Linking } from "react-native";
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
  cardDescription: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center", // Centrar el texto
  }, cardDescriptionSmall: {
    fontSize: 13,
    color: "#fff",
    textAlign: "center", // Centrar el texto
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

const cap1Screen1 = () => {
  // State para seguir el progreso del quiz
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Preguntas y respuestas
  const quizData = [
    {
      question: "¿Qué es el phishing?",
      incorrectAnswer: "b) Una técnica de ayuda en línea.",
      correctAnswer: "a) Un tipo de ataque cibernético.",
    },
    {
      question: "¿Qué intentan obtener los atacantes en un ataque de phishing?",
      correctAnswer: "b) Acceso a tu historial de navegación.",
      incorrectAnswer: "a) Contraseñas y datos personales.",
    },
    {
      question: "¿Cómo pueden los atacantes hacerse pasar por entidades de confianza?",
      correctAnswer: "b) Utilizando palabras poco usuales en los mensajes.",
      incorrectAnswer: "a) Usando correos electrónicos falsos.",
    },
    {
      question: "¿Cuál es una recomendación para evitar el phishing?",
      correctAnswer: "a) Hacer clic en enlaces sospechosos.",
      incorrectAnswer: "b) No hacer clic en enlaces sospechosos.",
    },
    {
      question: "¿Qué deberías hacer si recibes un correo electrónico inesperado que solicita información personal?",
      correctAnswer: "a) Proporcionar parcialmente la información solicitada.",
      incorrectAnswer: "b) Ser escéptico y verificar la fuente primero.",
    },
    {
      question: "¿Cuál es una forma de verificar la autenticidad del remitente en un correo sospechoso?",
      correctAnswer: "a) Responder al correo y preguntar si son legítimos.",
      incorrectAnswer: "b) Llamar a la empresa utilizando información de contacto oficial.",
    },
    {
      question: "¿Por qué se deben evitar los enlaces sospechosos en correos electrónicos?",
      correctAnswer: "a) Porque pueden contener material explicito.",
      incorrectAnswer: "b) Porque podrían llevar a sitios web maliciosos.",
    },
    {
      question: "¿Qué deberías comprobar en la URL de un sitio web antes de ingresar datos personales?",
      correctAnswer: "a) Que el sitio web tenga un fondo atractivo.",
      incorrectAnswer: "b) Que la URL sea coherente con la entidad y comience con 'https'.",
    },
    {
      question: "¿Por qué es importante mantener el software actualizado para protegerse del phishing?",
      correctAnswer: "a) Para mantener el aspecto de tu sistema bonito.",
      incorrectAnswer: "b) Porque las actualizaciones a menudo incluyen parches de seguridad.",
    },
    {
      question: "¿Qué tipo de software se recomienda instalar para ayudar a detectar sitios web y correos electrónicos maliciosos?",
      correctAnswer: "a) Programas de edición de imágenes.",
      incorrectAnswer: "b) Programas antivirus y antiphishing.",
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

 
    const youtubeVideoURL = 'https://www.youtube.com/watch?v=1IZI064FC8w&list=PLnZ0BHE7N9peSnQV1FkECpVSgaYbif0zS&index=2&ab_channel=JophielMart%C3%ADnezA';
  
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
            <Text style={styles.cardTitle}>Phishing</Text>
            <Text style={styles.cardDescription}>Es un tipo de ataque cibernético en el que los delincuentes intentan engañar a las personas para que revelen información personal, financiera o confidencial, como contraseñas, números de tarjetas de crédito o información de cuentas bancarias. Los atacantes suelen hacerse pasar por entidades de confianza, como bancos, empresas legítimas, redes sociales o servicios de correo electrónico, con el fin de engañar a las víctimas y obtener acceso a sus datos sensibles.</Text>


            <View>
      <TouchableOpacity onPress={openYouTubeVideo}>
        <Image
          source={require('../assets/phishing.png')} // Reemplaza con la ruta de tu imagen
          style={styles.video}
        />
      </TouchableOpacity>
    </View>

            <Text style={styles.cardTitle}>Recomendaciones para Evitar el Phishing:</Text>

            <View style={styles.container}>

  <Text style={styles.cardDescriptionSmall}>
    • Sospecha de correos electrónicos y mensajes no solicitados: Si recibes un correo electrónico, mensaje de texto o mensaje en redes sociales que te solicita información personal o financiera, sé escéptico, especialmente si no esperabas ese mensaje.
  </Text>
  <Text style={styles.cardDescriptionSmall}>
    • Verifica la fuente: Antes de proporcionar información sensible, verifica la autenticidad del remitente. Llama a la empresa o entidad por teléfono utilizando la información de contacto oficial en lugar de hacer clic en enlaces en el correo electrónico.
  </Text>
  <Text style={styles.cardDescriptionSmall}>
    • No hagas clic en enlaces sospechosos: Evita hacer clic en enlaces o descargar archivos adjuntos en correos electrónicos sospechosos. Los atacantes suelen utilizar enlaces falsos que parecen legítimos.
  </Text>
  <Text style={styles.cardDescriptionSmall}>
    • Comprueba la URL: Antes de ingresar datos personales en un sitio web, verifica la URL en la barra de direcciones del navegador. Los sitios web legítimos generalmente utilizan conexiones seguras (https://ejemplodesitioseguro.com) y tienen URL coherentes con la entidad a la que pretenden representar.
  </Text>
  <Text style={styles.cardDescriptionSmall}>
    • Mantén tu software actualizado: Asegúrate de que tu sistema operativo, navegador y aplicaciones estén siempre actualizados. Las actualizaciones a menudo incluyen parches de seguridad que protegen contra amenazas conocidas.
  </Text>
  <Text style={styles.cardDescriptionSmall}>
    • Utiliza software de seguridad: Instala y mantén un programa antivirus y antiphishing en tu computadora y dispositivos móviles. Estos programas pueden ayudar a detectar sitios web y correos electrónicos maliciosos.
  </Text>
</View>


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

export default cap1Screen1;
