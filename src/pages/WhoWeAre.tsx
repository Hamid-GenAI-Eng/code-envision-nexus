import { Users, Target, Eye, Award, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const team = [
  {
    name: 'Hamid Saifullah',
    role: 'Co-Founder & CEO',
    expertise: 'AI Strategy, Business Development, Product Vision',
    bio: 'Visionary leader driving AI innovation and strategic business growth since July 2025'
  },
  {
    name: 'Ahmed Sarfaraz Tatla',
    role: 'Co-Founder & CTO',
    expertise: 'Full-Stack Development, AI Architecture, Technical Leadership',
    bio: 'Technical expert specializing in scalable AI solutions and modern software architecture since July 2025'
  }
];

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We push the boundaries of what\'s possible with AI and software development.'
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Every solution is tailored to meet our clients\' unique challenges and goals.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in code quality, security, and performance.'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Clear communication and honest partnerships in every project we undertake.'
  }
];

const WhoWeAre = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Code Envision is a forward-thinking AI and software development company 
            dedicated to creating intelligent solutions that transform businesses and shape the future.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 card-gradient border-border">
              <div className="text-center">
                <Target className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To democratize artificial intelligence and advanced software solutions, 
                  making cutting-edge technology accessible to businesses of all sizes. 
                  We believe that intelligent automation and AI-driven insights should 
                  empower every organization to achieve unprecedented growth and efficiency.
                </p>
              </div>
            </Card>

            <Card className="p-8 card-gradient border-border">
              <div className="text-center">
                <Eye className="h-16 w-16 text-accent mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be the leading force in the AI revolution, creating a world where 
                  intelligent technology seamlessly integrates with human creativity. 
                  We envision a future where our solutions enable businesses to solve 
                  complex challenges and unlock new possibilities through the power of AI.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Our Story</h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Founded in July 2025, Code Envision emerged from a powerful vision shared by 
              Hamid Saifullah and Ahmed Sarfaraz Tatla: to bridge the gap between cutting-edge 
              AI technology and practical business solutions. Our founders, combining expertise 
              in business strategy and technical innovation, recognized the transformative potential 
              of AI for modern businesses.
            </p>
            <p>
              From the beginning, we focused on creating real-world solutions that make a difference. 
              Our portfolio includes innovative platforms like Wukala-GPT for legal professionals, 
              Healwise Patient Hub for healthcare, Pulse CRM for business management, Al-nukhwa for 
              traditional medicine, and RoommatchPK for real estate - each designed to solve specific 
              industry challenges.
            </p>
            <p>
              Today, Code Envision stands as a testament to Pakistani innovation in the global tech 
              landscape. We continue to push boundaries and create solutions that empower businesses 
              across various sectors, maintaining our commitment to excellence and transformative 
              technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we approach every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, 
              software development, and business strategy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 card-gradient border-border hover:border-primary/50 transition-all duration-300 group text-center">
                <div className="w-24 h-24 bg-gradient-neural rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-background">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-accent mb-3">{member.expertise}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let's discuss how our expertise can help bring your vision to life.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 glow-pulse" onClick={() => navigate('/contact')}>
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WhoWeAre;