import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const RESUME_DATA = {
  name: "Kartikeya Nainkhwal",
  title: "Full-Stack Developer | Blockchain & DevOps Enthusiast",
  skills: ["JavaScript", "Node.js", "React", "MongoDB", "Solana", "UI/UX Design", "WebRTC", "Prisma ORM", "Next.js", "Express.js", "Tailwind CSS", "HTML", "CSS", "Git", "GitHub", "REST APIs", "AWS", "Firebase","Docker","PostgreSQL","Recoil","Redux","Monorepo"],
  experience: [
        {
        company: "Under a Professor",
        role: "Web Development Intern",
        duration: "2023 - 2024",
        description: "Assisted in developing web applications using React and Node.js. Collaborated with the design team to implement UI/UX improvements."
    },
    {
        company: "IIT Bhilai",
        role: "Hostel Representative",
        duration: "2025 - Present",
        description: "Managing hostel activities and representing student concerns."
      },
      {
        company: "IIT Bhilai",
        role: "Tps Core Member",
        duration: "2025 - Present",
        description: "Core Member of photographic club, responsible for organizing events and managing social media."
      },
      {
        company: "IIT Bhilai",
        role: "Social Media ",
        duration: "2023 - 2024",
        description: "Managed Social Media for IIT Bhilai."
      }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science",
      university: "IIT Bhilai",
      year: "2025"
    },
    {
        degree: "metric",
        school: "Shree Ram sen Secondary School",
        year: "2021",
        description: "Completed with 99% marks."
    },
    {
        degree: "Intermediate",
        school: "Shree Ram sen Secondary School",
        year: "2023",
        description: "Completed with 85% marks."
    }
  ],
  certifications: ["0-100 Full Stack Web Development Course ~100xdevs","Master Linear Data Structures ~codedamn","Master Non Linear Data Structures ~codedamn","Mastering Algorithms ~codedamn"],
  projects: [
    {
      name: "Paytm Clone",
      description: "A payment processing platform with transaction rollback functionality. Built with Node.js, React, and MongoDB."
    },
    {
      name: "Medium Blogging Clone",
      description: "A blogging platform using Node.js, React, and PostgreSQL with Prisma ORM."
    },
    {
      name: "Real-Time Messaging App",
      description: "Built with Next.js and WebRTC, featuring AI-powered chat and secure authentication."
    }
  ]
};

const SYSTEM_PROMPT = `You are a helpful assistant that answers questions about ${RESUME_DATA.name}'s professional background.
You have the following information:

Name: ${RESUME_DATA.name}
Title: ${RESUME_DATA.title}

Skills: ${RESUME_DATA.skills.join(", ")}

Work Experience:
${RESUME_DATA.experience.map(exp => `
- ${exp.company}: ${exp.role}, ${exp.duration}
  ${exp.description}`).join("\n")}

Education:
${RESUME_DATA.education.map(edu => `
- ${edu.degree}, ${edu.university}, ${edu.year}`).join("\n")}

Certifications:
${RESUME_DATA.certifications.map(cert => `
- ${cert}`).join("\n")}

Projects:
${RESUME_DATA.projects.map(proj => `
- ${proj.name}: ${proj.description}`).join("\n")}

Answer questions politely and professionally based only on this information.
If asked about something not listed here, respond with: "I don't have that information, but you can contact ${RESUME_DATA.name} directly."`;

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: `Hello! I can answer questions about ${RESUME_DATA.name}'s professional background. Try asking about skills, experience, or education.`, 
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Add user message to chat
    const userMessage = { 
      text: inputValue, 
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Call Together AI API
      const response = await axios.post(
        'https://api.together.xyz/v1/chat/completions',
        {
          model: 'mistralai/Mistral-7B-Instruct-v0.1',
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: inputValue }
          ],
          temperature: 0.7,
          max_tokens: 500
        },
        {
          headers: {
            'Authorization': "Bearer d6867f4db72a4ea9cdb171afb4c62aea1cc31ab521bef44bc60ec3f3bba03911",
            'Content-Type': 'application/json'
          }
        }
      );

      // Add AI response to chat
      const botMessage = { 
        text: response.data.choices[0].message.content, 
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { 
        text: "Sorry, I'm having trouble connecting to the server. Please try again later.", 
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 dark:bg-blue-700 text-white text-xl md:text-2xl flex items-center justify-center shadow-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-all hover:scale-105"
        aria-label="Open chat"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Container */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[calc(100vw-2rem)] max-w-sm h-[calc(100vh-8rem)] md:h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="bg-blue-600 dark:bg-blue-700 text-white p-3 md:p-4 font-bold flex justify-between items-center">
            <span>Resume Assistant</span>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-blue-200 dark:hover:text-blue-300"
                aria-label="Minimize chat"
              >
                −
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 md:p-4 overflow-y-auto bg-gray-50 dark:bg-gray-700">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 dark:bg-blue-700 text-white rounded-br-none'
                      : 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-bl-none'
                  }`}
                >
                  <div className="text-sm whitespace-pre-wrap">{message.text}</div>
                  <div className={`text-xs mt-1 text-right ${
                    message.sender === 'user' ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-3">
                <div className="max-w-[85%] bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-100 p-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-2 md:p-3 border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my resume..."
                disabled={isLoading}
                className="flex-1 p-2 text-sm md:text-base border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 dark:disabled:bg-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className={`px-3 md:px-4 py-2 rounded-r-lg ${
                  isLoading || !inputValue.trim()
                    ? 'bg-gray-300 dark:bg-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 text-white'
                }`}
              >
                Send
              </button>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
              Ask about my skills, experience, or education
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;