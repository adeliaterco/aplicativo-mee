import { useState } from 'react';
import { modules } from '@/data/modules';
import { getModuleProgress, markModuleComplete, getCompletedModulesCount } from '@/lib/storage';
import { ChevronLeft, Check, Clock, Sparkles, Heart, Target } from 'lucide-react';

// Images personnalisées pour chaque module
const getModuleImage = (num: number): string => {
  const images = [
    'https://i.ibb.co/KRDgP4M/Generatedimage-1770325206838.jpg',      // Module 1
    'https://i.ibb.co/6Rb0mBj3/Generatedimage-1770325211671.jpg',     // Module 2
    'https://i.ibb.co/CpCX6qh4/Generatedimage-1770325216438.jpg',     // Module 3
    'https://i.ibb.co/0pB27ZJt/Generatedimage-1770325222725.jpg',     // Module 4
    'https://i.ibb.co/Qv9HdvLC/Generatedimage-1770325229420.jpg',     // Module 5
    'https://i.ibb.co/pj0nv0tV/Generatedimage-1770325232537.png',     // Module 6
    'https://i.ibb.co/jvzXJWPw/Generatedimage-1770325234906.jpg',     // Module 7
    'https://i.ibb.co/b5mqzz63/Generatedimage-1770325237388.jpg',     // Module 8
    'https://i.ibb.co/Tx8hMrSm/Generatedimage-1770325242104.jpg',     // Module 9
    'https://i.ibb.co/1JrPRkCh/Generatedimage-1770325245872.jpg',     // Module 10
    'https://i.ibb.co/Xx0QSvt3/Generatedimage-1770325250154.jpg',     // Module 11
    'https://i.ibb.co/xtdL2yJ0/Generatedimage-1770325252654.jpg'      // Module 12
  ];
  return images[num - 1] || images[0];
};

// Couleurs par groupe de modules
const getModuleColor = (num: number) => {
  if (num <= 4) return 'from-green-50/50 to-green-100/30 border-green-200/40';
  if (num <= 8) return 'from-blue-50/50 to-blue-100/30 border-blue-200/40';
  return 'from-purple-50/50 to-purple-100/30 border-purple-200/40';
};

// Noms pour témoignages
const getTestimonialName = (num: number) => {
  const names = ['Sophie', 'Marie', 'Claire', 'Isabelle', 'Anne', 'Julie', 'Céline', 'Nathalie', 'Émilie', 'Valérie', 'Sandrine', 'Laurence'];
  const ages = [38, 42, 35, 47, 31, 44, 39, 52, 33, 45, 41, 36];
  return { name: names[num - 1], age: ages[num - 1] };
};

