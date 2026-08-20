import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Sparkles } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow Solutions",
      content: "Grevya transformed our business operations with their AI-powered automation platform. We've seen a 40% increase in efficiency and significant cost savings within just six months. Their team's expertise is unmatched.",
      rating: 5,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Michael Chen",
      role: "CTO, SupplyChain Pro",
      content: "The AI solutions provided by Grevya have revolutionized our supply chain operations. Their team's expertise and dedication to our success has been outstanding. The ROI exceeded our expectations.",
      rating: 5,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Emma Williams",
      role: "Director of Operations, RetailX",
      content: "Working with Grevya was a game-changer for our company. Their innovative approach to solving complex problems and their commitment to delivering results exceeded our expectations in every way.",
      rating: 5,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      name: "David Martinez",
      role: "Founder, StartupHub",
      content: "Grevya's SaaS platform helped us scale rapidly while maintaining quality. Their support team is responsive, and the technology is robust and reliable. Highly recommended for any growing business.",
      rating: 5,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "Lisa Anderson",
      role: "VP of Technology, FinanceCore",
      content: "The AI integration Grevya developed for our financial systems has improved accuracy and reduced processing time dramatically. The implementation was seamless and the results speak for themselves.",
      rating: 5,
      gradient: "from-orange-500 to-amber-500"
    },
    {
      name: "James Wilson",
      role: "COO, LogisticsNow",
      content: "Grevya's team understood our unique challenges and delivered a custom AI solution that perfectly fit our needs. The ROI has been remarkable, and we're already planning our next project with them.",
      rating: 5,
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-100 border border-primary-200">
            <Sparkles className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">Client Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 px-2">
            What Our <span className="gradient-text-primary">Clients Say</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto px-2 leading-relaxed font-medium">
            Don't just take our word for it - hear from industry leaders we've helped transform with cutting-edge AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
            >
              {/* Gradient Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`}></div>
              
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${testimonial.gradient} shadow-lg`}>
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed text-base sm:text-lg font-medium min-h-[120px]">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-bold text-gray-900 text-lg mb-1">{testimonial.name}</p>
                  <p className="text-primary-600 text-sm sm:text-base font-semibold">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
