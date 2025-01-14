export const fetchJsonPlaceholderApi = async (offset: number, limit: number) => {
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${offset || 10}&_limit=${limit || 5}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json());
    return data;
  } catch (error) {
    console.error(error);
  }
};
