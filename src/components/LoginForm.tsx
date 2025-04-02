
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
import { Eye, EyeOff, ArrowRight, UserPlus, Github, Mail, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<string | null>(null);
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

  const handleOAuthSignIn = (provider: string) => {
    setOauthLoading(provider);
    
    // Simulate OAuth authentication
    setTimeout(() => {
      setOauthLoading(null);
      toast({
        title: `${provider} Sign-in Successful`,
        description: "Welcome to the productivity platform! Redirecting to dashboard...",
      });
      navigate("/dashboard");
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
      
      <CardContent className="space-y-4">
        {/* OAuth Sign-in Options */}
        <div className="grid grid-cols-1 gap-3">
          <Button
            type="button"
            variant="outline"
            className="bg-dark-lighter border-dark-lighter text-slate-100 hover:bg-dark-lighter/70 hover:text-gold flex items-center justify-center gap-2"
            onClick={() => handleOAuthSignIn("Google")}
            disabled={oauthLoading !== null}
          >
            {oauthLoading === "Google" ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" stroke="none"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" stroke="none"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" stroke="none"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" stroke="none"/>
                <path d="M1 1h22v22H1z" fill="none" stroke="none"/>
              </svg>
            )}
            <span>Sign {isRegister ? "up" : "in"} with Google</span>
          </Button>
          
          <Button
            type="button"
            variant="outline"
            className="bg-dark-lighter border-dark-lighter text-slate-100 hover:bg-dark-lighter/70 hover:text-gold flex items-center justify-center gap-2"
            onClick={() => handleOAuthSignIn("GitHub")}
            disabled={oauthLoading !== null}
          >
            {oauthLoading === "GitHub" ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : (
              <Github className="h-5 w-5" />
            )}
            <span>Sign {isRegister ? "up" : "in"} with GitHub</span>
          </Button>
          
          <Button
            type="button"
            variant="outline"
            className="bg-dark-lighter border-dark-lighter text-slate-100 hover:bg-dark-lighter/70 hover:text-gold flex items-center justify-center gap-2"
            onClick={() => handleOAuthSignIn("Twitter")}
            disabled={oauthLoading !== null}
          >
            {oauthLoading === "Twitter" ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : (
              <Twitter className="h-5 w-5" />
            )}
            <span>Sign {isRegister ? "up" : "in"} with Twitter</span>
          </Button>
        </div>

        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-dark-lighter"></div>
          <span className="flex-shrink mx-4 text-xs text-slate-400">OR CONTINUE WITH EMAIL</span>
          <div className="flex-grow border-t border-dark-lighter"></div>
        </div>

        <form onSubmit={handleSubmit}>
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
          
          <div className="space-y-2 mt-4">
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
          
          <div className="space-y-2 mt-4">
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
        
          <div className="mt-6">
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
          </div>
        </form>
      </CardContent>
      
      <CardFooter className="flex flex-col pt-0">
        <div className="text-center text-slate-400 mt-4">
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
    </Card>
  );
};

export default LoginForm;
