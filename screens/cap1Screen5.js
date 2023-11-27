import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image } from "react-native";
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

const cap1Screen5 = () => {
  // State para seguir el progreso del quiz
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Preguntas y respuestas
  const quizData = [
    {
      question: "¿Qué es el ransomware?",
      correctAnswer: "b) Un software malicioso diseñado para bloquear el acceso a archivos o sistemas y exigir un rescate.",
      incorrectAnswer: "a) Un tipo de antivirus muy confiable.",
    },
    {
      question: "¿Cómo se propaga comúnmente el ransomware?",
      correctAnswer: "b) A través de archivos adjuntos de correo electrónico, enlaces maliciosos o vulnerabilidades de seguridad.",
      incorrectAnswer: "a) A través de descargas de software confiable entre dispositivos.",
    },
    {
      question: "¿Qué medida se recomienda para evitar el ransomware relacionada con la actualización de software?",
      correctAnswer: "b) Mantener el software actualizado con los últimos parches de seguridad.",
      incorrectAnswer: "a) Mantener el software desactualizado para evitar problemas de compatibilidad.",
    },
    {
      question: "¿Qué tipo de software se recomienda instalar para prevenir el ransomware?",
      correctAnswer: "b) Antivirus y antiransomware.",
      incorrectAnswer: "a) Navegadores web adicionales y juegos en línea.",
    },
    {
      question: "¿Cuál es una táctica común utilizada para propagar ransomware?",
      correctAnswer: "b) Phishing, que involucra correos electrónicos sospechosos y enlaces maliciosos.",
      incorrectAnswer: "a) Enviar correos electrónicos con enlaces y archivos adjuntos legítimos.",
    },
    {
      question: "¿Por qué es importante evitar descargar software de fuentes no confiables?",
      correctAnswer: "b) Para evitar riesgos de seguridad y posibles descargas de ransomware.",
      incorrectAnswer: "a) Porque es más barato y más fácil de buscar.",
    },
    {
      question: "¿Cuál es la recomendación clave en caso de un ataque de ransomware en relación con el pago del rescate?",
      correctAnswer: "b) No pagar el rescate, ya que no garantiza la recuperación de los archivos y puede incentivar más ataques.",
      incorrectAnswer: "a) Pagar el rescate de inmediato para recuperar los archivos lo más pronto posible así quitándote de problemas.",
    },
    {
      question: "¿Qué debes hacer si detectas un ataque de ransomware en tu computadora?",
      correctAnswer: "b) Desconectarla de la red o WiFi para evitar que el ransomware se propague.",
      incorrectAnswer: "a) Mantenerla conectada a la red para rastrear al atacante.",
    },
    {
      question: "¿Cuál es una medida importante para restaurar tus datos después de un ataque de ransomware?",
      correctAnswer: "b) Mantener copias de seguridad actualizadas de tus archivos en un dispositivo externo o en la nube.",
      incorrectAnswer: "a) Contratar a un experto en ciberseguridad y pagarle muy bien.",
    },
    {
      question: "¿Por qué es importante contactar a las autoridades en caso de un ataque de ransomware?",
      correctAnswer: "b) Para denunciar el ataque y proporcionar información útil en la investigación.",
      incorrectAnswer: "a) Para solicitarles que paguen el rescate.",
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

  return (
    <ImageBackground
      source={require("../assets/liquid-cheese.png")}
      style={styles.backgroundImage}
    >
      <View>
        <ScrollView>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Ramsomware</Text>
            <Text style={styles.cardTitle2}>¿Qué es el Ransomware?</Text>
            <Text style={styles.cardDescription}>El ransomware es un software malicioso(virus) diseñado para bloquear el acceso a los archivos o sistemas de una víctima y luego exigir un rescate a cambio de proporcionar la clave de desbloqueo. Puede propagarse a través de archivos adjuntos de correo electrónico, enlaces maliciosos, descargas de software no confiable o vulnerabilidades de seguridad en sistemas operativos y software.</Text>

            <View style={styles.videoContainer}>
              <Image
                source={require("../assets/liquid-cheese.png")} // Reemplaza con el nombre de tu archivo de video en assets
                style={styles.video}
              />
            </View>

            <View style={styles.container}>
  <Text style={styles.cardTitle2}>
    Precauciones para Evitar el Ransomware:
  </Text>
  <Text style={styles.cardDescription}>
    • Mantén el software actualizado: Asegúrate de que tu sistema operativo y todas las aplicaciones estén actualizadas con los últimos parches de seguridad. Muchos ataques de ransomware aprovechan vulnerabilidades en software desactualizado.
  </Text>
  <Text style={styles.cardDescription}>
    • Usa software de seguridad: Instala y mantén un antivirus y antiransomware en tu computadora. Esto puede ayudar a detectar y prevenir amenazas antes de que infecten tu sistema.
  </Text>
  <Text style={styles.cardDescription}>
    • Sé cauteloso con los correos electrónicos: Evita abrir correos electrónicos sospechosos o hacer clic en enlaces o archivos adjuntos no solicitados. El phishing es una de las formas más comunes de propagar ransomware.
  </Text>
  <Text style={styles.cardDescription}>
    • Descarga software de fuentes confiables: Evita descargar programas de fuentes no confiables o sitios web que parezcan poco seguros. Utiliza solo fuentes confiables y oficiales.
  </Text>
  <Text style={styles.cardDescription}>
    • Realiza copias de seguridad regulares: Mantén copias de seguridad actualizadas de tus archivos importantes en un dispositivo externo o en la nube. Esto te permitirá restaurar tus datos en caso de un ataque de ransomware.
  </Text>
  <Text style={styles.cardDescription}>
    ¿Qué Hacer en Caso de un Ataque de Ransomware?
  </Text>
  <Text style={styles.cardDescription}>
    • Desconecta la computadora de la red: Si detectas un ataque, desconecta la computadora de la red o WiFi para evitar que el ransomware se propague a otros dispositivos en la red.
  </Text>
  <Text style={styles.cardDescription}>
    • No pagues el rescate: Pagar el rescate no garantiza que obtengas la clave de descifrado y puede alentar a los ciberdelincuentes a realizar más ataques.
  </Text>
  <Text style={styles.cardDescription}>
    • Ejecuta un antivirus: Si tienes un programa de seguridad instalado, ejecútalo para tratar de eliminar el ransomware. Algunos programas pueden identificar y eliminar ciertos tipos de ransomware.
  </Text>
  <Text style={styles.cardDescription}>
    • Restaura desde una copia de seguridad: Si tienes copias de seguridad actualizadas de tus archivos, utiliza esas copias para restaurar tus datos.
  </Text>
  <Text style={styles.cardDescription}>
    • Contacta a las autoridades: Denuncia el ataque a las autoridades locales de ciberseguridad y proporciona toda la información que puedas sobre el ataque.
  </Text>
  <Text style={styles.cardDescription}>
    • Restaura tu sistema: Si no tienes copias de seguridad o no puedes eliminar el ransomware, es posible que debas restaurar tu sistema a un estado anterior utilizando una copia de seguridad del sistema.
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

export default cap1Screen5;
