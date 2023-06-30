const { Configuration, OpenAIApi } = require('openai-edge');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export const runtime = 'edge';

export async function POST(req: Request) {
  console.log('req', req);
  // try {
  //   const body = JSON.parse(req.body);
  //   const { prompt } = body;
  //   const results = await openai.createImage({
  //     prompt: prompt,
  //     n: 1,
  //     size: '1024x1024'
  //   });

  //   console.log('results', results);
  //   res.status(200).json({
  //     image: results.data.data[0]
  //   });

  // } catch (error) {
  //   console.error(error);
  // }

}