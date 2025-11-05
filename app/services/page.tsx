import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';

export default function ServicesTherapies() {
    return (
        <div className="min-h-screen bg-ivoire">
            {/* Header */}
            <header className="bg-bleu-profond text-ivoire py-16 px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-montserrat font-bold mb-4">
                        Services Thérapeutiques
                    </h1>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Introduction */}
                <section className="mb-16 text-center">
                    <h2 className="text-3xl font-montserrat font-bold text-bleu-profond mb-4">
                        Découvrez nos formules d'accompagnement
                    </h2>
                    <p className="text-lg font-poppins text-bleu-profond/80 max-w-3xl mx-auto">
                        Des séminaires pour entreprises et particuliers, ainsi que des sessions individuelles
                        pour votre développement personnel et professionnel.
                    </p>
                </section>

                {/* Sessions Individuelles */}
                <section className="mb-16">
                    <h2 className="text-3xl font-montserrat font-bold text-bleu-profond mb-8">
                        Sessions Individuelles
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <ServiceCard
                            title="Pack de 10 séances"
                            description="Un accompagnement personnalisé sur-mesure pour atteindre vos objectifs personnels et professionnels. Tarif communiqué lors de la prise de contact."
                            details={[
                                "10 séances d'accompagnement individuel",
                                "Suivi personnalisé",
                                "Flexibilité dans la planification",
                                "Prise de contact téléphonique préalable",
                                "Tarif discuté selon vos besoins"
                            ]}
                            ctaText="Prendre rendez-vous"
                            ctaLink='/contact?type=individuel'
                            variant="primary"
                        />
                        <ContactForm type="individuel" />
                    </div>
                </section>

                {/* Séminaires Groupes Particuliers */}
                <section className="mb-16">
                    <h2 className="text-3xl font-montserrat font-bold text-bleu-profond mb-8">
                        Séminaires pour Groupes de Particuliers
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <ServiceCard
                            title="Weekend de développement personnel"
                            description="Groupes de 10 à 12 personnes maximum pour un accompagnement de qualité"
                            price="1 500€ par personne / weekend"
                            details={[
                                "Logement inclus",
                                "Repas inclus",
                                "Défraiement non compris",
                                "Groupe limité à 12 participants",
                                "Ambiance conviviale et bienveillante"
                            ]}
                            ctaText="S'inscrire"
                            ctaLink='/contact?type=groupe'
                            variant="secondary"
                        />

                        <ContactForm type="groupe" />
                    </div>
                </section>

                {/* Séminaires Entreprises */}
                <section className="mb-16">
                    <h2 className="text-3xl font-montserrat font-bold text-bleu-profond mb-8">
                        Séminaires pour Entreprises
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <ServiceCard
                            title="Séminaires sur mesure"
                            description="Des programmes adaptés aux besoins spécifiques de votre entreprise. Devis personnalisé établi après étude de vos besoins."
                            details={[
                                "Séance de découverte de soi",
                                "Confiance et estime de soi",
                                "Leadership d'équipe",
                                "Exploration de soi (MBTI)",
                                "Voyage vers soi (Ennéagramme)",
                                "Adaptabilité selon vos besoins",
                                "Tarif sur devis après entretien"
                            ]}
                            ctaText="Demander un devis"
                            ctaLink="/contact?type=entreprise"
                            variant="primary"
                        />

                        <ContactForm type="entreprise" />
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-bleu-profond text-ivoire rounded-lg p-12 text-center">
                    <h2 className="text-3xl font-montserrat font-bold mb-4">
                        Prêt à commencer votre transformation ?
                    </h2>
                    <p className="text-lg font-poppins mb-8">
                        Contactez-nous pour discuter de vos besoins et trouver la formule qui vous convient
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+33XXXXXXXXX"
                            className="bg-bleu-clair hover:bg-bleu-clair/90 text-bleu-profond font-montserrat font-semibold py-3 px-8 rounded-lg transition-colors"
                        >
                            Appeler maintenant
                        </a>
                        <a
                            href="mailto:contact@synego.fr"
                            className="bg-champagne hover:bg-champagne/90 text-bleu-profond font-montserrat font-semibold py-3 px-8 rounded-lg transition-colors"
                        >
                            Envoyer un email
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}