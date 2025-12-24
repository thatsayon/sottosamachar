import React from 'react';
import { ChevronRight, Bookmark } from 'lucide-react';
import Image from 'next/image';

const MoreNewsSection = () => {
    const articles = [
        {
            id: 1,
            category: 'World',
            title: 'How Climate Change is Affecting Weather Patterns',
            date: 'July 22, 2024',
            image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg',
            sponsored: false
        },
        {
            id: 2,
            category: 'Finance',
            title: 'Understanding Credit Scores and How to Improve Them',
            date: 'July 22, 2024',
            image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg',
            sponsored: false
        },
        {
            id: 3,
            category: 'Finance',
            title: 'Financial Planning for Small Business Owners',
            date: 'July 22, 2024',
            image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg',
            sponsored: false
        },
        {
            id: 4,
            category: 'Finance',
            title: 'How to Plan for a Secure Retirement',
            date: 'July 22, 2024',
            image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg',
            sponsored: false
        },
        {
            id: 5,
            category: 'Finance',
            title: 'Analyzing the Latest Stock Market Trends',
            date: 'July 22, 2024',
            image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg',
            sponsored: false
        },
        {
            id: 6,
            category: 'Finance',
            title: 'The Impact of Interest Rates on the Economy',
            date: 'July 22, 2024',
            image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg',
            sponsored: true,
            sponsor: 'Ororin'
        },
        {
            id: 7,
            category: 'Finance',
            title: 'The Benefits of Diversifying Your Portfolio',
            date: 'July 22, 2024',
            image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg',
            sponsored: false
        },
        {
            id: 8,
            category: 'Technology',
            title: 'Advancements in Quantum Computing',
            date: 'July 22, 2024',
            image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg',
            sponsored: false
        }
    ];

    return (
        <section className="mx-auto py-12">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    More News
                    <ChevronRight className="w-6 h-6" />
                </h2>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {articles.map((article) => (
                    <article key={article.id} className="group cursor-pointer">
                        {/* Image */}
                        <div className="relative w-full h-48 mb-3 overflow-hidden rounded">
                            <Image
                                src={article.image}
                                alt={article.title}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-2">
                            {/* Category */}
                            <span className="text-xs font-semibold text-gray-700 uppercase">
                                {article.category}
                            </span>

                            {/* Title */}
                            <h3 className="text-base font-bold text-gray-900 leading-tight group-hover:underline line-clamp-2">
                                {article.title}
                            </h3>

                            {/* Footer with Date and Bookmark */}
                            <div className="flex items-center justify-between">
                                {article.sponsored ? (
                                    <div className="flex items-center gap-1 text-xs text-gray-600">
                                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                        </svg>
                                        <span>Sponsored By <span className="font-semibold text-gray-900">{article.sponsor}</span></span>
                                    </div>
                                ) : (
                                    <span className="text-xs text-gray-600">{article.date}</span>
                                )}
                                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                                    <Bookmark className="w-4 h-4 text-gray-600" />
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Show More Button */}
            <div className="flex justify-center">
                <button className="flex items-center gap-2 px-6 py-2 text-sm font-semibold text-gray-900 hover:underline transition-all">
                    Show More
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </section>
    );
};

export default MoreNewsSection;