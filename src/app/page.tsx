import Link from 'next/link';
import HeroBackground from '@/components/ui/hero-background';
import FlyingPencil from '@/components/ui/flying-pencil';

const features = [
  {
    emoji: '🔍',
    title: 'AI Learning Investigator',
    description: 'Finds out WHY a child is struggling and where learning breaks down.',
    color: 'bg-[#FFBE91]', // Peach
  },
  {
    emoji: '🧬',
    title: 'Learning DNA',
    description: 'Unique skill profiles. See strengths and gaps across every sub-skill.',
    color: 'bg-[#FFDDB0]', // Soft Peach
  },
  {
    emoji: '🎮',
    title: 'Learning Quest',
    description: 'Progress through fun learning worlds. Level up by showing real mastery.',
    color: 'bg-[#CFEBFF]', // Sky Blue
  },
  {
    emoji: '👩‍🏫',
    title: 'Teacher Command Center',
    description: 'See your whole classroom at a glance. Know exactly who needs help.',
    color: 'bg-[#A8D8F0]', // Darker Sky Blue
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-ivory font-body relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-peach rounded-full flex items-center justify-center text-2xl shadow-sm rotate-12">
            🧠
          </div>
          <span className="font-heading font-bold text-3xl text-charcoal tracking-tight">Pragya</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-bold text-charcoal/80">
          <Link href="#how-it-works" className="hover:text-peach-dark transition-colors">How it works</Link>
          <Link href="/student" className="hover:text-peach-dark transition-colors">Student Demo</Link>
        </div>
        <Link
          href="/teacher"
          className="px-6 py-3 bg-charcoal text-white font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          Teacher Login
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-24 md:pt-16 md:pb-36 max-w-7xl mx-auto z-10">
        <HeroBackground />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md text-charcoal font-bold text-sm rounded-full mb-6 shadow-sm border-2 border-white">
              <span className="w-2.5 h-2.5 rounded-full bg-peach-dark animate-pulse"></span>
              ASER DIYA Inspired Assessment Engine
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-charcoal leading-[1.05] mb-6 tracking-tight">
              Making Learning <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach-dark via-amber-500 to-peach relative inline-block">
                Visible
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-soft-peach-dark opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-charcoal-light max-w-2xl mb-10 font-medium leading-relaxed">
              Two children can sit in the same Class 5 row and be reading three grade levels apart. 
              <strong className="text-charcoal block mt-2">Pragya helps teachers launch every child to mastery.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/teacher"
                className="w-full sm:w-auto px-9 py-5 bg-peach text-charcoal font-black text-xl rounded-full hover:scale-105 transition-transform shadow-[0_8px_0_#E5A070] active:shadow-[0_0px_0_#E5A070] active:translate-y-2 text-center"
              >
                Start Assessing
              </Link>
              <Link
                href="/student"
                className="w-full sm:w-auto px-9 py-5 bg-white text-charcoal font-black text-xl rounded-full border-4 border-charcoal/10 hover:border-charcoal/20 transition-colors text-center"
              >
                Try Student Demo
              </Link>
            </div>
          </div>

          {/* Right Column: Animated Flying Pencil Rocket */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <FlyingPencil />
          </div>
        </div>
      </section>

      {/* Bento Box Features */}
      <section className="px-6 py-24 bg-white relative z-20 rounded-t-[3rem] md:rounded-t-[5rem] shadow-[-10px_-20px_40px_rgba(0,0,0,0.03)] border-t-8 border-soft-peach">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-charcoal mb-4">Why Pragya?</h2>
            <p className="text-lg text-charcoal-light font-medium">Assessment that actually helps teachers teach.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={`${feature.color} p-8 rounded-[2rem] border-4 border-white shadow-card hover:-translate-y-2 transition-transform duration-300 group`}
              >
                <div className="w-16 h-16 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {feature.emoji}
                </div>
                <h3 className="font-heading font-black text-2xl text-charcoal mb-3 leading-tight">{feature.title}</h3>
                <p className="text-charcoal/80 font-medium leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white px-6 py-12 text-center rounded-t-[3rem]">
        <div className="font-heading font-black text-3xl mb-4">🧠 Pragya</div>
        <p className="text-white/60 font-medium max-w-md mx-auto text-sm">
          Assessment methodology inspired by ASER DIYA framework.
          Not officially affiliated with ASER, Pratham, or NCERT.
        </p>
      </footer>
    </div>
  );
}