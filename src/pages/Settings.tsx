import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { toast } from "sonner";
const Settings = () => {
  const [aiAccess, setAiAccess] = useState([50]);
  const handleSliderChange = (value: number[]) => {
    setAiAccess(value);
    toast.success("AI access level updated");
  };
  return (
    <div className="container mx-auto px-4 pt-24 min-h-screen bg-cream">
      <Card className="max-w-2xl mx-auto p-6 bg-white/50 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-deep-red mb-6">Settings</h1>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-brown">AI Access Control</h2>
            <p className="text-brown/80">Adjust how much access AI has to your diary entries</p>
            
            <div className="space-y-6">
              <Slider
                value={aiAccess}
                onValueChange={handleSliderChange}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-brown/60">
                <span>No Access</span>
                <span>Limited Access</span>
                <span>Full Access</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Settings;