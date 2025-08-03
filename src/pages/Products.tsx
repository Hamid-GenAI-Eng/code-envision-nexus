import { Rocket, Zap, Brain, Database, Shield, Bot, ArrowRight, Check, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';

const products = [
  {
    id: 1,
    name: 'AI Analytics Pro',
    category: 'Analytics Platform',
    icon: Brain,
    description: 'Advanced AI-powered analytics platform for real-time business intelligence and predictive insights.',
    features: [
      'Real-time data processing',
      'Predictive analytics',
      'Custom dashboards',
      'API integrations',
      'Machine learning models',
      'Advanced reporting'
    ],
    pricing: {
      starter: { price: '$299', features: ['Up to 10K records', 'Basic analytics', 'Email support'] },
      pro: { price: '$899', features: ['Up to 100K records', 'Advanced AI', 'Priority support', 'Custom models'] },
      enterprise: { price: 'Custom', features: ['Unlimited records', 'White-label', '24/7 support', 'On-premise'] }
    },
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 2,
    name: 'SmartBot Builder',
    category: 'Conversational AI',
    icon: Bot,
    description: 'No-code platform to build intelligent chatbots with advanced NLP capabilities.',
    features: [
      'Drag-and-drop builder',
      'Natural language processing',
      'Multi-channel deployment',
      'Analytics dashboard',
      'Integration APIs',
      'Voice capabilities'
    ],
    pricing: {
      starter: { price: '$99', features: ['5 bots', 'Basic NLP', 'Web chat only'] },
      pro: { price: '$299', features: ['25 bots', 'Advanced NLP', 'Multi-channel', 'Analytics'] },
      enterprise: { price: 'Custom', features: ['Unlimited bots', 'Custom AI', 'White-label', 'SSO'] }
    },
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 3,
    name: 'Vision API Suite',
    category: 'Computer Vision',
    icon: Zap,
    description: 'Comprehensive computer vision APIs for image recognition, object detection, and analysis.',
    features: [
      'Object detection',
      'Facial recognition',
      'OCR capabilities',
      'Image classification',
      'Real-time processing',
      'Custom model training'
    ],
    pricing: {
      starter: { price: '$0.10', features: ['Per API call', '99.5% uptime', 'Standard support'] },
      pro: { price: '$0.05', features: ['Bulk pricing', '99.9% uptime', 'Priority support'] },
      enterprise: { price: 'Custom', features: ['Volume discounts', 'SLA guarantee', 'Dedicated support'] }
    },
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 4,
    name: 'DataFlow Platform',
    category: 'Data Management',
    icon: Database,
    description: 'Intelligent data pipeline platform for ETL, data warehousing, and real-time processing.',
    features: [
      'Visual pipeline builder',
      'Real-time streaming',
      'Data transformation',
      'Quality monitoring',
      'Scalable architecture',
      'Multi-source connectors'
    ],
    pricing: {
      starter: { price: '$199', features: ['10 pipelines', 'Basic transforms', 'Email alerts'] },
      pro: { price: '$599', features: ['100 pipelines', 'Advanced ML', 'Real-time monitoring'] },
      enterprise: { price: 'Custom', features: ['Unlimited pipelines', 'Custom connectors', '24/7 support'] }
    },
    image: '/api/placeholder/600/400',
    featured: false
  }
];

const testimonials = [
  {
    product: 'AI Analytics Pro',
    quote: 'This platform transformed how we understand our data. The predictive insights alone saved us millions.',
    author: 'Sarah Chen',
    company: 'TechFlow Inc',
    rating: 5
  },
  {
    product: 'SmartBot Builder',
    quote: 'Building intelligent chatbots has never been easier. Our customer satisfaction increased by 40%.',
    author: 'Mike Rodriguez',
    company: 'ServiceMax',
    rating: 5
  }
];

const Products = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Powerful AI-driven platforms and tools designed to accelerate your digital transformation 
            and unlock the full potential of your data.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most popular AI platforms trusted by thousands of businesses worldwide.
            </p>
          </div>
          
          <div className="space-y-16">
            {products.filter(product => product.featured).map((product, index) => (
              <Card key={product.id} className="overflow-hidden card-gradient border-border hover:border-primary/50 transition-all duration-300">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center mb-4">
                      <product.icon className="h-8 w-8 text-primary mr-3" />
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-foreground">
                      {product.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button variant="default" size="lg">
                        Try Free Trial
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="lg" onClick={() => navigate(`/products/${product.id}`)}>
                        View Details
                      </Button>
                    </div>
                  </div>
                  
                  <div className={`bg-secondary/30 flex items-center justify-center p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="w-full h-64 bg-gradient-neural rounded-lg flex items-center justify-center">
                      <product.icon className="h-24 w-24 text-background" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Complete Product Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our full range of AI-powered tools and platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="p-8 card-gradient border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <product.icon className="h-6 w-6 text-primary mr-2" />
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Pricing Plans</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                      <div>
                        <span className="font-medium text-foreground">Starter</span>
                        <div className="text-xs text-muted-foreground">{product.pricing.starter.features[0]}</div>
                      </div>
                      <span className="text-primary font-bold">{product.pricing.starter.price}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <div>
                        <span className="font-medium text-foreground">Pro</span>
                        <div className="text-xs text-muted-foreground">{product.pricing.pro.features[0]}</div>
                      </div>
                      <span className="text-primary font-bold">{product.pricing.pro.price}</span>
                    </div>
                  </div>
                </div>
                
                  <div className="flex gap-3">
                    <Button variant="default" size="sm" className="flex-1">
                      Get Started
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => navigate(`/products/${product.id}`)}>
                      Learn More
                    </Button>
                  </div>
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
              Customer Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our products are driving real results for businesses worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 card-gradient border-border">
                <div className="mb-4">
                  <Badge variant="outline" className="text-xs mb-3">
                    {testimonial.product}
                  </Badge>
                  <div className="flex text-primary mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Start your free trial today and experience the power of AI-driven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 glow-pulse">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;