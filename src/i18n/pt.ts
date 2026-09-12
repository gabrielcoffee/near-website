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
      done: "Você está na lista. Dá uma olhada no e-mail.",
      already: "Você já está na lista.",
      invalid: "Esse e-mail parece estar errado.",
      error: "Não deu certo. Tenta de novo daqui a pouco.",
    },
  },
  footer: {
    tagline: "Amigos que você vê de verdade.",
    privacy: "Privacidade",
    terms: "Termos",
    contact: "Contato",
  },
  lang: {
    label: "Idioma",
  },
  contact: {
    title: "Somos todo ouvidos!",
    body: "Se comunique com a gente por aqui. O app está em desenvolvimento e ideias novas são bem-vindas!",
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "E-mail",
      emailPlaceholder: "seu@email.com",
      phone: "Seu celular",
      phones: { ios: "iPhone", android: "Android", other: "Outro" },
      reason: "O que te traz ao Near?",
      reasons: [
        { key: "scroll", label: "Para de perder tempo scrollando" },
        { key: "ads", label: "Fugir do excesso de anúncios" },
        { key: "curious", label: "Só curiosidade" },
        { key: "data", label: "Não ter meus dados usados" },
      ],
      message: "Mensagem",
      messagePlaceholder: "O que quer nos contar?",
      button: "Enviar",
      sending: "Enviando…",
      done: "Enviado. A gente responde logo.",
      invalid: "Preenche tudo pra gente conseguir responder.",
      invalidEmail: "Esse e-mail não parece certo.",
      error: "Não deu certo. Tenta de novo daqui a pouco.",
    },
  },
  legal: {
    updated: "Última atualização",
  },
  privacy: {
    title: "Privacidade",
    intro: "Versão curta: o Near guarda só o que precisa pra mostrar aos seus amigos o que você posta. A gente não vende nada, não mostra anúncios e não tem analytics nem rastreamento, nem no app nem neste site.",
    sections: [
      {
        title: "O que a gente guarda",
        body: "Quando você entra com a Apple, recebemos um ID de usuário da Apple, e seu nome e e-mail se você escolher compartilhar. Depois disso, só o que você mesmo adiciona:",
        items: [
          "Seu nome, foto de perfil e favoritos.",
          "Seus posts: fotos, legendas e, se você deixar, o lugar onde foram tiradas.",
          "Seus comentários e suas mensagens com amigos.",
          "Quem são seus amigos e quando vocês se adicionaram.",
        ],
      },
      {
        title: "Como funciona o “por perto”",
        body: "O Near não usa sua localização pra encontrar amigos. Com o app aberto, seu celular compartilha um código aleatório com os celulares na mesma sala pela rede local. O código muda a cada dez minutos, expira em quinze e não fica guardado além disso. Quem está do seu lado vê seu nome e sua foto. Quem está mais longe não vê nada.",
      },
      {
        title: "Permissões e pra que servem",
        body: "O iOS vai pedir estas permissões. Cada uma faz exatamente uma coisa:",
        items: [
          "Rede local: encontrar o amigo que está do seu lado.",
          "Câmera e fotos: imagens pros seus posts.",
          "Localização, só enquanto usa o app: dar nome ao lugar de um post. Você pode editar ou tirar antes de postar. O Near nunca te acompanha em segundo plano.",
        ],
      },
      {
        title: "Quem vê o quê",
        body: "Seus posts, comentários e mensagens só aparecem pros seus amigos. Não existe perfil público, busca nem página de explorar. Seu nome e sua foto de perfil são a única coisa que um desconhecido consegue ver, e só enquanto vocês dois estão na mesma sala com o app aberto.",
      },
      {
        title: "Onde fica",
        body: "Seus dados ficam no Supabase, um provedor de hospedagem, e chegam aos seus amigos por ele. A Apple cuida do login. Os e-mails deste site saem pelo Resend. Nenhum deles pode usar seus dados pra outra coisa, e ninguém mais recebe nada. A gente não vende dados, não mostra anúncios e não usa nenhum SDK de analytics ou rastreamento.",
      },
      {
        title: "Apagar tudo",
        body: "Ajustes → Excluir conta apaga sua conta, suas fotos, posts, comentários e mensagens, na hora e pra sempre. Nada seu fica no celular dos seus amigos nem no nosso. Se preferir, escreve pra gente e a gente faz por você.",
      },
      {
        title: "Este site",
        body: "A lista de espera guarda seu e-mail e seu idioma pra gente escrever uma vez quando o Near lançar, mais um oi de boas-vindas. O formulário de contato guarda o que você escreveu pra gente poder responder. O site não usa cookies nem analytics. Ele lembra seu idioma no seu navegador, só isso.",
      },
      {
        title: "Seus direitos",
        body: "Você pode ver, mudar e apagar tudo que o Near tem sobre você pelo app, a qualquer hora. Se quiser uma cópia dos seus dados, ou achar que guardamos algo que não deveríamos, escreve pra gente. Quem responde é uma pessoa. O Near é pra quem tem 13 anos ou mais, e a gente não guarda de propósito dados de quem é mais novo.",
      },
      {
        title: "Mudanças",
        body: "Se esta página mudar, a data lá em cima muda junto. Qualquer coisa importante, a gente avisa no app.",
      },
    ],
    contact: { title: "Dúvidas", body: "Escreve pra gente:" },
  },
  terms: {
    title: "Termos",
    intro: "Regras simples pra usar o Near. Curtas, porque não tem muito: seja uma pessoa de verdade, seja decente com seus amigos, e o app é seu pra usar.",
    sections: [
      {
        title: "Quem pode usar o Near",
        body: "Você precisa ter 13 anos ou mais e entrar com seu próprio ID Apple. Uma conta por pessoa. O Near é pra pessoas, não pra bots nem empresas.",
      },
      {
        title: "Seu conteúdo",
        body: "O que você posta é seu. Ao postar, você deixa o Near guardar e mostrar pros seus amigos, que é a ideia toda. Não poste o que você não tem direito de compartilhar, e lembra que seus amigos podem tirar print, como em qualquer lugar.",
      },
      {
        title: "As regras",
        body: "O Near continua bom porque é pequeno. Ajuda a manter assim:",
        items: [
          "Nada de assédio, ameaça ou ódio.",
          "Nada de imagem íntima de alguém sem consentimento, e nada ilegal.",
          "Não finja ser outra pessoa.",
          "Não tente fingir que está por perto, automatizar o app, raspar dados ou invadir.",
        ],
      },
      {
        title: "Quando alguém quebra as regras",
        body: "Se uma conta quebrar estas regras, a gente pode remover conteúdo, suspender a conta ou apagar. Você pode sair a qualquer hora: Ajustes → Excluir conta, e tudo vai embora junto.",
      },
      {
        title: "O serviço",
        body: "O Near é novo e feito por uma equipe pequena. Ele vai mudar, às vezes vai quebrar e um dia pode acabar. A gente vai fazer o possível pra avisar sobre qualquer coisa grande. Ele é oferecido como está, sem garantia, e nossa responsabilidade é limitada até onde a lei permite. Onde a lei te dá direitos que estes termos não podem tirar, esses direitos valem mais.",
      },
      {
        title: "Mudanças",
        body: "Se estes termos mudarem, a data lá em cima muda junto. Continuar usando o Near depois disso significa aceitar os novos termos.",
      },
    ],
    contact: { title: "Dúvidas", body: "Escreve pra gente:" },
  },
};

export default pt;
