
import React, { useEffect } from "react";
import { useSignIn, useSignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function SSOCallback() {
  const { isLoaded: signInLoaded, signIn } = useSignIn();
  const { isLoaded: signUpLoaded, signUp } = useSignUp();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!signInLoaded || !signUpLoaded) {
      return;
    }

    // Handle the redirect flow
    if (signIn?.status === "needs_first_factor") {
      // User is logged in after being redirected from OAuth
      navigate("/dashboard");
    } else if (signUp?.status === "complete") {
      // User just signed up
      navigate("/dashboard");
    } else {
      // If something went wrong
      navigate("/login");
    }
  }, [signIn, signUp, signInLoaded, signUpLoaded, navigate]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-dark">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
    </div>
  );
}
