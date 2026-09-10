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
        title: "Só pessoalmente",
        body: "Só dá pra adicionar quem está do seu lado. Encontrou um amigo? Os dois se adicionam pelo app, ali na hora.",
      },
      {
        title: "Sua grade",
        body: "Todo mundo que você já encontrou de verdade, numa grade só. Arraste pra organizar do seu jeito. Essa é a sua rede inteira.",
      },
      {
        title: "Um feed que acaba",
        body: "Fotos e textos dos seus amigos, do mais novo pro mais antigo. Sem ranking, sem “sugestões pra você”.",
      },
      {
        title: "Palavras, não corações",
        body: "Não tem curtida. Se algo importa pra você, é só falar.",
      },
    ],
  },
  next: {
    intro: "Três novidades a caminho. Toque nas telas pra ver a próxima.",
    prev: "Anterior",
    next: "Próximo",
    features: [
      { title: "Planos", body: "Escolha um lugar, escolha os amigos, envie. Todo mundo recebe uma notificação e responde: vou ou não vou. Sem criar grupo, sem enquete, sem quarenta mensagens pra conseguir marcar uma sexta." },
      { title: "Posts juntos", body: "Quando dois amigos estão no mesmo lugar, dá pra postar junto. Uma foto, com o nome dos dois. A prova de que vocês estavam lá mesmo." },
      { title: "Retrospectivas", body: "No fim de cada mês, e de cada ano: quem você viu, quantas vezes, onde. Nada de tempo de tela. Tempo de verdade." },
    ],
  },
  believe: {
    paragraphs: [
      "Toda grande rede social é feita pra te prender lá dentro. Anúncio precisa dos seus olhos, algoritmo precisa do seu tempo, curtida precisa da sua ansiedade. Funciona. E esse é o problema.",
      "O Near é pequeno de propósito. Só gente que você encontrou, só o que essa gente posta, na ordem em que aconteceu. Quando seus amigos param de postar, acabou. Se parece um Instagram pior, ótimo. É mesmo.",
    ],
    downgrades: "Downgrades:",
    items: [
      { title: "Sem algoritmo, sem anúncios, sem lixo de IA", body: "No seu feed, só seus amigos, do mais novo pro mais antigo. Ninguém pagou pra estar ali, e nada ali foi gerado por IA." },
      { title: "Sem rolagem infinita", body: "O TikTok foi feito pra nunca acabar. O feed do Near acaba quando seus amigos param de postar. Depois disso, vai pra rua." },
      { title: "Sem FOMO", body: "Você só vê quem você vê de verdade. Se não apareceu no Near, provavelmente você estava lá." },
    ],
  },
  cta: {
    title: "Vai ver seus amigos.",
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
      invalid: "Esse e-mail parece estar errado.",
      error: "Não deu certo. Tenta de novo daqui a pouco.",
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
    intro: "Aqui vai ficar a política de privacidade do Near. Versão curta: seus dados são seus, a gente não vende e não mostra anúncios.",
    sections: [
      { title: "O que coletamos", body: "Seu nome, foto, favoritos, posts, comentários e mensagens. Sua localização só quando você adiciona ela a um post." },
      { title: "O que não fazemos", body: "Não vendemos seus dados, não mostramos anúncios e não entregamos seu conteúdo a um algoritmo." },
      { title: "Contato", body: "Dúvidas? Escreve pra gente." },
    ],
  },
};

export default pt;
