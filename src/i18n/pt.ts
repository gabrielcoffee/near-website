import type { Dictionary } from "./en";

const pt: Dictionary = {
  meta: {
    title: "Near — amigos que você vê de verdade",
    description:
      "Near é uma rede social para os amigos que você vê de verdade. Só dá pra adicionar alguém pessoalmente. Sem anúncios, sem algoritmo, sem curtidas.",
  },
  nav: {
    how: "Como funciona",
    believe: "No que acreditamos",
    next: "Em breve",
    cta: "Baixar o app",
  },
  hero: {
    title: "Near",
    tagline: "Amigos que você vê de verdade.",
    scroll: "rolar",
  },
  how: {
    steps: [
      {
        title: "Encontre pessoalmente",
        body: "Você só adiciona quem está do seu lado. Os dois tocam, em até 30 segundos. É esse o aperto de mão.",
      },
      {
        title: "Sua grade",
        body: "Todo mundo que você já encontrou de verdade, numa grade só. Arraste como quiser. Essa é a sua rede inteira.",
      },
      {
        title: "Um feed que acaba",
        body: "Fotos e palavras dos seus amigos, do mais novo pro mais antigo. Sem ranking, sem “sugestões pra você”.",
      },
      {
        title: "Palavras, não corações",
        body: "Não existe curtida. Se algo importa pra você, você fala.",
      },
    ],
  },
  next: {
    intro: "Três coisas a caminho. Toque nas telas pra passar.",
    prev: "Anterior",
    next: "Próximo",
    features: [
      { title: "Planos", body: "Escolha um lugar, escolha os amigos, envie. Todo mundo recebe uma notificação e responde: vou ou não vou. Sem grupo, sem enquete, sem quarenta mensagens pra achar uma sexta." },
      { title: "Posts juntos", body: "Quando os celulares de dois amigos estão na mesma sala, vocês podem postar juntos. Uma foto, os dois nomes nela. Prova de que você estava lá de verdade." },
      { title: "Retrospectivas", body: "No fim de cada mês, e de cada ano: quem você viu, quantas vezes, onde. Não é tempo de tela. É tempo de verdade." },
    ],
  },
  believe: {
    paragraphs: [
      "Todo app social grande é feito pra te manter lá dentro. Anúncio precisa dos seus olhos, algoritmo precisa do seu tempo, curtida precisa da sua ansiedade. Funciona. Esse é o problema.",
      "O Near é pequeno de propósito. Só gente que você encontrou, só o que essa gente posta, na ordem em que aconteceu. Acaba quando seus amigos acabam. Se parece um Instagram pior, ótimo. É isso mesmo.",
    ],
    downgrades: "Downgrades:",
    items: [
      { title: "Sem algoritmo, sem anúncios, sem lixo de IA", body: "Seu feed são seus amigos, do mais novo pro mais antigo. Ninguém pagou pra estar ali, e nada foi gerado por máquina." },
      { title: "Sem rolagem infinita", body: "O TikTok foi feito pra nunca acabar. O feed do Near acaba quando seus amigos param de postar. Aí vai lá fora." },
      { title: "Sem FOMO", body: "Você só vê quem você vê de verdade. Se não está no Near, você provavelmente estava lá." },
    ],
  },
  cta: {
    title: "Vá ver seus amigos.",
    body: "O Near é feito para iPhone.",
    button: "Baixar na App Store",
    soon: "Em breve na App Store",
    waitlist: {
      label: "E-mail",
      placeholder: "seu@email.com",
      button: "Entrar na lista",
      sending: "Enviando…",
      done: "Você está na lista. A gente te avisa uma vez só.",
      already: "Você já está na lista.",
      invalid: "Esse e-mail não parece certo.",
      error: "Não deu. Tenta de novo daqui a pouco.",
    },
  },
  footer: {
    tagline: "Amigos que você vê de verdade.",
    privacy: "Privacidade",
    contact: "Contato",
  },
  lang: {
    label: "Idioma",
  },
  privacy: {
    title: "Privacidade",
    intro: "Esta página vai ter a política de privacidade do Near. Versão curta: seus dados são seus, não vendemos nada e não mostramos anúncios.",
    sections: [
      { title: "O que coletamos", body: "Seu nome, foto, favoritos, posts, comentários e mensagens. Sua localização só quando você anexa a um post." },
      { title: "O que não fazemos", body: "Não vendemos seus dados, não mostramos anúncios e não entregamos seu conteúdo a um algoritmo." },
      { title: "Contato", body: "Dúvidas? Escreve pra gente." },
    ],
  },
};

export default pt;
