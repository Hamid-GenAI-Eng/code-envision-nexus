import { Code, Brain, Zap, Database, Shield, Cloud, Smartphone, Globe, ArrowRight, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';

const services = [
  {
    id: 1,
    category: 'Web Development',
    icon: Code,
    title: 'Custom Websites',
    description: 'Responsive, SEO-optimized websites built with modern technologies and best practices.',
    features: [
      'Responsive design',
      'SEO optimization',
      'Performance optimization',
      'Content management',
      'E-commerce integration',
      'Analytics setup'
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    startingPrice: '$2,999',
    timeline: '4-8 weeks'
  },
  {
    id: 2,
    category: 'Mobile Development',
    icon: Smartphone,
    title: 'Cross-Platform Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    features: [
      'iOS & Android apps',
      'Cross-platform development',
      'Native performance',
      'App store deployment',
      'Push notifications',
      'Offline functionality'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    startingPrice: '$15,999',
    timeline: '12-20 weeks'
  },
  {
    id: 3,
    category: 'Cloud Solutions',
    icon: Cloud,
    title: 'SaaS Platforms',
    description: 'Scalable cloud-based software solutions with modern architecture and security.',
    features: [
      'Cloud-native architecture',
      'Auto-scaling infrastructure',
      'Multi-tenant design',
      'API development',
      'Database design',
      'DevOps integration'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    startingPrice: '$25,999',
    timeline: '16-24 weeks'
  },
  {
    id: 4,
    category: 'Artificial Intelligence',
    icon: Brain,
    title: 'AI Modules',
    description: 'Custom AI solutions including machine learning models and intelligent automation.',
    features: [
      'Machine learning models',
      'Predictive analytics',
      'Natural language processing',
      'Computer vision',
      'Data pipeline design',
      'Model deployment'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
    startingPrice: '$19,999',
    timeline: '10-16 weeks'
  },
  {
    id: 5,
    category: 'Machine Learning',
    icon: Database,
    title: 'ML Models',
    description: 'Advanced machine learning solutions for predictive analytics and data insights.',
    features: [
      'Custom model development',
      'Data preprocessing',
      'Feature engineering',
      'Model optimization',
      'Performance monitoring',
      'A/B testing'
    ],
    technologies: ['Python', 'R', 'Apache Spark', 'MLflow', 'Jupyter'],
    startingPrice: '$12,999',
    timeline: '8-12 weeks'
  },
  {
    id: 6,
    category: 'Deep Learning',
    icon: Zap,
    title: 'Deep Learning',
    description: 'Neural networks and deep learning solutions for complex pattern recognition.',
    features: [
      'Neural network design',
      'Transfer learning',
      'Model fine-tuning',
      'GPU optimization',
      'Distributed training',
      'Model compression'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Keras', 'CUDA', 'TensorRT'],
    startingPrice: '$22,999',
    timeline: '14-20 weeks'
  },
  {
    id: 7,
    category: 'Computer Vision',
    icon: Shield,
    title: 'Computer Vision',
    description: 'Advanced image and video analysis systems for object detection and recognition.',
    features: [
      'Object detection',
      'Image classification',
      'Facial recognition',
      'OCR systems',
      'Video analytics',
      'Real-time processing'
    ],
    technologies: ['OpenCV', 'YOLO', 'ResNet', 'CNN', 'PyTorch Vision'],
    startingPrice: '$18,999',
    timeline: '12-18 weeks'
  },
  {
    id: 8,
    category: 'Generative AI',
    icon: Globe,
    title: 'Generative AI',
    description: 'Cutting-edge generative AI solutions including LLMs and content generation systems.',
    features: [
      'Custom LLM training',
      'Content generation',
      'Chatbot development',
      'Text summarization',
      'Code generation',
      'Fine-tuning models'
    ],
    technologies: ['GPT', 'BERT', 'T5', 'Transformers', 'Hugging Face'],
    startingPrice: '$29,999',
    timeline: '16-24 weeks'
  },
  {
    id: 9,
    category: 'AI Agents',
    icon: Brain,
    title: 'LLM-Powered Agents',
    description: 'Intelligent agents and automation systems powered by large language models.',
    features: [
      'Autonomous agents',
      'Task automation',
      'Decision making systems',
      'Multi-modal capabilities',
      'Integration APIs',
      'Workflow optimization'
    ],
    technologies: ['LangChain', 'AutoGPT', 'OpenAI API', 'Vector DBs', 'RAG'],
    startingPrice: '$24,999',
    timeline: '14-20 weeks'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements and create a detailed project roadmap.'
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'Our team designs the optimal solution architecture and user experience.'
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Agile development with continuous testing and quality assurance.'
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description: 'Seamless deployment with ongoing maintenance and support.'
  }
];

const Industries = () => {
  const industries = [
    'Healthcare', 'Finance', 'E-commerce', 'Education', 'Manufacturing',
    'Real Estate', 'Transportation', 'Entertainment', 'Government', 'Non-profit'
  ];

  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-6 text-foreground">Industries We Serve</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {industries.map((industry, index) => (
          <Badge key={index} variant="outline" className="text-sm py-2 px-4">
            {industry}
          </Badge>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From custom websites to advanced AI solutions, we provide comprehensive 
            technology services that drive digital transformation and business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end technology solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="p-6 card-gradient border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <service.icon className="h-6 w-6 text-primary mr-2" />
                  <Badge variant="secondary" className="text-xs">
                    {service.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs">
                        <Check className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                    <div className="text-xs text-accent">+{service.features.length - 3} more features</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        +{service.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="border-t border-border pt-4 mt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-muted-foreground">Starting from</span>
                    <span className="text-primary font-bold">{service.startingPrice}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-muted-foreground">Timeline</span>
                    <span className="text-accent text-xs">{service.timeline}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-neural rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-background group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <Industries />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let's discuss your project requirements and create a custom solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 glow-pulse">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;