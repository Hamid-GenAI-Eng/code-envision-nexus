import { ArrowRight, Brain, Code, Zap, Rocket, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { NeuralBackground } from '@/components/NeuralBackground';
import { ClientLogoSlider } from '@/components/ClientLogoSlider';
import { SupportChat } from '@/components/SupportChat';
import Footer from '@/components/Footer';

const services = [
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Websites, web & mobile apps tailored to your needs'
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Machine learning, computer vision, and generative AI'
  },
  {
    icon: Zap,
    title: 'SaaS Platforms',
    description: 'Cloud-based tools and scalable software solutions'
  }
];

const whyChooseUs = [
  {
    icon: Rocket,
    title: 'Cutting-Edge Technology',
    description: 'We leverage the latest in AI and software development'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security and compliance standards'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'World-class developers and AI specialists'
  }
];

const projects = [
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Real-time data processing with machine learning insights',
    tech: ['Python', 'TensorFlow', 'React', 'AWS']
  },
  {
    title: 'Smart Automation System',
    description: 'Intelligent workflow automation for enterprise clients',
    tech: ['Node.js', 'AI/ML', 'Docker', 'Kubernetes']
  },
  {
    title: 'Computer Vision Application',
    description: 'Advanced image recognition and processing solution',
    tech: ['OpenCV', 'Deep Learning', 'FastAPI', 'Vue.js']
  }
];

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <NeuralBackground />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
              Next-Generation
              <br />
              AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              We are Code Envision - pioneering the future of software development 
              with cutting-edge AI, machine learning, and intelligent automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 glow-pulse">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Slider */}
      <ClientLogoSlider />

      {/* Services Showcase */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From AI-powered applications to enterprise software solutions, 
              we deliver innovation that transforms businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 card-gradient border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="text-center">
                  <div className="relative mb-6">
                    <service.icon className="h-16 w-16 text-primary mx-auto group-hover:text-primary-glow transition-colors duration-300" />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Why Choose Code Envision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine technical excellence with innovative thinking to deliver 
              solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <item.icon className="h-12 w-12 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses transform with AI and intelligent software solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 card-gradient border-border hover:border-primary/50 transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let's discuss how our AI and software solutions can drive your business forward.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 glow-pulse">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Support Chat */}
      <SupportChat />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;