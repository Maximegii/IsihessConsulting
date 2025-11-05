'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  type: 'entreprise' | 'groupe' | 'individuel';
}

export default function ContactForm({ type }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    genre: '',
    dateNaissance: '',
    personneContact: '',
    entreprise: '',
    localisation: '',
    tailleGroupe: '',
    nombrePersonnes: '',
    email: '',
    telephone: '',
    objectifs: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_ou886tg',
        'template_7seujyd',
        {
          type: type,
          nom: formData.nom,
          prenom: formData.prenom,
          genre: formData.genre,
          dateNaissance: formData.dateNaissance,
          personneContact: formData.personneContact,
          entreprise: formData.entreprise,
          localisation: formData.localisation,
          tailleGroupe: formData.tailleGroupe,
          nombrePersonnes: formData.nombrePersonnes,
          email: formData.email,
          telephone: formData.telephone,
          objectifs: formData.objectifs,
        },
        'SI8GmUSlyS4lk5ngX'
      );

      alert('✅ Message envoyé avec succès ! Nous vous contacterons bientôt.');

      // Réinitialiser le formulaire
      setFormData({
        nom: '',
        prenom: '',
        genre: '',
        dateNaissance: '',
        personneContact: '',
        entreprise: '',
        localisation: '',
        tailleGroupe: '',
        nombrePersonnes: '',
        email: '',
        telephone: '',
        objectifs: ''
      });
    } catch (error) {
      console.error('Erreur:', error);
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

  const getTitle = () => {
    switch (type) {
      case 'entreprise':
        return 'Demande de devis entreprise';
      case 'groupe':
        return 'Inscription groupe';
      case 'individuel':
        return 'Demande de rendez-vous - Sessions individuelles';
      default:
        return 'Formulaire de contact';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
      <h3 className="text-2xl font-montserrat font-bold text-bleu-profond mb-6">
        {getTitle()}
      </h3>



      {/* FORMULAIRE ENTREPRISE */}
      {type === 'entreprise' ? (
        <>
          <div>
            <label className="block font-poppins font-medium text-bleu-profond mb-2">
              Personne à contacter *
            </label>
            <input
              type="text"
              name="personneContact"
              value={formData.personneContact}
              onChange={handleChange}
              required
              placeholder="Nom et prénom de la personne à contacter"
              className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu-clair font-poppins"
            />
          </div>

          <div>
            <label className="block font-poppins font-medium text-bleu-profond mb-2">
              Nom de l'entreprise *
            </label>
            <input
              type="text"
              name="entreprise"
              value={formData.entreprise}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu-clair font-poppins"
            />
          </div>

          <div>
            <label className="block font-poppins font-medium text-bleu-profond mb-2">
              Localisation *
            </label>
            <input
              type="text"
              name="localisation"
              value={formData.localisation}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu-clair font-poppins"
            />
          </div>

          <div>
            <label className="block font-poppins font-medium text-bleu-profond mb-2">
              Taille du groupe envisagée *
            </label>
            <input
              type="text"
              name="tailleGroupe"
              value={formData.tailleGroupe}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu-clair font-poppins"
            />
          </div>
        </>
      ) : (
        /* FORMULAIRE INDIVIDUEL ET GROUPE */
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
      )}

      {/* Champs spécifiques INDIVIDUEL */}
      {type === 'individuel' && (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-poppins font-medium text-bleu-profond mb-2">
                Genre *
              </label>
              <select
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu-clair font-poppins"
              >
                <option value="">Sélectionnez</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block font-poppins font-medium text-bleu-profond mb-2">
                Date de naissance *
              </label>
              <input
                type="date"
                name="dateNaissance"
                value={formData.dateNaissance}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu-clair font-poppins"
              />
            </div>
          </div>
        </>
      )}

      {/* Nombre de personnes pour GROUPE */}
      {type === 'groupe' && (
        <div>
          <label className="block font-poppins font-medium text-bleu-profond mb-2">
            Nombre de personnes *
          </label>
          <input
            type="number"
            name="nombrePersonnes"
            value={formData.nombrePersonnes}
            onChange={handleChange}
            required
            min="1"
            max="12"
            placeholder="Maximum 12 personnes"
            className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu-clair font-poppins"
          />
          <p className="text-sm text-bleu-profond/60 mt-1 font-poppins">
            Groupes limités à 10-12 participants
          </p>
        </div>
      )}

      {/* Email et Téléphone pour TOUS */}
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
          Téléphone *
        </label>
        <input
          type="tel"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu-clair font-poppins"
        />
      </div>

      {/* Objectifs pour TOUS */}
      <div>
        <label className="block font-poppins font-medium text-bleu-profond mb-2">
          Vos objectifs (optionnel)
        </label>
        <textarea
          name="objectifs"
          value={formData.objectifs}
          onChange={handleChange}
          rows={4}
          placeholder="Décrivez brièvement ce que vous souhaitez accomplir..."
          className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu-clair font-poppins"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-bleu-clair hover:bg-bleu-clair/90 disabled:opacity-50 disabled:cursor-not-allowed text-ivoire font-montserrat font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
      </button>
    </form>
  );
}