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

const cap1Screen6 = () => {
  // State para seguir el progreso del quiz
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Preguntas y respuestas
  const quizData = [
    {
      question: "¿Qué es el ciberbullying?",
      correctAnswer: "a) Usar tecnología para acosar, intimidar o hostigar a otros, a menudo a través de comentarios ofensivos o amenazantes.",
      incorrectAnswer: "b) Ayudar a alguien en línea para hostigar a alguien más.",
    },
    {
      question: "¿Dónde puede ocurrir el ciberbullying?",
      correctAnswer: "a) En línea, a través de redes sociales, mensajes de texto o correo electrónico.",
      incorrectAnswer: "b) Solo en el mundo real.",
    },
    {
      question: "¿Por qué se aconseja a los niños que no respondan a los mensajes o comentarios ciberacosadores?",
      correctAnswer: "a) Porque responder puede empeorar la situación y alimentar el ciberbullying.",
      incorrectAnswer: "b) Porque deben responder con más comentarios ofensivos.",
    },
    {
      question: "¿Qué es importante cuando se trata de supervisar la actividad en línea de los niños?",
      correctAnswer: "a) Supervisar la actividad en línea de tus hijos, pero respetar su privacidad.",
      incorrectAnswer: "b) No supervisar la actividad en línea de los niños.",
    },
    {
      question: "¿Qué es el sexting?",
      correctAnswer: "a) El acto de enviar, recibir o compartir mensajes, imágenes o videos de contenido íntimo o explícito a través de dispositivos electrónicos.",
      incorrectAnswer: "b) El acto de enviar memes explícitos a través de dispositivos electrónicos.",
    },
    {
      question: "¿Por qué es importante que todas las partes involucradas en el sexting den su consentimiento y tengan la edad legal?",
      correctAnswer: "a) Para garantizar que el sexting sea legal y consensuado.",
      incorrectAnswer: "b) Porque no es importante, pueden hacerlo sin importar la edad o el consentimiento.",
    },
    {
      question: "¿Con quiénes se debe compartir contenido íntimo en el sexting?",
      correctAnswer: "a) Solo con personas de confianza que respeten tu privacidad.",
      incorrectAnswer: "b) Con cualquier persona que lo solicite.",
    },
    {
      question: "¿Por qué es importante eliminar contenido compartido en el sexting si decides dejar de hacerlo?",
      correctAnswer: "a) Para evitar futuras amenazas o mal uso de las imágenes y videos compartidos.",
      incorrectAnswer: "b) Porque es divertido mantenerlo para futuras referencias.",
    },
    {
      question: "¿Cuál es un paso importante para proteger tu privacidad en el sexting?",
      correctAnswer: "a) Mantener tus dispositivos seguros con contraseñas y bloqueos de pantalla.",
      incorrectAnswer: "b) Compartir imágenes íntimas con desconocidos en línea.",
    },
    {
      question: "¿Qué recomendación se da para evitar el ciberbullying relacionada con la comunicación con los niños?",
      correctAnswer: "a) Hablar con los niños sobre su actividad en línea y el ciberbullying.",
      incorrectAnswer: "b) Hablar de temas sobre juegos y que tan buenos son con los niños.",
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
            <Text style={styles.cardTitle}>Ciberbullying y sexting </Text>
          <Text style={styles.cardTitle2}> Ciberacoso o Ciberbullying</Text>
  <Text style={styles.cardDescription}>
   Es un acto de acoso, intimidación o hostigamiento que ocurre en línea. Implica el uso de tecnología, como redes sociales, mensajes de texto o correo electrónico, para dañar emocionalmente a la víctima, a menudo a través de comentarios ofensivos, amenazas o difamación.
  </Text>
  <Text style={styles.cardTitle2}>Sexting</Text>
  <Text style={styles.cardDescription}>
    Es el acto de enviar, recibir o compartir mensajes, imágenes o videos de contenido íntimo o explícito a través de dispositivos electrónicos, como teléfonos móviles o computadoras. Puede involucrar a adultos que consienten en compartir contenido íntimo, pero también puede ser un problema grave cuando involucra a menores que comparten material explícito.
  </Text>



            <View style={styles.videoContainer}>
              <Image
                source={require("../assets/liquid-cheese.png")} // Reemplaza con el nombre de tu archivo de video en assets
                style={styles.video}
              />
            </View>

            <View style={styles.container}>
  <Text style={styles.cardTitle2}>
    Cómo Evitar el Ciberbullying:
  </Text>
  <Text style={styles.cardDescription}>
    - Comunicación abierta: Hablar con los niños sobre su actividad en línea y el ciberbullying. Anímalos a hablar si enfrentan situaciones de acoso.
  </Text>
  <Text style={styles.cardDescription}>
    - Privacidad y seguridad: Enséñales sobre la importancia de mantener la información personal y las contraseñas seguras. Configura restricciones en sus dispositivos si es necesario.
  </Text>
  <Text style={styles.cardDescription}>
    - No respondas: Aconsejar a los niños no responder a los mensajes o comentarios ciberacosadores, ya que esto puede empeorar la situación.
  </Text>
  <Text style={styles.cardDescription}>
    - Supervisión activa: Supervisa la actividad en línea de tus hijos, pero respeta su privacidad. Conoce sus amigos en línea y las plataformas que utilizan.
  </Text>
  <Text style={styles.cardDescription}>
    - Configuraciones de privacidad: Ayuda a configurar ajustes de privacidad en las redes sociales y dispositivos.
  </Text>
  <Text style={styles.cardDescription}>
    - Comunicación abierta: Mantén una comunicación abierta con tus hijos sobre su actividad en línea y los riesgos del ciberbullying.
  </Text>
  <Text style={styles.cardTitle2}>
    Precauciones para el Sexting:
  </Text>
  <Text style={styles.cardDescription}>
    • Consentimiento y edad: Si eres mayor de edad y deseas participar en sexting, asegúrate de que todas las partes involucradas estén de acuerdo y tengan la edad legal para hacerlo. Si eres menor de edad, es importante recordar que compartir imágenes sexualmente explícitas puede tener consecuencias legales.
  </Text>
  <Text style={styles.cardDescription}>
    • Confianza: Solo comparte contenido íntimo con personas de confianza y que respeten tu privacidad.
  </Text>
  <Text style={styles.cardDescription}>
    • No compartas con extraños: Evita compartir imágenes o videos íntimos con personas que no conoces en persona, ya que pueden utilizarlos de manera inapropiada.
  </Text>
  <Text style={styles.cardDescription}>
    • Elimina contenido: Si decides dejar de compartir contenido íntimo con alguien, asegúrate de eliminar todas las imágenes y videos compartidos para evitar futuras amenazas.
  </Text>
  <Text style={styles.cardDescription}>
    • Protege tu dispositivo: Mantén tus dispositivos seguros con contraseñas y bloqueos de pantalla para evitar el acceso no autorizado.
  </Text>
  <Text style={styles.cardDescription}>
    • Educación: Educa a los adolescentes sobre los riesgos del sexting y las posibles consecuencias legales y personales.
  </Text>
  <Text style={styles.cardDescription}>
    El sexting y el ciberbullying son temas serios, y es importante que los padres y los niños trabajen juntos para prevenir problemas y tomar medidas en caso de enfrentarlos. La comunicación abierta y la educación son claves para mantener un entorno en línea seguro y saludable.
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

export default cap1Screen6;
