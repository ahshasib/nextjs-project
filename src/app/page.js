import CategoryList from "./component/CategoryList";
import CustomerReview from "./component/CustomerReview";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import ImgButton from "./component/ImgButton";
import ProductSection from "./component/ProductSection";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <CategoryList></CategoryList>
      <ImgButton></ImgButton>
      <ProductSection></ProductSection>
      <CustomerReview></CustomerReview>
      <Footer></Footer>
    </div>
  );
}
