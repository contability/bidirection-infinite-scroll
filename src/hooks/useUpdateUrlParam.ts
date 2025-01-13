import { usePathname, useRouter } from 'next/navigation';

export const useUpdateUrlParam = () => {
  const router = useRouter();
  const pathName = usePathname();

  /**
   *
   * @param updateParams 업데이트 할 파라미터 데이터
   * @param path url path
   * @param scroll 스크롤 여부
   */
  const updateUrlParam = (updateParams: { [key: string]: string | number | null }, path?: string, scroll?: boolean) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(updateParams).map(([key, value]) => {
      if (value === null) params.delete(key);
      else params.set(key, String(value));
    });

    const finalPath = path || pathName;
    const finalScroll = scroll === undefined ? true : scroll;

    // false로 해야 replace 후 맨 위로 이동 안됨
    router.replace(`${finalPath}?${params.toString()}`, { scroll: finalScroll });
  };

  return updateUrlParam;
};
