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
      done: "Ya estás en la lista. Mira tu correo.",
      already: "Ya estabas en la lista.",
      invalid: "Ese correo no parece correcto.",
      error: "Algo ha fallado. Vuelve a intentarlo en un rato.",
    },
  },
  footer: {
    tagline: "Amigos que ves de verdad.",
    privacy: "Privacidad",
    terms: "Términos",
    contact: "Contacto",
  },
  lang: {
    label: "Idioma",
  },
  contact: {
    title: "¡Somos todo oídos!",
    body: "Escríbenos por aquí. La app sigue en desarrollo, y las ideas nuevas son bienvenidas.",
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Correo",
      emailPlaceholder: "tu@correo.com",
      phone: "Tu móvil",
      phones: { ios: "iPhone", android: "Android", other: "Otro" },
      reason: "¿Qué te trae a Near?",
      reasons: [
        { key: "scroll", label: "Dejar de perder horas haciendo scroll" },
        { key: "ads", label: "Huir del exceso de anuncios" },
        { key: "curious", label: "Solo curiosidad" },
        { key: "data", label: "Que no usen mis datos" },
      ],
      message: "Mensaje",
      messagePlaceholder: "¿Qué quieres contarnos?",
      button: "Enviar",
      sending: "Enviando…",
      done: "Mensaje enviado.",
      invalid: "Rellena todo para que podamos contestarte.",
      invalidEmail: "Ese correo no parece correcto.",
      error: "No ha funcionado. Prueba otra vez en un momento.",
    },
  },
  legal: {
    updated: "Última actualización",
  },
  privacy: {
    title: "Privacidad",
    intro: "Versión corta: Near guarda solo lo que necesita para enseñar a tus amigos lo que publicas. No vendemos nada, no ponemos anuncios y no hay analíticas ni rastreo, ni en la app ni en esta web.",
    sections: [
      {
        title: "Qué guardamos",
        body: "Cuando entras con Apple o Google recibimos un ID de usuario suyo, y tu nombre y correo si decides compartirlos. Después, solo lo que añades tú:",
        items: [
          "Tu nombre, tu foto de perfil, y el cumpleaños y la bio corta si los rellenas.",
          "Tus publicaciones: fotos, textos y, si lo dejas puesto, el sitio donde se hicieron.",
          "Tus comentarios en las publicaciones de tus amigos.",
          "Quiénes son tus amigos y cuándo os añadisteis, y a quién has bloqueado.",
          "Los reportes que nos envías sobre una publicación, un comentario o una persona.",
        ],
      },
      {
        title: "Cómo funciona lo de “cerca”",
        body: "Near no usa tu ubicación para encontrar amigos. Con la app abierta, tu móvil comparte un código aleatorio con los móviles de la misma sala por la red local. El código cambia cada diez minutos, caduca a los quince y no se guarda más allá. Quien está a tu lado ve tu nombre y tu foto. Quien está más lejos no ve nada.",
      },
      {
        title: "Permisos y para qué sirven",
        body: "iOS te pedirá estos permisos. Cada uno hace exactamente una cosa:",
        items: [
          "Red local: encontrar al amigo que tienes al lado.",
          "Cámara y fotos: imágenes para tus publicaciones.",
          "Ubicación, solo mientras usas la app: ponerle nombre al sitio de una publicación. Puedes editarlo o quitarlo antes de publicar. Near nunca te sigue en segundo plano.",
        ],
      },
      {
        title: "Quién ve qué",
        body: "Tus publicaciones y comentarios solo los ven tus amigos. No hay perfil público, ni buscador, ni página de explorar. Tu nombre y tu foto de perfil son lo único que puede ver un desconocido, y solo mientras estáis los dos en la misma sala con la app abierta. Bloquea a alguien y ninguno de los dos vuelve a ver al otro.",
      },
      {
        title: "Dónde está",
        body: "Tus datos se guardan en Supabase, un proveedor de alojamiento, y llegan a tus amigos a través de él. Apple o Google gestionan el inicio de sesión. Los correos de esta web salen por Resend. Ninguno puede usar tus datos para otra cosa, y nadie más los recibe. No vendemos datos, no ponemos anuncios y no usamos ningún SDK de analítica ni rastreo.",
      },
      {
        title: "Borrarlo todo",
        body: "Ajustes → Eliminar cuenta borra tu cuenta, tus fotos, publicaciones y comentarios, al momento y para siempre. Nada tuyo se queda en los móviles de tus amigos ni en el nuestro. Si lo prefieres, escríbenos y lo hacemos por ti.",
      },
      {
        title: "Esta web",
        body: "La lista de espera guarda tu correo y tu idioma para escribirte una vez cuando Near salga, más un breve saludo de bienvenida. El formulario de contacto guarda lo que escribiste para poder contestarte. La web no usa cookies ni analíticas. Recuerda tu idioma en tu navegador, nada más.",
      },
      {
        title: "Tus derechos",
        body: "Puedes ver, cambiar y borrar todo lo que Near tiene sobre ti desde la app, cuando quieras. Si quieres una copia de tus datos, o crees que guardamos algo que no deberíamos, escríbenos. Contesta una persona. Near es para mayores de 13 años, y no guardamos a sabiendas datos de nadie más joven.",
      },
      {
        title: "Cambios",
        body: "Si esta página cambia, la fecha de arriba cambia con ella. Cualquier cosa importante te la contamos en la app.",
      },
    ],
    contact: { title: "Preguntas", body: "Escríbenos:" },
  },
  terms: {
    title: "Términos",
    intro: "Reglas sencillas para usar Near. Cortas, porque no hay mucho más: sé una persona real, pórtate bien con tus amigos, y la app es tuya para usarla.",
    sections: [
      {
        title: "Quién puede usar Near",
        body: "Tienes que tener 13 años o más y entrar con tu propia cuenta de Apple o Google. Una cuenta por persona. Near es para personas, no para bots ni empresas.",
      },
      {
        title: "Tu contenido",
        body: "Lo que publicas es tuyo. Al publicarlo dejas que Near lo guarde y se lo enseñe a tus amigos, que es de lo que va todo. No publiques lo que no tienes derecho a compartir, y recuerda que tus amigos pueden hacer capturas, como en cualquier sitio.",
      },
      {
        title: "Las reglas",
        body: "Near sigue siendo bueno porque es pequeño. Ayuda a que siga así:",
        items: [
          "Nada de acoso, amenazas ni odio.",
          "Nada de imágenes íntimas de nadie sin su consentimiento, y nada ilegal.",
          "No te hagas pasar por otra persona.",
          "No intentes fingir que estás cerca, automatizar la app, extraer datos ni colarte.",
        ],
      },
      {
        title: "Reportes y bloqueos",
        body: "Cada publicación, comentario y perfil tiene una opción para reportar, y puedes bloquear a cualquiera desde su perfil: dejaréis de ser amigos y ninguno de los dos volverá a ver al otro. Leemos cada reporte en menos de 24 horas. No hay tolerancia con el contenido abusivo ni con la gente abusiva: eliminamos lo que rompe estas reglas y, cuando hace falta, la cuenta detrás.",
      },
      {
        title: "Si alguien se salta las reglas",
        body: "Si una cuenta se salta estas reglas podemos quitar contenido, suspender la cuenta o eliminarla, sin aviso cuando el contenido es ilegal o hace daño a alguien. Puedes irte cuando quieras: Ajustes → Eliminar cuenta, y todo se va contigo.",
      },
      {
        title: "El servicio",
        body: "Near es nuevo y lo hace un equipo pequeño. Cambiará, a veces fallará y algún día podría cerrar. Haremos lo posible por avisarte de cualquier cosa grande. Se ofrece tal cual, sin garantía, y nuestra responsabilidad está limitada hasta donde permite la ley. Donde la ley te da derechos que estos términos no pueden quitarte, mandan esos derechos.",
      },
      {
        title: "Cambios",
        body: "Si estos términos cambian, la fecha de arriba cambia con ellos. Si sigues usando Near después, se aplican los nuevos.",
      },
    ],
    contact: { title: "Preguntas", body: "Escríbenos:" },
  },
};

export default es;
