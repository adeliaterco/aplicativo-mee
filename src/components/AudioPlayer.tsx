 import { useState } from 'react';
 import { Play, Pause, Volume2, Music, X } from 'lucide-react';
 import { audioLibrary, getDefaultTracks, getMoodTracks, getTrackById } from '@/data/audioLibrary';
 import { getAudioSettings, saveAudioSettings } from '@/lib/storage';
 
 interface AudioPlayerProps {
   onClose?: () => void;
 }
 
 const AudioPlayer = ({ onClose }: AudioPlayerProps) => {
   const settings = getAudioSettings();
   const [isPlaying, setIsPlaying] = useState(settings.isPlaying);
   const [selectedTrack, setSelectedTrack] = useState(settings.selectedAudioId || 'accueil');
   const [volume, setVolume] = useState(settings.volume);
   const [showLibrary, setShowLibrary] = useState(false);
   const [showVolume, setShowVolume] = useState(false);
 
   const currentTrack = getTrackById(selectedTrack);
 
   const handlePlayPause = () => {
     const newState = !isPlaying;
     setIsPlaying(newState);
     saveAudioSettings({ ...settings, isPlaying: newState, selectedAudioId: selectedTrack });
   };
 
   const handleSelectTrack = (trackId: string) => {
     setSelectedTrack(trackId);
     saveAudioSettings({ ...settings, selectedAudioId: trackId });
     setShowLibrary(false);
   };
 
   const handleVolumeChange = (newVolume: number) => {
     setVolume(newVolume);
     saveAudioSettings({ ...settings, volume: newVolume });
   };
 
   const defaultTracks = getDefaultTracks();
   const moodTracks = getMoodTracks();
 
   return (
     <>
       {/* Mini Player Bar */}
       <div className="fixed top-14 left-0 right-0 h-12 bg-card border-b border-border-subtle flex items-center justify-between px-4 z-40">
         <div className="flex items-center gap-3">
           <button
             onClick={handlePlayPause}
             className="w-8 h-8 rounded-full bg-taupe-light flex items-center justify-center transition-colors hover:bg-taupe/20"
           >
             {isPlaying ? (
               <Pause className="w-4 h-4 text-taupe" />
             ) : (
               <Play className="w-4 h-4 text-taupe ml-0.5" />
             )}
           </button>
           <span className="text-sm text-foreground truncate max-w-[120px]">
             {currentTrack?.name || 'Aucune ambiance'}
           </span>
         </div>
 
         <div className="flex items-center gap-2">
           <button
             onClick={() => setShowVolume(!showVolume)}
             className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-taupe-light"
           >
             <Volume2 className="w-4 h-4 text-text-secondary" />
           </button>
           <button
             onClick={() => setShowLibrary(true)}
             className="px-3 py-1.5 rounded-full bg-taupe-light text-xs font-medium text-taupe transition-colors hover:bg-taupe/20"
           >
             Choisir
           </button>
           {onClose && (
             <button
               onClick={onClose}
               className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-taupe-light"
             >
               <X className="w-4 h-4 text-text-secondary" />
             </button>
           )}
         </div>
       </div>
 
       {/* Volume Slider Popup */}
       {showVolume && (
         <>
           <div className="fixed inset-0 z-50" onClick={() => setShowVolume(false)} />
           <div className="fixed top-28 right-16 bg-card rounded-xl shadow-lg border border-border-subtle z-50 p-4 w-48 animate-fade-in">
             <p className="text-xs text-text-secondary mb-2">Volume</p>
             <input
               type="range"
               min="0"
               max="100"
               value={volume}
               onChange={(e) => handleVolumeChange(Number(e.target.value))}
               className="w-full h-2 bg-taupe-light rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-taupe"
             />
             <p className="text-xs text-taupe text-right mt-1">{volume}%</p>
           </div>
         </>
       )}
 
       {/* Library Modal */}
       {showLibrary && (
         <>
           <div 
             className="fixed inset-0 bg-black/30 z-50" 
             onClick={() => setShowLibrary(false)} 
           />
           <div className="fixed inset-x-4 top-24 bottom-24 bg-card rounded-2xl shadow-xl z-50 overflow-hidden animate-fade-in flex flex-col">
             <div className="px-5 py-4 border-b border-border-subtle">
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-2">
                   <Music className="w-5 h-5 text-taupe" />
                   <h2 className="text-lg font-serif text-foreground">Bibliothèque d'ambiances</h2>
                 </div>
                 <button
                   onClick={() => setShowLibrary(false)}
                   className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-taupe-light"
                 >
                   <X className="w-4 h-4 text-text-secondary" />
                 </button>
               </div>
               <p className="text-sm text-text-secondary mt-1">
                 Choisissez une ambiance douce pour accompagner votre lecture.
               </p>
             </div>
 
             <div className="flex-1 overflow-y-auto p-5 space-y-6">
               {/* Default tracks */}
               <div>
                 <h3 className="text-xs font-medium text-taupe uppercase tracking-wider mb-3">
                   Par défaut
                 </h3>
                 <div className="grid grid-cols-2 gap-2">
                   {defaultTracks.map((track) => (
                     <button
                       key={track.id}
                       onClick={() => handleSelectTrack(track.id)}
                       className={`p-3 rounded-xl text-left transition-all ${
                         selectedTrack === track.id
                           ? 'bg-taupe text-card'
                           : 'bg-taupe-light text-foreground hover:bg-taupe/20'
                       }`}
                     >
                       <span className="text-sm font-medium">{track.name}</span>
                     </button>
                   ))}
                 </div>
               </div>
 
               {/* Mood tracks */}
               <div>
                 <h3 className="text-xs font-medium text-taupe uppercase tracking-wider mb-3">
                   Ambiances
                 </h3>
                 <div className="grid grid-cols-2 gap-2">
                   {moodTracks.map((track) => (
                     <button
                       key={track.id}
                       onClick={() => handleSelectTrack(track.id)}
                       className={`p-3 rounded-xl text-left transition-all ${
                         selectedTrack === track.id
                           ? 'bg-taupe text-card'
                           : 'bg-taupe-light text-foreground hover:bg-taupe/20'
                       }`}
                     >
                       <span className="text-sm font-medium">{track.name}</span>
                     </button>
                   ))}
                 </div>
               </div>
             </div>
 
             <div className="px-5 py-4 border-t border-border-subtle">
               <button
                 onClick={() => setShowLibrary(false)}
                 className="btn-primary w-full"
               >
                 Fermer
               </button>
             </div>
           </div>
         </>
       )}
     </>
   );
 };
 
 export default AudioPlayer;