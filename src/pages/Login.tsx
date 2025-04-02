
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "@/components/LoginForm";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 min-h-screen flex flex-col items-center justify-center p-6 bg-dark">
        <div className="w-full max-w-md space-y-8">
          <div className="mb-8">
            <Link 
              to="/" 
              className="flex items-center text-slate-400 hover:text-gold transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          <LoginForm />
        </div>
      </div>
      
      {/* Right Side - Image & Text */}
      <div 
        className="w-full md:w-1/2 bg-cover bg-center hidden md:flex items-center justify-center relative"
        style={{ backgroundImage: "url('/lovable-uploads/ef2d403e-87aa-4295-a78a-373a30aec3f6.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/70"></div>
        <div className="relative z-10 p-12 text-center max-w-lg">
          <h2 className="text-4xl font-bold mb-6 gradient-text animate-fade-up">
            Maximize Your Productivity with AI
          </h2>
          <p className="text-slate-300 text-lg mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Join thousands of remote workers who have transformed their workflow with our AI-powered productivity platform.
          </p>
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center space-x-2">
              <div className="bg-gold rounded-full p-1 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-dark">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-300">Smart task prioritization</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-gold rounded-full p-1 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-dark">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-300">Personalized productivity insights</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-gold rounded-full p-1 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-dark">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-300">Seamless integration with your tools</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
