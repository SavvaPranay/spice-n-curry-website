interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
        {feature.icon}
      </div>
      <h3 className="text-lg font-semibold text-[#3D2314] mb-2">{feature.title}</h3>
      <p className="text-sm text-[#3D2314]/70">{feature.description}</p>
    </div>
  );
}
