import NewsDetailedPage from "@/pages/NewsDetailed/ui/NewsDetailed";
import Layout from "@/widgets/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="container">
        <NewsDetailedPage />
      </main>
    </Layout>
  );
}
