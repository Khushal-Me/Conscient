import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { toast } from "sonner";

const Settings = () => {
  const [aiAccess, setAiAccess] = useState(false);

  const handleSwitchChange = (checked: boolean) => {
    setAiAccess(checked);
    toast.success(`AI access ${checked ? 'enabled' : 'disabled'}`);
  };

  return (
    <div className="container mx-auto px-4 pt-24 min-h-screen bg-cream">
      <Card className="max-w-2xl mx-auto p-6 bg-white/50 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-deep-red mb-6">Settings</h1>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-brown">AI Access Control</h2>
            <p className="text-brown/80">Toggle AI access to your diary entries</p>
            
            <div className="flex items-center space-x-4">
              <Switch
                checked={aiAccess}
                onCheckedChange={handleSwitchChange}
                className="data-[state=checked]:bg-deep-red"
              />
              <span className="text-sm text-brown/60">
                {aiAccess ? 'Full Access' : 'No Access'}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Settings;