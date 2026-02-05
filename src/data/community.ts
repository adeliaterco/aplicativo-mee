export interface Post {
  id: string;
  author: string;
  age: number;
  content: string;
  date: string;
  commentsCount: number;
  comments: {
    id: string;
    author: string;
    content: string;
    date: string;
  }[];
}

export const communityPosts: Post[] = [
  {
    id: 'post-1',
    author: 'Sophie',
    age: 34,
    content: 'Aujourd\'hui j\'ai mangé sans calculer. J\'ai écouté ma satiété. C\'est nouveau pour moi, et je me suis sentie étrangement libre. Pas de voix dans ma tête qui comptait. Juste moi et mon repas.',
    date: 'il y a 2 jours',
    commentsCount: 4,
    comments: [
      { id: 'c1-1', author: 'Marie', content: 'C\'est une victoire immense. Bravo à vous.', date: 'il y a 2 jours' },
      { id: 'c1-2', author: 'Claire', content: 'Je ressens la même chose depuis quelques jours. On avance ensemble.', date: 'il y a 1 jour' },
      { id: 'c1-3', author: 'Isabelle', content: 'Merci pour ce partage. Ça me donne espoir.', date: 'il y a 1 jour' },
      { id: 'c1-4', author: 'Anne', content: 'La liberté, c\'est exactement ça. Profitez-en.', date: 'il y a 23 heures' },
    ],
  },
  {
    id: 'post-2',
    author: 'Marie',
    age: 41,
    content: 'Je réalise que ce n\'était pas la nourriture le problème, mais le stress que j\'accumulais avant de rentrer chez moi. Le module 5 m\'a vraiment aidée à comprendre ça.',
    date: 'il y a 3 jours',
    commentsCount: 3,
    comments: [
      { id: 'c2-1', author: 'Nathalie', content: 'Le module 5 a été un déclic pour moi aussi.', date: 'il y a 3 jours' },
      { id: 'c2-2', author: 'Sophie', content: 'Identifier le déclencheur, c\'est déjà 50% du chemin.', date: 'il y a 2 jours' },
      { id: 'c2-3', author: 'Françoise', content: 'Courage à vous. Le stress professionnel est tellement présent.', date: 'il y a 2 jours' },
    ],
  },
  {
    id: 'post-3',
    author: 'Émilie',
    age: 28,
    content: 'Je me sens plus légère mentalement. Moins de bruit dans ma tête. Je n\'aurais jamais cru que c\'était possible sans régime strict.',
    date: 'il y a 4 jours',
    commentsCount: 5,
    comments: [
      { id: 'c3-1', author: 'Claire', content: 'C\'est exactement ça — la paix mentale.', date: 'il y a 4 jours' },
      { id: 'c3-2', author: 'Sophie', content: 'Moins de bruit, plus de vie. Bienvenue de ce côté.', date: 'il y a 3 jours' },
      { id: 'c3-3', author: 'Valérie', content: 'Vous me donnez envie de continuer. Merci.', date: 'il y a 3 jours' },
      { id: 'c3-4', author: 'Anne', content: 'Le silence intérieur est un cadeau précieux.', date: 'il y a 2 jours' },
      { id: 'c3-5', author: 'Nathalie', content: 'Bravo pour ce chemin parcouru.', date: 'il y a 2 jours' },
    ],
  },
  {
    id: 'post-4',
    author: 'Claire',
    age: 45,
    content: 'Hier soir, j\'ai mangé du chocolat. Vraiment savouré. Pas avalé en cachette avec honte. Juste apprécié. C\'est peut-être banal pour d\'autres, mais pour moi c\'est énorme.',
    date: 'il y a 5 jours',
    commentsCount: 6,
    comments: [
      { id: 'c4-1', author: 'Marie', content: 'Ce n\'est pas banal du tout. C\'est un acte de liberté.', date: 'il y a 5 jours' },
      { id: 'c4-2', author: 'Sophie', content: 'Le chocolat en paix. Quel bonheur.', date: 'il y a 5 jours' },
      { id: 'c4-3', author: 'Émilie', content: 'J\'y travaille aussi. Merci pour l\'inspiration.', date: 'il y a 4 jours' },
      { id: 'c4-4', author: 'Isabelle', content: 'Savourer au lieu de subir. C\'est ça le vrai plaisir.', date: 'il y a 4 jours' },
      { id: 'c4-5', author: 'Françoise', content: 'Vous m\'avez émue. Bravo.', date: 'il y a 3 jours' },
      { id: 'c4-6', author: 'Valérie', content: 'C\'est magnifique. Continuez.', date: 'il y a 3 jours' },
    ],
  },
  {
    id: 'post-5',
    author: 'Nathalie',
    age: 52,
    content: 'Après 30 ans de régimes, je commence à faire la paix avec mon corps. Le module 7 m\'a fait pleurer. Mais des larmes de soulagement.',
    date: 'il y a 1 semaine',
    commentsCount: 4,
    comments: [
      { id: 'c5-1', author: 'Anne', content: 'Ces larmes sont précieuses. Elles libèrent.', date: 'il y a 1 semaine' },
      { id: 'c5-2', author: 'Claire', content: '30 ans, c\'est un long chemin. Soyez fière d\'être ici.', date: 'il y a 6 jours' },
      { id: 'c5-3', author: 'Sophie', content: 'Le module 7 touche profondément. Courage.', date: 'il y a 6 jours' },
      { id: 'c5-4', author: 'Émilie', content: 'Merci de partager. Votre témoignage m\'aide.', date: 'il y a 5 jours' },
    ],
  },
  {
    id: 'post-6',
    author: 'Anne',
    age: 38,
    content: 'La pause avant le frigo fonctionne vraiment. 90 secondes, et souvent je réalise que ce n\'est pas de nourriture dont j\'ai besoin.',
    date: 'il y a 1 semaine',
    commentsCount: 3,
    comments: [
      { id: 'c6-1', author: 'Marie', content: 'Simple et efficace. J\'adore cet exercice.', date: 'il y a 1 semaine' },
      { id: 'c6-2', author: 'Nathalie', content: '90 secondes qui changent tout.', date: 'il y a 6 jours' },
      { id: 'c6-3', author: 'Claire', content: 'Merci pour le rappel. Je vais reprendre cet exercice.', date: 'il y a 5 jours' },
    ],
  },
  {
    id: 'post-7',
    author: 'Valérie',
    age: 33,
    content: 'Premier repas de famille sans angoisse ce week-end. J\'ai mangé ce qui me faisait envie, à mon rythme. Personne n\'a rien remarqué. Sauf moi.',
    date: 'il y a 10 jours',
    commentsCount: 5,
    comments: [
      { id: 'c7-1', author: 'Sophie', content: 'Les repas de famille, quel défi ! Bravo.', date: 'il y a 10 jours' },
      { id: 'c7-2', author: 'Émilie', content: 'C\'est vous qui comptez. Bien joué.', date: 'il y a 9 jours' },
      { id: 'c7-3', author: 'Anne', content: 'L\'invisibilité de votre victoire la rend encore plus belle.', date: 'il y a 9 jours' },
      { id: 'c7-4', author: 'Marie', content: 'Le module 11 aide tellement pour ça.', date: 'il y a 8 jours' },
      { id: 'c7-5', author: 'Nathalie', content: 'Félicitations. Chaque repas en paix compte.', date: 'il y a 8 jours' },
    ],
  },
  {
    id: 'post-8',
    author: 'Françoise',
    age: 47,
    content: 'Je n\'utilise plus le mot "craquer". Je dis "répondre à un besoin". Ce simple changement a tout transformé dans ma tête.',
    date: 'il y a 2 semaines',
    commentsCount: 2,
    comments: [
      { id: 'c8-1', author: 'Claire', content: 'Les mots façonnent notre réalité. Beau changement.', date: 'il y a 2 semaines' },
      { id: 'c8-2', author: 'Valérie', content: 'Je vais essayer. Merci pour cette idée.', date: 'il y a 12 jours' },
    ],
  },
];

