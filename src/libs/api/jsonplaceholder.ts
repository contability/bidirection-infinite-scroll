export const fetchJsonPlaceholderApi = async (page: number) => {
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`, {
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
