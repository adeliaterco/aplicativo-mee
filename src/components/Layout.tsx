import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Home, BookOpen, Heart, PenLine, Users, User, Settings, LogOut, Music } from 'lucide-react';
import { logout, getUserEmail, getAudioPlayerVisible, setAudioPlayerVisible } from '@/lib/storage';
import AudioPlayer from '@/components/AudioPlayer';

const tabs = [
  { id: 'accueil', label: 'Accueil', icon: Home, path: '/accueil' },
  { id: 'modules', label: 'Modules', icon: BookOpen, path: '/modules' },
  { id: 'checkin', label: 'Check-in', icon: Heart, path: '/checkin' },
  { id: 'journal', label: 'Journal', icon: PenLine, path: '/journal' },
  { id: 'communaute', label: 'Communauté', icon: Users, path: '/communaute' },
];

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(getAudioPlayerVisible());
  const email = getUserEmail();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const currentTab = tabs.find(tab => location.pathname.startsWith(tab.path))?.id || 'accueil';

  const toggleAudioPlayer = () => {
    const newState = !showAudioPlayer;
    setShowAudioPlayer(newState);
    setAudioPlayerVisible(newState);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-card border-b border-border-subtle flex items-center justify-between px-5 z-50">
        <h1 className="text-sm font-serif text-foreground">Équilibre Émotionnel</h1>
        <div className="flex items-center gap-2">
          <button onClick={toggleAudioPlayer} className="w-9 h-9 rounded-full bg-taupe-light flex items-center justify-center transition-colors hover:bg-taupe/20" aria-label="Audio">
            <Music className="w-4 h-4 text-text-secondary" />
          </button>
          <button onClick={() => setShowMenu(!showMenu)} className="w-9 h-9 rounded-full bg-taupe-light flex items-center justify-center transition-colors hover:bg-taupe/20" aria-label="Menu profil">
            <User className="w-4 h-4 text-text-secondary" />
          </button>
        </div>
      </header>

      {/* Audio Player */}
      {showAudioPlayer && <AudioPlayer onClose={toggleAudioPlayer} />}

      {/* Profile dropdown */}
      {showMenu && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowMenu(false)}
          />
          <div className="fixed top-14 right-4 bg-card rounded-xl shadow-lg border border-border-subtle z-50 w-56 animate-fade-in overflow-hidden">
            <div className="px-4 py-3 border-b border-border-subtle">
              <p className="text-xs text-text-secondary">Connecté(e) en tant que</p>
              <p className="text-sm text-foreground truncate">{email}</p>
            </div>
            <div className="py-1">
              <button 
                onClick={() => { setShowMenu(false); }}
                className="w-full px-4 py-3 text-left text-sm text-foreground hover:bg-muted flex items-center gap-3 transition-colors"
              >
                <User className="w-4 h-4 text-text-secondary" />
                Mon profil
              </button>
              <button 
                onClick={() => { setShowMenu(false); }}
                className="w-full px-4 py-3 text-left text-sm text-foreground hover:bg-muted flex items-center gap-3 transition-colors"
              >
                <Settings className="w-4 h-4 text-text-secondary" />
                Paramètres
              </button>
              <button 
                onClick={handleLogout}
                className="w-full px-4 py-3 text-left text-sm text-foreground hover:bg-muted flex items-center gap-3 transition-colors"
              >
                <LogOut className="w-4 h-4 text-text-secondary" />
                Déconnexion
              </button>
            </div>
          </div>
        </>
      )}

      {/* Main content */}
      <main className={`${showAudioPlayer ? 'pt-28' : 'pt-14'} pb-20`}>
        <Outlet />
      </main>

      {/* Bottom navigation */}
      <nav className="bottom-nav">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className={`bottom-nav-item ${isActive ? 'active' : ''}`}
              aria-label={tab.label}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Layout;