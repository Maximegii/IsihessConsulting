'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailForm() {
    const [email, setEmail] = useState('');
    const [nom, setNom] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // Initialiser EmailJS
    useEffect(() => {
        emailjs.init('CvTcHwiU7WR5gT2Gh');
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Envoyer l'email 
            await emailjs.send(
                'service_jzwwehs',
                ' template_eesuo66',
                {
                    client_nom: nom,
                    client_email: email,
                    date: new Date().toLocaleString('fr-FR'),
                }
            );

            console.log('✅ Email envoyé avec succès');
            setStatus('success');
            setEmail('');
            setNom('');

            setTimeout(() => {
                const pdfUrl = '/livre_blanc.pdf';
                const link = document.createElement('a');
                link.href = pdfUrl;
                link.download = 'Livre_Blanc_Synego.pdf';
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                console.log('✅ Téléchargement du PDF lancé');
            }, 500);

        } catch (error) {
            console.error('❌ Erreur:', error);
            setStatus('error');
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                        Votre nom et prenom
                    </label>
                    <input
                        type="text"
                        id="nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        placeholder="Nom et prénom"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Votre adresse email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="exemple@email.com"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-colors"
                >
                    {status === 'loading' ? 'Envoi en cours...' : 'Télécharger le livre blanc'}
                </button>

                {status === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-green-700 font-medium">✅ Merci pour votre inscription !</p>
                        <p className="text-green-600 text-sm mt-1">Le téléchargement devrait démarrer automatiquement.</p>
                    </div>
                )}

                {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-700 font-medium">❌ Une erreur est survenue.</p>
                        <p className="text-red-600 text-sm mt-1">Veuillez réessayer ou nous contacter directement.</p>
                    </div>
                )}
            </form>

            <p className="text-center text-sm text-gray-500 mt-4">
                Vos données sont protégées. Pas de spam, promis !
            </p>
        </div>
    );
}