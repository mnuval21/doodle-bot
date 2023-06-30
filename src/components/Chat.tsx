'use client';

import { useChat } from 'ai/react';
import { useEffect } from 'react';

interface ChatProps {
  setAiResponse: React.Dispatch<React.SetStateAction<string>> | undefined;
}

export default function Chat({ setAiResponse }: ChatProps) {
  const { messages, handleInputChange, handleSubmit, input } = useChat();

  const lastAIMessage = messages.filter((m) => m.role === 'assistant').pop();

  useEffect(() => {
    const lastAIMessage = messages.filter((m) => m.role === 'assistant').pop();
    if (lastAIMessage) {
      setAiResponse(lastAIMessage.content);
    }
  }, [messages, setAiResponse]);

  return (
      <div className="chat-thread mx-auto w-full max-w-md py-24 flex flex-col stretch border-black-400 text-black p-2">
        {lastAIMessage && <div>{lastAIMessage.content}</div>}

        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2 text-black my-4"
              placeholder="Give me a compliment!"
              value={input}
              onChange={handleInputChange}
            />
          </label>
        </form>
      </div>
  );
}
