import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost:4000/${isLogin ? 'login' : 'signup'}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            navigate('/login');
        }
        navigate('/');
        const data = await response.json();
        console.log("Data: " + data);
        // Assuming the token is returned in the response
        localStorage.setItem('token', data.token);
        // Redirect or update the UI as needed
        console.log('Login successful');
    } catch (error) {
        console.error('Error:', error);
    }
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
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            {isLogin}
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
