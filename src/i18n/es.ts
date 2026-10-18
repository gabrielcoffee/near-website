import type { Dictionary, LegalSection, PlusRow } from "./en";

const es: Dictionary = {
  meta: {
    title: "Near — amigos que ves de verdad",
    description:
      "Near es una red social para los amigos que ves de verdad. Solo puedes añadir a alguien en persona. Sin anuncios, sin algoritmo, sin likes.",
  },
  nav: {
    how: "Cómo funciona",
    also: "También en Near",
    plus: "Near Spark",
    believe: "En qué creemos",
    cta: "Descargar la app",
  },
  hero: {
    title: "Near",
    tagline: "Amigos que ves de verdad.",
    scroll: "hay más",
  },
  how: {
    steps: [
      {
        title: "Solo en persona",
        body: "Solo puedes añadir a quien tienes al lado. ¿Te has encontrado con un amigo? Os añadís desde la app, ahí mismo.",
      },
      {
        title: "Tus amigos",
        body: "Toda la gente que has visto en persona, en una sola lista. Esa es toda tu red.",
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
  also: {
    intro: "Toca las pantallas para pasarlas.",
    features: [
      { title: "Historias", body: "Fotos y vídeos para tus amigos, que desaparecen a las 24 horas. Ves exactamente quién los ha visto." },
      { title: "Mensajes", body: "Responde a una historia y la conversación empieza ahí. Con Near Spark." },
      { title: "Nítido para todos", body: "Sin límite de 1080 px y sin bajar la calidad en posts que ven pocos. Cada post se ve como lo hiciste." },
    ],
  },
  plus: {
    intro: "Near es gratis. Near Spark es para el amigo que quiere más.",
    free: "Gratis",
    features: [
      { title: "Habla con quien ya has visto en persona.", body: "Mensajes solo entre amigos." },
      { title: "Más nítido que Instagram.", body: "Fotos a 4032 px, casi 4 veces Instagram. Vídeos a 60 fps, de hasta 3 minutos." },
      { title: "Tus historias no desaparecen.", body: "Se quedan en un archivo privado, y las mejores puedes fijarlas en tu perfil." },
      { title: "Dilo en voz alta.", body: "Comentarios de voz en los posts de tus amigos. Todos pueden escucharlos; para publicar uno hace falta Near Spark." },
    ],
    labels: { instagram: "Instagram · 1080 px", near: "Near Spark · 4032 px", video: "1080p · 60 fps · 3 min", highlights: "Destacados", archive: "Archivo", reply: "Respondió a tu historia", voice: "Comentario de voz", you: "Tú" },
    plans: { title: "Planes", monthly: "Mensual", yearly: "Anual", perMonth: "/ mes", perYear: "/ año", equals: "{price} al mes", save: "Ahorra {pct}", trial: "Primera semana gratis, en los dos.", soon: "Pronto en el App Store." },
    more: {
      title: "Y el resto",
      rows: [
      { label: "Mensajes", free: "Leer", plus: true },
      { label: "Comentarios de voz", free: "Escuchar", plus: true },
      { label: "Fotos", free: "2048 px", plus: "4032 px" },
      { label: "Vídeo", free: "30 fps · 1 min", plus: "60 fps · 3 min" },
      { label: "Archivo de historias y Destacados", free: false, plus: true },
      { label: "Archivo de posts", free: true, plus: true },
      { label: "Amigos, feed e historias", free: true, plus: true },
      { label: "Sin anuncios, nunca", free: true, plus: true },
      { label: "Sin bajar la calidad en posts que ven pocos", free: true, plus: true },
      ] as PlusRow[],
    },
  },
  stack: { prev: "Anterior", next: "Siguiente" },
  believe: {
    paragraphs: [
      "Toda gran red social está hecha para que no salgas de ella. Near es pequeña a propósito.",
    ],
    items: [
      { title: "Sin algoritmo, sin anuncios, sin basura de IA", body: "Tus amigos, lo más nuevo primero. Nada más." },
      { title: "Sin scroll infinito", body: "El feed se acaba cuando tus amigos dejan de publicar." },
      { title: "Sin FOMO", body: "Solo ves a la gente que ves de verdad." },
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
    contents: "En esta página",
  },
  privacy: {
    title: "Privacidad",
    intro: "Versión corta: Near guarda solo lo que necesita para enseñar a tus amigos lo que publicas. No vendemos nada, no ponemos anuncios y no hay analíticas ni rastreo, ni en la app ni en esta web.",
    sections: [
      {
        title: "Quién es responsable de tus datos",
        body: "Near, la app para iPhone y esta web, la gestiona {entity}, que decide qué pasa con tus datos personales. Para cualquier cosa sobre privacidad, incluidos tus derechos, escribe a la dirección que hay al final de esta página. Te contesta una persona.",
      },
      {
        title: "Qué guardamos",
        body: "Entras con Apple, con Google o con tu correo y una contraseña, y en Ajustes puedes conectar más de una a tu cuenta. De Apple o Google recibimos un ID de usuario, y tu nombre y correo si decides compartirlos; con correo guardamos tu dirección y una forma cifrada de tu contraseña, nunca la contraseña en sí. Después, solo lo que añades tú:",
        items: [
          "Tu nombre, tu foto de perfil, y el cumpleaños y la bio corta si los rellenas.",
          "Tus publicaciones: fotos y vídeos, textos y, si lo dejas puesto, el sitio donde se hicieron. Si archivas una, solo la ves tú hasta que la recuperes; si la borras, desaparece con sus comentarios.",
          "Tus historias: la foto o el vídeo, y qué amigos la han visto. Tus amigos ven una historia durante 24 horas; después caduca y se borra. Con Near Spark, tus historias caducadas se quedan en un archivo que solo ves tú, y las que fijas en tu perfil como Destacados siguen visibles para tus amigos.",
          "Tus mensajes con amigos: el texto, las fotos, los vídeos, las notas de voz, los GIF y los stickers, cuándo los enviaste y cuándo se leyeron. Si anulas el envío de uno, desaparece para los dos.",
          "Tus notas de voz: las grabas en la app y se guardan en nuestros servidores y en Cloudflare. Solo las pueden oír las dos personas de la conversación, y si anulas el envío de una, desaparece para los dos.",
          "Tus comentarios en las publicaciones de tus amigos: palabras, una foto, un GIF, un sticker o, con Near Spark, un comentario de voz. Una foto o un comentario de voz se guarda en nuestros servidores y en Cloudflare.",
          "Quiénes son tus amigos y cuándo os añadisteis, y a quién has bloqueado.",
          "Los reportes que nos envías sobre una publicación, una historia, un comentario, un mensaje o una persona. Una historia o un mensaje reportados (también una nota de voz) se guardan hasta 7 días, incluso después de caducar o de anular el envío, para poder revisarlos. Nuestro equipo de moderación los abre, y también la foto de un comentario reportado, mediante enlaces de corta duración.",
          "Los comentarios que nos envías desde la app: lo que escribiste, con la versión de la app, la de iOS y el modelo de tu móvil, para leerlos y arreglar lo que haga falta. Se borran con tu cuenta.",
          "Near Spark: Apple procesa el pago. Recibimos un identificador de transacción, el producto, las fechas y si tu suscripción está activa, nunca los datos de tu tarjeta. Mientras está activa, aparece una pequeña chispa después de tu nombre en todos los sitios de la app donde se ve, así que quien vea tu nombre sabrá que la tienes.",
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
          "Cámara y fotos: fotos y vídeos para tus publicaciones, historias y mensajes, y tu foto de perfil. Near solo añade a tus fotos cuando le pides guardar una historia, o una foto o un vídeo de un chat.",
          "Micrófono: el sonido de los vídeos que grabas, tus notas de voz y tus comentarios de voz.",
          "Ubicación, solo mientras usas la app: ponerle nombre al sitio de una publicación. Puedes editarlo o quitarlo antes de publicar. Near nunca te sigue en segundo plano.",
        ],
      },
      {
        title: "En tu móvil",
        body: "Near guarda en tu móvil una copia de las fotos y los vídeos de tus amigos para que se abran al instante y no se descarguen dos veces. Es una caché: se queda dentro de la app y desaparece cuando cierras sesión, eliminas tu cuenta o borras la app. Un post que guardas como borrador también se queda solo en tu móvil: nunca se sube ni entra en tu copia de iCloud, te espera si cierras sesión y desaparece cuando eliminas tu cuenta o borras la app. Las fotos y los vídeos que publicas se guardan sin datos de ubicación: se eliminan las etiquetas EXIF y GPS.",
      },
      {
        title: "GIF y stickers",
        body: "La búsqueda y la navegación de GIF y stickers van directamente de la app a KLIPY, un servicio de GIF de terceros, sin pasar por nuestros servidores. KLIPY recibe lo que buscas, la dirección IP de tu móvil y un identificador seudónimo derivado de tu cuenta, no tu nombre ni tu correo. Un GIF o un sticker que envías es un enlace a la copia de KLIPY, no un archivo que guardemos: quien lo ve lo carga desde KLIPY, así que KLIPY también ve su dirección IP. Si anulas el envío del mensaje, el enlace desaparece para los dos. Lo que KLIPY hace con esto lo explica su [política de privacidad](https://klipy.com/support/privacy-policy).",
      },
      {
        title: "Quién ve qué",
        body: "Tus publicaciones e historias solo las ven tus amigos. Un comentario, sea con palabras, una foto, un GIF, un sticker o tu voz, lo ve cualquiera que pueda ver la publicación en la que está, incluidos los amigos de quien la publicó, que pueden no ser amigos tuyos; con él ven tu nombre y tu foto de perfil. Un mensaje, notas de voz y GIF incluidos, solo lo ven las dos personas que participan en él. Una historia es visible para tus amigos durante 24 horas. Quién ha visto una historia solo lo ve la persona que la publicó. Con Near Spark, tus historias caducadas se quedan en un archivo que solo ves tú, y los Destacados que fijas en tu perfil los ven tus amigos. Tus amigos también ven cuántos posts y amigos tienes, y cuáles de tus amigos conocen también; el resto se queda en un número. No hay perfil público, ni buscador, ni página de explorar. Aparte de un comentario en una publicación que puede ver, tu nombre y tu foto de perfil son lo único que puede ver un desconocido, y solo mientras estáis los dos en la misma sala con la app abierta. Bloquea a alguien y ninguno de los dos vuelve a ver al otro.",
      },
      {
        title: "Dónde está",
        body: "Tus datos se guardan en Supabase, un proveedor de alojamiento, y llegan a tus amigos a través de él. Las fotos, los vídeos, las notas de voz y los comentarios de voz los guarda y los entrega Cloudflare. Apple o Google gestionan el inicio de sesión con ellos, y Apple los pagos de Near Spark: solo recibimos un identificador de transacción y el estado de tu suscripción, nunca los datos de tu tarjeta. Los correos de Near y de esta web salen por Resend. Ninguno puede usar tus datos para otra cosa, y nadie más los recibe. No vendemos datos, no ponemos anuncios y no usamos ningún SDK de analítica ni rastreo. Los GIF y los stickers son la excepción: tu móvil habla directamente con KLIPY, un servicio de GIF de terceros, que tiene su propia [política de privacidad](https://klipy.com/support/privacy-policy).",
      },
      {
        title: "Borrarlo todo",
        body: "Ajustes → Privacidad y seguridad → Eliminar cuenta cierra tu sesión y borra tu cuenta 30 días después. Hasta entonces nadie te ve: tu perfil, tus publicaciones, historias y comentarios quedan ocultos para tus amigos, y nadie cerca puede encontrarte. ¿Te lo has pensado mejor? Vuelve a iniciar sesión antes de la fecha y todo sigue como lo dejaste. Después, tu cuenta, fotos, vídeos, publicaciones, historias, mensajes, comentarios y amistades se borran para siempre y, si entraste con Apple, Near también renuncia a su acceso a tu cuenta de Apple. Nada tuyo se queda en los móviles de tus amigos ni en el nuestro. Te escribimos cuando se programa, unos días antes y cuando está hecho. Si nos cuentas por qué te vas, guardamos la respuesta sin tu cuenta, solo para mejorar Near. Si lo prefieres, escríbenos y lo hacemos por ti.",
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
        title: "Quiénes somos",
        body: "Near es una app para iPhone creada y gestionada por {entity}. En estos términos, “Near”, “nosotros” y “nos” se refieren a quien gestiona el servicio; “tú” es la persona que lo usa. Para cualquier cosa sobre estos términos, escribe a la dirección que hay al final de esta página.",
      },
      {
        title: "Quién puede usar Near",
        body: "Tienes que tener 13 años o más y entrar con tu propia cuenta de Apple o Google o con tu propio correo. Una cuenta por persona. Near es para personas, no para bots ni empresas.",
      },
      {
        title: "Tu contenido",
        body: "Lo que publicas, pones en una historia o envías en un mensaje es tuyo. Al compartirlo dejas que Near lo guarde y se lo enseñe a los amigos con quienes lo compartes, que es de lo que va todo. Un comentario lo ve cualquiera que pueda ver la publicación en la que está. No publiques lo que no tienes derecho a compartir, y recuerda que tus amigos pueden hacer capturas, como en cualquier sitio.",
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
        body: "Cada publicación, historia, comentario, mensaje y perfil tiene una opción para reportar, y puedes bloquear a cualquiera desde su perfil: dejaréis de ser amigos y ninguno de los dos volverá a ver al otro. Leemos cada reporte en menos de 24 horas. No hay tolerancia con el contenido abusivo ni con la gente abusiva: eliminamos lo que rompe estas reglas y, cuando hace falta, la cuenta detrás.",
      },
      {
        title: "Si alguien se salta las reglas",
        body: "Si una cuenta se salta estas reglas podemos quitar contenido, suspender la cuenta o eliminarla, sin aviso cuando el contenido es ilegal o hace daño a alguien. Puedes irte cuando quieras: Ajustes → Privacidad y seguridad → Eliminar cuenta. Tienes 30 días para cambiar de opinión; después, todo se va contigo.",
      },
      {
        title: "Near Spark",
        body: "Near Spark es una suscripción opcional, mensual o anual, que se compra a través del App Store. Se renueva automáticamente al final de cada periodo, al precio que ves en la app, hasta que la canceles. Los nuevos suscriptores que cumplan los requisitos tienen la primera semana gratis; Apple decide quién cumple los requisitos, y al terminar la semana se te cobra si no has cancelado antes. Puedes cancelarla cuando quieras en los ajustes de tu ID de Apple, al menos 24 horas antes de la fecha de renovación, y conservas Near Spark hasta el final del periodo que has pagado. Apple gestiona el pago y cualquier reembolso según sus propias condiciones, así que los reembolsos se piden a Apple. Si el precio cambia, Apple te avisa antes y te pide que lo aceptes. Near también puede darte días gratis de Near Spark: ahora, tres días cuando eres el primer amigo de alguien nuevo en Near, hasta tres veces. Esos días son un beneficio promocional, no forman parte de tu suscripción de Apple, y podemos cambiarlos o quitarlos en cualquier momento. Una cosa importante: la suscripción la gestiona Apple, no nosotros, así que eliminar tu cuenta de Near no la termina. Si tienes Near Spark, cancélala en los ajustes de tu ID de Apple antes de irte y Apple dejará de cobrarte. Todo lo que no es Near Spark sigue siendo gratis.",
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
