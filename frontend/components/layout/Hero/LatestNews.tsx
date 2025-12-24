import Image from 'next/image';
import { Bookmark, TrendingUp } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    isLive: true,
    category: 'World',
    title: 'Balancing Economic Growth and Environmental Protection',
    date: 'July 22, 2024'
  },
  {
    id: 2,
    category: 'Environment',
    title: 'The Role of Government Policies in Environmental Protection',
    date: 'July 22, 2024'
  },
  {
    id: 3,
    category: 'Environment',
    title: 'Protecting Endangered Species and Their Habitats',
    date: 'July 22, 2024'
  },
  {
    id: 4,
    category: 'Environment',
    title: 'Innovative Solutions for Reducing Plastic Waste',
    date: 'July 22, 2024'
  }
];

export default function LatestNewsCard() {
  return (
    <div className="col-span-2 grid grid-rows-2 gap-6 border-b border-gray-200">
      {/* Top */}
      <div className="max-w-6xl mx-auto p-6 bg-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-4">
            {/* Category Badge */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-orange-500 text-sm font-medium">Politics</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              The Role of Media in Modern Politics
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              Great design seamlessly integrates with the user experience, making the interaction smooth and intuitive. It is not just about aesthetics; it is about functionality and usability, ensuring users can achieve their goals…
            </p>

            {/* Footer - Date and Bookmark */}
            <div className="flex items-center justify-between pt-4">
              <span className="text-sm text-gray-500">July 22, 2024</span>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-[400px]">
            <Image
              src="https://foxiz.io/presspulse/wp-content/uploads/sites/2/2024/07/p1-860x484.jpg"
              alt="US Capitol Building in Washington DC"
              fill
              className="shadow-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Bottom - News List */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {newsArticles.map((article) => (
          <div key={article.id} className="bg-white p-4 rounded hover:shadow-md transition-shadow">
            <div className="space-y-3">
              {/* Category with Live Badge */}
              <div className="flex items-center gap-2">
                {article.isLive && (
                  <>
                    <TrendingUp className="w-4 h-4 text-red-500" />
                    <span className="text-red-500 text-xs font-semibold">Live:</span>
                  </>
                )}
                <span className="text-gray-700 text-xs font-medium">{article.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-bold text-sm leading-snug hover:text-orange-500 transition-colors cursor-pointer">
                {article.title}
              </h3>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-gray-500">{article.date}</span>
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