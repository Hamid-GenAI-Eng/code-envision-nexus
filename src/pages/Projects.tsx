import { ExternalLink, Github, ArrowRight, Brain, Code, Zap, Database, Eye, Bot, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Healthcare Diagnostics',
    category: 'Healthcare AI',
    icon: Brain,
    description: 'Advanced computer vision system for medical image analysis, achieving 95% accuracy in early disease detection.',
    challenge: 'Traditional diagnostic methods were slow and prone to human error, leading to delayed treatments.',
    solution: 'Developed a deep learning model using TensorFlow and PyTorch that analyzes medical scans in real-time.',
    results: ['95% diagnostic accuracy', '70% faster diagnosis', '40% cost reduction', '1M+ scans processed'],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'React', 'AWS', 'Docker'],
    client: 'MedTech Solutions',
    duration: '8 months',
    featured: true
  },
  {
    id: 2,
    title: 'Smart Supply Chain Optimization',
    category: 'Enterprise AI',
    icon: Zap,
    description: 'Machine learning platform that optimizes inventory management and predicts demand patterns.',
    challenge: 'Client was losing millions due to inefficient inventory management and unpredictable demand.',
    solution: 'Built a comprehensive ML platform with predictive analytics and automated inventory optimization.',
    results: ['30% inventory reduction', '25% cost savings', '99.5% demand accuracy', 'Real-time optimization'],
    technologies: ['Python', 'Scikit-learn', 'Apache Kafka', 'PostgreSQL', 'Vue.js', 'Azure'],
    client: 'Global Logistics Corp',
    duration: '6 months',
    featured: true
  },
  {
    id: 3,
    title: 'Intelligent Document Processing',
    category: 'Document AI',
    icon: Eye,
    description: 'OCR and NLP system that automatically extracts and processes information from complex documents.',
    challenge: 'Manual document processing was taking weeks and was prone to errors.',
    solution: 'Developed an AI system combining OCR, NLP, and machine learning for automated document understanding.',
    results: ['90% processing time reduction', '99% accuracy rate', '500K+ documents processed', 'Zero errors'],
    technologies: ['Python', 'Tesseract', 'spaCy', 'BERT', 'FastAPI', 'MongoDB', 'React'],
    client: 'Legal Services Inc',
    duration: '4 months',
    featured: false
  },
  {
    id: 4,
    title: 'Conversational AI Assistant',
    category: 'NLP & Chatbots',
    icon: Bot,
    description: 'Advanced chatbot with natural language understanding for customer service automation.',
    challenge: 'Customer service team was overwhelmed with repetitive inquiries affecting response times.',
    solution: 'Created an intelligent chatbot using large language models and custom training data.',
    results: ['80% query resolution', '24/7 availability', '50% cost reduction', '95% satisfaction'],
    technologies: ['Python', 'OpenAI GPT', 'Rasa', 'Node.js', 'WebSocket', 'Redis', 'Angular'],
    client: 'RetailTech Solutions',
    duration: '5 months',
    featured: true
  },
  {
    id: 5,
    title: 'Real-time Fraud Detection',
    category: 'Financial AI',
    icon: Shield,
    description: 'Machine learning system that detects fraudulent transactions in real-time with high accuracy.',
    challenge: 'Traditional rule-based systems had high false positive rates and missed sophisticated fraud.',
    solution: 'Implemented ensemble machine learning models with real-time processing capabilities.',
    results: ['99.2% fraud detection', '60% false positive reduction', '$2M+ fraud prevented', 'Sub-second response'],
    technologies: ['Python', 'XGBoost', 'Apache Spark', 'Kafka', 'Cassandra', 'React', 'Kubernetes'],
    client: 'FinanceSecure Bank',
    duration: '7 months',
    featured: false
  },
  {
    id: 6,
    title: 'Smart City Traffic Management',
    category: 'IoT & AI',
    icon: Zap,
    description: 'AI-powered traffic optimization system using computer vision and IoT sensors.',
    challenge: 'City traffic congestion was causing major delays and increasing pollution levels.',
    solution: 'Developed an integrated system combining computer vision, IoT sensors, and ML for traffic optimization.',
    results: ['35% traffic reduction', '20% pollution decrease', '40% commute time savings', 'City-wide deployment'],
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'IoT Sensors', 'Time Series Analysis', 'GCP'],
    client: 'Smart City Initiative',
    duration: '12 months',
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