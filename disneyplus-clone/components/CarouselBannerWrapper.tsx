import { getDiscoverMovies } from "@/lib/getMovies";
import CarouselBanner from "./CarouselBanner";

type Props = {
  id?: string;
  keywords?: string;
};

async function CarouselBannerWrapper({ id, keywords }: Props) {
  const movie = await getDiscoverMovies(id, keywords);
  return <CarouselBanner movies={movie} />;
}

export default CarouselBannerWrapper;
