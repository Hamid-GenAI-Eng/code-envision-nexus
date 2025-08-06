import { ExternalLink, Github, ArrowRight, Brain, Code, Zap, Database, Eye, Bot, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';

const projects = [
  {
    id: 1,
    title: 'Wukala-GPT',
    category: 'Legal Technology',
    icon: Brain,
    description: 'AI-powered lawyer platform revolutionizing legal practice with intelligent case management and automated research.',
    challenge: 'Law firms struggled with time-consuming legal research and inefficient case management systems.',
    solution: 'Developed an AI-powered platform with natural language processing for legal research and automated case handling.',
    results: ['80% faster research', '60% improved efficiency', '500+ cases managed', '95% client satisfaction'],
    technologies: ['Python', 'OpenAI GPT', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    client: 'Legal Practice Solutions',
    duration: '8 months',
    featured: true
  },
  {
    id: 2,
    title: 'Healwise Patient Hub',
    category: 'Healthcare Platform',
    icon: Shield,
    description: 'Comprehensive healthcare platform connecting patients with medical professionals through intelligent health management.',
    challenge: 'Healthcare providers needed a unified platform to manage patient records and streamline consultations.',
    solution: 'Built a comprehensive platform with telemedicine capabilities, health monitoring, and patient management.',
    results: ['70% improved efficiency', '1000+ patients served', '24/7 availability', '98% user satisfaction'],
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Firebase', 'AWS', 'Redux'],
    client: 'Healthcare Network',
    duration: '10 months',
    featured: true
  },
  {
    id: 3,
    title: 'Pulse CRM',
    category: 'Business Management',
    icon: Database,
    description: 'Intelligent CRM platform for managing company data and operations with advanced analytics and automation.',
    challenge: 'Businesses needed better tools to manage customer relationships and operational data effectively.',
    solution: 'Created a comprehensive CRM with advanced analytics, automation tools, and seamless integrations.',
    results: ['50% sales increase', '90% automation', '200+ companies', 'Real-time insights'],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Elasticsearch', 'Azure', 'Docker'],
    client: 'Enterprise Solutions',
    duration: '6 months',
    featured: true
  },
  {
    id: 4,
    title: 'Al-nukhwa',
    category: 'Traditional Medicine',
    icon: Bot,
    description: 'Traditional medicine platform connecting users with authentic Desi medicine practitioners and remedies.',
    challenge: 'Limited access to traditional medicine practitioners and authentic remedies in modern healthcare.',
    solution: 'Developed a platform to bridge traditional and modern medicine with practitioner verification and remedy database.',
    results: ['300+ practitioners', '1000+ remedies', '5000+ consultations', '92% success rate'],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe', 'AWS', 'Redux'],
    client: 'Traditional Medicine Board',
    duration: '7 months',
    featured: false
  },
  {
    id: 5,
    title: 'RoommatchPK',
    category: 'Real Estate Platform',
    icon: Zap,
    description: 'Smart real estate platform for Pakistan, connecting property seekers with perfect matches through AI recommendations.',
    challenge: 'Property seekers in Pakistan faced challenges finding suitable properties with reliable information.',
    solution: 'Built an AI-powered platform with smart matching algorithms and comprehensive property analysis tools.',
    results: ['10000+ properties', '85% match accuracy', '2000+ users', '40% faster deals'],
    technologies: ['React', 'Django', 'PostgreSQL', 'Redis', 'ML Models', 'Google Maps API', 'AWS'],
    client: 'Real Estate Network',
    duration: '9 months',
    featured: false
  }
];

const categories = ['All', 'Healthcare AI', 'Enterprise AI', 'Document AI', 'NLP & Chatbots', 'Financial AI', 'IoT & AI'];

const Projects = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform with AI and intelligent software solutions. 
            Real projects, real results, real impact.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Featured Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In-depth look at our most impactful projects and the results they achieved.
            </p>
          </div>
          
          <div className="space-y-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={project.id} className="p-8 lg:p-12 card-gradient border-border hover:border-primary/50 transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <project.icon className="h-8 w-8 text-primary mr-3" />
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-foreground">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-muted-foreground text-sm mb-4">{project.challenge}</p>
                      
                      <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                      <p className="text-muted-foreground text-sm">{project.solution}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                  <div className="flex gap-4">
                    <Button variant="default" size="sm" onClick={() => navigate(`/projects/${project.id}`)}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Key Results</h4>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center p-4 bg-secondary/30 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {result.split(' ')[0]}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {result.split(' ').slice(1).join(' ')}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Client:</span>
                        <span className="text-foreground font-medium">{project.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="text-foreground font-medium">{project.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              All Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our complete portfolio of AI and software development projects.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="p-6 card-gradient border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <project.icon className="h-6 w-6 text-primary mr-2" />
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-muted-foreground">{project.client}</div>
                    <div className="text-xs text-accent">{project.duration}</div>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 glow-pulse">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;