'use client';
import { Configuration, OpenAIApi } from 'openai-edge';
import { useEffect, useState } from 'react';

interface PaintingProps {
  aiResponse: string;
}

export default function Painting({ aiResponse }: PaintingProps) {
  const [generatedImage, setGeneratedImage] = useState();

  const handleClick = async () => {
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: `Create an image from this description ${aiResponse}`,
        n: 1,
        size: '1024x1024'
      })
    };
    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', options);
      const data = await response.json();
      setGeneratedImage(data?.data[0].url);
    } catch (error) {
      console.error('Error occurred during image generation:', error);
    }
  };

  const noResponeNoImage = !aiResponse && !generatedImage;
  const responseAndNoImage = aiResponse && !generatedImage;

  useEffect(() => {
    if (aiResponse) {
      handleClick();
    }
  }, [aiResponse]);


  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch border-black-400 text-black justify-center">
      <div>
         { generatedImage && < img src={`${generatedImage}`} /> }
      </div>
      <button
        className="w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2 text-black my-4"
        onClick={handleClick}
        disabled={noResponeNoImage}
      >
        Generate a new image
      </button>
    </div>
  );
}
