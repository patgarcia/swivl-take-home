const networkService = async (url: string) => {
  const response = await fetch(url);
  console.log({response})
  return response.json();
};

export default networkService;
