import {
  DealsInSection,
  PaymentMoodSection,
  ProductSection,
  QueryCard,
  ReviewSection,
  ServiceSection,
} from "@/components/home";
import { PublicLayout } from "@/layouts/index";

export default function Home() {
  return (
    <PublicLayout>
      <section className="main-container">
        <ProductSection />
        <ReviewSection />
        <DealsInSection />
        <ServiceSection />
        <PaymentMoodSection />
        <QueryCard />
      </section>
    </PublicLayout>
  );
}
