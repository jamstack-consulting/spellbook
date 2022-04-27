const { withOGImage } = require("next-api-og-image");
const { font } = require("../social");

// Rewrite this shit and use better cache options,
// and also make netlify version.

const style = `
  @font-face {
    font-family: 'young-serif';
    font-style:  normal;
    font-weight: normal;
    src: url(data:font/truetype;charset=utf-8;base64,${font}) format('truetype');
  }
  body {
    font-family: 'young-serif', sans-serif;
  }
  h1 {
      font-family: 'young-serif';
  }
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default withOGImage({
  dev: { inspectHtml: true },
  template: {
    html: ({ title }) =>
      `<html>
        <head>
          <link
            href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
            rel="stylesheet"
          />

        </head>
        <div class="relative">
           <style  >${style}</style>
          <div class="absolute inset-y-1/3 inset-x-10">
            <h1 class="text-7xl">${title}</h1>
          </div>
          <img
            height={630}
            width={1200}
            src="https://imagedelivery.net/ALhJNJmLkfnH1QPrT934GA/793826ea-13dc-4a9f-69b4-d9b6a4237600/public"
            
            alt="Social background with logo of a rabbit in a top hat."
          />
        </div>
      </html>`,
  },
});
