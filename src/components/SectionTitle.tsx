interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#3D2314] mb-2">
        {title}
      </h2>
      <div className={`w-24 h-1 bg-gradient-to-r from-[#FF9933] via-[#D4AF37] to-[#C41E3A] rounded-full ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className="mt-4 text-[#3D2314]/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
