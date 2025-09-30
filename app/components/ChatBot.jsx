"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Zara from Zodiac Enterprise. I can help you with:\n• Product information\n• Pricing & quotes\n• Delivery details\n• Technical specifications\n\nHow can I assist you today? 🏗️",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const productKeywords = {
    'wall putty': {
      response: "Great choice! Our premium wall putty is specially formulated for GCC climate conditions. It offers:\n• Excellent water resistance\n• Superior adhesion\n• Crack resistance in high temperatures\n• Environmentally friendly\n\nWould you like pricing or technical specifications?",
      products: ['wall-putty']
    },
    'drywall': {
      response: "Our high-performance drywall panels are perfect for GCC projects! Features include:\n• Enhanced fire resistance\n• Moisture and mold resistance\n• Superior sound insulation\n• Easy installation\n\nShall I connect you with our sales team for a quote?",
      products: ['drywall']
    },
    'solar': {
      response: "Perfect for renewable energy projects! We offer:\n• Solar panel cement blocks\n• Premium solar glass panels\n• Weather-resistant mounting solutions\n• Custom sizes available\n\nAre you working on a residential or commercial project?",
      products: ['solar-blocks', 'glass-panels']
    },
    'glass': {
      response: "Our premium glass panels are ideal for solar applications! Key features:\n• High light transmittance\n• Thermal stability\n• Anti-reflective coating\n• Sandstorm resistant\n\nNeed technical specs or pricing?",
      products: ['glass-panels']
    },
    'precast': {
      response: "Our precast concrete panels offer:\n• Faster construction times\n• Superior durability\n• Excellent thermal mass\n• Custom designs available\n\nPerfect for large-scale GCC projects!",
      products: ['precast']
    },
    'cement blocks': {
      response: "We supply high-quality cement blocks including specialized solar mounting blocks. Features:\n• High compressive strength\n• Weather resistant\n• Thermal stability\n• Custom sizes\n\nWhich application are you considering?",
      products: ['solar-blocks']
    }
  };

  const commonQuestions = {
    'price': "For accurate pricing, I'll need to know:\n• Project location\n• Quantity required\n• Delivery timeline\n\nOur sales team can provide competitive quotes for Bahrain and GCC projects. Would you like me to connect you?",
    'delivery': "We deliver across all GCC countries:\n🇧🇭 Bahrain: 1-2 days\n🇸🇦 Saudi Arabia: 3-5 days\n🇦🇪 UAE: 2-4 days\n🇶🇦 Qatar: 2-3 days\n🇰🇼 Kuwait: 2-3 days\n🇴🇲 Oman: 3-4 days\n\nWhere is your project located?",
    'contact': `You can reach us at:\n📞 Phone: ${process.env.NEXT_PUBLIC_COMPANY_PHONE || '+973-XXXX-XXXX'}\n📧 Email: ${process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@zodiac.com'}\n📍 Address: Bahrain\n\nWould you like to schedule a call?`,
    'catalog': "You can view our full product catalog on our Products page. I can also email you our detailed brochure. Would you like me to send it?",
    'quote': "Perfect! To prepare your quote, I'll need:\n• Project location\n• Products needed\n• Quantities\n• Timeline\n\nOur sales team will get back to you within 2 hours!",
    'bahrain': "Great! We're based in Bahrain with quick delivery across:\n• Manama\n• Riffa\n• Muharraq\n• Isa Town\n• Hamad Town\n\nWhat products are you interested in?",
    'thank you': "You're welcome! 😊 Is there anything else I can help you with regarding our construction materials?",
    'hello': "Hello! I'm Zara from Zodiac Enterprise. How can I assist you with construction materials for your GCC project today? 🏗️"
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for product keywords
    for (const [keyword, data] of Object.entries(productKeywords)) {
      if (lowerMessage.includes(keyword)) {
        return data.response;
      }
    }

    // Check for common questions
    for (const [question, response] of Object.entries(commonQuestions)) {
      if (lowerMessage.includes(question)) {
        return response;
      }
    }

    // Default responses
    const defaultResponses = [
      "I'd be happy to help! Could you tell me more about your project requirements?",
      "That's interesting! Our sales team specializes in GCC projects. Would you like me to connect you with an expert?",
      "I understand you're looking for construction materials. Which product are you most interested in?",
      "For detailed technical specifications or custom requirements, our engineering team can assist. Shall I have them contact you?",
      "We serve all GCC countries with premium construction materials. What's your project location?"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickReplies = [
    "Product Catalog",
    "Get Quote",
    "Delivery Info",
    "Contact Sales"
  ];

  const handleQuickReply = (reply) => {
    setInputMessage(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Chat Bot Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <FaRobot size={24} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <FaRobot className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-bold">Zodiac Assistant</h3>
                <p className="text-blue-100 text-sm">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="Close chat"
            >
              <FaXmark size={18} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block max-w-[80%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <span className="text-xs opacity-70 block mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="text-left mb-4">
                <div className="inline-block bg-white border border-gray-200 rounded-2xl rounded-bl-none p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-2 rounded-full transition-colors"
                aria-label="Send message"
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;