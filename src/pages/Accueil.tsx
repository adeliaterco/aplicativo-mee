import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Heart, PenLine, Sparkles, Users, Check } from 'lucide-react';
import { getUserEmail, getCompletedModulesCount, isExerciseDoneToday } from '@/lib/storage';

const Accueil = () => {
  const navigate = useNavigate();
  const email = getUserEmail();
  const completedModules = getCompletedModulesCount();
  const [exerciseDone, setExerciseDone] = useState(isExerciseDoneToday());

  const quickActions = [
    { 
      id: 'checkin', 
      title: 'Check-in émotionnel', 
      cta: 'Faire mon check-in', 
      icon: Heart,
      path: '/checkin' 
    },
    { 
      id: 'journal', 
      title: 'Journal', 
      cta: 'Écrire une note', 
      icon: PenLine,
      path: '/journal' 
    },
    { 
      id: 'exercise', 
      title: 'Exercice du jour', 
      cta: 'Commencer', 
      icon: Sparkles,
      path: '/exercice-jour' 
    },
    { 
      id: 'community', 
      title: 'Communauté', 
      cta: 'Voir les échanges', 
      icon: Users,
      path: '/communaute' 
    },
  ];

  // Couleurs subtiles pour chaque action
  const actionColors: Record<string, string> = {
    'checkin': 'hover:bg-green-50/50 hover:border-green-200/30',
    'journal': 'hover:bg-blue-50/50 hover:border-blue-200/30',
    'exercise': 'hover:bg-yellow-50/50 hover:border-yellow-200/30',
    'community': 'hover:bg-purple-50/50 hover:border-purple-200/30',
  };

  return (
    <div className="page-container animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[220px] bg-gradient-to-br from-taupe/30 via-taupe-light/40 to-taupe/20 rounded-2xl p-6 mb-6 overflow-hidden">
        {/* Pattern décoratif subtil */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center h-full">
          <h1 className="text-2xl font-serif text-foreground mb-2 leading-tight">
            Votre parcours vers<br/>la paix alimentaire
          </h1>
          <p className="text-sm text-text-secondary mb-4">
            Une approche émotionnelle, sans régime ni privation
          </p>
          <div className="flex items-center gap-4 text-xs text-taupe">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-taupe"></span>
              12 modules guidés
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-taupe"></span>
              Accès à vie
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-taupe"></span>
              Résultats durables
            </span>
          </div>
        </div>
      </div>

      {/* Progress card avec cercle animé */}
      <div className="card-subtle mb-6">
        <div className="flex items-center gap-6">
          {/* Cercle de progression SVG */}
          <div className="relative w-28 h-28 shrink-0">
            <svg className="transform -rotate-90 w-28 h-28">
              <circle
                cx="56"
                cy="56"
                r="50"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-taupe-light"
              />
              <circle
                cx="56"
                cy="56"
                r="50"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                className="text-taupe transition-all duration-1000"
                style={{
                  strokeDasharray: `${2 * Math.PI * 50}`,
                  strokeDashoffset: `${2 * Math.PI * 50 * (1 - completedModules / 12)}`
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-serif text-foreground">{completedModules}</span>
              <span className="text-xs text-text-secondary">/12</span>
            </div>
          </div>
          {/* Info et bouton */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground mb-1">
              {completedModules === 0 ? 'Commencez votre transformation' : 'Continuez votre parcours'}
            </p>
            <p className="text-xs text-text-secondary mb-4">
              {completedModules === 0 
                ? 'Le Module 1 vous attend' 
                : `${12 - completedModules} module${12 - completedModules > 1 ? 's' : ''} restant${12 - completedModules > 1 ? 's' : ''}`
              }
            </p>
            <button
              onClick={() => navigate('/modules')}
              className="btn-primary w-full flex items-center justify-center gap-2 h-10"
            >
              <Play className="w-4 h-4" />
              {completedModules === 0 ? 'Démarrer' : 'Continuer'}
            </button>
          </div>
        </div>
      </div>

      {/* Quick actions grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              onClick={() => navigate(action.path)}
              className={`card-subtle text-left transition-all border border-transparent ${actionColors[action.id]}`}
            >
              <Icon className="w-5 h-5 text-taupe mb-2" />
              <h3 className="text-sm font-medium text-foreground mb-1">{action.title}</h3>
              <span className="text-xs text-taupe">{action.cta} →</span>
            </button>
          );
        })}
      </div>

      {/* Daily reminder */}
      <div className="card-subtle bg-taupe-light/50 mb-6">
        <p className="text-sm text-text-secondary italic leading-relaxed">
          « Vous n'avez pas échoué. Vous n'aviez simplement pas la bonne approche. »
        </p>
      </div>

      {/* Exercise of the day - amélioré */}
      <div className="card-subtle bg-gradient-to-br from-taupe-light/30 to-transparent mb-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            {!exerciseDone && (
              <span className="inline-block px-2 py-1 bg-taupe text-card text-xs font-medium rounded-full mb-3">
                NOUVEAU
              </span>
            )}
            <span className="block text-xs font-medium text-taupe uppercase tracking-wider">Exercice du jour</span>
            <h3 className="text-lg font-serif text-foreground mt-1 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-taupe" />
              Pause avant le frigo
            </h3>
          </div>
          <span className="text-xs text-text-secondary">90 sec</span>
        </div>
        
        <ol className="space-y-2 mb-4">
          <li className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="w-5 h-5 rounded-full bg-taupe-light flex items-center justify-center text-xs text-taupe shrink-0 mt-0.5">1</span>
            Arrêtez-vous devant le frigo avant de l'ouvrir.
          </li>
          <li className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="w-5 h-5 rounded-full bg-taupe-light flex items-center justify-center text-xs text-taupe shrink-0 mt-0.5">2</span>
            Posez-vous la question : « Est-ce que mon corps a faim ? »
          </li>
          <li className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="w-5 h-5 rounded-full bg-taupe-light flex items-center justify-center text-xs text-taupe shrink-0 mt-0.5">3</span>
            Attendez 90 secondes. Observez ce qui se passe en vous.
          </li>
        </ol>

        <button
          onClick={() => navigate('/exercice-jour')}
          disabled={exerciseDone}
          className={`w-full h-11 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
            exerciseDone 
              ? 'bg-success-light text-success' 
              : 'bg-taupe-light text-foreground hover:bg-taupe/20 shadow-sm'
          }`}
        >
          {exerciseDone ? (
            <>
              <Check className="w-4 h-4" />
              Exercice complété
            </>
          ) : (
            'Ouvrir l\'exercice'
          )}
        </button>
      </div>

      {/* Preuve de valeur - Social proof */}
      <div className="card-subtle bg-gradient-to-r from-taupe-light/20 to-taupe-light/40 border border-taupe/10 mb-6">
        <p className="text-xs font-medium text-taupe uppercase tracking-wider mb-4 text-center">
          Vous avez fait le bon choix
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-xl font-serif text-foreground mb-1">2400+</p>
            <p className="text-xs text-text-secondary">Femmes accompagnées</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-serif text-foreground mb-1">92%</p>
            <p className="text-xs text-text-secondary">Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-serif text-foreground mb-1">4.8/5</p>
            <p className="text-xs text-text-secondary">Note moyenne</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
