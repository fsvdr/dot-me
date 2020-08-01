const baseURL = () => {
  const url = process.env.GATSBY_URL;

  return url || 'http://localhost:8000';
};

export default baseURL;
