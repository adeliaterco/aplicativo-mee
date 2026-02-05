export interface Module {
  id: string;
  number: number;
  title: string;
  objective: string;
  duration: string;
  importance: string;
  feelings: string[];
  lesson: string;
  exercise: {
    title: string;
    duration: string;
    steps: string[];
  };
  checklist: string[];
}

export const modules: Module[] = [
  {
    id: 'module-1',
    number: 1,
    title: 'Repartir sur de bonnes bases',
    objective: 'Comprendre pourquoi la "discipline" ne fonctionne pas — et pourquoi la culpabilité est le vrai problème.',
    duration: '12 min',
    importance: `Depuis des années, on vous a répété que pour maigrir ou mieux manger, il fallait de la volonté. Que si vous "craquiez", c'était par faiblesse. Cette croyance est non seulement fausse — elle est toxique.

La science est claire : votre cerveau ne fonctionne pas sur la base de la discipline. Quand votre amygdale (le centre des émotions) est activée par le stress, la fatigue ou la frustration, elle court-circuite votre cortex préfrontal — la partie capable de prendre des décisions rationnelles. Vous n'avez pas "manqué de volonté". Votre cerveau a simplement fait ce qu'il fait de mieux : chercher un apaisement rapide.

Le cycle classique — restriction → frustration → perte de contrôle → culpabilité → nouvelle restriction — n'est pas un signe de faiblesse. C'est un piège neurologique. Plus vous vous interdisez, plus le désir s'intensifie. Plus vous vous punissez, plus l'alimentation devient une source de honte.

Ce programme ne vous demandera jamais de "résister" ou de "tenir bon". Il vous invitera à comprendre, observer, et progressivement transformer votre relation avec la nourriture — avec douceur et sans jugement.`,
    feelings: [
      'Un soulagement : ce n\'est pas de votre faute',
      'Une clarté nouvelle sur vos schémas passés',
      'L\'espoir d\'une approche différente',
      'La permission de lâcher la culpabilité'
    ],
    lesson: `Vous avez probablement essayé des dizaines de régimes. Chaque échec a renforcé l'idée que vous n'étiez pas assez forte, pas assez disciplinée. Mais posez-vous cette question : et si le problème n'était pas vous, mais la méthode ?

Imaginez une femme nommée Sophie. Elle travaille beaucoup, dort peu, et depuis 15 ans, elle enchaîne les régimes. Chaque lundi, elle recommence. Chaque jeudi, elle "craque" — souvent le soir, devant le frigo, après une journée épuisante. Elle se juge sévèrement, se promet de faire mieux, et le cycle continue.

Sophie n'a pas un problème de volonté. Elle a un système nerveux saturé, un cerveau qui cherche désespérément un réconfort, et des années de règles rigides qui ont créé une relation conflictuelle avec la nourriture.

Le premier pas vers le changement n'est pas de manger différemment. C'est de penser différemment. De comprendre que chaque "écart" est une information, pas un échec. Que chaque moment de compulsion est une tentative de votre corps de vous protéger.

Dans ce programme, nous n'allons pas ajouter de nouvelles règles. Nous allons déconstruire les anciennes. Nous n'allons pas vous demander de résister à vos envies. Nous allons vous apprendre à les comprendre.

Votre relation avec la nourriture peut changer. Pas en luttant plus fort — mais en luttant moins. En écoutant plus. En vous accordant la bienveillance que vous méritez.`,
    exercise: {
      title: 'Écriture réflexive — Pourquoi les régimes ont échoué',
      duration: '10 minutes',
      steps: [
        'Trouvez un endroit calme et prenez votre journal (papier ou numérique).',
        'Listez tous les régimes ou méthodes que vous avez essayés dans votre vie.',
        'Pour chacun, notez : comment vous vous sentiez au début ? Et à la fin ?',
        'Identifiez le moment précis où chaque méthode a "échoué". Que s\'est-il passé ?',
        'Écrivez une phrase de compassion pour cette version de vous qui faisait de son mieux.',
        'Terminez par cette affirmation : "Je n\'ai pas échoué. J\'avais simplement la mauvaise approche."'
      ]
    },
    checklist: [
      'J\'ai compris que le problème n\'était pas ma volonté',
      'J\'ai fait l\'exercice d\'écriture réflexive',
      'Je me sens prête à adopter une nouvelle approche'
    ]
  },
  {
    id: 'module-2',
    number: 2,
    title: 'Sortir du cycle contrôle → perte de contrôle',
    objective: 'Identifier vos déclencheurs personnels (stress, fatigue, solitude, ennui) et comprendre leur mécanique.',
    duration: '14 min',
    importance: `Le cycle restriction → perte de contrôle n'est pas un défaut de caractère. C'est une réponse neurobiologique parfaitement logique. Quand vous vous privez (physiquement ou mentalement), votre cerveau perçoit une menace — une pénurie alimentaire. Il active alors des mécanismes de survie qui vous poussent à manger plus, plus vite, et souvent des aliments denses en énergie.

Mais les déclencheurs ne sont pas seulement alimentaires. Le stress au travail, un conflit familial, la fatigue chronique, ou simplement la solitude du soir après une longue journée — tous ces éléments activent votre système nerveux sympathique et créent un besoin d'apaisement.

La nourriture devient alors un outil de régulation émotionnelle. Pas parce que vous êtes faible — mais parce que c'est efficace. Le sucre active les mêmes circuits de récompense que d'autres substances addictives. Votre cerveau a appris que manger = soulagement.

Identifier vos déclencheurs personnels est la première étape pour créer de nouvelles réponses.`,
    feelings: [
      'Une conscience accrue de vos patterns automatiques',
      'Moins de jugement envers vos comportements passés',
      'Une curiosité nouvelle envers vos émotions',
      'Le début d\'un sentiment de contrôle réel'
    ],
    lesson: `Marie rentre du travail épuisée. La journée a été difficile : un client mécontent, un collègue irritant, trop de mails, pas assez de pauses. Elle franchit la porte de son appartement et, sans même y penser, se dirige vers le placard. Biscuits, chocolat, fromage — peu importe. Elle mange debout, vite, presque sans goûter. Quinze minutes plus tard, elle se sent coupable, ballonnée, et encore plus fatiguée.

Ce scénario vous est familier ? Marie n'est pas gourmande. Elle est épuisée. Son système nerveux est en surcharge, et la nourriture est le seul outil qu'elle a trouvé pour redescendre.

Les déclencheurs les plus courants sont :
- **Le stress** : cortisol élevé, recherche de réconfort immédiat
- **La fatigue** : défenses basses, décisions impulsives
- **La solitude** : besoin de remplir un vide, de se sentir accompagnée
- **L'ennui** : recherche de stimulation, de quelque chose à faire
- **La restriction mentale** : "je ne devrais pas" crée l'obsession

L'objectif n'est pas d'éliminer ces déclencheurs — ils font partie de la vie. L'objectif est de les reconnaître AVANT qu'ils ne vous mènent automatiquement vers la nourriture. De créer un espace entre le stimulus et la réponse.

Ce petit espace — parfois quelques secondes — est le lieu où le changement devient possible.`,
    exercise: {
      title: 'Cartographie de mes déclencheurs',
      duration: '15 minutes',
      steps: [
        'Sur une feuille, créez 4 colonnes : Moment / Émotion / Besoin caché / Alternative possible.',
        'Pensez à vos 5 derniers épisodes de "manger sans faim physique".',
        'Pour chacun, notez : Quel moment de la journée ? Quel contexte ?',
        'Identifiez l\'émotion dominante : stress, fatigue, ennui, tristesse, solitude, frustration ?',
        'Demandez-vous : de quoi avais-je vraiment besoin ? (repos, connexion, mouvement, calme…)',
        'Imaginez une alternative non-alimentaire réaliste pour ce besoin.',
        'Choisissez UN déclencheur fréquent à observer cette semaine — sans jugement, juste avec curiosité.'
      ]
    },
    checklist: [
      'J\'ai identifié mes 3 principaux déclencheurs',
      'J\'ai fait l\'exercice de cartographie',
      'Je comprends le lien entre émotion et alimentation'
    ]
  },
  {
    id: 'module-3',
    number: 3,
    title: 'Faim physique vs faim émotionnelle',
    objective: 'Apprendre à différencier les deux types de faim et reconnecter avec les signaux de votre corps.',
    duration: '11 min',
    importance: `Votre corps possède une sagesse innée. Il sait exactement quand il a besoin de nourriture, quel type de nourriture, et en quelle quantité. Ce système de régulation, appelé homéostasie, fonctionne parfaitement — quand on ne l'interfère pas.

Mais des années de régimes, de règles externes ("mange à heure fixe", "finis ton assiette", "le gras est mauvais") ont probablement brouillé ces signaux naturels. Vous avez appris à manger avec votre tête plutôt qu'avec votre corps. À suivre des horaires plutôt que votre faim. À ignorer la satiété au profit de la "portion recommandée".

Le résultat ? Beaucoup de femmes ne savent plus vraiment quand elles ont faim. Elles confondent faim et envie, faim et habitude, faim et émotion.

Réapprendre à distinguer la faim physique de la faim émotionnelle est fondamental. C'est la base d'une alimentation intuitive et apaisée.`,
    feelings: [
      'Une reconnexion avec votre corps',
      'Une meilleure capacité à identifier vos besoins réels',
      'Moins de confusion face aux envies',
      'Une confiance grandissante en vos sensations'
    ],
    lesson: `La faim physique et la faim émotionnelle sont deux expériences très différentes — mais quand vous êtes dans le moment, elles peuvent sembler identiques.

**La faim physique :**
- Arrive progressivement (sur 2-3 heures)
- Se manifeste dans le corps : creux dans l'estomac, légère fatigue, baisse de concentration
- Peut être satisfaite par différents aliments
- Une fois rassasiée, vous vous sentez bien, énergisée
- N'est pas accompagnée de culpabilité

**La faim émotionnelle :**
- Surgit soudainement, souvent en réponse à un événement ou une émotion
- Se manifeste dans la tête : pensées obsessives, images d'un aliment précis
- Demande un aliment spécifique (souvent sucré, gras, ou croustillant)
- Même après avoir mangé, le vide persiste
- Est souvent suivie de culpabilité ou de honte

Voici un test simple : imaginez-vous manger une pomme. Si la pomme vous semble appétissante, vous avez probablement faim physiquement. Si seul le chocolat (ou les chips, ou le fromage) peut faire l'affaire, c'est probablement une faim émotionnelle.

Important : la faim émotionnelle n'est pas "mauvaise". Elle est normale. Nous utilisons tous la nourriture pour réguler nos émotions parfois. Le problème survient quand c'est la SEULE stratégie de régulation — et quand elle génère de la souffrance.

Le but n'est pas de ne jamais manger émotionnellement. C'est de CHOISIR consciemment, plutôt que de réagir automatiquement.`,
    exercise: {
      title: 'Le test des 3 respirations',
      duration: '2 minutes (à pratiquer régulièrement)',
      steps: [
        'La prochaine fois que vous ressentez une envie de manger, arrêtez-vous.',
        'Posez une main sur votre ventre et une sur votre cœur.',
        'Prenez 3 respirations profondes, en comptant 4 à l\'inspiration, 4 à l\'expiration.',
        'Demandez-vous : "Est-ce une faim dans mon ventre ou dans ma tête ?"',
        'Sur une échelle de 0 à 10, évaluez votre faim physique (0 = pas faim, 10 = très affamée).',
        'Si c\'est en dessous de 4, demandez-vous : "De quoi ai-je vraiment besoin en ce moment ?"',
        'Notez votre observation sans jugement. La prise de conscience est déjà une victoire.'
      ]
    },
    checklist: [
      'Je sais différencier faim physique et faim émotionnelle',
      'J\'ai pratiqué le test des 3 respirations',
      'Je m\'engage à observer mes sensations avant de manger'
    ]
  },
  {
    id: 'module-4',
    number: 4,
    title: 'La satiété sans culpabilité',
    objective: 'Apprendre à s\'arrêter de manger au bon moment — non par discipline, mais par écoute du corps.',
    duration: '13 min',
    importance: `"Finis ton assiette." "Il y a des enfants qui meurent de faim." "Tu n'as pas honte de gaspiller ?" Ces phrases, entendues dans l'enfance, ont créé des automatismes puissants. Pour beaucoup de femmes, s'arrêter de manger avant d'avoir terminé l'assiette génère un malaise profond — presque une transgression.

À cela s'ajoute la dimension du plaisir : quand quelque chose est bon, pourquoi s'arrêter ? Et si c'est un aliment "interdit", autant en profiter maintenant, non ? On mangera mieux demain...

Ces mécanismes vous éloignent de votre satiété naturelle. Votre corps sait quand il a assez. Il envoie des signaux clairs : une diminution du plaisir gustatif, une sensation de plénitude, une baisse d'intérêt pour la nourriture. Mais si vous mangez vite, distraite, ou avec des règles rigides en tête, vous ne captez pas ces signaux.

Réapprendre la satiété, c'est se réconcilier avec l'idée qu'il y aura d'autres repas. Que vous pouvez vous faire confiance. Que s'arrêter n'est pas une privation — c'est un acte de respect envers vous-même.`,
    feelings: [
      'Une liberté nouvelle face à l\'assiette',
      'Moins de sensations de "trop-plein"',
      'Une confiance croissante en vos signaux',
      'Le plaisir de manger sans culpabilité'
    ],
    lesson: `La tradition française du repas a ceci de précieux : elle valorise le plaisir ET la modération. Le "bien manger" n'est pas une question de quantité, mais de qualité — de l'aliment et de l'expérience.

Imaginez un restaurant gastronomique. Les portions sont petites, mais chaque bouchée est savoureuse. Vous mangez lentement, vous conversez, vous appréciez. À la fin du repas, vous êtes satisfaite sans être repue. C'est ça, la satiété heureuse.

Maintenant, imaginez manger le même repas en 10 minutes, devant Netflix, sans vraiment y prêter attention. Vous finissez l'assiette, mais vous n'êtes pas vraiment satisfaite. Quelque chose manque. Vous cherchez autre chose à grignoter...

La différence ? La présence.

**Comment reconnaître la satiété :**
- Le goût de l'aliment diminue (les premières bouchées sont les meilleures)
- Une sensation de plénitude légère dans l'estomac
- L'intérêt pour la nourriture diminue
- Une envie naturelle de faire une pause

**L'échelle de faim/satiété (1-10) :**
- 1-2 : Affamée (attention : zone de danger, risque de compulsion)
- 3-4 : Faim claire
- 5 : Neutre
- 6-7 : Satisfaite (IDÉAL pour s'arrêter)
- 8-9 : Trop pleine
- 10 : Malaise physique

L'objectif est de manger entre 3-4 et 6-7. Ni trop affamée (ce qui mène à manger trop vite), ni trop repue (ce qui génère inconfort et culpabilité).`,
    exercise: {
      title: 'L\'échelle de satiété en pratique',
      duration: '1 repas conscient',
      steps: [
        'Choisissez un repas cette semaine pour pratiquer (idéalement seule, sans écran).',
        'Avant de commencer, évaluez votre faim sur l\'échelle 1-10.',
        'Mangez lentement. Posez vos couverts entre chaque bouchée.',
        'À mi-repas (environ 10 minutes), posez-vous la question : "Où j\'en suis ?"',
        'Continuez si vous êtes en dessous de 6. Envisagez de vous arrêter si vous êtes à 6-7.',
        'Terminez le repas quand vous vous sentez satisfaite — même s\'il reste de la nourriture.',
        'Notez comment vous vous sentez 30 minutes après. Regrettez-vous de vous être arrêtée ?'
      ]
    },
    checklist: [
      'Je comprends la différence entre satisfaite et trop repue',
      'J\'ai pratiqué l\'échelle de satiété',
      'Je me donne la permission de laisser de la nourriture'
    ]
  },
  {
    id: 'module-5',
    number: 5,
    title: 'Le stress et l\'anxiété',
    objective: 'Acquérir des outils simples pour apaiser votre système nerveux — sans passer par la nourriture.',
    duration: '15 min',
    importance: `Le stress chronique est le terreau de l'alimentation émotionnelle. Quand votre corps est en mode "combat ou fuite" (système nerveux sympathique activé), il cherche désespérément un moyen de se calmer. La nourriture — particulièrement le sucre et le gras — active les circuits de récompense du cerveau et procure un apaisement rapide.

Ce n'est pas une faiblesse. C'est de la biologie pure. Le cortisol (hormone du stress) augmente l'appétit et oriente les choix vers les aliments denses en énergie. Votre cerveau fait exactement ce pour quoi il est programmé : survivre.

Le problème ? Le stress moderne est rarement une menace physique réelle. C'est un mail agressif, une to-do list interminable, une charge mentale écrasante. Et la nourriture, si elle apaise momentanément, ne résout rien. Elle ajoute souvent une couche de culpabilité au stress initial.

La solution n'est pas de résister aux envies. C'est de donner à votre corps d'autres outils pour réguler son système nerveux.`,
    feelings: [
      'Un sentiment de contrôle sur votre état émotionnel',
      'Des outils concrets pour les moments difficiles',
      'Une meilleure compréhension de votre corps',
      'Moins de réactivité face au stress'
    ],
    lesson: `Votre système nerveux a deux modes principaux :

**Le mode sympathique ("combat ou fuite")** : cœur rapide, respiration courte, tension musculaire, digestion ralentie. C'est le mode stress.

**Le mode parasympathique ("repos et digestion")** : cœur calme, respiration profonde, muscles détendus, digestion active. C'est le mode calme.

Bonne nouvelle : vous pouvez consciemment basculer d'un mode à l'autre. La respiration est le levier le plus puissant, car c'est la seule fonction autonome que vous pouvez contrôler volontairement.

**Technique 1 : La respiration 4-7-8**
Inspirez 4 secondes, retenez 7 secondes, expirez 8 secondes. L'expiration longue active le nerf vague et déclenche la réponse de relaxation.

**Technique 2 : L'ancrage sensoriel (5-4-3-2-1)**
Nommez 5 choses que vous voyez, 4 que vous entendez, 3 que vous touchez, 2 que vous sentez, 1 que vous goûtez. Cette technique ramène votre attention au présent et calme l'anxiété.

**Technique 3 : Le mouvement**
30 secondes de mouvement (marcher, étirer, secouer les mains) brûlent l'adrénaline et signalent à votre corps que le "danger" est passé.

**Technique 4 : Le froid**
De l'eau froide sur les poignets ou le visage active le réflexe de plongée et ralentit le rythme cardiaque instantanément.

Ces techniques ne demandent que quelques minutes. Elles peuvent remplacer — ou au moins précéder — l'ouverture du frigo.`,
    exercise: {
      title: 'Respiration 4-7-8 — Technique d\'apaisement',
      duration: '2 minutes',
      steps: [
        'Asseyez-vous confortablement ou restez debout, dos droit.',
        'Placez le bout de votre langue derrière vos incisives supérieures.',
        'Expirez complètement par la bouche en faisant un son "whoosh".',
        'Fermez la bouche. Inspirez silencieusement par le nez en comptant jusqu\'à 4.',
        'Retenez votre souffle en comptant jusqu\'à 7.',
        'Expirez par la bouche (son "whoosh") en comptant jusqu\'à 8.',
        'Répétez le cycle 4 fois.',
        'Pratiquez cette technique 2 fois par jour ET la prochaine fois que vous ressentez une envie soudaine.'
      ]
    },
    checklist: [
      'Je connais au moins 2 techniques d\'apaisement',
      'J\'ai pratiqué la respiration 4-7-8',
      'Je suis prête à utiliser ces outils avant de manger émotionnellement'
    ]
  },
  {
    id: 'module-6',
    number: 6,
    title: 'La culpabilité alimentaire',
    objective: 'Déconstruire les règles internes rigides et vous donner la permission de manger — vraiment.',
    duration: '12 min',
    importance: `"Je n'aurais pas dû." "J'ai craqué." "Je suis nulle." "Demain, je me reprends en main."

Ces pensées vous sont familières ? Elles sont le signe d'un système de règles internes très strict — un "policier alimentaire" qui surveille, juge, et condamne chaque bouchée.

D'où viennent ces règles ? De partout : régimes passés, remarques familiales ("tu vas manger tout ça ?"), magazines ("ces 10 aliments à bannir"), culture du wellness ("clean eating"). Vous avez internalisé des centaines de "il faut" et "il ne faut pas" qui régissent votre relation à la nourriture.

Le problème : la culpabilité ne vous aide pas à manger mieux. Elle fait exactement le contraire. Elle transforme un moment de plaisir en source de honte. Elle active le cycle restriction → perte de contrôle. Elle vous éloigne de vos sensations réelles.

Déconstruire ces règles est un acte de libération. Non pas pour manger "n'importe quoi" — mais pour manger en paix.`,
    feelings: [
      'Un allégement du poids mental',
      'Une relation plus douce avec la nourriture',
      'Moins de bruit dans votre tête',
      'La liberté de choisir sans honte'
    ],
    lesson: `Faisons un exercice : combien de "règles" alimentaires suivez-vous mentalement ?

- Pas de glucides après 18h
- Finir son assiette
- Pas de dessert si je n'ai pas fini mes légumes
- Le gras fait grossir
- Manger entre les repas, c'est mal
- Si j'ai mangé "mal" à midi, je dois compenser ce soir

Chacune de ces règles crée une tension. Chaque fois que vous la transgressez (ou pensez la transgresser), la culpabilité apparaît. Et la culpabilité, paradoxalement, pousse à manger PLUS.

**Le mécanisme :**
1. Vous mangez un aliment "interdit" (ex : un croissant)
2. La culpabilité surgit : "J'ai craqué"
3. Pensée automatique : "Autant continuer, c'est foutu pour aujourd'hui"
4. Vous mangez davantage
5. Plus de culpabilité → "demain, régime strict"
6. Le lendemain, restriction → frustration → nouveau "craquage"

**La sortie :** Remplacer les règles par des choix conscients.

Manger un croissant n'est pas "craquer". C'est choisir de savourer un croissant. Point. Pas de compensation, pas de restriction, pas de jugement. Juste un croissant, apprécié, digéré, oublié.

Quand il n'y a plus d'interdit, il n'y a plus de transgression. Quand il n'y a plus de transgression, il n'y a plus de culpabilité. Quand il n'y a plus de culpabilité, il n'y a plus de compulsion.`,
    exercise: {
      title: 'Réécrire mes règles internes',
      duration: '15 minutes',
      steps: [
        'Listez 5 "règles" alimentaires que vous suivez (consciemment ou non).',
        'Pour chacune, demandez-vous : "D\'où vient cette règle ?"',
        'Évaluez : cette règle m\'aide-t-elle ou me limite-t-elle ?',
        'Reformulez chaque règle rigide en permission bienveillante.',
        'Exemple : "Pas de dessert" → "Je peux choisir un dessert si j\'en ai vraiment envie"',
        'Cette semaine, testez UNE nouvelle permission. Observez ce qui se passe.',
        'Notez dans votre journal : ai-je mangé plus, moins, ou pareil ? Comment me suis-je sentie ?'
      ]
    },
    checklist: [
      'J\'ai identifié mes règles internes',
      'J\'ai reformulé au moins 3 règles en permissions',
      'Je comprends le lien entre culpabilité et compulsion'
    ]
  },
  {
    id: 'module-7',
    number: 7,
    title: 'L\'image corporelle',
    objective: 'Passer de la guerre contre votre corps à une cohabitation bienveillante.',
    duration: '14 min',
    importance: `Votre relation avec la nourriture est intimement liée à votre relation avec votre corps. Si vous vivez dans un corps que vous détestez, chaque repas devient un enjeu. Chaque bouchée est pesée, jugée, crainte. Manger devient une source d'anxiété plutôt que de plaisir.

Pour beaucoup de femmes, le corps est un projet permanent à améliorer, contrôler, réduire. Cette vision crée une tension constante — et la nourriture devient un champ de bataille.

Ce module ne vous demandera pas d'aimer votre corps du jour au lendemain. L'amour inconditionnel de soi est un idéal magnifique, mais il peut sembler inatteignable quand on a passé des années en guerre.

L'objectif est plus réaliste : passer de la haine à la neutralité. Du combat à la coexistence. De "mon corps est mon ennemi" à "mon corps est mon véhicule de vie".`,
    feelings: [
      'Un apaisement de la critique intérieure',
      'Une gratitude naissante pour votre corps',
      'Moins d\'obsession pour l\'apparence',
      'Une présence plus douce à vous-même'
    ],
    lesson: `Votre corps vous a portée toute votre vie. Il vous a permis de marcher, de parler, de ressentir, d'aimer. Il a traversé des maladies, des nuits blanches, des épreuves. Il fait battre votre cœur 100 000 fois par jour sans que vous y pensiez.

Et pourtant, que lui dites-vous quand vous vous regardez dans le miroir ?

La voix critique intérieure — "trop grosse", "pas assez ferme", "ces cuisses", "ce ventre" — n'est pas votre voix. C'est l'internationalisation de messages externes : publicités, magazines, remarques, comparaisons. Vous n'êtes pas née en détestant votre corps. Vous l'avez appris.

**Le chemin vers la paix corporelle :**

**Étape 1 : La conscience.** Remarquez quand la voix critique parle. "Tiens, je me juge."

**Étape 2 : Le questionnement.** "Est-ce que je dirais ça à une amie ? À ma fille ?"

**Étape 3 : La neutralité.** Remplacez le jugement par un constat factuel. "J'ai un corps. Il me permet de vivre."

**Étape 4 : La gratitude.** "Merci, corps, pour [fonction spécifique]."

L'acceptation corporelle n'est pas la résignation. Ce n'est pas dire "je ne changerai jamais" ou "je me laisse aller". C'est dire : "Je mérite le respect et la bienveillance MAINTENANT, pas quand j'aurai perdu X kilos."

Votre valeur n'est pas déterminée par votre apparence. Votre corps n'est pas un projet. C'est votre maison.`,
    exercise: {
      title: 'Lettre de gratitude à mon corps',
      duration: '15 minutes',
      steps: [
        'Installez-vous dans un endroit calme, avec papier et stylo.',
        'Commencez votre lettre par : "Cher corps..."',
        'Écrivez ce que vous lui avez reproché au fil des années. Soyez honnête.',
        'Ensuite, listez 5 choses pour lesquelles vous êtes reconnaissante (ex : mes jambes me portent, mes bras enlacent les gens que j\'aime).',
        'Reconnaissez les épreuves qu\'il a traversées avec vous.',
        'Terminez par une intention : "À partir d\'aujourd\'hui, je m\'engage à..."',
        'Relisez cette lettre quand la voix critique devient trop forte.'
      ]
    },
    checklist: [
      'J\'ai écrit une lettre à mon corps',
      'J\'ai identifié ma voix critique intérieure',
      'Je m\'engage à traiter mon corps avec plus de respect'
    ]
  },
  {
    id: 'module-8',
    number: 8,
    title: 'Le plaisir alimentaire à la française',
    objective: 'Redécouvrir le plaisir de manger — sans culpabilité, avec présence.',
    duration: '11 min',
    importance: `La France est le pays de la gastronomie. Du repas comme art de vivre. Du plaisir assumé de bien manger. Et pourtant, beaucoup de Françaises ont perdu ce rapport serein à la nourriture, prises entre injonctions contradictoires : "Profitez !" mais "Restez minces !"

Les régimes ont transformé l'alimentation en calcul, en contrainte, en source d'anxiété. Le plaisir est devenu suspect. Savourer un bon repas génère de la culpabilité plutôt que de la joie.

C'est une perte immense. Car le plaisir n'est pas l'ennemi de l'équilibre. Il en est la condition. Quand vous savourez vraiment un aliment, vous mangez moins. Quand vous l'avalez en cachette, avec honte, vous n'êtes jamais satisfaite.

Ce module vous invite à réconcilier plaisir et équilibre — à la française.`,
    feelings: [
      'Une joie retrouvée autour de la nourriture',
      'Le plaisir de savourer sans culpabilité',
      'Une satisfaction plus profonde avec moins',
      'La réconciliation avec les aliments "interdits"'
    ],
    lesson: `Le "paradoxe français" a longtemps intrigué les chercheurs : comment les Français mangent-ils autant de fromage, de pain, de vin, tout en restant relativement minces ?

La réponse : ils savourent. Ils prennent leur temps. Ils mangent assis, en société, sans culpabilité. La portion est peut-être plus petite, mais la satisfaction est plus grande.

**Les principes du plaisir alimentaire :**

**1. La qualité prime sur la quantité.** Un carré de chocolat excellent vaut mieux qu'une tablette médiocre.

**2. La présence multiplie le plaisir.** Manger en pleine conscience décuple les sensations. Manger distraite les divise.

**3. Le plaisir satiété.** Quand vous savourez vraiment, vous êtes satisfaite plus vite. Quand vous mangez avec culpabilité, vous cherchez toujours plus.

**4. L'interdit crée l'obsession.** Quand un aliment est "autorisé", il perd son pouvoir magique. Vous pouvez le manger — ou non. C'est votre choix.

**5. Le repas est un moment.** Pas juste une ingestion de calories. Un moment de pause, de plaisir, de connexion.

Manger un croissant le dimanche matin, avec un bon café, en prenant votre temps, en regardant par la fenêtre — c'est de la gastronomie. C'est de l'art de vivre. Ce n'est pas une transgression.`,
    exercise: {
      title: 'Repas de pleine conscience',
      duration: '20-30 minutes',
      steps: [
        'Choisissez un aliment que vous aimez mais que vous vous interdisez souvent.',
        'Préparez-le avec soin. Belle assiette, jolie présentation.',
        'Installez-vous confortablement, sans écran, sans distraction.',
        'Avant de manger, observez : couleurs, textures, odeurs.',
        'Prenez une première bouchée. Mâchez lentement. Notez les saveurs.',
        'Entre chaque bouchée, posez vos couverts. Respirez.',
        'À mi-chemin, demandez-vous : "Est-ce que je savoure encore ?"',
        'Arrêtez-vous quand le plaisir diminue — même s\'il en reste.'
      ]
    },
    checklist: [
      'J\'ai savouré un aliment "interdit" sans culpabilité',
      'J\'ai pratiqué un repas en pleine conscience',
      'Je reconnais que le plaisir est un allié, pas un ennemi'
    ]
  },
  {
    id: 'module-9',
    number: 9,
    title: 'Les "écarts" n\'existent pas',
    objective: 'Transformer votre vocabulaire intérieur — et avec lui, votre relation à l\'alimentation.',
    duration: '10 min',
    importance: `Les mots que vous utilisez façonnent votre réalité. Quand vous dites "j'ai craqué", vous vous positionnez en échec. Quand vous parlez d'"écart", vous impliquez qu'il existe une ligne droite parfaite dont vous vous êtes éloignée.

Mais la vie n'est pas une ligne droite. L'alimentation non plus. Il n'y a pas de perfection alimentaire. Il n'y a que des choix, des moments, des contextes.

Le vocabulaire du régime — "craquer", "écart", "être sage", "se reprendre en main" — maintient vivante l'idée qu'il y a une "bonne" et une "mauvaise" façon de manger. Il entretient la culpabilité et le cycle de restriction.

Changer de mots, c'est changer de perspective. C'est passer du jugement à la curiosité. De l'échec à l'apprentissage.`,
    feelings: [
      'Une liberté mentale nouvelle',
      'Moins de jugement envers vous-même',
      'Une vision plus nuancée de l\'alimentation',
      'La fin du "tout ou rien"'
    ],
    lesson: `Imaginez deux scénarios :

**Scénario A (ancien vocabulaire) :**
Vous mangez 3 parts de gâteau à un anniversaire. Pensée automatique : "J'ai craqué. Je suis nulle. Demain, régime strict."

**Scénario B (nouveau vocabulaire) :**
Vous mangez 3 parts de gâteau à un anniversaire. Pensée consciente : "J'ai choisi de savourer ce gâteau. Il était délicieux. C'était une fête. Mon prochain repas sera un repas normal."

Même action. Deux expériences complètement différentes.

**Traductions du vocabulaire rigide au vocabulaire bienveillant :**

- "Craquer" → "Répondre à un besoin" ou "Faire un choix"
- "Écart" → "Choix du moment" ou "Décision contextuelle"
- "Être sage" → "Écouter mon corps"
- "Aliment interdit" → "Aliment que je choisis de manger ou non"
- "Tricher" → "Manger" (tout simplement)
- "Compensation" → (ce mot n'existe plus)
- "Repartir à zéro" → "Continuer mon chemin"

Le piège du "tout ou rien" :
L'ancien vocabulaire crée une pensée binaire : soit vous êtes "parfaite", soit vous avez "tout raté". Cette pensée mène à l'abandon : "Puisque j'ai craqué, autant continuer."

Le nouveau vocabulaire crée de la nuance : chaque repas est une occasion nouvelle. Un choix "moins idéal" n'efface pas les précédents. Demain n'est pas un recommencement — c'est une continuation.`,
    exercise: {
      title: 'Réécriture de mon dialogue intérieur',
      duration: '10 minutes',
      steps: [
        'Prenez votre journal et créez deux colonnes : "Anciens mots" et "Nouveaux mots".',
        'Listez 5 mots/phrases que vous utilisez pour vous juger autour de la nourriture.',
        'Pour chacun, trouvez un remplacement neutre ou bienveillant.',
        'Cette semaine, remarquez quand vous utilisez les anciens mots.',
        'Corrigez-vous mentalement : "Non, je n\'ai pas craqué. J\'ai fait un choix."',
        'Notez dans votre journal les moments où vous avez réussi à changer de vocabulaire.',
        'Observez : comment vous sentez-vous différemment ?'
      ]
    },
    checklist: [
      'J\'ai identifié mon vocabulaire de jugement',
      'J\'ai créé des alternatives bienveillantes',
      'Je m\'engage à surveiller et modifier mon dialogue intérieur'
    ]
  },
  {
    id: 'module-10',
    number: 10,
    title: 'Routines quotidiennes',
    objective: 'Créer des habitudes simples qui maintiennent votre équilibre émotionnel au quotidien.',
    duration: '12 min',
    importance: `Le changement durable ne vient pas des grandes résolutions. Il vient des petits gestes répétés. Des micro-rituels qui deviennent automatiques. Des habitudes si légères qu'elles ne demandent aucun effort.

Le problème des régimes, c'est qu'ils demandent une volonté constante. Ils sont épuisants. Tôt ou tard, la fatigue décisionnelle prend le dessus.

L'approche que nous proposons est inverse : créer des points d'ancrage simples dans votre journée. Des moments de connexion avec vous-même. Des pauses qui permettent de rester en contact avec vos sensations.

Ces routines ne sont pas des contraintes. Ce sont des cadeaux que vous vous faites.`,
    feelings: [
      'Une structure rassurante sans rigidité',
      'Un sentiment de contrôle calme',
      'Des points d\'ancrage dans la journée',
      'Une relation plus régulière avec vous-même'
    ],
    lesson: `**La routine proposée (adaptez-la à votre vie) :**

**Le matin (2-3 minutes) :**
- En vous réveillant, restez allongée 1 minute. Respirez.
- Posez-vous la question : "Comment je me sens ce matin ?"
- Formulez une intention simple pour la journée (ex : "Aujourd'hui, je m'écoute.")

**Avant chaque repas (30 secondes) :**
- Pause. 3 respirations profondes.
- Question : "Ai-je faim ? Sur une échelle de 1-10, où je suis ?"
- Intention : "Je vais manger avec présence."

**Dans la journée (quand vous y pensez) :**
- Si une envie surgit : 90 secondes de pause + respiration
- Si du stress monte : technique d'ancrage (5-4-3-2-1)
- Si vous mangez émotionnellement : pas de jugement, juste observation

**Le soir (2-3 minutes) :**
- Notez une chose positive de la journée (même minuscule)
- Si vous avez fait un check-in, une respiration consciente, une pause — félicitez-vous
- Posez-vous la question : "Comment j'ai pris soin de moi aujourd'hui ?"

**Les clés du succès :**
- Commencez petit (1 seule habitude)
- Accrochez-vous à un rituel existant (ex : "Après mon café du matin, je...")
- Soyez flexible : si vous oubliez, reprenez simplement
- Ne cherchez pas la perfection — cherchez la régularité douce`,
    exercise: {
      title: 'Création de ma routine équilibre',
      duration: '10 minutes + 7 jours de pratique',
      steps: [
        'Choisissez UN moment de la journée pour commencer (matin, avant repas, ou soir).',
        'Identifiez un rituel existant auquel accrocher votre nouvelle habitude.',
        'Définissez une action simple de moins de 2 minutes.',
        'Notez votre intention : "Après [rituel existant], je vais [nouvelle habitude]."',
        'Pratiquez pendant 7 jours sans interruption.',
        'À la fin de chaque jour, cochez une case (créez un tableau simple).',
        'Après 7 jours, ajoutez une deuxième habitude si vous le souhaitez.'
      ]
    },
    checklist: [
      'J\'ai défini au moins une nouvelle micro-habitude',
      'J\'ai identifié un rituel existant auquel l\'accrocher',
      'Je m\'engage à pratiquer pendant 7 jours'
    ]
  },
  {
    id: 'module-11',
    number: 11,
    title: 'Relations & convivialité',
    objective: 'Naviguer les repas en société avec sérénité — sans sacrifier votre équilibre.',
    duration: '13 min',
    importance: `Les repas en famille, entre amis, au restaurant, en entreprise — ces moments peuvent être source de joie immense ou d'anxiété profonde. La pression sociale autour de la nourriture est réelle.

"Tu ne reprends pas ?" "Tu fais un régime ?" "Allez, c'est la fête !" "Tu manges vraiment tout ça ?"

Chaque commentaire, bien intentionné ou non, peut activer votre voix critique intérieure. Vous mangez plus pour faire plaisir. Ou moins pour éviter les remarques. Vous rentrez chez vous épuisée, parfois coupable, parfois frustrée.

Ce module vous donne des outils concrets pour rester connectée à vous-même dans ces situations. Pour profiter de la convivialité sans perdre votre équilibre.`,
    feelings: [
      'Une confiance accrue dans les situations sociales',
      'Des outils pour gérer les commentaires',
      'Le plaisir des repas partagés sans anxiété',
      'Une liberté face au regard des autres'
    ],
    lesson: `**Les défis des repas en société :**

1. **La pression de conformité :** "Tout le monde mange du dessert, je devrais aussi."
2. **Les commentaires non sollicités :** "Tu as pris du poids ?" ou "Tu ne manges rien !"
3. **La perte de contrôle perçue :** menu imposé, portions servies, timing social
4. **L'alimentation émotionnelle amplifiée :** stress + nourriture disponible = risque accru

**Stratégies concrètes :**

**Avant le repas :**
- Prenez 5 minutes pour vous centrer (respiration, intention)
- Visualisez-vous sereine, mangeant à votre rythme
- Mangez un petit quelque chose avant si vous risquez d'arriver affamée

**Pendant le repas :**
- Servez-vous vous-même quand c'est possible
- Mangez lentement, posez vos couverts
- Participez à la conversation (distraction positive)
- Écoutez vos signaux de satiété, pas les portions des autres

**Face aux commentaires :**
- "Je mange à mon rythme, merci."
- "Je n'ai plus faim, c'était délicieux."
- "Mon corps sait ce dont il a besoin."
- Ou simplement : sourire + changement de sujet

**Après le repas :**
- Pas de compensation ni de culpabilité
- Notez ce qui s'est bien passé
- Si vous avez mangé plus que prévu : c'est ok. Un repas ne définit pas votre journée.

**Rappel important :** Vous n'avez pas à vous justifier. Votre alimentation ne concerne que vous.`,
    exercise: {
      title: 'Préparation mentale pour un repas social',
      duration: '10 minutes avant + 5 minutes après',
      steps: [
        'Identifiez un prochain repas en société (famille, amis, travail).',
        'Avant d\'y aller, prenez 5 minutes seule.',
        'Respirez profondément 5 fois.',
        'Visualisez-vous : sereine, mangeant à votre rythme, appréciant la compagnie.',
        'Préparez 2-3 phrases simples si on fait des commentaires sur votre alimentation.',
        'Pendant le repas, faites un "check-in" mental à mi-parcours : "Comment je me sens ?"',
        'Après le repas, notez : qu\'est-ce qui s\'est bien passé ? Qu\'ai-je appris ?',
        'Félicitez-vous pour tout ce que vous avez fait de bien, même si c\'est imparfait.'
      ]
    },
    checklist: [
      'J\'ai préparé des phrases pour les commentaires non sollicités',
      'J\'ai fait l\'exercice de préparation mentale',
      'Je me sens plus confiante pour les prochains repas en société'
    ]
  },
  {
    id: 'module-12',
    number: 12,
    title: 'Votre autonomie',
    objective: 'Consolider vos apprentissages et construire un équilibre durable, par vous et pour vous.',
    duration: '15 min',
    importance: `Vous voici à la fin de ce parcours. Mais c'est aussi le début d'une nouvelle relation avec vous-même.

Ce programme vous a donné des outils, des perspectives, des pratiques. Il vous a invitée à observer, comprendre, expérimenter. Maintenant, c'est à vous de les adapter, de les intégrer, de les faire vôtres.

L'objectif n'a jamais été la perfection. C'est la liberté. La liberté de manger sans guerre intérieure. De vous nourrir avec respect. De vivre pleinement, sans que la nourriture occupe tout l'espace mental.

Vous n'avez plus besoin de ce programme pour savoir quoi faire. Vous avez tout ce qu'il faut en vous. Ce dernier module est une célébration de votre parcours — et une invitation à continuer avec confiance.`,
    feelings: [
      'La fierté du chemin parcouru',
      'Une confiance solide en vos capacités',
      'L\'envie de continuer par vous-même',
      'La sérénité d\'un nouveau départ'
    ],
    lesson: `**Ce que vous avez appris :**

- Module 1 : La discipline n'est pas la solution. La compréhension, si.
- Module 2 : Vos déclencheurs sont identifiables — et gérables.
- Module 3 : Vous savez distinguer faim physique et faim émotionnelle.
- Module 4 : Votre satiété est un signal précieux.
- Module 5 : Vous avez des outils pour apaiser votre système nerveux.
- Module 6 : La culpabilité n'aide pas — vous pouvez la déconstruire.
- Module 7 : Votre corps mérite le respect.
- Module 8 : Le plaisir est un allié.
- Module 9 : Les "écarts" n'existent pas — seulement des choix.
- Module 10 : Des routines simples soutiennent votre équilibre.
- Module 11 : Vous pouvez manger en société avec sérénité.

**Ce qui vient maintenant :**

1. **Continuez vos routines.** Les micro-habitudes sont le ciment du changement.
2. **Utilisez votre journal.** L'écriture est un outil puissant de connexion avec vous-même.
3. **Faites des check-ins réguliers.** Restez en contact avec vos émotions.
4. **Revenez aux modules si besoin.** Ce programme est une ressource à vie.
5. **Célébrez vos progrès.** Chaque petit pas compte.

**Quand chercher du soutien supplémentaire :**
- Si les compulsions sont très fréquentes et vous font souffrir
- Si vous suspectez un trouble du comportement alimentaire
- Si l'anxiété ou la dépression interfèrent avec votre quotidien
- Un professionnel (psychologue, diététicienne spécialisée) peut vous accompagner

**Votre engagement envers vous-même :**
Vous méritez de manger en paix. Vous méritez de vivre sans obsession alimentaire. Vous méritez le plaisir, la liberté, la sérénité.

Ce programme n'est qu'un début. Le vrai travail — doux, patient, continu — est en vous.`,
    exercise: {
      title: 'Mon plan d\'action pour les 30 prochains jours',
      duration: '20 minutes',
      steps: [
        'Relisez vos notes de journal depuis le début du programme.',
        'Identifiez les 3 apprentissages les plus importants pour vous.',
        'Pour chacun, écrivez un engagement bienveillant (ex : "Je m\'engage à faire une pause avant d\'ouvrir le frigo").',
        'Choisissez 2-3 habitudes quotidiennes à maintenir.',
        'Identifiez UN défi à travailler spécifiquement ce mois-ci.',
        'Prévoyez un moment dans 30 jours pour faire le point (dans votre agenda).',
        'Écrivez une lettre à la vous dans 30 jours : vos espoirs, vos encouragements.',
        'Signez votre engagement. C\'est un contrat avec vous-même.'
      ]
    },
    checklist: [
      'J\'ai identifié mes 3 apprentissages clés',
      'J\'ai créé mon plan d\'action pour 30 jours',
      'Je me sens prête à continuer par moi-même'
    ]
  },
];