import CategoryList from "./component/CategoryList";
import HeroSection from "./component/HeroSection";
import ImgButton from "./component/ImgButton";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <CategoryList></CategoryList>
      <ImgButton></ImgButton>
    </div>
  );
}
