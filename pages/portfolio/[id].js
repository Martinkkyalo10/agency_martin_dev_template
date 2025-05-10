import PortfolioDetails from "@/components/sections/PortfolioDetails";

export default function PortfolioDetailPage({ params }) {
  return <PortfolioDetails id={params.id} />;
}
