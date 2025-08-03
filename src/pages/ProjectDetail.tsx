import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Globe, Code, Database, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';

const projects = [
  {
    id: 1,
    title: 'FinanceFlow - AI-Powered Financial Platform',
    category: 'FinTech',
    client: 'Global Banking Corp',
    description: 'Revolutionary financial management platform with AI-driven insights and automated investment strategies.',
    longDescription: 'FinanceFlow represents a paradigm shift in financial technology, combining sophisticated AI algorithms with intuitive user experience. This comprehensive platform serves millions of users worldwide, providing real-time financial insights, automated portfolio management, and predictive analytics that have transformed how people interact with their finances.',
    image: '/api/placeholder/800/500',
    duration: '18 months',
    teamSize: '25 developers',
    technologies: ['React', 'Node.js', 'TensorFlow', 'PostgreSQL', 'AWS', 'Docker'],
    challenges: [
      'Processing millions of transactions in real-time',
      'Implementing advanced security measures for financial data',
      'Creating AI models for investment predictions',
      'Ensuring 99.99% uptime for critical financial operations'
    ],
    solutions: [
      'Built microservices architecture for scalability',
      'Implemented multi-layer encryption and fraud detection',
      'Developed custom ML models with 94% accuracy',
      'Created redundant systems with automatic failover'
    ],
    results: [
      '40% increase in user engagement',
      '60% reduction in manual processing time',
      '$50M in automated investment returns',
      '99.99% system uptime achieved'
    ],
    features: [
      'Real-time portfolio tracking',
      'AI-powered investment recommendations',
      'Automated risk assessment',
      'Mobile-first responsive design',
      'Advanced security protocols',
      'Integration with 500+ banks'
    ]
  },
  {
    id: 2,
    title: 'MedAI - Healthcare Diagnostics System',
    category: 'HealthTech',
    client: 'Regional Medical Center',
    description: 'AI-powered diagnostic system that assists doctors in medical imaging analysis and patient diagnosis.',
    longDescription: 'MedAI revolutionizes healthcare diagnostics by leveraging deep learning and computer vision to assist medical professionals in accurate and rapid diagnosis. The system analyzes medical images, provides diagnostic suggestions, and maintains comprehensive patient records while ensuring HIPAA compliance.',
    image: '/api/placeholder/800/500',
    duration: '24 months',
    teamSize: '30 specialists',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'React', 'MongoDB', 'Azure', 'Docker'],
    challenges: [
      'Achieving medical-grade accuracy in AI diagnostics',
      'Ensuring HIPAA compliance and data security',
      'Processing high-resolution medical images',
      'Integration with existing hospital systems'
    ],
    solutions: [
      'Trained deep learning models on 1M+ medical images',
      'Implemented end-to-end encryption and audit trails',
      'Optimized image processing with GPU acceleration',
      'Built custom APIs for seamless EHR integration'
    ],
    results: [
      '96% diagnostic accuracy achieved',
      '70% reduction in diagnosis time',
      '500+ doctors using the system daily',
      'Zero security incidents in 2 years'
    ],
    features: [
      'AI-powered image analysis',
      'Real-time diagnostic suggestions',
      'Patient history management',
      'Multi-device accessibility',
      'HIPAA-compliant data handling',
      'Integration with major EHR systems'
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id || ''));

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/projects')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="outline" 
            onClick={() => navigate('/projects')}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                {project.category}
              </Badge>
              <h1 className="text-5xl font-bold mb-6 text-gradient">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {project.longDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Team Size</p>
                    <p className="font-semibold">{project.teamSize}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button size="lg" className="glow-pulse">
                  Start Similar Project
                </Button>
                <Button variant="outline" size="lg">
                  View Case Study
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-neural rounded-lg p-12 flex items-center justify-center">
              <div className="text-background text-6xl">
                💼
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Project Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 card-gradient">
              <Globe className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Client</h3>
              <p className="text-muted-foreground">{project.client}</p>
            </Card>
            <Card className="p-6 card-gradient">
              <Code className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Category</h3>
              <p className="text-muted-foreground">{project.category}</p>
            </Card>
            <Card className="p-6 card-gradient">
              <Database className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.technologies.length - 3} more
                  </Badge>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Technologies Used
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-lg py-2 px-4">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Challenges & Solutions
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 card-gradient">
              <h3 className="text-2xl font-bold mb-6 text-destructive">Challenges</h3>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card className="p-8 card-gradient">
              <h3 className="text-2xl font-bold mb-6 text-primary">Solutions</h3>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Project Results
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <Card key={index} className="p-6 text-center card-gradient">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">{index + 1}</span>
                </div>
                <p className="text-muted-foreground font-medium">{result}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;