const removeKeysWithNullValues = (obj) =>
  Object.entries(obj).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
// Gets the URL for the current environment
export const getAbsoluteURL = (path) => {
  const baseURL = process.env.NEXT_PUBLIC_URL
    ? `https://${process.env.NEXT_PUBLIC_URL}`
    : "http://localhost:3000";
  return baseURL + path;
};

const generateOpenGraphUrl = (params) => {
  const imageUrl = getAbsoluteURL(
    `/api/open-graph-image?${new URLSearchParams(
      removeKeysWithNullValues(params)
    ).toString()}`
  );
  return imageUrl;
};

export default generateOpenGraphUrl;
