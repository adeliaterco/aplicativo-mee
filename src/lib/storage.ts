// Local storage utilities for the app

export interface CheckIn {
  id: string;
  date: string;
  emotion: string;
  intensity: number;
  situation: string;
  text?: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  content: string;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  date: string;
}

export interface ModuleProgress {
  [moduleId: string]: boolean;
}

export interface AudioSettings {
  selectedAudioId: string | null;
  volume: number;
  isPlaying: boolean;
}

// Auth
export const isLoggedIn = (): boolean => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

export const getUserEmail = (): string | null => {
  return localStorage.getItem('userEmail');
};

export const login = (email: string): void => {
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('userEmail', email);
};

export const logout = (): void => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userEmail');
};

// Check-ins
export const getCheckIns = (): CheckIn[] => {
  const data = localStorage.getItem('checkIns');
  return data ? JSON.parse(data) : [];
};

export const saveCheckIn = (checkIn: Omit<CheckIn, 'id' | 'date'>): void => {
  const checkIns = getCheckIns();
  const newCheckIn: CheckIn = {
    ...checkIn,
    id: Date.now().toString(),
    date: new Date().toISOString(),
  };
  checkIns.unshift(newCheckIn);
  localStorage.setItem('checkIns', JSON.stringify(checkIns.slice(0, 30)));
};

// Journal
export const getJournalEntries = (): JournalEntry[] => {
  const data = localStorage.getItem('journalEntries');
  return data ? JSON.parse(data) : [];
};

export const saveJournalEntry = (content: string): void => {
  const entries = getJournalEntries();
  const newEntry: JournalEntry = {
    id: Date.now().toString(),
    date: new Date().toISOString(),
    content,
  };
  entries.unshift(newEntry);
  localStorage.setItem('journalEntries', JSON.stringify(entries));
};

// Module Progress
export const getModuleProgress = (): ModuleProgress => {
  const data = localStorage.getItem('moduleProgress');
  return data ? JSON.parse(data) : {};
};

export const markModuleComplete = (moduleId: string): void => {
  const progress = getModuleProgress();
  progress[moduleId] = true;
  localStorage.setItem('moduleProgress', JSON.stringify(progress));
};

export const getCompletedModulesCount = (): number => {
  const progress = getModuleProgress();
  return Object.values(progress).filter(Boolean).length;
};

// Comments
export const getComments = (): Comment[] => {
  const data = localStorage.getItem('comments');
  return data ? JSON.parse(data) : [];
};

export const saveComment = (postId: string, content: string): void => {
  const comments = getComments();
  const email = getUserEmail() || 'Vous';
  const newComment: Comment = {
    id: Date.now().toString(),
    postId,
    author: email.split('@')[0],
    content,
    date: new Date().toISOString(),
  };
  comments.push(newComment);
  localStorage.setItem('comments', JSON.stringify(comments));
};

// Audio settings
export const getAudioSettings = (): AudioSettings => {
  const data = localStorage.getItem('audioSettings');
  return data ? JSON.parse(data) : { selectedAudioId: 'accueil', volume: 70, isPlaying: false };
};

export const saveAudioSettings = (settings: AudioSettings): void => {
  localStorage.setItem('audioSettings', JSON.stringify(settings));
};

// Exercise of the day
export const isExerciseDoneToday = (): boolean => {
  const lastDone = localStorage.getItem('exerciseDoneDate');
  if (!lastDone) return false;
  const today = new Date().toDateString();
  return lastDone === today;
};

export const markExerciseDone = (): void => {
  localStorage.setItem('exerciseDoneDate', new Date().toDateString());
};

// Enhanced Check-in with physical/emotional hunger
export interface CheckInEnhanced {
  id: string;
  date: string;
  emotion: string;
  intensity: number;
  physicalHunger: number;
  emotionalHunger: number;
  situation: string;
  text?: string;
}

export const getCheckInsEnhanced = (): CheckInEnhanced[] => {
  const data = localStorage.getItem('checkInsEnhanced');
  return data ? JSON.parse(data) : [];
};

export const saveCheckInEnhanced = (checkIn: Omit<CheckInEnhanced, 'id' | 'date'>): void => {
  const checkIns = getCheckInsEnhanced();
  const newCheckIn: CheckInEnhanced = {
    ...checkIn,
    id: Date.now().toString(),
    date: new Date().toISOString(),
  };
  checkIns.unshift(newCheckIn);
  localStorage.setItem('checkInsEnhanced', JSON.stringify(checkIns.slice(0, 50)));
};

// Journal entry deletion
export const deleteJournalEntry = (id: string): void => {
  const entries = getJournalEntries();
  const filtered = entries.filter(e => e.id !== id);
  localStorage.setItem('journalEntries', JSON.stringify(filtered));
};

// Audio player visibility
export const getAudioPlayerVisible = (): boolean => {
  return localStorage.getItem('audioPlayerVisible') !== 'false';
};

export const setAudioPlayerVisible = (visible: boolean): void => {
  localStorage.setItem('audioPlayerVisible', visible.toString());
};