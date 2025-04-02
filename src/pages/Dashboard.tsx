
import React from "react";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const { toast } = useToast();

  React.useEffect(() => {
    toast({
      title: "Welcome to your dashboard",
      description: "You have successfully logged in.",
    });
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      <div className="container mx-auto px-4 py-24">
        <div className="glass-card p-8 animate-fade-up">
          <h1 className="text-3xl font-bold text-gold mb-6">Welcome to Your Dashboard</h1>
          <p className="text-slate-300 mb-8">
            This is a placeholder for the dashboard content. In a real application, 
            this would display your productivity metrics, tasks, and AI-powered recommendations.
          </p>
          <div className="bg-dark-lighter rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gold-light mb-4">Your Productivity Score</h2>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-dark font-bold text-xl">
                92%
              </div>
              <div>
                <p className="text-slate-300">Great work! Your productivity is above average.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
