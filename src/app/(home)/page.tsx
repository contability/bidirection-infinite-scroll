import ListTemplate from '@Components/home/ListTemplate';
import { fetchJsonPlaceholderApi } from '../../libs/api/jsonplaceholder';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IMainPageProps {
  searchParams: {
    offset: number;
    limit: number;
  };
}

const MainPage = async ({ searchParams }: IMainPageProps) => {
  const { offset, limit } = await searchParams;
  const data = await fetchJsonPlaceholderApi(offset, limit);
  return <ListTemplate list={data} />;
};

export default MainPage;
