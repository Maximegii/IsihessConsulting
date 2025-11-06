'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactFormGeneral() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialiser EmailJS au chargement du composant
  useEffect(() => {
    emailjs.init('SI8GmUSlyS4lk5ngX');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('📤 Envoi du formulaire...', formData); // Debug

    try {
      const result = await emailjs.send(
        'service_jzwwehs',
        'template_l4x4k4m',
        {
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
          sujet: formData.sujet,
          message: formData.message,
        }
      );

      console.log('✅ Succès:', result); // Debug
      alert('✅ Message envoyé avec succès ! Nous vous contacterons bientôt.');

      // Réinitialiser le formulaire
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: ''
      });
    } catch (error) {
      console.error('❌ Erreur complète:', error); // Debug détaillé
      alert('❌ Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
      <h3 className="text-2xl font-montserrat font-bold text-bleu-profond mb-6">
        Contactez le thérapeute
      </h3>

      <div className="bg-bleu-diamant/30 rounded-lg p-4 mb-6">
        <p className="font-poppins text-sm text-bleu-profond">
          Vous avez une question ? Besoin d'informations ? Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block font-poppins font-medium text-bleu-profond mb-2">
            Nom *
          </label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu-clair font-poppins"
          />
        </div>

        <div>
          <label className="block font-poppins font-medium text-bleu-profond mb-2">
            Prénom *
          </label>
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu-clair font-poppins"
          />
        </div>
      </div>

      <div>
        <label className="block font-poppins font-medium text-bleu-profond mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu-clair font-poppins"
        />
      </div>

      <div>
        <label className="block font-poppins font-medium text-bleu-profond mb-2">
          Téléphone (optionnel)
        </label>
        <input
          type="tel"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu-clair font-poppins"
        />
      </div>

      <div>
        <label className="block font-poppins font-medium text-bleu-profond mb-2">
          Sujet *
        </label>
        <select
          name="sujet"
          value={formData.sujet}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu-clair font-poppins"
        >
          <option value="">Sélectionnez un sujet</option>
          <option value="Demande d'information">Demande d'information</option>
          <option value="Question sur les tarifs">Question sur les tarifs</option>
          <option value="Séminaire entreprise">Séminaire entreprise</option>
          <option value="Groupe particulier">Groupe particulier</option>
          <option value="Session individuelle">Session individuelle</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div>
        <label className="block font-poppins font-medium text-bleu-profond mb-2">
          Votre message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Décrivez votre demande..."
          className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu-clair font-poppins"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-bleu-clair hover:bg-bleu-clair/90 disabled:opacity-50 disabled:cursor-not-allowed text-ivoire font-montserrat font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>
    </form>
  );
}