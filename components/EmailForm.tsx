'use client';

import { useState } from 'react';

export default function EmailForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/ressources', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
                
                // PDF download
                const pdfUrl = '/livre_blanc.pdf'; 
                const link = document.createElement('a');
                link.className = 'hidden';
                link.href = pdfUrl;
                link.download = 'Livre Blanc.pdf';
                document.body.appendChild(link);
                link.click();
                link.remove();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                required
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
                {status === 'loading' ? 'Envoi...' : 'S\'inscrire'}
            </button>
            {status === 'success' && <p className="mt-2 text-green-600">Merci pour votre inscription !</p>}
            {status === 'error' && <p className="mt-2 text-red-600">Une erreur est survenue. Veuillez réessayer.</p>}
        </form>
    );
}   