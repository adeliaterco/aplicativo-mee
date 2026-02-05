import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '@/lib/storage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsLoading(true);
    setTimeout(() => {
      login(email);
      navigate('/accueil');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm animate-fade-in">
        {/* Logo */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-serif text-foreground mb-3">
            Méthode Équilibre Émotionnel™
          </h1>
          <p className="text-text-secondary text-sm leading-relaxed">
            Accédez à votre parcours vers une relation sereine avec l'alimentation.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
              Adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="vous@exemple.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-2">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full flex items-center justify-center gap-2 mt-6"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-card border-t-transparent rounded-full animate-spin" />
            ) : (
              'Se connecter'
            )}
          </button>
        </form>

        {/* Microcopy */}
        <p className="text-center text-xs text-text-secondary mt-8 leading-relaxed">
          En vous connectant, vous accédez à votre espace personnel.
        </p>

        {/* Decorative element */}
        <div className="flex items-center justify-center mt-12 gap-2">
          <div className="w-8 h-px bg-border-subtle" />
          <span className="text-xs text-text-secondary">Accès exclusif</span>
          <div className="w-8 h-px bg-border-subtle" />
        </div>
      </div>
    </div>
  );
};

export default Login;