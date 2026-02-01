'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const quickReplies = [
  'What are your hours?',
  'Where are you located?',
  'Do you deliver?',
  'Show me the menu',
  'Is the food halal?',
];

const botResponses: { [key: string]: string } = {
  'hours': `We're open:\n\n**Store Hours:**\nMon-Sun: 11:00 AM - 9:00 PM\n\n**Cafeteria Hours:**\nMon-Sat: 11:00 AM - 3:30 PM\n(Last order at 3:00 PM)\nSunday: Closed`,
  'location': `We're located at:\n\n**123 SW 107th Ave**\nMiami, FL 33174\n\n(In Holiday Plaza, near FIU)\n\nClick "Get Directions" on our Contact page for Google Maps directions!`,
  'deliver': `Yes! We offer delivery through:\n\n- **DoorDash**\n- **Uber Eats**\n\nYou can also call us at **(305) 456-6280** for pickup orders!`,
  'menu': `Our menu features authentic Indian cuisine:\n\n- **Curries**: Chicken, Goat, Mutton, Palak Paneer, Chana Masala\n- **Biryani**: Chicken, Goat, Vegetable\n- **Snacks**: Samosas, Pakoras, Papadum\n- **Breads**: Naan, Chapathi, Paratha\n- **Drinks**: Mango Lassi, Masala Chai\n- **Desserts**: Gulab Jamun, Kheer\n\nVisit our Menu page for full details and prices!`,
  'halal': `Yes! All our meat dishes are **100% Halal certified**.\n\nWe also have many **vegetarian** and **vegan** options available!`,
  'vegetarian': `Yes! We have plenty of vegetarian options:\n\n- Palak Paneer\n- Chana Masala\n- Dal Tadka\n- Veggie Curry\n- Vegetable Biryani\n- All our breads\n- Samosas (veggie)\n\nLook for the green "Veg" badge on our menu!`,
  'contact': `You can reach us at:\n\n**Phone:** (305) 456-6280\n**Address:** 123 SW 107th Ave, Miami, FL 33174\n\n**Social Media:**\n- Instagram: @spice.n.curry\n- Facebook: Spice N Curry\n\nOr use the contact form on our website!`,
  'grocery': `Our grocery store carries:\n\n- **Spices & Masalas**: Turmeric, Cumin, Garam Masala, etc.\n- **Lentils & Grains**: Basmati Rice, Dal, Atta\n- **Fresh Produce**: Cilantro, Curry Leaves, Green Chilies\n- **Frozen Foods**: Parathas, Samosas, Naan\n- **Dairy**: Fresh Paneer, Ghee, Yogurt\n- **Pickles & Chutneys**: Mango, Lime, Tamarind\n\nVisit our Grocery page to see all products!`,
  'default': `I'm here to help! You can ask me about:\n\n- Store hours\n- Location & directions\n- Menu & food items\n- Delivery options\n- Halal certification\n- Vegetarian options\n- Grocery products\n\nWhat would you like to know?`,
};

function getBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  if (message.includes('hour') || message.includes('open') || message.includes('close') || message.includes('time')) {
    return botResponses['hours'];
  }
  if (message.includes('location') || message.includes('where') || message.includes('address') || message.includes('direction')) {
    return botResponses['location'];
  }
  if (message.includes('deliver') || message.includes('doordash') || message.includes('uber')) {
    return botResponses['deliver'];
  }
  if (message.includes('menu') || message.includes('food') || message.includes('dish') || message.includes('eat') || message.includes('curry') || message.includes('biryani')) {
    return botResponses['menu'];
  }
  if (message.includes('halal')) {
    return botResponses['halal'];
  }
  if (message.includes('vegetarian') || message.includes('vegan') || message.includes('veg')) {
    return botResponses['vegetarian'];
  }
  if (message.includes('contact') || message.includes('phone') || message.includes('call') || message.includes('email')) {
    return botResponses['contact'];
  }
  if (message.includes('grocery') || message.includes('spice') || message.includes('store') || message.includes('product')) {
    return botResponses['grocery'];
  }
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return `Hello! Welcome to Spice N Curry! How can I help you today?`;
  }
  if (message.includes('thank')) {
    return `You're welcome! Is there anything else I can help you with?`;
  }

  return botResponses['default'];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! Welcome to Spice N Curry! I'm here to help you with any questions about our restaurant and grocery store. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(messageText),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-gray-700' : 'bg-gradient-to-r from-saffron to-deep-red'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-saffron to-deep-red p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🍛</span>
            </div>
            <div>
              <h3 className="font-bold">Spice N Curry Assistant</h3>
              <p className="text-sm text-white/80">We typically reply instantly</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  message.isBot
                    ? 'bg-white text-dark-brown shadow-sm'
                    : 'bg-gradient-to-r from-saffron to-deep-red text-white'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-400' : 'text-white/70'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white text-dark-brown rounded-2xl px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        <div className="px-4 py-2 bg-white border-t border-gray-100 overflow-x-auto">
          <div className="flex gap-2">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleSend(reply)}
                className="flex-shrink-0 text-xs bg-gray-100 hover:bg-saffron/20 text-gray-700 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-saffron/50 text-sm"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputValue.trim()}
              className="w-10 h-10 bg-gradient-to-r from-saffron to-deep-red text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
