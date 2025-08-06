import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/c7dd7279-3fad-4090-910a-6b003453a8f8.png" 
                alt="Code Envision Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Leading AI and software development company specializing in next-generation solutions that transform businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/who-we-are" className="text-muted-foreground hover:text-primary transition-colors">Who We Are</Link></li>
              <li><Link to="/why-choose-us" className="text-muted-foreground hover:text-primary transition-colors">Why Choose Us</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Custom Websites</span></li>
              <li><span className="text-muted-foreground">Mobile Applications</span></li>
              <li><span className="text-muted-foreground">AI Solutions</span></li>
              <li><span className="text-muted-foreground">Machine Learning</span></li>
              <li><span className="text-muted-foreground">Cloud Platforms</span></li>
              <li><span className="text-muted-foreground">Computer Vision</span></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info.codeenvision@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+92 326 2581522</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">College Road, Lahore</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground">Newsletter</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="flex-1 bg-background/50"
                />
                <Button size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Code Envision. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;