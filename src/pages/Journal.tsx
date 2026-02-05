import { useState, useEffect } from 'react';
import { getJournalEntries, saveJournalEntry, deleteJournalEntry, JournalEntry } from '@/lib/storage';
import { ChevronLeft, Check, Trash2 } from 'lucide-react';

const prompts = [
  { label: "Avant de manger", text: "Avant de manger, je ressens…" },
  { label: "Après avoir mangé", text: "Après avoir mangé, je remarque…" },
  { label: "Besoin du jour", text: "Aujourd'hui, j'ai besoin de…" },
  { label: "Ce qui m'a aidée", text: "Ce qui m'a aidée aujourd'hui…" },
  { label: "Fierté", text: "Je suis fière de…" },
];

const Journal = () => {
  const [content, setContent] = useState('');
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [saved, setSaved] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);

  useEffect(() => {
    setEntries(getJournalEntries());
  }, [saved]);

  const handleSave = () => {
    if (!content.trim()) return;
    saveJournalEntry(content.trim());
    setSaved(true);
    setTimeout(() => { setSaved(false); setContent(''); }, 2000);
  };

  const handleDelete = (id: string) => {
    deleteJournalEntry(id);
    setEntries(getJournalEntries());
    setSelectedEntry(null);
  };

  const handlePromptClick = (text: string) => {
    setContent(text + ' ');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  };

  if (selectedEntry) {
    return (
      <div className="page-container animate-fade-in">
        <button onClick={() => setSelectedEntry(null)} className="flex items-center gap-1 text-sm text-text-secondary mb-4 -ml-1">
          <ChevronLeft className="w-4 h-4" />
          Retour au journal
        </button>
        <p className="text-sm text-text-secondary capitalize mb-4">{formatDate(selectedEntry.date)}</p>
        <div className="text-foreground leading-relaxed whitespace-pre-wrap mb-6">{selectedEntry.content}</div>
        <button onClick={() => handleDelete(selectedEntry.id)} className="flex items-center gap-2 text-sm text-destructive">
          <Trash2 className="w-4 h-4" /> Supprimer cette note
        </button>
      </div>
    );
  }

  return (
    <div className="page-container animate-fade-in">
      <h1 className="text-2xl font-serif text-foreground mb-2">Journal de relation alimentaire</h1>
      <p className="text-sm text-text-secondary mb-6">Un espace pour comprendre avant de changer.</p>

      {saved ? (
        <div className="card-subtle bg-success-light text-center py-8 animate-fade-in">
          <Check className="w-8 h-8 text-success mx-auto mb-2" />
          <p className="text-success font-medium">Note enregistrée.</p>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <p className="text-xs text-text-secondary mb-2">Prompts pour vous inspirer :</p>
            <div className="flex flex-wrap gap-2">
              {prompts.map((p, i) => (
                <button key={i} onClick={() => handlePromptClick(p.text)} className="chip text-xs">{p.label}</button>
              ))}
            </div>
          </div>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Écrivez librement. Cet espace est pour vous seule." className="input-field min-h-[180px] py-4 resize-none mb-4" />
          <button onClick={handleSave} disabled={!content.trim()} className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">Sauvegarder cette note</button>
        </>
      )}

      {entries.length > 0 && (
        <div className="mt-8 pt-6 border-t border-border-subtle">
          <h2 className="text-sm font-medium text-foreground mb-4">Vos notes ({entries.length})</h2>
          <div className="space-y-3">
            {entries.slice(0, 30).map((entry) => (
              <button key={entry.id} onClick={() => setSelectedEntry(entry)} className="card-subtle w-full text-left">
                <p className="text-xs text-text-secondary mb-1 capitalize">{formatDate(entry.date)}</p>
                <p className="text-sm text-foreground line-clamp-2">{entry.content.slice(0, 80)}...</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Journal;