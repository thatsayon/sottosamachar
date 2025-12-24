import Image from "next/image";
import { Bookmark } from 'lucide-react';

const newsArticles = [
    {
        id: 1,
        isLive: true,
        category: 'World',
        title: 'Balancing Economic Growth and Environmental Protection',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/p1-860x484.jpg'
    },
    {
        id: 2,
        category: 'Environment',
        title: 'The Role of Government Policies in Environmental Protection',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/p1-860x484.jpg'
    },
    {
        id: 3,
        category: 'Environment',
        title: 'Protecting Endangered Species and Their Habitats',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/p1-860x484.jpg'
    },
    {
        id: 4,
        category: 'Environment',
        title: 'Innovative Solutions for Reducing Plastic Waste',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/p1-860x484.jpg'
    }
];

const sidebarArticles = [
    {
        id: 1,
        isLive: true,
        category: 'World',
        title: 'Balancing Economic Growth and Environmental Protection',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/p1-860x484.jpg'
    },
    {
        id: 2,
        category: 'Environment',
        title: 'The Role of Government Policies in Environmental Protection',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/p1-860x484.jpg'
    },
    {
        id: 3,
        category: 'Environment',
        title: 'Protecting Endangered Species and Their Habitats',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/p1-860x484.jpg'
    },
    {
        id: 4,
        category: 'Environment',
        title: 'Innovative Solutions for Reducing Plastic Waste',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/p1-860x484.jpg'
    }
];

export default function Hero() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 border-b pb-6 lg:pb-10 border-gray-200">
            {/* LEFT — spans 2 columns on desktop */}
            <div className="lg:col-span-2 space-y-6">
                {/* Top - Featured Article */}
                <div className="bg-white p-4 md:p-6 rounded">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
                        {/* Left Column - Text Content */}
                        <div className="space-y-3 md:space-y-4">
                            {/* Category Badge */}
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                <span className="text-orange-500 text-sm font-medium">Politics</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 hover:underline cursor-pointer leading-tight">
                                The Role of Media in Modern Politics
                            </h1>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Great design seamlessly integrates with the user experience, making the interaction smooth and intuitive. It is not just about aesthetics; it is about functionality and usability, ensuring users can achieve their goals…
                            </p>

                            {/* Footer - Date and Bookmark */}
                            <div className="flex items-center justify-between pt-2">
                                <span className="text-sm text-gray-500">July 22, 2024</span>
                                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <Bookmark className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="relative w-full h-[200px] md:h-[280px]">
                            <Image
                                src="https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/p1-860x484.jpg"
                                alt="US Capitol Building in Washington DC"
                                fill
                                className="shadow-lg object-cover rounded"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom - News Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {newsArticles.map((article) => (
                        <div key={article.id} className="bg-white rounded p-4">
                            <div className="flex flex-col h-full">
                                {/* Category with Live Badge */}
                                <div className="flex items-center gap-1 mb-2">
                                    {article.isLive && (
                                        <>
                                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                            <span className="text-red-500 text-xs font-semibold">Live:</span>
                                        </>
                                    )}
                                    <span className="text-gray-700 text-xs">{article.category}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-gray-900 font-bold text-sm leading-tight hover:underline cursor-pointer line-clamp-3 mb-2 flex-grow">
                                    {article.title}
                                </h3>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-1 mt-auto">
                                    <span className="text-xs text-gray-500">{article.date}</span>
                                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                        <Bookmark className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT — spans 1 column on desktop */}
            <div className="lg:col-span-1 space-y-4">
                {sidebarArticles.map((article, index) => (
                    <div key={article.id} className="bg-white rounded">
                        <div className={`flex gap-3 p-3 ${index !== sidebarArticles.length - 1 ? 'border-b border-gray-200' : ''}`}>
                            {/* Content */}
                            <div className="flex-1 space-y-2">
                                {/* Category with Live Badge */}
                                <div className="flex items-center gap-1">
                                    {article.isLive && (
                                        <>
                                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                            <span className="text-red-500 text-xs font-semibold">Live:</span>
                                        </>
                                    )}
                                    <span className="text-gray-700 text-xs">{article.category}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-gray-900 font-bold text-sm leading-tight hover:underline cursor-pointer line-clamp-2">
                                    {article.title}
                                </h3>

                                {/* Footer */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500">{article.date}</span>
                                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                        <Bookmark className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative w-24 h-20 flex-shrink-0">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover rounded"
                                    sizes="96px"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}