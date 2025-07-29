import { Shield, Zap, Users, Trophy, Clock, Globe, Brain, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const advantages = [
  {
    icon: Brain,
    title: 'AI Expertise',
    description: 'Deep knowledge in machine learning, computer vision, and generative AI with proven track record.',
    features: ['10+ AI specialists', 'PhD-level researchers', 'Published papers', 'Industry recognition']
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Technology',
    description: 'We use the latest frameworks, tools, and methodologies to deliver state-of-the-art solutions.',
    features: ['Latest AI frameworks', 'Modern tech stack', 'Cloud-native architecture', 'Scalable solutions']
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols and compliance standards to protect your data and systems.',
    features: ['ISO 27001 compliant', 'End-to-end encryption', 'Regular security audits', 'GDPR compliance']
  },
  {
    icon: Clock,
    title: 'Agile Delivery',
    description: 'Fast, iterative development with transparent progress tracking and regular client updates.',
    features: ['2-week sprints', 'Daily standups', 'CI/CD pipelines', 'Real-time progress tracking']
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Personal account managers and 24/7 technical support for all our enterprise clients.',
    features: ['24/7 support', 'Dedicated team', 'Regular check-ins', 'Proactive monitoring']
  },
  {
    icon: Globe,
    title: 'Global Experience',
    description: 'Successfully delivered projects across 15+ countries with diverse industry expertise.',
    features: ['15+ countries', 'Multiple time zones', 'Cultural awareness', 'Local compliance']
  }
];

const differentiators = [
  {
    icon: Trophy,
    title: 'Proven Results',
    stat: '98%',
    description: 'Client satisfaction rate across all completed projects'
  },
  {
    icon: Zap,
    title: 'Fast Deployment',
    stat: '50%',
    description: 'Faster time-to-market compared to traditional development'
  },
  {
    icon: Star,
    title: 'Quality Assurance',
    stat: '99.9%',
    description: 'Uptime guarantee for all our production systems'
  },
  {
    icon: Users,
    title: 'Team Expertise',
    stat: '8+',
    description: 'Average years of experience per team member'
  }
];

const testimonials = [
  {
    quote: "Code Envision transformed our business with their AI solution. The ROI was evident within the first quarter.",
    author: "John Smith",
    company: "TechCorp Industries",
    role: "CTO"
  },
  {
    quote: "Their team's expertise in machine learning helped us solve problems we thought were impossible.",
    author: "Sarah Johnson",
    company: "InnovateLab",
    role: "Head of Innovation"
  },
  {
    quote: "Professional, reliable, and incredibly talented. Code Envision exceeded all our expectations.",
    author: "Michael Chen",
    company: "FutureSystem",
    role: "CEO"
  }
];

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Why Choose Code Envision
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We don't just build software - we create intelligent solutions that drive real business value 
            and competitive advantage in the AI-driven future.
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Our Competitive Advantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What sets us apart in the crowded technology landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-8 card-gradient border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="relative mb-6">
                  <advantage.icon className="h-12 w-12 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{advantage.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{advantage.description}</p>
                <ul className="space-y-2">
                  {advantage.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-accent flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Results That Speak
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our track record demonstrates our commitment to excellence and client success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <Card key={index} className="p-8 text-center card-gradient border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="relative mb-6">
                  <item.icon className="h-12 w-12 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've transformed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 card-gradient border-border hover:border-primary/50 transition-all duration-300">
                <div className="mb-6">
                  <div className="flex text-primary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Our Proven Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach that ensures successful project delivery every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and challenges' },
              { step: '02', title: 'Strategy', description: 'Designing the optimal solution architecture' },
              { step: '03', title: 'Development', description: 'Agile development with regular updates' },
              { step: '04', title: 'Deployment', description: 'Seamless launch and ongoing support' }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-neural rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-background group-hover:scale-110 transition-transform duration-300">
                    {phase.step}
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Experience the Code Envision Difference
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join hundreds of satisfied clients who have transformed their businesses with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 glow-pulse">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;