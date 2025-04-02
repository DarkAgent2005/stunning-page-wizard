
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Clock, 
  CheckSquare, 
  BarChart4, 
  ChevronRight, 
  PlayCircle, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Show welcome toast
    toast({
      title: "Welcome to ProductiPro!",
      description: "Explore our AI-powered productivity platform designed for remote workers.",
    });
  }, []);

  return (
    <div className="bg-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center pt-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-down">
              <span className="gradient-text">AI-Powered Productivity Dashboard</span> for Remote Workers
            </h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Unlock your remote work potential with our AI-driven productivity tracking tool. Get personalized insights and boost your efficiency.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button className="button-primary w-full sm:w-auto">
                Get Started <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Link to="/login">
                <Button variant="outline" className="button-outline w-full sm:w-auto">
                  Login
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative max-w-5xl mx-auto mt-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border border-dark-lighter">
              <img 
                src="/lovable-uploads/d5fc9205-5bd8-4728-b69f-d8ccdf571703.png" 
                alt="Dashboard Preview" 
                className="w-full" 
              />
            </div>
            <div className="absolute -bottom-4 -right-4 -left-4 h-full rounded-xl bg-gradient-to-r from-gold/20 to-gold-light/20 blur-xl -z-10"></div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce-subtle">
          <a href="#features" className="text-gold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-up">Core Features Designed for Success</h2>
            <p className="text-slate-300 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Our platform offers powerful tools to help you achieve your productivity goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card p-8 transition-all duration-300 hover:shadow-glow animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Clock className="feature-icon" />
              <h3 className="text-xl font-bold mb-4">Time Tracking</h3>
              <p className="text-slate-300 mb-4">
                Automated time tracking to understand where your time goes and optimize your daily schedule.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-card p-8 transition-all duration-300 hover:shadow-glow animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <CheckSquare className="feature-icon" />
              <h3 className="text-xl font-bold mb-4">Task Management</h3>
              <p className="text-slate-300 mb-4">
                Organize and prioritize tasks with ease. Our AI helps you focus on what matters most.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="glass-card p-8 transition-all duration-300 hover:shadow-glow animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <BarChart4 className="feature-icon" />
              <h3 className="text-xl font-bold mb-4">Progress Visualization</h3>
              <p className="text-slate-300 mb-4">
                Monitor your progress and achieve your goals with intuitive charts and analytics.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="section-padding bg-dark-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-up">Transform Your Remote Work Experience</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-4">Increased Productivity</h3>
              <p className="text-slate-300">
                Get more done in less time with AI-driven insights and automation.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="text-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-2xl font-bold mb-4">Improved Focus</h3>
              <p className="text-slate-300">
                Minimize distractions and stay on track with personalized recommendations.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="text-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-2xl font-bold mb-4">Better Work-Life Balance</h3>
              <p className="text-slate-300">
                Optimize your schedule and create a harmonious work-life balance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-up">Effortless Productivity in Three Simple Steps</h2>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Step connector */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-dark-lighter -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="relative z-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-dark-lighter border-2 border-gold flex items-center justify-center mb-6 text-gold text-xl font-bold">1</div>
                  <h3 className="text-2xl font-bold mb-2">Sign Up</h3>
                  <p className="text-slate-300">
                    Create your account in seconds and start your productivity journey.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative z-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-dark-lighter border-2 border-gold flex items-center justify-center mb-6 text-gold text-xl font-bold">2</div>
                  <h3 className="text-2xl font-bold mb-2">Connect</h3>
                  <p className="text-slate-300">
                    Integrate with your favorite tools and platforms for a seamless experience.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative z-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-dark-lighter border-2 border-gold flex items-center justify-center mb-6 text-gold text-xl font-bold">3</div>
                  <h3 className="text-2xl font-bold mb-2">Optimize</h3>
                  <p className="text-slate-300">
                    Let AI boost your productivity with personalized recommendations and insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Demo Section */}
      <section className="section-padding bg-dark-light">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 animate-fade-left">
              <div className="relative">
                <div className="rounded-xl overflow-hidden border border-dark-lighter shadow-lg">
                  <img 
                    src="/lovable-uploads/80b8185a-5dc3-4a32-ac6f-647f547deec2.png" 
                    alt="App Demo" 
                    className="w-full"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-gold-light/20 blur-lg -z-10"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 animate-fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">See It in Action</h2>
              <p className="text-slate-300 mb-6">
                Watch our demo video to explore how our platform can revolutionize your remote work experience. Discover the ease of use and the power of AI-driven insights.
              </p>
              <Button className="flex items-center">
                <PlayCircle className="mr-2" /> Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-up">Don't Just Take Our Word For It</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="glass-card p-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-slate-300 mb-4">
                "This tool has transformed my remote work life! I've never been so organized and productive."
              </p>
              <div className="flex items-center">
                <div className="mr-3">
                  <div className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-gold font-bold">SJ</div>
                </div>
                <div>
                  <h4 className="font-semibold text-gold-light">Sarah J.</h4>
                  <p className="text-sm text-slate-400">Marketing Director</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="glass-card p-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-slate-300 mb-4">
                "I've never been more productive. The AI recommendations have changed how I approach my workday."
              </p>
              <div className="flex items-center">
                <div className="mr-3">
                  <div className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-gold font-bold">ML</div>
                </div>
                <div>
                  <h4 className="font-semibold text-gold-light">Mark L.</h4>
                  <p className="text-sm text-slate-400">Software Engineer</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="glass-card p-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-slate-300 mb-4">
                "The AI insights are a game-changer. I can finally see where my time goes and how to improve."
              </p>
              <div className="flex items-center">
                <div className="mr-3">
                  <div className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-gold font-bold">EK</div>
                </div>
                <div>
                  <h4 className="font-semibold text-gold-light">Emily K.</h4>
                  <p className="text-sm text-slate-400">Freelance Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-dark-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-up">Flexible Plans to Suit Your Needs</h2>
            <p className="text-slate-300 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Choose the plan that works best for you and your team
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="glass-card p-8 border border-dark-lighter transition-all duration-300 hover:border-gold/50 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <div className="mb-6">
                <span className="text-gold text-2xl font-bold">Free</span>
                <span className="text-slate-400 ml-1">forever</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Time tracking
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Basic task management
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  1 user
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </div>
            
            {/* Premium Plan */}
            <div className="glass-card p-8 border-2 border-gold relative scale-105 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 bg-gold text-dark text-xs font-bold py-1 px-3 rounded-full">POPULAR</span>
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="mb-6">
                <span className="text-gold text-2xl font-bold">$19</span>
                <span className="text-slate-400 ml-1">/ month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Everything in Free
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Advanced AI insights
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Unlimited integrations
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Team collaboration
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Up to 10 users
                </li>
              </ul>
              <Button className="w-full bg-gold text-dark hover:bg-gold-light">
                Start Free Trial
              </Button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="glass-card p-8 border border-dark-lighter transition-all duration-300 hover:border-gold/50 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-gold text-2xl font-bold">Custom</span>
                <span className="text-slate-400 ml-1">pricing</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Everything in Premium
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Custom AI models
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Dedicated support
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Unlimited users
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Support Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 mb-12 md:mb-0 animate-fade-right">
              <img 
                src="/lovable-uploads/ef579718-7afa-49d2-9b47-ab6b0043da93.png" 
                alt="Support Team" 
                className="rounded-lg shadow-lg border border-dark-lighter"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12 animate-fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">We're Here to Help</h2>
              <p className="text-slate-300 mb-6">
                Our dedicated support team is available around the clock to assist you with any questions or issues. We're committed to providing responsive and helpful support to ensure your success.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-300">
                  <div className="mr-3 text-gold">•</div>
                  24/7 email support
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="mr-3 text-gold">•</div>
                  Live chat assistance
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="mr-3 text-gold">•</div>
                  Comprehensive knowledge base
                </li>
              </ul>
              <Button className="button-primary">
                Contact Support <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-dark-light">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card p-12 rounded-xl relative overflow-hidden">
            <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-gold/20 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
              <div className="w-full md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-right">Ready to Boost Your Productivity?</h2>
                <p className="text-slate-300 animate-fade-right" style={{ animationDelay: "0.2s" }}>
                  Start your free trial today and experience the power of AI-driven productivity. Sign up now and unlock your full remote work potential!
                </p>
              </div>
              <div className="animate-fade-left">
                <Button size="lg" className="button-primary px-8 py-6 text-lg">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-dark border-t border-dark-lighter py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-gold mb-4">ProductiPro</h3>
              <p className="text-slate-400 max-w-md">
                AI-powered productivity platform for remote workers. Boost your efficiency and transform your work experience.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-gold font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-slate-400 hover:text-gold transition-colors">Features</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-gold transition-colors">Pricing</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-gold transition-colors">Integrations</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-gold transition-colors">Updates</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-gold font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-slate-400 hover:text-gold transition-colors">About</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-gold transition-colors">Blog</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-gold transition-colors">Careers</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-gold transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-gold font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-slate-400 hover:text-gold transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-gold transition-colors">Support</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-gold transition-colors">Privacy</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-gold transition-colors">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-dark-lighter pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ProductiPro. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-gold transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 5.16c-.71.32-1.45.54-2.23.63.8-.49 1.42-1.26 1.71-2.17-.75.44-1.6.77-2.49.94-.71-.76-1.73-1.24-2.86-1.24-2.17 0-3.94 1.76-3.94 3.93 0 .31.04.61.12.9-3.27-.16-6.18-1.73-8.12-4.12-.34.58-.53 1.25-.53 1.96 0 1.35.69 2.54 1.74 3.24-.64-.02-1.24-.2-1.77-.49v.05c0 1.9 1.35 3.48 3.15 3.84-.33.09-.68.14-1.03.14-.25 0-.5-.02-.75-.07.5 1.56 1.95 2.69 3.67 2.72-1.35 1.06-3.04 1.68-4.89 1.68-.32 0-.63-.02-.94-.05 1.73 1.11 3.8 1.76 6.01 1.76 7.21 0 11.16-5.97 11.16-11.16 0-.17 0-.34-.01-.51.76-.55 1.43-1.23 1.95-2.01z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-gold transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.49v-9.28H9.69v-3.63h3.12V8.41c0-3.1 1.89-4.78 4.65-4.78.94 0 1.86.07 2.8.21v3.24h-1.92c-1.5 0-1.79.71-1.79 1.76v2.31h3.59l-.47 3.63h-3.12V24h6.13c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-gold transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm5.23 17.25h-2.83c0-4.41-3.5-4.35-3.5-4.35V8.62h2.08v-2.7h-2.08V3.8h-2.81v2.12H5.93v2.7h2.16v4.28s-1.03 0-2.05-.52c-1.03-.52-1.74-1.23-1.74-3.11 0-1.88 1.28-3 1.28-3s1.2-1.32 3.53-1.32V3.8s-5.8.35-5.8 4.95 2.25 4.51 2.25 4.51 1.79 1.34 4.28 1.34v2.65zm3.47-3.35c-.2-.1-.62-.26-.76-.34 1.42-.45 2.22-1.3 2.22-2.21 0-3-4.5-2.91-4.5-2.91v2.15s2.11-.23 2.11.63c0 .86-.93.96-.93.96s-.26.09-.59.21c-.33.12-.59.27-.59.27s-1.47.64-1.47 1.91c0 1.27.99 2.07 2.69 2.07h3.02c.7 0 1.28-.57 1.28-1.28 0-.58-.4-1.07-.93-1.22-.53-.15-1.73-.53-1.92-.59-.2-.06-.32-.16-.32-.3 0-.14.12-.24.32-.3.2-.06.76-.19.97-.24.21-.06.32-.16.32-.31 0-.14-.32-.3-.32-.3z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-gold transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25zM12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
