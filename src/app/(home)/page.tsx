import ListTemplate from '@Components/home/ListTemplate';
import { fetchJsonPlaceholderApi } from '../../libs/api/jsonplaceholder';
import InfiniteScroll from '@Components/shared/InfiniteScroll';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const MainPage = async () => {
  const data = await fetchJsonPlaceholderApi(5);
  return <ListTemplate list={data} />;
};

export default MainPage;
