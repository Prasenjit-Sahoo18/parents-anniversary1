import { useEffect, useState } from "react";

type Entry = { name: string; message: string; time: number };

const STORAGE_KEY = 'anniv_guestbook_v1';

const Guestbook = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const add = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const next = [{ name: name.trim(), message: message.trim(), time: Date.now() }, ...entries].slice(0, 50);
    setEntries(next);
    setName('');
    setMessage('');
  };

  return (
    <div className="section">
      <h2 className="title">Guestbook</h2>
      <div className="glass" style={{ marginTop: 20, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
        <form onSubmit={add} style={{ display: 'grid', gap: 8 }}>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
          <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="A short wish..." rows={3} />
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <button type="submit" style={{ padding: '8px 14px', borderRadius: 8, border: 'none', background: 'var(--accent)', color: '#111' }}>Send</button>
            <button
              type="button"
              onClick={() => {
                if (!entries.length) return;
                if (!window.confirm('Remove the most recent wish?')) return;
                setEntries(prev => prev.slice(1));
              }}
              style={{ padding: '8px 14px', borderRadius: 8, border: 'none', background: 'rgba(255,255,255,0.06)', color: 'inherit' }}
            >
              Remove Last
            </button>
          </div>
        </form>

        <div style={{ marginTop: 16, textAlign: 'left' }}>
          {entries.length === 0 && <p style={{ opacity: 0.8 }}>No wishes yet — be the first!</p>}
          {entries.map((e, i) => (
            <div key={e.time} style={{ padding: 10, borderRadius: 10, background: 'rgba(0,0,0,0.06)', marginBottom: 8 }}>
              <strong>{e.name}</strong>
              <p style={{ marginTop: 6 }}>{e.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guestbook;
