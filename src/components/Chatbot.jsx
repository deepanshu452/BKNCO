import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hello! I am your BK&CO AI Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [threadId, setThreadId] = useState(null);
  const messagesEndRef = useRef(null);

  // Initialize or fetch thread_id from localStorage
  useEffect(() => {
    let storedId = localStorage.getItem('chatbot_thread_id');
    if (!storedId) {
      storedId = `thread_${Math.random().toString(36).substring(2, 11)}`;
      localStorage.setItem('chatbot_thread_id', storedId);
    }
    setThreadId(storedId);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setStatus('Connecting...');

    // Placeholder for bot response
    setMessages(prev => [...prev, { role: 'bot', content: '' }]);

    try {
      const response = await fetch('https://deepanshu452-bknco-ai-assistant-api.hf.space/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: input,
          thread_id: threadId
        }),
      });

      if (!response.ok) throw new Error('Failed to fetch');

      // NEW CODE: Handling standard JSON response
      const data = await response.json();
      console.log("API Response:", data);

      const botResponse = data.response || "I'm sorry, I couldn't get a response from the assistant.";

      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].content = botResponse;
        return newMessages;
      });

      //  Streaming not working as HF intrupts and toknes get flushed before reaching to frontend
      /* 
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botContent = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        console.log("Raw chunk:", chunk);
        const lines = chunk.split('\n');

        for (const line of lines) {
          console.log("Processing line:", line);
          if (line.startsWith('data: ')) {
            const dataStr = line.replace('data: ', '').trim();
            console.log("Data string:", dataStr);

            if (dataStr === '[DONE]') {
              setStatus('');
              setIsLoading(false);
              return;
            }

            try {
              const data = JSON.parse(dataStr);
              if (data.type === 'token') {
                botContent += data.content;
                setMessages(prev => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1].content = botContent;
                  return newMessages;
                });
              } else if (data.type === 'status') {
                setStatus(data.content);
              } else if (data.type === 'error') {
                botContent = data.content;
                setMessages(prev => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1].content = botContent;
                  return newMessages;
                });
              }
            } catch (e) {
              console.error("Error parsing chunk", e);
            }
          }
        }
      }
      */
    } catch (error) {
      console.error('Chat error:', error);
      setStatus('');
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].content = 'Sorry, I encountered an error connecting to the AI assistant. Please try again in a moment.';
        return newMessages;
      });
    } finally {
      setIsLoading(false);
      setStatus('');
    }
  };

  return (
    <div className="fixed bottom-[20px] right-[20px] sm:bottom-[30px] sm:right-[30px] z-[1000] font-sans antialiased">
      {/* Floating Action Button */}
      <motion.button
        className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#1a1a1a] text-white border-none cursor-pointer shadow-2xl flex items-center justify-center transition-transform"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-[75px] right-0 w-[calc(100vw-40px)] sm:w-[380px] h-[500px] sm:h-[600px] max-h-[70vh] sm:max-h-[80vh] bg-white/95 backdrop-blur-xl border border-white/30 rounded-[16px] shadow-2xl flex flex-col overflow-hidden origin-bottom-right"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="p-4 sm:p-5 bg-[#1a1a1a] text-white flex justify-between items-center">
              <div>
                <h3 className="m-0 text-[1rem] sm:text-[1.1rem] font-semibold tracking-tight">BK&CO AI Assistant</h3>
                {status && <p className="m-0 text-[0.7rem] opacity-70 animate-pulse">{status}</p>}
              </div>
              <button className="bg-transparent border-none text-white cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => setIsOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-grow p-4 sm:p-5 overflow-y-auto flex flex-col gap-[15px] scroll-smooth custom-scrollbar">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[85%] p-3 px-4 rounded-[12px] text-[0.95rem] leading-relaxed relative ${msg.role === 'user'
                    ? 'self-end bg-[#007aff] text-white rounded-br-[4px]'
                    : 'self-start bg-[#f5f5f5] text-[#333] rounded-bl-[4px]'
                    }`}
                >
                  {msg.role === 'user' ? (
                    msg.content
                  ) : (
                    <div className="markdown-content">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.content || (isLoading && index === messages.length - 1 ? '' : '')}
                      </ReactMarkdown>
                      {isLoading && index === messages.length - 1 && !msg.content && <TypingIndicator />}
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form className="p-3 sm:p-5 border-t border-black/5 flex gap-[8px] sm:gap-[10px] bg-white" onSubmit={handleSubmit}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow border border-[#e0e0e0] rounded-[24px] px-4 sm:px-5 py-2 sm:py-3 text-[0.9rem] sm:text-[0.95rem] outline-none focus:border-[#007aff] transition-colors"
                placeholder="Type your message..."
                disabled={isLoading}
              />
              <button type="submit" className="bg-[#1a1a1a] text-white border-none w-[44px] h-[44px] rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed" disabled={isLoading || !input.trim()}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.1); border-radius: 10px; }
        
        .markdown-content {
          font-size: 0.95rem;
          line-height: 1.6;
        }
        @media (max-width: 640px) {
          .markdown-content {
            font-size: 0.9rem;
          }
        }
        .markdown-content p {
          margin: 0 0 12px 0;
        }
        .markdown-content p:last-child {
          margin-bottom: 0;
        }
        .markdown-content strong {
          color: #000;
          font-weight: 700;
        }
        .markdown-content ul, .markdown-content ol {
          margin: 8px 0 12px 20px;
          padding: 0;
        }
        .markdown-content li {
          margin-bottom: 6px;
        }
        .markdown-content li:last-child {
          margin-bottom: 0;
        }
        .markdown-content h1, .markdown-content h2, .markdown-content h3 {
          margin: 16px 0 8px 0;
          font-weight: 700;
          line-height: 1.2;
        }
        .markdown-content h1 { font-size: 1.4rem; }
        .markdown-content h2 { font-size: 1.25rem; }
        .markdown-content h3 { font-size: 1.1rem; }
        .markdown-content code {
          background: rgba(0, 0, 0, 0.05);
          padding: 2px 4px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.9em;
        }
        .markdown-content pre {
          background: #f8f8f8;
          padding: 12px;
          border-radius: 8px;
          overflow-x: auto;
          margin: 12px 0;
        }
        .markdown-content blockquote {
          border-left: 4px solid #007aff;
          margin: 12px 0;
          padding: 4px 0 4px 16px;
          color: #666;
          font-style: italic;
        }
        .markdown-content table {
          border-collapse: collapse;
          width: 100%;
          margin: 12px 0;
        }
        .markdown-content th, .markdown-content td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        .markdown-content th {
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
};

const TypingIndicator = () => (
  <div className="flex gap-1 p-2">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
  </div>
);

export default Chatbot;

