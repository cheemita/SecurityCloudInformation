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
  cardTitle2: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10, // Centrar el texto
  },
  cardDescription: {
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

const cap1Screen2 = () => {
  // State para seguir el progreso del quiz
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Preguntas y respuestas
  const quizData = [
    {
      question: "¿Qué es un correo electrónico de phishing?",
      correctAnswer: "b) Un correo electrónico engañoso que intenta hacerte revelar información personal.",
      incorrectAnswer: "a) Un mensaje que te proporciona información útil.",
    },
    {
      question: "¿Cómo pueden los estafadores hacer que sus sitios web falsos se vean auténticos?",
      correctAnswer: "b) Imitando el diseño y la URL de empresas legítimas.",
      incorrectAnswer: "a) Usando una URL totalmente diferente.",
    },
    {
      question: "¿Qué es un indicador común de un correo de phishing?",
      correctAnswer: "b) Errores de ortografía y gramática.",
      incorrectAnswer: "a) Lenguaje gramaticalmente correcto.",
    },
    {
      question: "¿Qué deberías hacer si recibes una llamada no solicitada que solicita dinero o información personal?",
      correctAnswer: "b) Cuestionar la autenticidad y pedir detalles de contacto para verificar la identidad de la persona que llama.",
      incorrectAnswer: "a) Proporcionar poca información solicitada de inmediato.",
    },
    {
      question: "¿Qué significa 'presión para tomar decisiones rápidas' en el contexto de estafas en línea?",
      correctAnswer: "b) Los estafadores intentan que tomes decisiones rápidas sin verificar la información.",
      incorrectAnswer: "a) Los estafadores son pacientes y esperan a que tomes una decisión para ellos estar seguros.",
    },
    {
      question: "¿Por qué es importante verificar la URL de un sitio web antes de ingresar información personal?",
      correctAnswer: "b) Para evitar sitios web maliciosos y garantizar conexiones seguras.",
      incorrectAnswer: "a) Para asegurarse de que el sitio web tenga un diseño atractivo.",
    },
    {
      question: "¿Qué es una medida efectiva para protegerse contra las estafas en línea?",
      correctAnswer: "b) Desarrollar un sentido saludable de escepticismo en línea.",
      incorrectAnswer: "a) Creer en lo que ves o escuchas en línea.",
    },
    {
      question: "¿Por qué es importante utilizar software de seguridad, como antivirus y antiphishing?",
      correctAnswer: "b) Para detectar y prevenir amenazas en línea.",
      incorrectAnswer: "a) Para aumentar la velocidad de navegación en línea y velocidad de tu computadora.",
    },
    {
      question: "¿Qué deben hacer las personas antes de proporcionar información o realizar transacciones en línea?",
      correctAnswer: "b) Verificar la autenticidad de la entidad o el sitio web utilizando información de contacto oficial.",
      incorrectAnswer: "a) Utilizar cualquier número de teléfono que encuentren.",
    },
    {
      question: "¿Qué técnica utilizan los estafadores para dirigir a las víctimas a sitios web falsos sin su conocimiento?",
      correctAnswer: "b) Falsificación de enlaces y sitios web",
      incorrectAnswer: "a) Ingeniería social",
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

  const youtubeVideoURL = 'https://www.youtube.com/watch?v=OD75RY0CeJI&list=PLnZ0BHE7N9peSnQV1FkECpVSgaYbif0zS&index=3&ab_channel=JophielMart%C3%ADnez';
  
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
            <Text style={styles.cardTitle}>Estafas en línea</Text>
            <Text style={styles.cardTitle}>Tipos de Estafas Comunes en Línea:</Text>
            <View style={styles.container}>
  <Text style={styles.cardTitle2}>
    Tipos de Estafas Comunes en Línea:
  </Text>
  <Text style={styles.cardDescription}>
    • Correos Electrónicos de Phishing: Estos correos electrónicos intentan engañarte haciéndote creer que provienen de una entidad de confianza, como tu banco o una red social. Suelen contener enlaces falsos que te dirigen a sitios web maliciosos donde se te pedirá que reveles información personal.
  </Text>
  <Text style={styles.cardDescription}>
    • Sitios Web Falsos: Los ciberdelincuentes crean sitios web que imitan a empresas legítimas para robar información. Pueden parecer auténticos, pero a menudo tienen pequeñas diferencias en la URL o el diseño que los delatan.
  </Text>
  <Text style={styles.cardDescription}>
    • Llamadas Telefónicas Fraudulentas: Los estafadores hacen llamadas telefónicas haciéndose pasar por funcionarios gubernamentales, empresas de servicios públicos o incluso familiares en apuros. Intentan obtener información personal o dinero.
  </Text>
</View>


            
<View>
      <TouchableOpacity onPress={openYouTubeVideo}>
        <Image
          source={require('../assets/estafa.png')} // Reemplaza con la ruta de tu imagen
          style={styles.video}
        />
      </TouchableOpacity>
    </View>

            <View style={styles.container}>
  <Text style={styles.cardTitle2}>
    Cómo Identificar Estafas en Línea:
  </Text>
  <Text style={styles.cardDescription}>
    • Errores de ortografía y gramática: Muchos correos electrónicos de phishing contienen errores de ortografía y gramática. Si notas estos errores, es una señal de alarma.
  </Text>
  <Text style={styles.cardDescription}>
    • Solicitudes de información sensible: Desconfía de cualquier solicitud de información personal, financiera o contraseñas por correo electrónico, mensaje de texto o teléfono.
  </Text>
  <Text style={styles.cardDescription}>
    • Verifica la URL: Antes de ingresar información en un sitio web, verifica la URL en la barra de direcciones. Busca conexiones seguras (https://ejemplodesitioseguro.com).
  </Text>
  <Text style={styles.cardDescription}>
    • Llamadas no solicitadas: Si recibes una llamada no solicitada que te pide dinero o información personal, cuestiona la autenticidad y pide detalles de contacto para verificar la identidad de la persona que llama.
  </Text>
  <Text style={styles.cardDescription}>
    • Presión para tomar decisiones rápidas: Los estafadores suelen presionar a sus víctimas para que tomen decisiones rápidas sin tiempo para verificar la información. Tómate el tiempo necesario antes de actuar.
  </Text>
  <Text style={styles.cardTitle2}>
    Cómo Protegerte de Estafas en Línea:
  </Text>
  <Text style={styles.cardDescription}>
    • Sé escéptico: Desarrolla un sentido saludable de escepticismo en línea. No creas en todo lo que ves o escuchas sin verificarlo.
  </Text>
  <Text style={styles.cardDescription}>
    • Usa software de seguridad: Instala un programa antivirus y antiphishing en tus dispositivos para ayudar a detectar y prevenir amenazas.
  </Text>
  <Text style={styles.cardDescription}>
    • Verifica la autenticidad: Antes de proporcionar información o realizar transacciones en línea, verifica la autenticidad de la entidad o el sitio web. Utiliza información de contacto oficial, como números de teléfono y sitios web que conoces.
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

export default cap1Screen2;