const Modules = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [progress, setProgress] = useState(getModuleProgress);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  
  const module = selectedModule ? modules.find(m => m.id === selectedModule) : null;

  const handleComplete = (moduleId: string) => {
    markModuleComplete(moduleId);
    setProgress(getModuleProgress());
  };

  const toggleCheckItem = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [`${selectedModule}-${index}`]: !prev[`${selectedModule}-${index}`]
    }));
  };

  // Vue détaillée d'un module
  if (module) {
    const isCompleted = progress[module.id];
    const testimonial = getTestimonialName(module.number);
    
    return (
      <div className="page-container animate-fade-in pb-32">
        {/* Bouton retour */}
        <button
          onClick={() => setSelectedModule(null)}
          className="flex items-center gap-1 text-sm text-text-secondary mb-4 -ml-1"
        >
          <ChevronLeft className="w-4 h-4" />
          Retour aux modules
        </button>

        {/* Banner du module avec image */}
        <div className="relative h-[200px] w-full rounded-2xl overflow-hidden mb-6">
          <img 
            src={getModuleImage(module.number)}
            alt={module.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = 'https://i.ibb.co/KRDgP4M/Generatedimage-1770325206838.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white mb-3">
              Module {module.number} de 12
            </span>
            <h1 className="text-2xl font-serif text-white leading-tight">
              {module.title}
            </h1>
          </div>
        </div>

        {/* Section 1: Objectif */}
        <div className="card-subtle mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-taupe" />
            <h2 className="text-sm font-medium text-foreground">Objectif de ce module</h2>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">{module.objective}</p>
        </div>

        {/* Nouvelle section: Où vous en êtes */}
        <div className="card-subtle bg-blue-50/30 border border-blue-100/50 mb-6">
          <h2 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
            <span className="text-blue-600">📍</span>
            Où vous en êtes probablement
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            À ce stade, vous ressentez peut-être de la confusion face à vos comportements alimentaires. 
            Vous avez essayé plusieurs régimes, mais le poids revient toujours. Ce module va vous aider 
            à comprendre pourquoi les approches traditionnelles ne fonctionnent pas sur le long terme.
          </p>
        </div>

        {/* Section 2: Pourquoi c'est important */}
        <div className="mb-6">
          <h2 className="text-base font-serif text-foreground mb-3">Pourquoi c'est important</h2>
          <div className="text-sm text-text-secondary leading-relaxed whitespace-pre-line bg-taupe-light/30 p-4 rounded-xl">
            {module.importance}
          </div>
        </div>

        {/* Nouvelle section: Les 3 clés de ce module */}
        <div className="mb-6">
          <h2 className="text-base font-serif text-foreground mb-4 flex items-center gap-2">
            <span>🔑</span>
            Les 3 clés de ce module
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-taupe-light/30 rounded-xl">
              <span className="w-8 h-8 rounded-full bg-taupe flex items-center justify-center text-white text-sm font-medium shrink-0">1</span>
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Comprendre la vraie faim</p>
                <p className="text-xs text-text-secondary">Distinguer la faim physique de la faim émotionnelle</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-taupe-light/30 rounded-xl">
              <span className="w-8 h-8 rounded-full bg-taupe flex items-center justify-center text-white text-sm font-medium shrink-0">2</span>
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Identifier vos déclencheurs</p>
                <p className="text-xs text-text-secondary">Reconnaître les situations qui provoquent les compulsions</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-taupe-light/30 rounded-xl">
              <span className="w-8 h-8 rounded-full bg-taupe flex items-center justify-center text-white text-sm font-medium shrink-0">3</span>
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Créer une pause consciente</p>
                <p className="text-xs text-text-secondary">Installer un espace entre l'émotion et l'action</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Ce que vous allez ressentir */}
        <div className="card-subtle mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-4 h-4 text-taupe" />
            <h2 className="text-sm font-medium text-foreground">Ce que vous allez ressentir</h2>
          </div>
          <ul className="space-y-2">
            {module.feelings.map((feeling, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-taupe">•</span>
                {feeling}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4: Leçon principale */}
        <div className="mb-6">
          <h2 className="text-base font-serif text-foreground mb-3">Leçon principale</h2>
          <div className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
            {module.lesson}
          </div>
        </div>

        {/* Nouvelle section: Ce que vous allez découvrir */}
        <div className="card-subtle bg-gradient-to-br from-yellow-50/50 to-orange-50/30 border border-orange-100/40 mb-6">
          <h2 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
            <span className="text-orange-600">💡</span>
            Ce que vous allez découvrir
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-taupe shrink-0 mt-0.5" />
              Pourquoi votre corps ne vous trahit pas (il vous protège)
            </li>
            <li className="flex items-start gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-taupe shrink-0 mt-0.5" />
              Comment vos émotions deviennent de la nourriture
            </li>
            <li className="flex items-start gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-taupe shrink-0 mt-0.5" />
              La technique des 90 secondes pour stopper une compulsion
            </li>
            <li className="flex items-start gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-taupe shrink-0 mt-0.5" />
              L'erreur que font 90% des femmes (et comment l'éviter)
            </li>
          </ul>
        </div>

        {/* Section 5: Exercice guidé - amélioré */}
        <div className="card-subtle border-l-4 border-l-taupe bg-gradient-to-r from-taupe-light/20 to-transparent mb-6 p-6">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-taupe" />
            <h2 className="text-sm font-medium text-foreground">Exercice guidé</h2>
          </div>
          <p className="text-lg font-serif text-foreground mb-2">{module.exercise.title}</p>
          <p className="text-xs text-taupe mb-4">Durée : {module.exercise.duration}</p>
          
          <ol className="space-y-3 mb-4">
            {module.exercise.steps.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-taupe-light flex items-center justify-center text-xs font-medium text-taupe shrink-0">
                  {index + 1}
                </span>
                <p className="text-sm text-text-secondary leading-relaxed pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Nouvelle section: Témoignage */}
        <div className="card-subtle bg-purple-50/30 border border-purple-100/50 mb-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center shrink-0">
              <span className="text-sm font-medium text-purple-900">{testimonial.name.charAt(0)}</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{testimonial.name}, {testimonial.age} ans</p>
              <p className="text-xs text-text-secondary">Après le Module {module.number}</p>
            </div>
          </div>
          <p className="text-sm text-text-secondary italic leading-relaxed">
            "Ce module m'a fait comprendre que je n'étais pas faible. J'avais juste besoin d'outils 
            pour gérer mes émotions autrement que par la nourriture. La technique de la pause de 90 secondes 
            a changé ma vie."
          </p>
        </div>

        {/* Nouvelle section: Points de vigilance */}
        <div className="card-subtle bg-red-50/30 border border-red-100/50 mb-6">
          <h2 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
            <span className="text-red-600">⚠️</span>
            Points de vigilance
          </h2>
          <div className="space-y-2">
            <p className="text-sm text-text-secondary leading-relaxed">
              <strong className="text-foreground">Ne vous forcez pas.</strong> Si cet exercice vous semble 
              difficile aujourd'hui, c'est normal. Revenez-y demain.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              <strong className="text-foreground">Pas de culpabilité.</strong> Si vous mangez quand même après 
              les 90 secondes, ce n'est pas un échec. C'est de la pratique.
            </p>
          </div>
        </div>

        {/* Section 6: Mini-checklist */}
        <div className="card-subtle mb-6">
          <h2 className="text-sm font-medium text-foreground mb-3">Avant de terminer ce module</h2>
          <div className="space-y-3">
            {module.checklist.map((item, index) => (
              <button
                key={index}
                onClick={() => toggleCheckItem(index)}
                className="flex items-start gap-3 w-full text-left"
              >
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  checkedItems[`${selectedModule}-${index}`]
                    ? 'bg-taupe border-taupe'
                    : 'border-border-subtle'
                }`}>
                  {checkedItems[`${selectedModule}-${index}`] && (
                    <Check className="w-3 h-3 text-card" />
                  )}
                </div>
                <span className="text-sm text-text-secondary">{item}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Section 7: Bouton compléter */}
        <button
          onClick={() => handleComplete(module.id)}
          disabled={isCompleted}
          className={`w-full h-12 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
            isCompleted 
              ? 'bg-success-light text-success' 
              : 'bg-taupe text-card hover:bg-taupe-hover active:scale-[0.98]'
          }`}
        >
          {isCompleted ? (
            <>
              <Check className="w-4 h-4" />
              Module terminé
            </>
          ) : (
            'Marquer le module comme terminé'
          )}
        </button>

        {/* Footer */}
        <p className="text-xs text-text-secondary text-center mt-4 italic">
          Vous pouvez revenir à ce module quand vous le souhaitez.
        </p>
      </div>
    );
  }

  // Vue liste des modules
  return (
    <div className="page-container animate-fade-in">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-serif text-foreground mb-1">Modules guidés</h1>
        <p className="text-sm text-text-secondary flex items-center gap-2">
          <Clock className="w-4 h-4" />
          10–15 minutes par module • Texte + exercices
        </p>
      </div>

      {/* Progress summary */}
      <div className="card-subtle mb-6 flex items-center justify-between">
        <span className="text-sm text-text-secondary">Votre progression</span>
        <span className="text-sm font-medium text-foreground">{getCompletedModulesCount()}/12 complétés</span>
      </div>

      {/* Module list */}
      <div className="space-y-3">
        {modules.map((mod) => {
          const isCompleted = progress[mod.id];
          return (
            <button
              key={mod.id}
              onClick={() => setSelectedModule(mod.id)}
              className={`card-subtle w-full text-left group bg-gradient-to-br ${getModuleColor(mod.number)} border hover:shadow-md transition-all`}
            >
              <div className="flex items-start gap-3">
                {/* Thumbnail */}
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-taupe-light">
                  <img 
                    src={getModuleImage(mod.number)}
                    alt=""
                    className="w-full h-full object-cover opacity-70"
                    loading="lazy"
                  />
                </div>
                {/* Contenu */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isCompleted ? 'bg-success-light' : 'bg-taupe-light'
                    }`}>
                      {isCompleted ? (
                        <Check className="w-3 h-3 text-success" />
                      ) : (
                        <span className="text-xs font-medium text-taupe">{mod.number}</span>
                      )}
                    </div>
                    <h3 className="text-sm font-medium text-foreground group-hover:text-taupe-hover transition-colors truncate">
                      {mod.title}
                    </h3>
                  </div>
                  <p className="text-xs text-text-secondary mt-0.5 line-clamp-2 pl-8">{mod.objective}</p>
                  <div className="flex items-center gap-2 mt-2 pl-8">
                    <span className="text-xs text-taupe">{mod.duration}</span>
                    <span className="text-taupe">→</span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Modules;