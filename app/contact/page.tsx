'use client';

import ContactFormGeneral from '@/components/ContactFormGeneral';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-ivoire">
            {/* Header */}
            <header className="bg-bleu-profond text-ivoire py-16 px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-montserrat font-bold mb-4">
                        Contactez-nous
                    </h1>
                    <p className="text-xl font-poppins text-ivoire/90">
                        Nous sommes là pour répondre à vos questions
                    </p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Introduction */}
                <section className="mb-12 text-center">
                    <h2 className="text-3xl font-montserrat font-bold text-bleu-profond mb-4">
                        Une question ? Parlons-en !
                    </h2>
                    <p className="text-lg font-poppins text-bleu-profond/80">
                        N'hésitez pas à nous contacter pour toute question ou demande d'information
                    </p>
                </section>

                {/* Formulaire de contact général */}
                <ContactFormGeneral />

                {/* Informations de contact */}
                <section className="mt-16 grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-2xl font-montserrat font-bold text-bleu-profond mb-4">
                            Par téléphone
                        </h3>
                        <p className="font-poppins text-bleu-profond/80 mb-4">
                            Appelez-nous pour un premier échange
                        </p>
                        <a
                            href="tel:+33XXXXXXXXX"
                            className="inline-block bg-bleu-clair hover:bg-bleu-clair/90 text-bleu-profond font-montserrat font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            +33 X XX XX XX XX
                        </a>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-2xl font-montserrat font-bold text-bleu-profond mb-4">
                            Par email
                        </h3>
                        <p className="font-poppins text-bleu-profond/80 mb-4">
                            Envoyez-nous un message directement
                        </p>
                        <a
                            href="mailto:contact@synego.fr"
                            className="inline-block bg-champagne hover:bg-champagne/90 text-bleu-profond font-montserrat font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            contact@synego.fr
                        </a>
                    </div>
                </section>

                {/* Accès rapide aux services */}
                <section className="mt-16 bg-bleu-profond text-ivoire rounded-lg p-8">
                    <h3 className="text-2xl font-montserrat font-bold mb-4 text-center">
                        Vous souhaitez réserver une prestation ?
                    </h3>
                    <p className="font-poppins text-center mb-6">
                        Découvrez nos différentes formules d'accompagnement
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="/services"
                            className="bg-bleu-clair hover:bg-bleu-clair/90 text-bleu-profond font-montserrat font-semibold py-3 px-8 rounded-lg transition-colors"
                        >
                            Voir nos services
                        </a>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-bleu-profond text-ivoire py-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="font-poppins">© 2025 Isihess Consulting - Synego. Tous droits réservés.</p>
                </div>
            </footer>
        </div>
    );
}