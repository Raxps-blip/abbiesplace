
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      review: "Absolutely magical! Abbie's Place exceeded all our expectations. The cozy atmosphere and stunning views made our anniversary weekend perfect. Can't wait to return!",
      date: "November 2024"
    },
    {
      name: "Michael Chen",
      rating: 5,
      review: "The perfect escape from city life. Every detail was thoughtfully planned, from the plush towels to the crackling fireplace. The hiking trails nearby are incredible!",
      date: "October 2024"
    },
    {
      name: "Emma Rodriguez",
      rating: 5,
      review: "This place has such a warm, welcoming feel. Abbie was so helpful with local recommendations. The coffee machine made our mornings extra special. Highly recommend!",
      date: "September 2024"
    },
    {
      name: "David Thompson",
      rating: 5,
      review: "Five stars isn't enough! The kayaking was amazing, and coming back to such a comfortable, well-appointed cabin was the perfect end to each day. Thank you, Abbie!",
      date: "August 2024"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-cream-50 to-warm-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-800 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-warm-600 max-w-2xl mx-auto">
            Real experiences from real guests who've made memories at Abbie's Place
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="card-shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-warm-600">{review.date}</span>
                </div>
                
                <p className="text-warm-700 mb-6 text-lg leading-relaxed">
                  "{review.review}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-warm-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-warm-800 font-bold text-lg">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-warm-800">{review.name}</h4>
                    <p className="text-sm text-warm-600">Verified Guest</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full card-shadow">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <span className="text-2xl font-bold text-warm-800">4.9</span>
            <span className="text-warm-600">out of 5 stars</span>
            <span className="text-warm-500">•</span>
            <span className="text-warm-600">127 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
