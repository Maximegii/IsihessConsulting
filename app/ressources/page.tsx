export const metadata = {
    title: "Ressources | Synego",
    description: "Inscrivez-vous avec votre email pour recevoir notre e-book gratuit.",
    keywords: [
        "Thérapies et Pratiques", "Thérapies alternatives", "Médecines douces", "Médecines complémentaires", "Acupuncture", "Ventouses", "Cupping thérapie", "Shiatsu", "Tuina", "Hypnothérapie", "Sophrologie", "EFT", "Dialogue intérieur", "Dialogue pédagogique", "Sciences de la Personnalité", "MBTI", "Ennéagramme", "Process Communication", "Archétypes", "Développement Personnel", "Coaching", "Thérapie", "Mindset", "Transformation", "Potentiel", "Confiance en soi", "Croissance personnelle", "Bien-être", "Bien-être global", "Approche holistique", "Synergie", "Harmonie", "Équilibre", "Adaptation", "Capacité d'adaptation", "Gestion d'apprentissage", "Stress", "Douleurs chroniques", "Blocages émotionnels", "Croyances limitantes", "Solitude émotionnelle", "Tensions musculaires", "Fatigue chronique", "Insomnies", "Anxiété", "Soulagement", "Relaxation", "Connaissance de soi", "Relations authentiques", "Gestion de la douleur", "Révélation du potentiel", "Synego", "Ultimate Melik"
    ]
};
import EmailForm from '@/components/EmailForm';

export default function Home() {
    return (
        <div className="min-h-screen bg-ivoire">
            {/* Header */}
            <header className="bg-bleu-profond text-ivoire py-6 px-8">
                <h1 className="text-4xl font-montserrat font-bold">
                    Synego
                </h1>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Section Title */}
                <div className="mb-8">
                    <h2 className="text-3xl font-montserrat font-bold text-bleu-profond mb-4">
                        Inscrivez-vous avec votre email pour recevoir notre e-book gratuit
                    </h2>
                </div>

                {/* Instagram Feed */}
                <section className="bg-white rounded-lg shadow-lg p-6">
                    <EmailForm />
                </section>
            </main>

        </div>
    );
}