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


const cap1Screen4 = () => {
  // State para seguir el progreso del quiz
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Preguntas y respuestas
  const quizData = [
    {
      question: "¿Qué implica la suplantación de identidad o spoofing?",
      correctAnswer: "b) Hacerse pasar por alguien de confianza para engañarte y obtener información personal.",
      incorrectAnswer: "a) Hacerse pasar por un personaje famoso en línea.",
    },
    {
      question: "¿En qué medios de comunicación puede ocurrir la suplantación de identidad?",
      correctAnswer: "b) A través de correos electrónicos, mensajes de texto, llamadas telefónicas y otros medios.",
      incorrectAnswer: "a) Solo a través de correos electrónicos.",
    },
    {
      question: "¿Qué recomendación se da para verificar la autenticidad de alguien que solicita información personal en línea?",
      correctAnswer: "b) Llamar a la empresa o entidad utilizando la información de contacto oficial.",
      incorrectAnswer: "a) Proporcionar la información cuando te la pidan.",
    },
    {
      question: "¿Por qué se debe evitar hacer clic en enlaces sospechosos en correos electrónicos o mensajes?",
      correctAnswer: "b) Porque pueden dirigirte a sitios web falsos.",
      incorrectAnswer: "a) Porque podrían llevarte a sitios web interesantes y podrías perder mucho de tu tiempo.",
    },
    {
      question: "¿Qué es la autenticación de dos pasos y por qué es útil?",
      correctAnswer: "b) Una capa adicional de seguridad que requiere una segunda forma de verificación, como un código enviado a tu teléfono.",
      incorrectAnswer: "a) Una forma de verificar la temperatura actual en tu área y a la vez en tu casa.",
    },
    {
      question: "¿Qué recomendación se da con respecto al uso de software de seguridad?",
      correctAnswer: "b) Instala y mantén un programa antivirus y antispoofing en tus dispositivos para detectar sitios web y correos electrónicos maliciosos.",
      incorrectAnswer: "a) No es necesario instalar software de seguridad en tus dispositivos a menos que uses teléfonos.",
    },
    {
      question: "¿Por qué es importante la educación en la protección contra la suplantación de identidad?",
      correctAnswer: "b) Para reconocer señales de suplantación de identidad, como correos electrónicos que solicitan información personal o contienen errores gramaticales y ortográficos.",
      incorrectAnswer: "a) Para aprender a suplantar identidades.",
    },
    {
      question: "¿Qué es un ejemplo de información sensible que los estafadores buscan en la suplantación de identidad?",
      correctAnswer: "b) Números de tarjetas de crédito.",
      incorrectAnswer: "a) La hora a la que sueles levantarte.",
    },
    {
      question: "¿Cuál es el propósito de habilitar la autenticación de dos pasos en tus cuentas?",
      correctAnswer: "b) Añadir una capa adicional de seguridad a tus cuentas en línea.",
      incorrectAnswer: "a) Facilitar el acceso a tus cuentas.",
    },
    {
      question: "¿Qué es una señal de alerta común que indica la posibilidad de suplantación de identidad?",
      correctAnswer: "b) Correos electrónicos o mensajes que solicitan información personal.",
      incorrectAnswer: "a) Correos electrónicos o mensajes que utilizan un lenguaje perfectamente gramatical.",
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
            <Text style={styles.cardTitle}>Suplantación de identidad</Text>
            <Text style={styles.cardTitle2}>¿Qué es la Suplantación de Identidad?</Text>
            <Text style={styles.cardDescription}>La suplantación de identidad o spoofing implica que un estafador se hace pasar por alguien de confianza para engañarte y obtener información personal, como contraseñas, números de tarjetas de crédito, números de seguridad social u otra información sensible. Esto se puede hacer a través de correos electrónicos, mensajes de texto, llamadas telefónicas u otros medios de comunicación.</Text>

            <View>
      <TouchableOpacity onPress={openYouTubeVideo}>
        <Image
          source={require('../assets/identidad.png')} // Reemplaza con la ruta de tu imagen
          style={styles.video}
        />
      </TouchableOpacity>
    </View>

            
  <Text style={styles.cardTitle2}>
    Cómo Protegerte de la Suplantación de Identidad:
  </Text>
  <Text style={styles.cardDescription}>
    • Verifica la Identidad: Antes de proporcionar información personal o financiera en línea, verifica la autenticidad de la persona o entidad que te la está solicitando. Llama a la empresa o entidad utilizando la información de contacto oficial en lugar de hacerlo a través del mensaje o correo electrónico.
  </Text>
  <Text style={styles.cardDescription}>
    • No hagas clic en enlaces sospechosos: Evita hacer clic en enlaces o descargar archivos adjuntos en correos electrónicos o mensajes que parezcan sospechosos. Pueden llevarte a sitios web falsos.
  </Text>
  <Text style={styles.cardDescription}>
    • Utiliza autenticación de dos pasos: Habilita la autenticación de dos pasos en tus cuentas siempre que sea posible. Esto proporciona una capa adicional de seguridad al requerir una segunda forma de verificación, como un código enviado a tu teléfono.
  </Text>
  <Text style={styles.cardDescription}>
    • Usa software de seguridad: Instala y mantiene un programa antivirus y antispoofing en tu computadora y dispositivos móviles. Estos programas pueden ayudar a detectar sitios web y correos electrónicos maliciosos.
  </Text>
  <Text style={styles.cardDescription}>
    • Educación: Aprende a reconocer señales de suplantación de identidad, como correos electrónicos o mensajes que solicitan información personal o que contienen errores gramaticales y ortográficos.
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

export default cap1Screen4;
