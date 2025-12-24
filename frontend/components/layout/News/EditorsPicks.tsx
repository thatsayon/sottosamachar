import Image from "next/image";
import { Bookmark, ChevronRight } from 'lucide-react';

const featuredArticle = {
    id: 1,
    category: 'Fashion',
    title: 'Made you look! The most memorable style moments of 2025',
    description: 'From matching couple style to a haute bump reveal, it was a year of attention-grabbing looks',
    image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/p1-860x484.jpg'
};

const leftBottomArticles = [
    {
        id: 1,
        label: 'NEW',
        labelType: 'INTERVIEW',
        title: 'The DJ who is bringing joy (and some banging tunes) to care homes',
        category: 'Culture',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg'
    },
    {
        id: 2,
        author: 'HARRY WALLOP',
        title: 'Fancy a fishy snack in 2026?',
        category: 'Food & Drink',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg'
    }
];

const rightArticles = [
    {
        id: 1,
        author: 'ROBERT CRAMPTON',
        isNew: false,
        title: 'Can you earn £80k and be working class?',
        category: 'Parenting',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg'
    },
    {
        id: 2,
        author: 'JULIA SAMUEL',
        isNew: true,
        title: 'The lonely grandparent\'s guide to Christmas — by an expert (and grandma)',
        category: 'Parenting',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg'
    },
    {
        id: 3,
        author: 'HILARY ROSE',
        isNew: false,
        title: 'I\'m really not worried about lobsters — here\'s what\'s bothering me',
        category: 'Food & Drink',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg'
    },
    {
        id: 4,
        author: 'REVIEW',
        isNew: true,
        title: 'The Housemaid — Sydney Sweeney shines in a guilty-pleasure thriller',
        category: 'Film',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg'
    }
];

export default function EditorsPicks() {
    return (
        <div className="py-8 md:py-12 border-b border-gray-200">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6 px-4 md:px-0">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
                    World
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 md:px-0">
                {/* LEFT SIDE */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Top - Featured Article */}
                    <div className="bg-white rounded group cursor-pointer flex flex-col md:flex-row gap-6">
                        <div className="flex-1 flex flex-col space-y-3">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight group-hover:underline">
                                {featuredArticle.title}
                            </h1>

                            <p className="text-gray-600 text-base leading-relaxed">
                                {featuredArticle.description}
                            </p>

                            <span className="text-sm font-medium text-gray-700">{featuredArticle.category}</span>
                        </div>

                        <div className="relative w-full md:w-1/2 h-64 md:h-80 overflow-hidden flex-shrink-0">
                            <Image
                                src={featuredArticle.image}
                                alt={featuredArticle.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {leftBottomArticles.map((article) => (
                            <div key={article.id} className="bg-white rounded group cursor-pointer flex gap-4">
                                <div className="relative w-40 h-24 flex-shrink-0 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="160px"
                                    />
                                </div>

                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {article.label && (
                                            <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold uppercase">
                                                {article.label}
                                            </span>
                                        )}
                                        {article.labelType && (
                                            <span className="text-xs font-semibold text-blue-600 uppercase">{article.labelType}</span>
                                        )}
                                        {article.author && (
                                            <span className="text-xs font-semibold text-blue-600 uppercase">{article.author}</span>
                                        )}
                                    </div>

                                    <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight group-hover:underline line-clamp-3">
                                        {article.title}
                                    </h3>

                                    <span className="text-xs text-gray-600">{article.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE - 4 Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {rightArticles.map((article) => (
                        <div key={article.id} className="bg-white rounded group cursor-pointer">
                            <div className="relative w-full h-40 mb-2.5 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-xs font-semibold text-gray-700 uppercase">{article.author}</span>
                                    {article.isNew && (
                                        <span className="px-1.5 py-0.5 bg-red-500 text-white text-xs font-bold uppercase">NEW</span>
                                    )}
                                </div>

                                <h3 className="text-sm font-bold text-gray-900 leading-tight group-hover:underline line-clamp-2">
                                    {article.title}
                                </h3>

                                <span className="text-xs text-gray-600">{article.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}