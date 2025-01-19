import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Authentication will be implemented soon");
  };

  const handleForgotPassword = () => {
    toast.info("Password reset will be implemented soon");
  };

  return (
    <div className="w-full min-h-screen bg-cream pt-24">
      <div className="max-w-md mx-auto px-4">
        <Card className="p-6 bg-white/50 backdrop-blur-sm">
          <h1 className="text-2xl font-bold text-deep-red mb-6 text-center">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
            </div>
            {isLogin && (
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-brown hover:text-deep-red text-left w-full"
              >
                Forgot Password?
              </button>
            )}
            <Button type="submit" className="w-full bg-deep-red hover:bg-brown">
              {isLogin ? "Sign In" : "Sign Up"}
            </Button>
          </form>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="mt-4 text-brown hover:text-deep-red text-sm w-full text-center"
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </Card>
      </div>
    </div>
  );
};

export default Auth;