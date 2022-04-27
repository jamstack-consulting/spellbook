import { useRouter } from "next/router";

// Gets the URL for the current environment
export const getAbsoluteURL = (path) => {
  const baseURL = process.env.NEXT_PUBLIC_URL
    ? `https://${process.env.NEXT_PUBLIC_URL}`
    : "http://localhost:3000";
  return baseURL + path;
};

export default function useOpenGraphImage(title) {
  const fullImageURL = getAbsoluteURL(
    `/api/open-graph-image?title=${encodeURI(title)}`
  );
  return { imageURL: fullImageURL };
}

// Thanks to Kacey Cleveland who posted this script here.
//
// https://dev.to/kleveland/generating-sharable-content-images-with-open-graph-and-nextjs-4e34
