import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Star, Shield, Clock, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';

const products = [
  {
    id: 1,
    name: 'AI Analytics Pro',
    category: 'Analytics Platform',
    description: 'Advanced AI-powered analytics platform for real-time business intelligence and predictive insights.',
    longDescription: 'AI Analytics Pro is our flagship analytics platform that combines cutting-edge artificial intelligence with real-time data processing capabilities. Built for enterprises that need to make data-driven decisions quickly, this platform offers unparalleled insights into your business operations, customer behavior, and market trends.',
    features: [
      'Real-time data processing up to 1M events/second',
      'Advanced predictive analytics with 95% accuracy',
      'Custom dashboard builder with 50+ widgets',
      'RESTful API integrations with 200+ services',
      'Pre-trained ML models for common use cases',
      'Advanced reporting with automated insights',
      'Multi-tenant architecture for enterprise use',
      'Real-time collaboration tools'
    ],
    benefits: [
      'Reduce decision-making time by 70%',
      'Increase operational efficiency by 45%',
      'Improve forecast accuracy by 85%',
      'Save 20+ hours per week on reporting'
    ],
    pricing: {
      starter: { price: '$299', period: '/month', features: ['Up to 10K records', 'Basic analytics', 'Email support', '5 dashboards'] },
      pro: { price: '$899', period: '/month', features: ['Up to 100K records', 'Advanced AI', 'Priority support', 'Custom models', '25 dashboards'] },
      enterprise: { price: 'Custom', period: '', features: ['Unlimited records', 'White-label', '24/7 support', 'On-premise', 'Unlimited dashboards'] }
    },
    techSpecs: [
      'Cloud-native architecture on AWS/Azure',
      'REST and GraphQL APIs',
      'Real-time streaming with Apache Kafka',
      'Machine learning with TensorFlow & PyTorch',
      'Enterprise security with SOC 2 compliance'
    ]
  },
  {
    id: 2,
    name: 'SmartBot Builder',
    category: 'Conversational AI',
    description: 'No-code platform to build intelligent chatbots with advanced NLP capabilities.',
    longDescription: 'SmartBot Builder revolutionizes how businesses create and deploy conversational AI. Our intuitive drag-and-drop interface, combined with state-of-the-art natural language processing, enables anyone to build sophisticated chatbots without coding expertise.',
    features: [
      'Visual drag-and-drop bot builder',
      'Advanced NLP with 98% intent recognition',
      'Multi-channel deployment (web, mobile, social)',
      'Real-time analytics and conversation insights',
      'Integration APIs for CRM, helpdesk, and more',
      'Voice capabilities with speech-to-text',
      'Multi-language support (50+ languages)',
      'A/B testing for conversation flows'
    ],
    benefits: [
      'Reduce customer service costs by 60%',
      'Improve response time by 90%',
      'Increase customer satisfaction by 40%',
      'Handle 80% of queries automatically'
    ],
    pricing: {
      starter: { price: '$99', period: '/month', features: ['5 bots', 'Basic NLP', 'Web chat only', '1,000 conversations'] },
      pro: { price: '$299', period: '/month', features: ['25 bots', 'Advanced NLP', 'Multi-channel', 'Analytics', '10,000 conversations'] },
      enterprise: { price: 'Custom', period: '', features: ['Unlimited bots', 'Custom AI', 'White-label', 'SSO', 'Unlimited conversations'] }
    },
    techSpecs: [
      'Microservices architecture',
      'Natural Language Understanding (NLU)',
      'WebSocket real-time communication',
      'OAuth 2.0 and SSO integration',
      'GDPR and HIPAA compliant'
    ]
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id || ''));

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/products')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
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
            onClick={() => navigate('/products')}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                {product.category}
              </Badge>
              <h1 className="text-5xl font-bold mb-6 text-gradient">
                {product.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {product.longDescription}
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="glow-pulse">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-neural rounded-lg p-12 flex items-center justify-center">
              <div className="text-background text-6xl">
                🤖
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center card-gradient">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <p className="text-muted-foreground">{benefit}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Features & Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(product.pricing).map(([plan, details]) => (
              <Card key={plan} className={`p-8 card-gradient ${plan === 'pro' ? 'border-primary' : ''}`}>
                {plan === 'pro' && (
                  <Badge className="mb-4">Most Popular</Badge>
                )}
                <h3 className="text-2xl font-bold mb-2 capitalize">{plan}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{details.price}</span>
                  <span className="text-muted-foreground">{details.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {details.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan === 'pro' ? 'default' : 'outline'} 
                  className="w-full"
                >
                  {plan === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Technical Specifications
          </h2>
          <Card className="p-8 card-gradient">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.techSpecs.map((spec, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{spec}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;