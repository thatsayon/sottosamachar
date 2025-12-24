import Image from "next/image";
import { Bookmark, ChevronRight } from 'lucide-react';

const newsArticles = [
    {
        id: 1,
        isLive: true,
        category: 'World',
        title: 'Balancing Economic Growth and Environmental Protection',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg'
    },
    {
        id: 2,
        category: 'World',
        title: 'The Role of Education in Shaping Future Leaders',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg'
    },
    {
        id: 3,
        category: 'World',
        title: 'The Importance of Free Speech in a Digital Age',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg'
    },
    {
        id: 4,
        category: 'World',
        title: 'Challenges and Opportunities in Immigration Policy',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg'
    }
];

export default function RawListNews() {
    return (
        <div className="py-8 md:py-12 border-b border-gray-200">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6 px-4 md:px-0">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
                    World
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                </h2>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
                {newsArticles.map((article) => (
                    <div key={article.id} className="group cursor-pointer">
                        {/* Image */}
                        <div className="relative w-full h-48 md:h-56 mb-4 overflow-hidden">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                            {/* Category with Live Badge */}
                            <div className="flex items-center gap-1.5">
                                {article.isLive && (
                                    <>
                                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                        <span className="text-red-500 text-xs font-semibold">Live:</span>
                                    </>
                                )}
                                <span className="text-gray-700 text-sm font-medium">{article.category}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-gray-900 font-bold text-base md:text-lg leading-tight group-hover:underline line-clamp-2">
                                {article.title}
                            </h3>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-1">
                                <span className="text-sm text-gray-500">{article.date}</span>
                                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <Bookmark className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}