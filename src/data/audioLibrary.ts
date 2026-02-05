 export interface AudioTrack {
   id: string;
   name: string;
   url: string;
   category: 'default' | 'mood';
 }
 
 export const audioLibrary: AudioTrack[] = [
   // Default tracks for each section
  { id: 'accueil', name: 'Accueil', url: 'http://renacer21.shop/wp-content/uploads/2026/02/xxxdolm-dark-ambient-soundscape-dreamscape-456642.mp3', category: 'default' },
  { id: 'modules', name: 'Modules', url: 'http://renacer21.shop/wp-content/uploads/2026/02/sergepavkinmusic-reflected-light-147979.mp3', category: 'default' },
  { id: 'checkin', name: 'Check-in', url: 'http://renacer21.shop/wp-content/uploads/2026/02/tunetank-cinematic-ambient-348342.mp3', category: 'default' },
  { id: 'journal', name: 'Journal', url: 'http://renacer21.shop/wp-content/uploads/2026/02/sonican-background-music-new-age-nature-465069.mp3', category: 'default' },
  { id: 'communaute', name: 'Communauté', url: 'http://renacer21.shop/wp-content/uploads/2026/02/good_b_music-ambient-piano-and-strings-10711.mp3', category: 'default' },
   // Mood ambiances
  { id: 'mood1', name: 'Forêt apaisante', url: 'http://renacer21.shop/wp-content/uploads/2026/02/freemusicforvideo-dark-ambient-soundscape-dreamscape-2-462867.mp3', category: 'mood' },
  { id: 'mood2', name: 'Pluie douce', url: 'http://renacer21.shop/wp-content/uploads/2026/02/freemusicforvideo-dark-ambient-soundscape-dreamscape-2-462867-1.mp3', category: 'mood' },
  { id: 'mood3', name: 'Océan calme', url: 'http://renacer21.shop/wp-content/uploads/2026/02/delosound-space-ambient-cinematic-442834.mp3', category: 'mood' },
  { id: 'mood4', name: 'Méditation zen', url: 'http://renacer21.shop/wp-content/uploads/2026/02/delosound-ambient-background-2-421085.mp3', category: 'mood' },
  { id: 'mood5', name: 'Piano relaxant', url: 'http://renacer21.shop/wp-content/uploads/2026/02/xxxdolm-dark-ambient-soundscape-dreamscape-456642.mp3', category: 'mood' },
 ];
 
 export const getDefaultTracks = () => audioLibrary.filter(t => t.category === 'default');
 export const getMoodTracks = () => audioLibrary.filter(t => t.category === 'mood');
 export const getTrackById = (id: string) => audioLibrary.find(t => t.id === id);