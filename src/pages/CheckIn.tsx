 import { useState, useEffect } from 'react';
 import { getCheckInsEnhanced, saveCheckInEnhanced, CheckInEnhanced } from '@/lib/storage';
 import { Check, ChevronLeft, Lightbulb } from 'lucide-react';
 
 const emotions = [
   'Calme', 'Stressée', 'Fatiguée', 'Triste', 'Anxieuse', 
   'Irritée', 'Heureuse', 'Vide', 'Confuse', 'Pleine d\'espoir'
 ];
 
 const situations = [
   { value: 'travail', label: 'Travail' },
   { value: 'famille', label: 'Famille' },
   { value: 'solitude', label: 'Solitude' },
   { value: 'fatigue', label: 'Fatigue' },
   { value: 'conflit', label: 'Conflit' },
   { value: 'avant-repas', label: 'Avant un repas' },
   { value: 'apres-repas', label: 'Après un repas' },
   { value: 'nature', label: 'Nature' },
   { value: 'mouvement', label: 'Mouvement' },
   { value: 'autre', label: 'Autre' },
 ];
 
 const CheckIn = () => {
   const [selectedEmotion, setSelectedEmotion] = useState('');
   const [intensity, setIntensity] = useState(5);
   const [physicalHunger, setPhysicalHunger] = useState(5);
   const [emotionalHunger, setEmotionalHunger] = useState(5);
   const [situation, setSituation] = useState('');
   const [text, setText] = useState('');
   const [saved, setSaved] = useState(false);
   const [suggestion, setSuggestion] = useState('');
   const [history, setHistory] = useState<CheckInEnhanced[]>([]);
   const [selectedHistoryItem, setSelectedHistoryItem] = useState<CheckInEnhanced | null>(null);
 
   useEffect(() => {
     setHistory(getCheckInsEnhanced().slice(0, 14));
   }, [saved]);
 
   const getSuggestion = (emotion: string, intensityVal: number, physHunger: number, emotHunger: number): string => {
     if (intensityVal > 7) {
       return 'Suggestion : Prenez 3 respirations profondes. Vous êtes en sécurité.';
     }
     if (emotHunger > physHunger + 2) {
       return 'Suggestion : Avant de manger, posez-vous la question : de quoi ai-je vraiment besoin ?';
     }
     if (emotion === 'Calme' || emotion === 'Heureuse') {
       return 'Bravo ! Vous êtes en équilibre. Savourez ce moment.';
     }
     if (emotion === 'Stressée' || emotion === 'Anxieuse') {
       return 'Suggestion : Essayez la technique de respiration 4-7-8 pour apaiser votre système nerveux.';
     }
     return 'Merci d\'avoir pris ce moment pour vous. La conscience est le premier pas.';
   };
 
   const handleSave = () => {
     if (!selectedEmotion || !situation) return;
     
     const suggestionText = getSuggestion(selectedEmotion, intensity, physicalHunger, emotionalHunger);
     setSuggestion(suggestionText);
     
     saveCheckInEnhanced({
       emotion: selectedEmotion,
       intensity,
       physicalHunger,
       emotionalHunger,
       situation,
       text: text || undefined,
     });
     
     setSaved(true);
   };
 
   const handleReset = () => {
     setSaved(false);
     setSuggestion('');
     setSelectedEmotion('');
     setIntensity(5);
     setPhysicalHunger(5);
     setEmotionalHunger(5);
     setSituation('');
     setText('');
   };
 
   const formatDate = (dateString: string) => {
     const date = new Date(dateString);
     return date.toLocaleDateString('fr-FR', { 
       day: 'numeric', 
       month: 'short',
       hour: '2-digit',
       minute: '2-digit'
     });
   };
 
   if (selectedHistoryItem) {
     return (
       <div className="page-container animate-fade-in">
         <button
           onClick={() => setSelectedHistoryItem(null)}
           className="flex items-center gap-1 text-sm text-text-secondary mb-4 -ml-1"
         >
           <ChevronLeft className="w-4 h-4" />
           Retour
         </button>
         <h1 className="text-xl font-serif text-foreground mb-4">Check-in du {formatDate(selectedHistoryItem.date)}</h1>
         <div className="space-y-3">
           <div className="card-subtle">
             <p className="text-xs text-text-secondary mb-1">Émotion</p>
             <p className="text-foreground font-medium">{selectedHistoryItem.emotion} · {selectedHistoryItem.intensity}/10</p>
           </div>
           <div className="card-subtle">
             <p className="text-xs text-text-secondary mb-1">Faim physique / émotionnelle</p>
             <p className="text-foreground">{selectedHistoryItem.physicalHunger}/10 · {selectedHistoryItem.emotionalHunger}/10</p>
           </div>
           {selectedHistoryItem.text && (
             <div className="card-subtle">
               <p className="text-xs text-text-secondary mb-1">Note</p>
               <p className="text-foreground">{selectedHistoryItem.text}</p>
             </div>
           )}
         </div>
       </div>
     );
   }
 
   return (
     <div className="page-container animate-fade-in">
       <h1 className="text-2xl font-serif text-foreground mb-2">Check-in émotionnel</h1>
       <p className="text-sm text-text-secondary mb-6">Un moment pour vous connecter à vous-même.</p>
 
       {saved ? (
         <div className="space-y-4 animate-fade-in">
           <div className="card-subtle bg-success-light text-center py-6">
             <Check className="w-8 h-8 text-success mx-auto mb-2" />
             <p className="text-success font-medium">Enregistré avec bienveillance.</p>
           </div>
           {suggestion && (
             <div className="card-subtle bg-taupe-light/50">
               <div className="flex items-start gap-3">
                 <Lightbulb className="w-5 h-5 text-taupe shrink-0" />
                 <p className="text-sm text-foreground">{suggestion}</p>
               </div>
             </div>
           )}
           <button onClick={handleReset} className="btn-primary w-full">Nouveau check-in</button>
         </div>
       ) : (
         <>
           <div className="mb-6">
             <label className="block text-sm font-medium text-foreground mb-3">Comment vous sentez-vous ?</label>
             <div className="flex flex-wrap gap-2">
               {emotions.map((emotion) => (
                 <button key={emotion} onClick={() => setSelectedEmotion(emotion)} className={`chip ${selectedEmotion === emotion ? 'selected' : ''}`}>{emotion}</button>
               ))}
             </div>
           </div>
           <div className="mb-6">
             <div className="flex items-center justify-between mb-2">
               <label className="text-sm font-medium text-foreground">Intensité</label>
               <span className="text-sm text-taupe font-medium">{intensity}/10</span>
             </div>
             <input type="range" min="1" max="10" value={intensity} onChange={(e) => setIntensity(Number(e.target.value))} className="w-full h-2 bg-taupe-light rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-taupe" />
           </div>
           <div className="mb-6">
             <div className="flex items-center justify-between mb-2">
               <label className="text-sm font-medium text-foreground">Faim physique</label>
               <span className="text-sm text-taupe font-medium">{physicalHunger}/10</span>
             </div>
             <input type="range" min="0" max="10" value={physicalHunger} onChange={(e) => setPhysicalHunger(Number(e.target.value))} className="w-full h-2 bg-taupe-light rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-taupe" />
           </div>
           <div className="mb-6">
             <div className="flex items-center justify-between mb-2">
               <label className="text-sm font-medium text-foreground">Faim émotionnelle</label>
               <span className="text-sm text-taupe font-medium">{emotionalHunger}/10</span>
             </div>
             <input type="range" min="0" max="10" value={emotionalHunger} onChange={(e) => setEmotionalHunger(Number(e.target.value))} className="w-full h-2 bg-taupe-light rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-taupe" />
           </div>
           <div className="mb-6">
             <label className="block text-sm font-medium text-foreground mb-3">Situation</label>
             <select value={situation} onChange={(e) => setSituation(e.target.value)} className="input-field appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236B6B6B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] bg-[length:0.7rem]">
               <option value="">Sélectionnez une situation</option>
               {situations.map((sit) => (<option key={sit.value} value={sit.value}>{sit.label}</option>))}
             </select>
           </div>
           <div className="mb-6">
             <label className="block text-sm font-medium text-foreground mb-3">Note libre <span className="font-normal text-text-secondary">(optionnel)</span></label>
             <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Ce que je ressens..." className="input-field min-h-[100px] py-3 resize-none" />
           </div>
           <button onClick={handleSave} disabled={!selectedEmotion || !situation} className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">Enregistrer ce check-in</button>
         </>
       )}
 
       {history.length > 0 && !saved && (
         <div className="mt-8 pt-6 border-t border-border-subtle">
           <h2 className="text-sm font-medium text-foreground mb-4">Historique ({history.length})</h2>
           <div className="space-y-2">
             {history.map((item) => (
               <button key={item.id} onClick={() => setSelectedHistoryItem(item)} className="card-subtle flex items-center justify-between w-full text-left">
                 <div>
                   <span className="text-sm text-foreground">{item.emotion}</span>
                   <span className="text-xs text-text-secondary ml-2">· {item.intensity}/10</span>
                 </div>
                 <span className="text-xs text-text-secondary">{formatDate(item.date)}</span>
               </button>
             ))}
           </div>
         </div>
       )}
     </div>
   );
 };
 
 export default CheckIn;