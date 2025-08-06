import { Rocket, Zap, Brain, Database, Shield, Bot, ArrowRight, Check, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';

const products = [
  {
    id: 1,
    name: 'Wukala-GPT',
    category: 'Legal Technology',
    icon: Brain,
    description: 'AI-powered lawyer platform that revolutionizes legal practice with intelligent case management and automated legal research.',
    features: [
      'Automated legal research',
      'Case management system',
      'Document generation',
      'Client communication portal',
      'Legal analytics',
      'Compliance tracking'
    ],
    pricing: {
      starter: { price: 'Contact', features: ['Basic legal research', 'Document templates', 'Email support'] },
      pro: { price: 'Contact', features: ['Advanced AI research', 'Case analytics', 'Priority support'] },
      enterprise: { price: 'Contact', features: ['Custom integrations', 'White-label', '24/7 support'] }
    },
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 2,
    name: 'Healwise Patient Hub',
    category: 'Healthcare Platform',
    icon: Shield,
    description: 'Comprehensive healthcare platform connecting patients with medical professionals through intelligent health management.',
    features: [
      'Patient record management',
      'Appointment scheduling',
      'Telemedicine integration',
      'Health monitoring',
      'Prescription management',
      'Medical analytics'
    ],
    pricing: {
      starter: { price: 'Contact', features: ['Basic patient management', 'Appointment booking', 'Standard support'] },
      pro: { price: 'Contact', features: ['Advanced analytics', 'Telemedicine', 'Priority support'] },
      enterprise: { price: 'Contact', features: ['Hospital integration', 'Custom features', 'Dedicated support'] }
    },
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 3,
    name: 'Pulse CRM',
    category: 'Business Management',
    icon: Database,
    description: 'Intelligent CRM platform for managing company data and operations with advanced analytics and automation.',
    features: [
      'Customer relationship management',
      'Data analytics dashboard',
      'Operations automation',
      'Sales pipeline tracking',
      'Team collaboration tools',
      'Performance insights'
    ],
    pricing: {
      starter: { price: 'Contact', features: ['Basic CRM features', 'Data management', 'Email support'] },
      pro: { price: 'Contact', features: ['Advanced analytics', 'Automation tools', 'Priority support'] },
      enterprise: { price: 'Contact', features: ['Custom integrations', 'Advanced security', '24/7 support'] }
    },
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 4,
    name: 'Al-nukhwa',
    category: 'Traditional Medicine',
    icon: Bot,
    description: 'Traditional medicine platform connecting users with authentic Desi medicine practitioners and remedies.',
    features: [
      'Practitioner directory',
      'Traditional remedy database',
      'Consultation booking',
      'Health assessment tools',
      'Community forums',
      'Educational resources'
    ],
    pricing: {
      starter: { price: 'Contact', features: ['Basic directory access', 'Simple consultations', 'Standard support'] },
      pro: { price: 'Contact', features: ['Advanced features', 'Priority listings', 'Enhanced support'] },
      enterprise: { price: 'Contact', features: ['Custom branding', 'Advanced analytics', 'Full support'] }
    },
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 5,
    name: 'RoommatchPK',
    category: 'Real Estate Platform',
    icon: Zap,
    description: 'Smart real estate platform for Pakistan, connecting property seekers with perfect matches through AI-powered recommendations.',
    features: [
      'Property matching algorithm',
      'Virtual property tours',
      'Price analysis tools',
      'Location insights',
      'Mortgage calculator',
      'Agent network'
    ],
    pricing: {
      starter: { price: 'Contact', features: ['Basic property search', 'Contact features', 'Standard support'] },
      pro: { price: 'Contact', features: ['Advanced matching', 'Premium listings', 'Priority support'] },
      enterprise: { price: 'Contact', features: ['White-label solution', 'Custom features', '24/7 support'] }
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