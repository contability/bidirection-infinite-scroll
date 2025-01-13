export const fetchJsonPlaceholderApi = async (offset: number, limit: number) => {
  // console.log(
  //   '🚀 ~ https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=${limit}:',
  //   `https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=${limit}`,
  // );
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${offset || 5}&_limit=${limit || 5}`, {
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
