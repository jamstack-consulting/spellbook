import { ImageResponse } from '@vercel/og';
const { font } = require('../../social') 

export const config = {
  runtime: 'experimental-edge',
};

// const fontFamily = fetch(new URL(font, import.meta.url)).then((res) => res.arrayBuffer())

export default async function Og(req) {
  // const fontData = await fontFamily

  try {
    const { searchParams } = new URL(req.url)

    const hasTitle = searchParams.has('title');
    const title = hasTitle ? searchParams.get('title').slice(0, 100) : 'My default value';

    return new ImageResponse(
      (
        <div
          style={{
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center', 
            fontFamily: "Young-serif, 'sans-serif'"
          }}
        >
          <img
            src="https://imagedelivery.net/ALhJNJmLkfnH1QPrT934GA/793826ea-13dc-4a9f-69b4-d9b6a4237600/public"
            alt="Social background with logo of a rabbit in a top hat."
          />
            <div tw='flex'>
              <h1 tw='text-7xl'>
                {title}
              </h1>
            </div>
        </div>
      ),
      {
        width: '100%',
        height: '100%',
        // fonts: [
        //   {
        //     name: 'Young-serif',
        //     data: fontData,
        //     style: 'normal',
        //   }
        // ]
      },
    );  
  } catch (error) {
   console.log(error) 
  }
}