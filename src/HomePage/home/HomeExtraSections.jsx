import OurServices from "./OurServices";
import HowItWorks from "./HowItWorks";
import WhyChooseUs from "./WhyChooseUs";
import CustomerReviews from "./CustomerReviews";
import OrderCallToAction from "./OrderCallToAction";
import HomeFooter from "./HomeFooter";

// Place this component immediately after your existing Hero section.
export default function HomeExtraSections() {
  return (
    <>
      <OurServices />
      <HowItWorks />
      <WhyChooseUs />
      <CustomerReviews />
      <OrderCallToAction />
      <HomeFooter />
    </>
  );
}
