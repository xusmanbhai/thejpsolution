import FadeIn from "@/components/FadeIn";

const cases = [
  {
    title: "Inheritance Disputes",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663210731378/nLzKcVbaxZQWgA4ZtikVuo/cases-inheritance-V4j5ditDTQmaN2PREVGVyC.webp",
  },
  {
    title: "Clouded or Defective Title",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=500&fit=crop",
  },
  {
    title: "Pending Litigation",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663210731378/nLzKcVbaxZQWgA4ZtikVuo/cases-litigation-8BEPuvsa3SYj8Byrz85z3U.webp",
  },
  {
    title: "Distressed Properties",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663210731378/nLzKcVbaxZQWgA4ZtikVuo/cases-distressed-LMRpz9NQu8TneVoF9U6swf.webp",
  },
  {
    title: "Out-of-State Heirs",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=500&fit=crop",
  },
  {
    title: "Trustee & Fiduciary Matters",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=500&fit=crop",
  },
];

export default function TypesOfCases() {
  return (
    <section id="types-of-cases" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="container">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-gold font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">
              Types of Cases We Handle
            </p>
            <div className="w-12 h-[2px] bg-gold mx-auto mb-5" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
              Complex Matters. Practical Solutions.
            </h2>
          </div>
        </FadeIn>

        {/* Cases Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {cases.map((caseItem, index) => (
            <FadeIn key={caseItem.title} direction="up" delay={index * 100}>
              <div className="group relative overflow-hidden aspect-[3/4] cursor-pointer rounded-sm">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 lg:p-4">
                  <h3 className="font-serif text-xs sm:text-sm lg:text-[15px] font-bold text-white leading-tight text-center">
                    {caseItem.title}
                  </h3>
                </div>
                {/* Hover border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/60 transition-colors duration-300" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
