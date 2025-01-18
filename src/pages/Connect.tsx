import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'other';
  timestamp: Date;
}

interface SuggestedUser {
  id: string;
  name: string;
  concerns: string[];
  commonality: string;
  lastActive: string;
}

const Connect = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [suggestedUsers] = useState<SuggestedUser[]>([
    {
      id: '1',
      name: 'Sarah Mitchell',
      concerns: ['Anxiety', 'Work Stress'],
      commonality: 'Also dealing with workplace anxiety',
      lastActive: '2 mins ago'
    },
    {
      id: '2',
      name: 'James Wilson',
      concerns: ['Depression', 'Social Isolation'],
      commonality: 'Similar experiences with social anxiety',
      lastActive: '5 mins ago'
    },
    {
      id: '3',
      name: 'Emma Thompson',
      concerns: ['Family Issues', 'Stress Management'],
      commonality: 'Looking for support with family-related stress',
      lastActive: '15 mins ago'
    }
  ]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");
  };

  return (
    <div className="container mx-auto px-4 pt-24 min-h-screen bg-cream">
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-8rem)]">
        {/* Suggested Users Sidebar */}
        <div className="col-span-3">
          <Card className="h-full bg-white/50 backdrop-blur-sm">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold text-brown">People You May Connect With</h2>
            </div>
            <ScrollArea className="h-[calc(100%-4rem)]">
              <div className="p-4 space-y-3">
                {suggestedUsers.map((user) => (
                  <button
                    key={user.id}
                    className="w-full p-4 text-left rounded-lg hover:bg-beige/20 transition-colors border border-beige/30"
                  >
                    <p className="font-medium text-brown">{user.name}</p>
                    <p className="text-sm text-brown/80 mt-1">{user.commonality}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {user.concerns.map((concern, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-beige/30 rounded-full text-brown"
                        >
                          {concern}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-brown/60 mt-2">{user.lastActive}</p>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </Card>
        </div>

        {/* Main Chat Area */}
        <div className="col-span-9">
          <Card className="h-full bg-white/50 backdrop-blur-sm flex flex-col">
            {/* Chat Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-deep-red text-white'
                          : 'bg-beige text-brown'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t bg-white/30">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" className="bg-deep-red hover:bg-brown">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Connect;