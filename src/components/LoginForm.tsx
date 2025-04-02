
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, ArrowRight, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      if (isRegister) {
        toast({
          title: "Account created successfully",
          description: "Welcome to the productivity platform! Please sign in.",
        });
        setIsRegister(false);
      } else {
        toast({
          title: "Login Successful",
          description: "Welcome back! Redirecting to dashboard...",
        });
        // Redirect to dashboard after successful login
        navigate("/dashboard");
      }
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-dark-light border border-dark-lighter animate-fade-up">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center gradient-text">
          {isRegister ? "Create Account" : "Welcome Back"}
        </CardTitle>
        <CardDescription className="text-center text-slate-400">
          {isRegister 
            ? "Sign up for a new account to get started" 
            : "Enter your credentials to access your dashboard"}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {isRegister && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-dark-lighter border-dark-lighter text-slate-100 focus:border-gold"
                  required={isRegister}
                />
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="youremail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-dark-lighter border-dark-lighter text-slate-100 focus:border-gold"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              {!isRegister && (
                <a href="#" className="text-xs text-gold hover:underline">
                  Forgot password?
                </a>
              )}
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-dark-lighter border-dark-lighter text-slate-100 focus:border-gold pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button 
            type="submit" 
            disabled={isLoading}
            className={cn(
              "w-full bg-gold text-dark hover:bg-gold-light", 
              isLoading && "opacity-70 cursor-not-allowed"
            )}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-dark mr-3"></div>
                <span>{isRegister ? "Creating account..." : "Logging in..."}</span>
              </div>
            ) : (
              <span className="flex items-center">
                {isRegister ? (
                  <>Create Account <UserPlus className="ml-2 h-4 w-4" /></>
                ) : (
                  <>Sign In <ArrowRight className="ml-2 h-4 w-4" /></>
                )}
              </span>
            )}
          </Button>
          
          <div className="text-center text-slate-400">
            {isRegister ? (
              <span>
                Already have an account?{" "}
                <button 
                  type="button"
                  onClick={() => setIsRegister(false)} 
                  className="text-gold hover:underline"
                >
                  Sign in
                </button>
              </span>
            ) : (
              <span>
                Don't have an account?{" "}
                <button 
                  type="button"
                  onClick={() => setIsRegister(true)} 
                  className="text-gold hover:underline"
                >
                  Create one
                </button>
              </span>
            )}
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginForm;
