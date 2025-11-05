'use client';

interface ServiceCardProps {
    title: string;
    description: string;
    price?: string;
    details?: string[];
    ctaText: string;
    ctaLink?: string;
    variant?: 'primary' | 'secondary';
}

export default function ServiceCard({
    title,
    description,
    price,
    details,
    ctaText,
    ctaLink,
    variant = 'primary'
}: ServiceCardProps) {
    const bgColor = variant === 'primary' ? 'bg-bleu-clair' : 'bg-champagne';

    return (
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-montserrat font-bold text-bleu-profond mb-4">
                {title}
            </h3>
            <p className="font-poppins text-bleu-profond/80 mb-6">
                {description}
            </p>

            {price && (
                <div className={`${bgColor} rounded-lg p-4 mb-6`}>
                    <p className="text-xl font-montserrat font-semibold text-bleu-profond">
                        {price}
                    </p>
                </div>
            )}

            {details && details.length > 0 && (
                <ul className="space-y-2 mb-6">
                    {details.map((detail, index) => (
                        <li key={index} className="flex items-start font-poppins text-sm text-bleu-profond/70">
                            <span className="text-bleu-clair mr-2">✓</span>
                            {detail}
                        </li>
                    ))}
                </ul>
            )}

            <a
                href={ctaLink}
                className={`block w-full text-center ${bgColor} hover:opacity-90 text-bleu-profond font-montserrat font-semibold py-3 px-6 rounded-lg transition-opacity`}
            >
                {ctaText}
            </a>
        </div>
    );
}