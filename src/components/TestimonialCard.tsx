interface Testimonial {
  name: string;
  rating: number;
  text: string;
  source: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${i < testimonial.rating ? 'text-[#FF9933]' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-[#3D2314]/80 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[#3D2314]">{testimonial.name}</span>
        <span className="text-sm text-[#FF9933] bg-[#FF9933]/10 px-2 py-1 rounded">
          {testimonial.source}
        </span>
      </div>
    </div>
  );
}
