import Image from "next/image";
import { Bookmark, ChevronRight } from 'lucide-react';

const sideArticles = [
    {
        id: 1,
        category: 'Business',
        title: 'Navigating the Global Supply Chain Crisis',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg'
    },
    {
        id: 2,
        category: 'Business',
        title: 'How to Build a Sustainable Business Model',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg'
    },
    {
        id: 3,
        category: 'Business',
        title: 'The Role of Artificial Intelligence in Modern Business',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg'
    },
    {
        id: 4,
        category: 'Business',
        title: 'Understanding the Cryptocurrency Market for Business Owners',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg'
    },
    {
        id: 5,
        category: 'Business',
        title: 'Exploring the Benefits of Business Incubators and Accelerators',
        date: 'July 22, 2024',
        image: 'https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg'
    }
];

export default function TwoPartNews() {
    return (
        <div className="py-8 md:py-12 border-b border-gray-200">
            {/* Section Header */}
            <div className="flex items-center gap-2 mb-8 px-4 md:px-0">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Business News
                </h2>
                <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 md:px-0">
                {/* LEFT SIDE - Main Featured Article */}
                <div className="lg:col-span-7">
                    <div className="space-y-6">
                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight hover:underline cursor-pointer">
                            The Future of Remote Work and Its Impact on Business
                        </h1>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-medium text-gray-700">Renewable Energy</span>
                                <span className="text-sm text-gray-500">July 23, 2024</span>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                <Bookmark className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Featured Image */}
                        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
                            <Image
                                src='https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/e1-420x280.jpg'
                                alt="The Future of Remote Work and Its Impact on Business"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 60vw"
                            />
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-base leading-relaxed">
                            Great design seamlessly integrates with the user experience, making the interaction smooth and intuitive. It is not just about aesthetics; it is about functionality and usability, ensuring users can achieve their goals effortlessly.
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE - Article List */}
                <div className="lg:col-span-5">
                    <div className="space-y-6">
                        {sideArticles.map((article, index) => (
                            <div
                                key={article.id}
                                className={`flex gap-4 cursor-pointer group ${index !== sideArticles.length - 1 ? 'pb-6 border-b border-gray-200' : ''
                                    }`}
                            >
                                {/* Content */}
                                <div className="flex-1 space-y-2">
                                    <span className="text-sm font-medium text-gray-700">{article.category}</span>

                                    <h3 className="text-gray-900 font-bold text-base md:text-lg leading-tight group-hover:underline line-clamp-2">
                                        {article.title}
                                    </h3>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">{article.date}</span>
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <Bookmark className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="relative w-28 h-24 md:w-32 md:h-28 flex-shrink-0 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="128px"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}