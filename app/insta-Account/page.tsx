import InstagramFeed from '@/components/InstagramFeed';

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
                        Suivez-nous sur Instagram
                    </h2>
                    <p className="text-lg font-poppins text-bleu-profond/80">
                        Découvrez nos dernières actualités et projets
                    </p>
                </div>

                {/* Instagram Feed */}
                <section className="bg-white rounded-lg shadow-lg p-6">
                    <InstagramFeed />
                </section>
            </main>

        </div>
    );
}