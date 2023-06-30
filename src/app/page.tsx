'use client';
import Chat from '@/components/Chat';
import Painting from '@/components/Painting';
import { useState } from 'react';

export default function Home() {
  const [aiResponse, setAiResponse] = useState('');
  return (
    <main className="flex p-5 justify-center flex-col">
      <header className="flex flex-col items-center justify-center my-5">
        <h1 className="text-4xl font-bold text-center">Doodle Bot</h1>
        <p className="text-xl text-center">Artist Extraordinaire</p>
        <p className="text-sm text-center">Tell Doodle Bot how awesome he is. He'll tell you about his next masterpiece</p>

        <img src="/doodleBot.jpg" alt="Doodle Bot" width={100} height={100} />
      </header>
      <section className="flex justify-around p-2 -mt-14 mx-10 ">
        <Chat setAiResponse={setAiResponse} />
        <Painting aiResponse={aiResponse} />
      </section>
    </main>
  );
}
