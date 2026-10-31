import type { Dictionary, LegalSection } from "./en";

const pt: Dictionary = {
  meta: {
    title: "Near: amigos que você vê de verdade",
    description:
      "Near é uma rede social para os amigos que você vê de verdade. Só é possível adicionar alguém pessoalmente. Sem anúncios, sem algoritmo, sem curtidas.",
  },
  nav: {
    how: "Como funciona",
    believe: "No que acreditamos",
    cta: "Baixar o app",
  },
  hero: {
    title: "Near",
    tagline: "Amigos que você vê de verdade.",
    scroll: "tem mais",
  },
  how: {
    steps: [
      {
        title: "Só pessoalmente",
        body: "No Near você só adiciona seus amigos cara a cara!",
      },
      {
        title: "Relaxe sem perder tempo",
        body: "De 5 a 10 minutos é o tempo que leva para ver e interagir com todos os seus amigos. Depois, o feed acaba.",
      },
      {
        title: "Mostre seu dia a dia",
        body: "Um lugar seguro para compartilhar o que quiser, sabendo que só quem você conhece vai ver.",
      },
    ],
  },
  believe: {
    paragraphs: [
      "Em média, as pessoas passam 2 horas e 21 minutos por dia nas redes sociais. São 36 dias por ano olhando para uma tela, e isso não leva só tempo: leva sono, foco e autoestima.",
      "O Near é feito para ser o contrário. Todo mundo aqui é alguém que você já encontrou de verdade, então não há motivo para ficar rolando a tela: você vê seus amigos e segue o seu dia.",
      "A gente espera que a maior parte da sua vida aconteça longe da tela. E quando algo valer a pena compartilhar, que lugar melhor do que um onde você conhece todo mundo?",
    ],
  },
  without: {
    title: "O que não tem no Near",
    items: [
      { title: "Marcas e anúncios", body: "Você está aqui pra ver seus amigos, não pra comprar produtos." },
      { title: "Algoritmo", body: "Seus amigos, do mais recente ao mais antigo. Só isso." },
      { title: "Rolagem infinita", body: "O feed acaba quando seus amigos param de postar." },
      { title: "Desconhecidos", body: "Nada disso, só seus amigos de verdade, que você conheceu pessoalmente." },
    ],
  },
  cta: {
    title: "Vai ver seus amigos.",
    body: "O Near é feito para iPhone.",
    button: "Baixar na App Store",
    beta: "Testar o beta",
    betaNote: "Grátis no TestFlight. Em breve na App Store.",
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
      done: "Mensagem enviada.",
      invalid: "Preencha tudo para que possamos responder.",
      invalidEmail: "Esse e-mail não parece certo.",
      error: "Não deu certo. Tenta de novo daqui a pouco.",
    },
  },
  legal: {
    updated: "Última atualização",
    contents: "Nesta página",
  },
  privacy: {
    title: "Política de Privacidade",
    intro: "Versão curta: o Near guarda apenas o que precisa para mostrar aos seus amigos o que você compartilha com eles. Não vendemos dados, não exibimos anúncios e não usamos nenhuma ferramenta de analytics ou rastreamento, nem no app nem neste site. Esta página explica em detalhe o que coletamos, por quê, com quem compartilhamos e quais são os seus direitos.",
    sections: [
      {
        title: "Quem é responsável pelos seus dados",
        body: "O controlador dos seus dados pessoais é {entity}, que opera o aplicativo Near para iPhone e este site. Para qualquer assunto de privacidade, inclusive para exercer seus direitos, escreva para o e-mail no fim da página. Quem responde é uma pessoa da equipe, que também atua como encarregada pela proteção de dados.",
      },
      {
        title: "Quais dados coletamos",
        body: "Coletamos apenas o que você nos dá ou o que é gerado pelo uso do app:",
        items: [
          "Conta: quando você entra com a Apple, recebemos um identificador de usuário e, se você autorizar, seu nome e e-mail. Se você cria a conta com e-mail e senha, guardamos o e-mail e a senha em formato protegido (hash), nunca em texto legível. Você pode conectar mais de uma dessas formas de entrar à mesma conta, e trocar o e-mail ou a senha, em Ajustes.",
          "Perfil: nome de exibição, foto de perfil e, se você preencher, data de nascimento e uma bio curta.",
          "Posts: fotos e vídeos, legendas e, se você mantiver, o nome do lugar onde foram feitos. Se você arquivar um post, só você o vê até trazê-lo de volta; se apagar, ele some junto com os comentários.",
          "Stories: a foto ou o vídeo e a lista de amigos que assistiram. Seus amigos veem um story por 24 horas; depois ele fica num arquivo que só você vê, até você apagá-lo, e os que você fixa no perfil como Destaques continuam visíveis para seus amigos.",
          "Mensagens: o texto, as fotos, os vídeos, as mensagens de voz, os GIFs e as figurinhas, quem enviou, quando foi enviado e quando foi lido. Se você apagar uma para todos, ela some para vocês dois.",
          "Mensagens de voz: você grava no app e elas ficam guardadas nos nossos servidores e na Cloudflare. Só as duas pessoas da conversa podem ouvir, e se você apagar uma para todos, ela some para vocês dois.",
          "Comentários que você faz nos posts dos seus amigos: palavras, uma foto, um GIF, uma figurinha ou um comentário de voz. A foto e o comentário de voz ficam guardados nos nossos servidores e na Cloudflare.",
          "Sua rede: quem são seus amigos, quando vocês se adicionaram e quem você bloqueou.",
          "O apelido e o emblema que você dá a um amigo, e os emblemas que você desenha. Só você vê o apelido; o amigo que recebe o emblema vê esse emblema. Se você desfizer a amizade ou bloquear a pessoa, os dois são apagados.",
          "Denúncias que você envia sobre um post, story, comentário, mensagem ou pessoa, e o que decidimos sobre elas. Um story ou uma mensagem denunciados (inclusive de voz) são guardados por até 7 dias, mesmo depois de expirar ou de serem apagados, para podermos analisá-los, e a equipe de moderação os abre, assim como a foto de um comentário denunciado, por links de curta duração.",
          "O feedback que você manda pelo app: o que você escreveu, com a versão do app, a versão do iOS e o modelo do celular, para a gente ler e consertar o que precisar. Ele é apagado junto com a sua conta.",
          "Notificações: uma lista curta do que seus amigos fizeram (uma amizade, um comentário no seu post, um aniversário, um post novo), guardada por 60 dias. Se você permitir notificações push, o token do seu aparelho, para a gente conseguir avisar. Seu fuso horário, para o aniversário chegar de manhã. Cada tipo tem seu próprio interruptor nos Ajustes.",
          "Dados técnicos mínimos: a versão do app e os registros de acesso (endereço IP, data e hora) que o provedor de hospedagem mantém por um curto período, por segurança.",
        ],
        after: "Não coletamos sua lista de contatos, seu histórico de localização, dados de outros apps nem qualquer identificador de publicidade.",
      },
      {
        title: "Como funciona o “por perto”",
        body: "O Near não usa GPS nem sua localização para encontrar amigos. Quando você abre a tela Adicionar amigo, seu iPhone fica visível por Bluetooth para os iPhones que estão bem do seu lado, sem precisar de Wi‑Fi nem de internet entre os aparelhos. O que ele transmite é só um código aleatório, que não diz quem você é: o código muda a cada 10 minutos e expira em 15. Um iPhone por perto com o Near aberto pergunta aos nossos servidores de quem é aquele código, e só então mostra seu nome e sua foto de perfil. A amizade só é criada quando os dois seguram o card um do outro ao mesmo tempo por um segundo. Fechou a tela, seu iPhone deixa de ser visível. Não sabemos nem guardamos onde vocês se encontraram.",

      },
      {
        title: "Para que usamos os dados",
        body: "Usamos seus dados para:",
        items: [
          "Prestar o serviço: manter sua conta, mostrar o que você publica aos seus amigos e entregar suas mensagens.",
          "Segurança e moderação: analisar denúncias, aplicar bloqueios, impedir abuso e proteger contas.",
          "Falar com você sobre a sua conta: e-mails de confirmação, avisos de segurança e de exclusão da conta. Não enviamos e-mail de marketing.",
          "Cumprir obrigações legais e responder a ordens de autoridades quando a lei exigir.",
          "Melhorar o Near: se você contar por que está saindo, guardamos a resposta sem ligação com a sua conta. Não há analytics de uso.",
        ],
      },
      {
        title: "Bases legais",
        body: "Cada uso dos seus dados tem uma base prevista em lei:",
        items: [
          "Contrato: prestar o serviço que você pediu, como manter sua conta, mostrar seus posts e entregar suas mensagens (LGPD, art. 7º, V; GDPR, art. 6(1)(b)).",
          "Interesse legítimo: manter o Near seguro, analisar denúncias e impedir abuso (LGPD, art. 7º, IX; GDPR, art. 6(1)(f)).",
          "Consentimento: as permissões do iOS e o nome do lugar nos posts. Você pode retirar a qualquer momento (LGPD, art. 7º, I; GDPR, art. 6(1)(a)).",
          "Obrigação legal: guardar o que a lei exige e responder a ordens de autoridades (LGPD, art. 7º, II; GDPR, art. 6(1)(c)).",
        ],

      },
      {
        title: "Permissões do iOS",
        body: "O iOS pede estas permissões. Cada uma serve para uma coisa só:",
        items: [
          "Bluetooth: encontrar o amigo que está ao seu lado, só enquanto a tela Adicionar amigo está aberta.",
          "Câmera e fotos: fotos e vídeos para seus posts, stories e mensagens, e sua foto de perfil. O Near só adiciona às suas fotos quando você pede para salvar um story, ou uma foto ou vídeo de uma conversa.",
          "Microfone: o áudio dos vídeos que você grava, das suas mensagens de voz e dos seus comentários de voz.",
          "Notificações: um amigo novo, um comentário no seu post, o aniversário de um amigo, um post novo de um amigo. Nada além disso, nunca. Só pedimos depois do seu primeiro amigo.",
          "Localização, apenas enquanto usa o app: sugerir o nome do lugar de um post. Você pode editar ou remover antes de publicar, e não guardamos coordenadas sem um post. O Near nunca acessa sua localização em segundo plano.",
        ],
      },
      {
        title: "GIFs e figurinhas",
        body: "A busca e a navegação de GIFs e figurinhas vão direto do app para a KLIPY, um serviço de GIFs de terceiros, sem passar pelos nossos servidores. A KLIPY recebe as palavras que você busca, o endereço IP do seu iPhone e um identificador pseudônimo derivado da sua conta, não seu nome nem seu e-mail. Um GIF ou uma figurinha que você envia é um link para a cópia da KLIPY, não um arquivo que guardamos: quem vê carrega da KLIPY, que então também vê o endereço IP dessa pessoa. Se você apagar a mensagem para todos, o link some para vocês dois. O que a KLIPY faz com esses dados está na [política de privacidade](https://klipy.com/support/privacy-policy) dela.",
      },
      {
        title: "Quem vê o quê",
        body: "Seus posts e stories são visíveis apenas para seus amigos no Near. Um comentário, seja de palavras, foto, GIF, figurinha ou voz, é visível para qualquer pessoa que possa ver o post em que ele está, inclusive os amigos de quem publicou o post, que podem não ser seus amigos; junto com ele aparecem seu nome e sua foto de perfil. Uma mensagem, inclusive de voz ou com GIF, é visível apenas para as duas pessoas da conversa. Um story fica visível para seus amigos por 24 horas. Quem assistiu a um story só aparece para quem o publicou. Seus stories expirados ficam num arquivo que só você vê, e os Destaques que você fixa no perfil são visíveis para seus amigos. Seus amigos também veem quantos posts e amigos você tem, e quais dos seus amigos eles também conhecem; os outros ficam só no número. Não existe perfil público, busca, página de explorar nem compartilhamento para fora do app. Fora um comentário em um post que ela possa ver, a única coisa que uma pessoa desconhecida pode ver é seu nome e sua foto de perfil, e apenas enquanto ela está perto de você e você está com a tela Adicionar amigo aberta. Se você bloquear alguém, nenhum dos dois volta a ver o outro.",
      },
      {
        title: "Com quem compartilhamos",
        body: "Não vendemos seus dados e não os compartilhamos com anunciantes, redes de publicidade ou corretores de dados. Eles passam apenas pelos provedores que operam o Near em nosso nome, sob contrato, e que não podem usá-los para nada além do que pedimos:",
        items: [
          "Supabase: banco de dados, autenticação e infraestrutura do app. Os dados ficam em servidores em São Paulo, Brasil.",
          "Cloudflare: armazenamento e entrega das fotos, dos vídeos, das mensagens de voz e dos comentários de voz, por uma rede global de servidores.",
          "Apple: login com a Apple. O que acontece do lado da Apple segue a política de privacidade dela.",
          "Resend: envio dos e-mails do Near e deste site.",
          "KLIPY: serviço de GIFs de terceiros, a exceção ao que está acima. O app fala direto com ela para buscar GIFs e figurinhas, sem passar pelos nossos servidores, e vale a [política de privacidade da KLIPY](https://klipy.com/support/privacy-policy).",
        ],
        after: "Além deles, só compartilhamos dados quando a lei exige, como numa ordem judicial válida, ou quando for necessário para proteger a segurança de alguém. Se um dia o Near passar a ser operado por outra pessoa ou empresa, seus dados continuam protegidos por esta política e você será avisado antes.",
      },
      {
        title: "Transferência internacional",
        body: "Seus dados principais ficam no Brasil. Fotos e vídeos são distribuídos pela rede da Cloudflare, e e-mails e login passam pela infraestrutura da Resend e da Apple, que pode estar fora do seu país. Nesses casos, a transferência se apoia em contratos de proteção de dados com cada provedor, incluindo cláusulas-padrão reconhecidas pela LGPD e pelo GDPR.",
      },
      {
        title: "No seu iPhone",
        body: "O app guarda no seu iPhone uma cópia da sua lista de amigos, do seu perfil e das fotos e vídeos dos seus amigos, para abrirem na hora sem baixar de novo. É um cache local: fica dentro do app, não é acessível a outros apps e desaparece quando você sai da conta, exclui a conta ou apaga o Near. Um post que você salva como rascunho também fica só no seu celular: nunca é enviado nem entra no backup do iCloud, continua lá se você sair da conta e desaparece quando você exclui a conta ou apaga o Near. As fotos e os vídeos que você publica são guardados sem dados de localização: as informações EXIF e de GPS são removidas. Suas próprias fotos e vídeos continuam na sua biblioteca normalmente; o Near só lê o que você escolhe publicar.",
      },
      {
        title: "Por quanto tempo guardamos",
        body: "Guardamos cada dado apenas pelo tempo necessário para o fim a que serve:",
        items: [
          "Conta, perfil, posts, comentários, amizades e mensagens: enquanto sua conta existir, ou até você apagar cada item. Uma mensagem apagada para todos deixa de ser visível na hora e seus arquivos saem em até 24 horas; uma mensagem denunciada fica por até 7 dias.",
          "Stories, com a lista de quem assistiu: 24 horas no ar para seus amigos; depois ficam num arquivo que só você vê, e os Destaques ficam no seu perfil, até você apagá-los. Um story denunciado fica por até 7 dias.",
          "Código de proximidade: no máximo 15 minutos.",
          "Denúncias e decisões de moderação: até 12 meses após a resolução, para lidarmos com reincidência e recursos.",
          "Exclusão da conta: 30 dias de carência, em que tudo fica invisível e você pode voltar. Depois, tudo é apagado dos nossos sistemas; as cópias de segurança do provedor expiram em até 30 dias.",
          "Motivo de saída, se você informar: guardado sem ligação com você.",
          "Lista de espera deste site: até o e-mail de lançamento ou até você cancelar a inscrição. Formulário de contato: até respondermos e por até 12 meses depois.",
        ],
      },
      {
        title: "Segurança",
        body: "Todo o tráfego entre o app e os servidores é criptografado (TLS), e os dados são criptografados em repouso pelos provedores. O acesso ao banco de dados é controlado por regras por usuário: cada pessoa só consegue ler o que tem permissão de ver, mesmo que tente contornar o app. Não guardamos senhas em texto legível. Nenhum sistema é infalível: se um incidente afetar seus dados, avisaremos você e as autoridades competentes, como a lei exige.",
      },
      {
        title: "Seus direitos",
        body: "Você pode, a qualquer momento e sem custo:",
        items: [
          "Ver, corrigir e apagar seus dados diretamente no app: perfil, posts, stories, comentários, mensagens e amizades.",
          "Pedir uma cópia dos seus dados em formato legível por máquina (portabilidade).",
          "Confirmar se tratamos seus dados, saber com quem foram compartilhados e pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários.",
          "Retirar um consentimento, como a permissão de localização, nos ajustes do iOS.",
          "Opor-se a um tratamento baseado em interesse legítimo e pedir a revisão de qualquer decisão automatizada. Hoje o Near não toma decisões automatizadas sobre você.",
          "Excluir sua conta inteira em Ajustes → Privacidade e segurança → Excluir conta.",
        ],
        after: "Para o que não dá para fazer pelo app, escreva para nós. Respondemos em até 15 dias. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD), no Brasil, ou à autoridade de proteção de dados do seu país. Esses direitos valem para você onde quer que more: aplicamos esta política a todo mundo da mesma forma, sem depender da lei local.",
      },
      {
        title: "Crianças e adolescentes",
        body: "O Near é para pessoas com 13 anos ou mais. Não coletamos intencionalmente dados de crianças abaixo dessa idade e, se descobrirmos uma conta assim, a excluímos. Se você é pai, mãe ou responsável e acredita que uma criança criou uma conta, escreva para nós.",
      },
      {
        title: "Excluir tudo",
        body: "Ajustes → Privacidade e segurança → Excluir conta desconecta você e agenda a exclusão para 30 dias depois. Nesse período, ninguém vê você: seu perfil, posts, stories e comentários ficam ocultos para seus amigos, e ninguém por perto encontra você. Se mudar de ideia, entre de novo antes da data e tudo volta como estava. Depois disso, sua conta, fotos, vídeos, posts, stories, mensagens, comentários e amizades são apagados de forma definitiva e, se você entrou com a Apple, o Near também devolve o acesso à sua conta Apple. Nada seu permanece nos aparelhos dos seus amigos nem nos nossos servidores. Enviamos um e-mail quando a exclusão é agendada, alguns dias antes e quando termina. Se preferir, escreva para nós e fazemos por você.",
      },
      {
        title: "Este site",
        body: "A lista de espera guarda seu e-mail e seu idioma para enviarmos uma mensagem de boas-vindas e um único aviso quando o Near for lançado; cada e-mail tem um link para sair da lista. O formulário de contato guarda o que você escreveu para podermos responder. O site não usa cookies nem analytics e lembra apenas o idioma que você escolheu, no seu próprio navegador.",
      },
      {
        title: "Alterações desta política",
        body: "Quando esta política mudar, a data no topo muda junto. Se a mudança for relevante, como um novo tipo de dado, um novo provedor ou uma nova finalidade, avisaremos pelo app ou por e-mail antes de ela entrar em vigor.",
      },
    ] as LegalSection[],
    contact: { title: "Contato", body: "Dúvidas sobre privacidade ou para exercer seus direitos:" },
  },
  terms: {
    title: "Termos de Uso",
    intro: "Estes termos são o acordo entre você e o Near para o uso do aplicativo e deste site. Escrevemos em linguagem simples de propósito, mas eles valem como contrato. Ao criar uma conta ou usar o Near, você concorda com eles. Se não concordar, não use o Near.",
    sections: [
      {
        title: "Quem somos",
        body: "O Near é um aplicativo para iPhone feito e operado por {entity}. Neste documento, “Near”, “nós” e “nosso” se referem a quem opera o serviço; “você” é quem o usa. Para qualquer assunto sobre estes termos, escreva para o e-mail no fim da página.",
      },
      {
        title: "Quem pode usar o Near",
        body: [
          "Você precisa ter pelo menos 13 anos, ou a idade mínima exigida no seu país para um serviço como este, e criar a conta com a sua própria conta Apple ou e-mail. Uma conta por pessoa, e a conta é sua: você é responsável pelo que acontece nela e por manter o acesso seguro.",
          "O Near é para pessoas. Não é permitido criar contas para empresas, marcas, bots ou personagens, nem usar o Near se uma conta sua anterior foi encerrada por violar estes termos.",
        ],
      },
      {
        title: "Sua licença para usar o app",
        body: "Concedemos a você uma licença pessoal, limitada, não exclusiva, intransferível e revogável para instalar e usar o Near em dispositivos Apple que você possui ou controla, conforme as regras da App Store. O Near, seu código, seu design, sua marca e seus desenhos são nossos ou de nossos licenciadores e continuam sendo. Você não pode copiar, modificar, distribuir, vender, alugar, fazer engenharia reversa ou tentar extrair o código do app, exceto onde a lei permitir expressamente.",
      },
      {
        title: "Seu conteúdo",
        body: [
          "Tudo que você publica no Near continua sendo seu: fotos, vídeos, legendas, stories, comentários, mensagens e as informações do seu perfil. Não reivindicamos propriedade sobre nada disso.",
          "Para o Near funcionar, você nos concede uma licença não exclusiva, mundial, gratuita e sublicenciável apenas aos provedores que operam o serviço em nosso nome, para armazenar, copiar, redimensionar, transcodificar e exibir esse conteúdo às pessoas com quem você o compartilhou. Essa licença existe só para prestar o serviço: não usamos seu conteúdo em anúncios, não o vendemos, não o mostramos a quem não pode ver o post ou a conversa onde ele está e não o usamos para treinar sistemas de inteligência artificial. Ela termina quando você apaga o conteúdo ou a conta, com exceção do tempo que as cópias de segurança levam para expirar e do que a lei nos obrigar a guardar.",
          "Você é responsável pelo que compartilha. Só publique o que tem o direito de publicar, incluindo a imagem de outras pessoas. E lembre que seus amigos podem tirar uma captura de tela, como em qualquer lugar.",
        ],
      },
      {
        title: "Regras de conduta",
        body: "O Near funciona porque é pequeno e feito de pessoas que se conhecem. Para manter assim, não é permitido:",
        items: [
          "Assediar, ameaçar, intimidar ou humilhar alguém, nem publicar discurso de ódio.",
          "Publicar ou enviar imagens íntimas de qualquer pessoa sem o consentimento dela, ou qualquer conteúdo que explore ou coloque em risco menores de idade.",
          "Publicar conteúdo ilegal, que incentive violência ou automutilação, ou que viole direitos de terceiros, como direitos autorais ou de imagem.",
          "Fingir ser outra pessoa ou dar informações falsas sobre você.",
          "Simular proximidade, automatizar o app, coletar dados de outros usuários, tentar acessar contas ou sistemas sem autorização ou interferir no funcionamento do serviço.",
          "Usar o Near para fins comerciais, enviar spam ou vender, comprar ou transferir contas.",
        ],
      },
      {
        title: "Denúncias, bloqueios e moderação",
        body: [
          "Todo post, story, comentário, mensagem e perfil tem a opção Denunciar. Você também pode bloquear qualquer pessoa a partir do perfil dela: vocês deixam de ser amigos e nenhum dos dois volta a ver o outro. Analisamos toda denúncia em até 24 horas.",
          "Quando algo viola estes termos, agimos de forma proporcional: podemos remover o conteúdo, limitar ou suspender a conta ou encerrá-la. Em casos graves, como conteúdo ilegal, risco para alguém ou exposição legal para o Near, agimos imediatamente e sem aviso prévio. Se você acha que erramos, escreva para nós: uma pessoa vai revisar.",
        ],
      },
      {
        title: "Excluir sua conta",
        body: "Você pode sair quando quiser em Ajustes → Privacidade e segurança → Excluir conta. Sua conta é desconectada e fica invisível para todo mundo por 30 dias, período em que você pode voltar e cancelar a exclusão. Depois disso, sua conta e todo o seu conteúdo são apagados de forma definitiva, como descrito na Política de Privacidade. Nós também podemos encerrar sua conta se você violar estes termos ou se o Near deixar de existir.",
      },
      {
        title: "Disponibilidade e mudanças no serviço",
        body: "O Near é um serviço novo, mantido por uma equipe pequena. Trabalhamos para que ele esteja sempre disponível, mas ele pode ficar fora do ar, apresentar falhas ou mudar: podemos adicionar, alterar ou remover funcionalidades a qualquer momento. Se uma mudança relevante afetar você, ou se decidirmos encerrar o Near, avisaremos com antecedência razoável pelo app ou por e-mail, para que você possa guardar o que é seu.",
      },
      {
        title: "Isenção de garantias",
        body: "O Near é fornecido “no estado em que se encontra” e “conforme disponível”. Na medida permitida pela lei, não oferecemos garantias de nenhum tipo, expressas ou implícitas, incluindo de disponibilidade contínua, ausência de erros, adequação a um fim específico ou de que o conteúdo publicado por outras pessoas seja preciso ou apropriado. O Near é feito para encontros entre pessoas na vida real, e o que acontece nesses encontros é responsabilidade de quem participa deles.",
      },
      {
        title: "Limitação de responsabilidade",
        body: "Na medida máxima permitida pela lei, o Near não responde por danos indiretos, lucros cessantes, perda de dados, danos decorrentes de conteúdo ou conduta de outros usuários, nem por qualquer prejuízo que resulte do uso ou da impossibilidade de uso do serviço. Quando a lei não permitir excluir a responsabilidade, ela fica limitada ao valor que você pagou ao Near nos 12 meses anteriores ao fato ou a um valor equivalente a US$ 100, o que for maior. Nada nestes termos afasta direitos que a legislação de defesa do consumidor do seu país garante a você e que não podem ser afastados por contrato.",
      },
      {
        title: "Apple",
        body: "Estes termos são um acordo entre você e o Near, não com a Apple. A Apple não é responsável pelo Near nem pelo seu conteúdo, e não tem nenhuma obrigação de oferecer manutenção ou suporte: isso é nosso. Se o app não cumprir alguma garantia aplicável, você pode pedir à Apple o reembolso do valor pago por ele; fora isso, qualquer reclamação sobre o Near é conosco, incluindo sobre responsabilidade por produto, conformidade legal ou direitos de propriedade intelectual. Você declara que não está em um país sob embargo dos Estados Unidos nem em listas de partes restritas, e concorda em seguir os termos de terceiros aplicáveis ao usar o Near. A Apple e suas subsidiárias são terceiras beneficiárias destes termos e podem exigir seu cumprimento.",
      },
      {
        title: "Lei aplicável e disputas",
        body: "Estes termos são regidos pelas leis do Brasil. Se você for consumidor, pode recorrer aos órgãos e tribunais do lugar onde mora, e as normas de proteção ao consumidor do seu país continuam valendo. Antes de qualquer medida formal, escreva para nós: a maior parte dos problemas se resolve em uma conversa.",
      },
      {
        title: "Alterações destes termos",
        body: "Podemos atualizar estes termos. Quando isso acontecer, a data no topo da página muda. Se a alteração for relevante para seus direitos ou obrigações, avisaremos com antecedência razoável pelo app ou por e-mail. Continuar usando o Near depois que a nova versão entrar em vigor significa que você a aceita; se não concordar, você pode excluir sua conta.",
      },
      {
        title: "Disposições gerais",
        body: "Estes termos e a Política de Privacidade formam o acordo completo entre você e o Near sobre o uso do serviço. Se alguma cláusula for considerada inválida, as demais continuam valendo. Você não pode transferir seus direitos ou obrigações sob estes termos; nós podemos transferi-los a quem passar a operar o Near, avisando você. Deixar de exigir o cumprimento de uma cláusula não significa abrir mão dela. Em caso de divergência entre traduções, prevalece a versão em inglês.",
      },
    ] as LegalSection[],
    contact: { title: "Contato", body: "Dúvidas sobre estes termos:" },
  },
};

export default pt;
