 import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
 import { ChevronLeft, Check, Clock, Sparkles } from 'lucide-react';
 import { markExerciseDone, isExerciseDoneToday } from '@/lib/storage';
 
 const ExerciceJour = () => {
   const navigate = useNavigate();
   const [completed, setCompleted] = useState(isExerciseDoneToday());
 
   const handleComplete = () => {
     markExerciseDone();
     setCompleted(true);
     setTimeout(() => {
       navigate('/accueil');
     }, 1500);
   };
 
   return (
     <div className="page-container animate-fade-in">
       <button
         onClick={() => navigate('/accueil')}
         className="flex items-center gap-1 text-sm text-text-secondary mb-4 -ml-1"
       >
         <ChevronLeft className="w-4 h-4" />
         Retour à l'accueil
       </button>
 
       {/* Header */}
       <div className="flex items-center gap-3 mb-6">
         <div className="w-12 h-12 rounded-full bg-taupe-light flex items-center justify-center">
           <Sparkles className="w-6 h-6 text-taupe" />
         </div>
         <div>
           <span className="text-xs font-medium text-taupe uppercase tracking-wider">Exercice du jour</span>
           <h1 className="text-xl font-serif text-foreground">Pause avant le frigo</h1>
         </div>
       </div>
 
       {/* Objective */}
       <div className="card-subtle mb-4">
         <h2 className="text-sm font-medium text-foreground mb-2">Objectif</h2>
         <p className="text-sm text-text-secondary leading-relaxed">
           Créer un espace de conscience entre le stimulus (envie) et la réponse (ouvrir le frigo). 
           Cette pause vous permet de reconnecter avec vos vrais besoins.
         </p>
       </div>
 
       {/* Duration */}
       <div className="flex items-center gap-2 mb-6 px-4 py-3 bg-taupe-light rounded-xl">
         <Clock className="w-4 h-4 text-taupe" />
         <span className="text-sm text-foreground font-medium">Durée : 90 secondes</span>
       </div>
 
       {/* Steps */}
       <div className="mb-6">
         <h2 className="text-sm font-medium text-foreground mb-4">Comment faire</h2>
         <div className="space-y-3">
           {[
             "Arrêtez-vous devant le réfrigérateur avant de l'ouvrir.",
             "Posez une main sur votre ventre. Sentez votre respiration.",
             "Demandez-vous : « Est-ce que mon corps a faim, ou mon esprit cherche autre chose ? »",
             "Respirez profondément 3 fois, en expirant lentement.",
             "Attendez 90 secondes. Observez ce qui se passe en vous.",
             "Notez mentalement l'émotion présente (stress, ennui, fatigue, faim réelle…).",
             "Si vous avez vraiment faim, ouvrez le frigo avec conscience. Sinon, demandez-vous ce dont vous avez vraiment besoin.",
             "Quelle que soit votre décision, acceptez-la sans jugement."
           ].map((step, index) => (
             <div key={index} className="flex items-start gap-3">
               <span className="w-7 h-7 rounded-full bg-taupe-light flex items-center justify-center text-sm font-medium text-taupe shrink-0">
                 {index + 1}
               </span>
               <p className="text-sm text-text-secondary leading-relaxed pt-1">{step}</p>
             </div>
           ))}
         </div>
       </div>
 
       {/* Why it works */}
       <div className="card-subtle mb-6 bg-taupe-light/50">
         <h2 className="text-sm font-medium text-foreground mb-2">Pourquoi ça fonctionne</h2>
         <p className="text-sm text-text-secondary leading-relaxed">
           En créant une pause, vous activez votre cortex préfrontal — la partie du cerveau capable 
           de prendre des décisions conscientes. Sans cette pause, c'est souvent l'amygdale (réponse 
           automatique au stress) qui décide pour vous. 90 secondes suffisent pour reprendre le contrôle.
         </p>
       </div>
 
       {/* Complete button */}
       {completed ? (
         <div className="card-subtle bg-success-light text-center py-6 animate-fade-in">
           <Check className="w-8 h-8 text-success mx-auto mb-2" />
           <p className="text-success font-medium">Exercice complété !</p>
           <p className="text-sm text-success/80 mt-1">Bravo pour ce moment de conscience.</p>
         </div>
       ) : (
         <button
           onClick={handleComplete}
           className="btn-primary w-full flex items-center justify-center gap-2"
         >
           <Check className="w-4 h-4" />
           Marquer comme fait
         </button>
       )}
 
       {/* Footer */}
       <p className="text-xs text-text-secondary text-center mt-6 italic">
         Pratiquez cet exercice chaque fois que vous vous dirigez vers le frigo par automatisme.
       </p>
     </div>
   );
 };
 
 export default ExerciceJour;