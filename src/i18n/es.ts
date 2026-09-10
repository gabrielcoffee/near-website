import type { Dictionary } from "./en";

const es: Dictionary = {
  meta: {
    title: "Near — amigos que ves de verdad",
    description:
      "Near es una red social para los amigos que ves de verdad. Solo puedes añadir a alguien en persona. Sin anuncios, sin algoritmo, sin likes.",
  },
  nav: {
    how: "Cómo funciona",
    believe: "En qué creemos",
    next: "Próximamente",
    cta: "Descargar la app",
  },
  hero: {
    title: "Near",
    tagline: "Amigos que ves de verdad.",
    scroll: "baja",
  },
  how: {
    steps: [
      {
        title: "Solo en persona",
        body: "Solo puedes añadir a quien tienes al lado. ¿Te has encontrado con un amigo? Os añadís desde la app, ahí mismo.",
      },
      {
        title: "Tu cuadrícula",
        body: "Toda la gente que has visto en persona, en una sola cuadrícula. Ordénala como quieras. Esa es toda tu red.",
      },
      {
        title: "Un feed que se acaba",
        body: "Fotos y textos de tus amigos, de lo más nuevo a lo más antiguo. Sin ranking, sin “sugerencias para ti”.",
      },
      {
        title: "Palabras, no corazones",
        body: "No hay likes. Si algo te importa, dilo.",
      },
    ],
  },
  next: {
    intro: "Tres novedades en camino. Toca las pantallas para pasarlas.",
    prev: "Anterior",
    next: "Siguiente",
    features: [
      { title: "Planes", body: "Elige un sitio, elige a los amigos, envíalo. Todos reciben un aviso y contestan: voy o no voy. Sin grupo de WhatsApp, sin encuestas, sin cuarenta mensajes para cuadrar un viernes." },
      { title: "Posts juntos", body: "Cuando dos amigos están en el mismo sitio, podéis publicar juntos. Una foto, con el nombre de los dos. La prueba de que estabais allí de verdad." },
      { title: "Resúmenes", body: "Al final de cada mes, y de cada año: a quién has visto, cuántas veces, dónde. No es tiempo de pantalla. Es tiempo de verdad." },
    ],
  },
  believe: {
    paragraphs: [
      "Toda gran red social está hecha para que no salgas de ella. Los anuncios quieren tus ojos, el algoritmo tu tiempo, los likes tu ansiedad. Y funciona. Ese es el problema.",
      "Near es pequeña a propósito. Solo gente que has visto en persona, solo lo que publica, en el orden en que pasó. Cuando tus amigos dejan de publicar, se acabó. Si te suena a un Instagram peor, bien. Lo es.",
    ],
    downgrades: "Lo que le hemos quitado:",
    items: [
      { title: "Sin algoritmo, sin anuncios, sin basura de IA", body: "Tu feed son tus amigos, de lo más nuevo a lo más antiguo. Nadie ha pagado por salir ahí, y nada lo ha generado una IA." },
      { title: "Sin scroll infinito", body: "TikTok está hecho para no acabar nunca. El feed de Near se acaba cuando tus amigos dejan de publicar. Y entonces, a la calle." },
      { title: "Sin FOMO", body: "Solo ves a la gente que ves de verdad. Si algo no sale en Near, lo más seguro es que estuvieras allí." },
    ],
  },
  cta: {
    title: "Sal a ver a tus amigos.",
    body: "Near está hecha para iPhone.",
    button: "Descargar en el App Store",
    soon: "Muy pronto en el App Store",
    waitlist: {
      label: "Correo electrónico",
      placeholder: "tu@email.com",
      button: "Apuntarme a la lista",
      sending: "Enviando…",
      done: "Ya estás en la lista. Te escribiremos una sola vez.",
      already: "Ya estabas en la lista.",
      invalid: "Ese correo no parece correcto.",
      error: "Algo ha fallado. Vuelve a intentarlo en un rato.",
    },
  },
  footer: {
    tagline: "Amigos que ves de verdad.",
    privacy: "Privacidad",
    contact: "Contacto",
  },
  lang: {
    label: "Idioma",
  },
  privacy: {
    title: "Privacidad",
    intro: "Aquí irá la política de privacidad de Near. Versión corta: tus datos son tuyos, no los vendemos y no mostramos anuncios.",
    sections: [
      { title: "Qué recogemos", body: "Tu nombre, foto, favoritos, publicaciones, comentarios y mensajes. Tu ubicación solo cuando la añades a una publicación." },
      { title: "Qué no hacemos", body: "No vendemos tus datos, no mostramos anuncios y no le damos tu contenido a ningún algoritmo." },
      { title: "Contacto", body: "¿Dudas? Escríbenos." },
    ],
  },
};

export default es;