// Adding more posts to reach 14-16 posts
export const morePosts: Post[] = [
  {
    id: 'post-9',
    author: 'Isabelle',
    age: 39,
    content: 'Je me suis autorisée un dessert au restaurant sans culpabilité. C\'est la première fois depuis des années. J\'ai savouré chaque bouchée.',
    date: 'il y a 2 semaines',
    commentsCount: 4,
    comments: [
      { id: 'c9-1', author: 'Sophie', content: 'La liberté de savourer. C\'est magnifique.', date: 'il y a 2 semaines' },
      { id: 'c9-2', author: 'Marie', content: 'Bravo ! C\'est un grand pas.', date: 'il y a 2 semaines' },
    ],
  },
  {
    id: 'post-10',
    author: 'Caroline',
    age: 31,
    content: 'Question : comment gérez-vous les remarques de la famille sur ce que vous mangez ? Ma mère commente toujours mes portions...',
    date: 'il y a 3 semaines',
    commentsCount: 6,
    comments: [
      { id: 'c10-1', author: 'Nathalie', content: 'Je dis simplement "je mange à mon rythme, merci". Ça aide.', date: 'il y a 3 semaines' },
      { id: 'c10-2', author: 'Anne', content: 'C\'est difficile. Le module 11 m\'a beaucoup aidée.', date: 'il y a 3 semaines' },
    ],
  },
  {
    id: 'post-11',
    author: 'Laurence',
    age: 44,
    content: 'Le check-in émotionnel est devenu mon rituel quotidien. Je comprends tellement mieux mes envies maintenant.',
    date: 'il y a 3 semaines',
    commentsCount: 3,
    comments: [
      { id: 'c11-1', author: 'Claire', content: 'Pareil ici ! C\'est devenu indispensable.', date: 'il y a 3 semaines' },
    ],
  },
  {
    id: 'post-12',
    author: 'Hélène',
    age: 36,
    content: 'Petite victoire : j\'ai laissé de la nourriture dans mon assiette pour la première fois. Mon corps était satisfait, j\'ai écouté.',
    date: 'il y a 3 semaines',
    commentsCount: 5,
    comments: [
      { id: 'c12-1', author: 'Émilie', content: 'C\'est énorme ! Écouter son corps, quel apprentissage.', date: 'il y a 3 semaines' },
      { id: 'c12-2', author: 'Sophie', content: 'La permission de laisser. Tellement libérateur.', date: 'il y a 2 semaines' },
    ],
  },
  {
    id: 'post-13',
    author: 'Sandrine',
    age: 42,
    content: 'Merci à cette communauté. Me sentir comprise, sans jugement, c\'est rare et précieux.',
    date: 'il y a 1 mois',
    commentsCount: 7,
    comments: [
      { id: 'c13-1', author: 'Françoise', content: 'Nous sommes toutes dans le même bateau. Bienvenue.', date: 'il y a 1 mois' },
      { id: 'c13-2', author: 'Valérie', content: 'Cette bienveillance me fait du bien aussi.', date: 'il y a 1 mois' },
    ],
  },
  {
    id: 'post-14',
    author: 'Martine',
    age: 55,
    content: 'À 55 ans, je découvre enfin que manger peut être un plaisir simple. Pas une bataille. Merci pour ce programme.',
    date: 'il y a 1 mois',
    commentsCount: 4,
    comments: [
      { id: 'c14-1', author: 'Nathalie', content: 'Il n\'est jamais trop tard. Votre témoignage m\'inspire.', date: 'il y a 1 mois' },
    ],
  },
  {
    id: 'post-15',
    author: 'Céline',
    age: 29,
    content: 'Le module sur l\'image corporelle m\'a fait pleurer. Des années de guerre avec mon reflet. Enfin un peu de paix.',
    date: 'il y a 1 mois',
    commentsCount: 5,
    comments: [
      { id: 'c15-1', author: 'Anne', content: 'Ces larmes sont un signe de guérison. Courage.', date: 'il y a 1 mois' },
      { id: 'c15-2', author: 'Claire', content: 'Le module 7 touche profondément. Vous n\'êtes pas seule.', date: 'il y a 1 mois' },
    ],
  },
  {
    id: 'post-16',
    author: 'Patricia',
    age: 48,
    content: 'Je ne dis plus "j\'ai craqué". Je dis "j\'ai répondu à un besoin". Ce simple changement a transformé ma relation à moi-même.',
    date: 'il y a 1 mois',
    commentsCount: 3,
    comments: [
      { id: 'c16-1', author: 'Françoise', content: 'Les mots ont un pouvoir immense. Bravo pour ce changement.', date: 'il y a 1 mois' },
    ],
  },
];

// Combine all posts
export const allCommunityPosts: Post[] = [...communityPosts, ...morePosts];