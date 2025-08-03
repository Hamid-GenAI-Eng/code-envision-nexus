import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Linkedin, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Footer from '@/components/Footer';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'hello@codeenvision.com',
    description: 'Send us an email anytime'
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: '123 Innovation Drive, Tech City, TC 12345',
    description: 'Our headquarters'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Mon-Fri: 8:00 AM - 6:00 PM',
    description: 'Weekend support available'
  }
];

const socialLinks = [
  { icon: Linkedin, name: 'LinkedIn', url: '#' },
  { icon: Github, name: 'GitHub', url: '#' },
  { icon: MessageCircle, name: 'Discord', url: '#' }
];

const offices = [
  {
    city: 'San Francisco',
    address: '123 Innovation Drive, San Francisco, CA 94105',
    phone: '+1 (555) 123-4567',
    email: 'sf@codeenvision.com'
  },
  {
    city: 'New York',
    address: '456 Tech Avenue, New York, NY 10001',
    phone: '+1 (555) 987-6543',
    email: 'ny@codeenvision.com'
  },
  {
    city: 'London',
    address: '789 Digital Street, London, UK EC2A 4NE',
    phone: '+44 20 7123 4567',
    email: 'london@codeenvision.com'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Let's discuss your project 
            and explore how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center card-gradient border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="relative mb-4">
                  <info.icon className="h-10 w-10 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{info.title}</h3>
                <p className="text-primary font-semibold mb-1">{info.details}</p>
                <p className="text-muted-foreground text-sm">{info.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 card-gradient border-border">
              <h2 className="text-3xl font-bold mb-6 text-gradient">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-apps">Mobile Apps</SelectItem>
                        <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                        <SelectItem value="saas-platforms">SaaS Platforms</SelectItem>
                        <SelectItem value="machine-learning">Machine Learning</SelectItem>
                        <SelectItem value="computer-vision">Computer Vision</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget">Project Budget</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="over-100k">Over $100,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">Project Description *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    required
                    rows={5}
                    className="mt-2"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full glow-pulse">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">Our Offices</h2>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={index} className="p-6 card-gradient border-border hover:border-primary/50 transition-all duration-300">
                      <h3 className="text-xl font-bold mb-3 text-foreground">{office.city}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{office.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{office.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{office.email}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <Card className="p-6 card-gradient border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300 group"
                    >
                      <social.icon className="h-5 w-5 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                    </a>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  Stay connected for the latest updates, insights, and tech innovations.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity. Simple websites take 4-8 weeks, while complex AI solutions can take 12-24 weeks."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive support packages including maintenance, updates, and technical assistance."
              },
              {
                question: "Can you work with our existing team?",
                answer: "Absolutely! We can integrate with your existing team or work as an independent development partner."
              },
              {
                question: "What's your pricing model?",
                answer: "We offer both fixed-price projects and flexible hourly rates, depending on your needs and project scope."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 card-gradient border-border">
                <h4 className="font-bold text-foreground mb-3">{faq.question}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 glow-pulse">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;