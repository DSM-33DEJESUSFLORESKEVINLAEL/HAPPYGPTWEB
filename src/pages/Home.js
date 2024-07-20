import React from 'react';
import '../styles/home.css';

const Home = () => (
  <div className="home-container">
    <img src={`${process.env.PUBLIC_URL}/assets/home/1.png`} alt="Welcome" className="welcome-image centered" />

    <h2 className="centered">¿Qué es ChatGPT?</h2>
    <p className="centered paragraph">
      Es una herramienta innovadora personalizable de la familia de IA de lenguaje. Permite a las personas hacer conversaciones
      naturales con la inteligencia artificial.
    </p>
    <p className="centered paragraph">
      HappyGPT permite a las familias personalizar y adaptar estas conversaciones sobre habilidades educativas, bienestar y
      el desarrollo de los niños.
    </p>
    <p className="centered paragraph">
      Además, ChatGPT ofrece a los niños acceso a información y aprendizaje educativos. Les permite hacer preguntas y obtener
      respuestas detalladas, ayudándolos a explorar áreas de interés y aprender cosas nuevas.
    </p>
    <p className="centered paragraph">
      ChatGPT no está diseñado para reemplazar a los maestros, sino para complementar la educación de los niños, ofreciendo
      una herramienta adicional de aprendizaje y exploración.
    </p>

    <h3 className="centered">Aquí les dejo algunos consejos para aplicar HappyGPT en la educación de tus hijos:</h3>
    <ol className="centered">
      <li>
        Establece un horario fijo para el uso de ChatGPT en las tareas. Puede ser parte de la rutina de estudios, asegurándose
        de que no interfiera con otras actividades importantes.
      </li>
      <li>
        Supervisa y guía las interacciones. Aunque ChatGPT está diseñado para ser seguro y educativo, es importante que los
        padres monitoreen y guíen el uso de la tecnología para asegurarse de que se está utilizando de manera apropiada.
      </li>
      <li>
        Fomenta la curiosidad y la exploración. Usa ChatGPT para investigar temas que interesen a tus hijos y fomenta que
        hagan preguntas y busquen respuestas.
      </li>
      <li>
        Utiliza ChatGPT como una herramienta complementaria, no como un reemplazo. Asegúrate de que los niños comprendan que
        ChatGPT es una herramienta para ayudar con el aprendizaje, pero no sustituye la interacción humana ni la enseñanza
        tradicional.
      </li>
      <li>
        Establece límites de tiempo para el uso de ChatGPT. Al igual que con cualquier otra tecnología, es importante
        establecer límites y asegurarse de que los niños no pasen demasiado tiempo en línea.
      </li>
      <li>
        Involucra a los niños en la personalización de HappyGPT. Permíteles elegir temas de interés y ajustar la herramienta
        según sus necesidades y preferencias, lo que puede aumentar su compromiso y motivación.
      </li>
      <li>
        Aprovecha las funcionalidades de HappyGPT para trabajar en habilidades específicas. Por ejemplo, si un niño necesita
        mejorar en matemáticas, puedes personalizar el uso de ChatGPT para enfocarse en problemas y conceptos matemáticos.
      </li>
      <li>
        Fomenta el uso de ChatGPT en grupo. Puede ser una actividad divertida y educativa que los niños realicen con amigos o
        hermanos, promoviendo el aprendizaje colaborativo.
      </li>
    </ol>
  </div>
);

export default Home;
