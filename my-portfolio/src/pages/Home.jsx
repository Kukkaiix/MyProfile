import Header from "../components/Home/Header";
import ProfileCard from "../components/Home/ProfileCard";
import ContentSection from "../components/Home/ContentSection";
import Footer from "../components/Home/Footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col lg:flex-row flex-1 px-10 py-10 gap-10">
        <div className="lg:w-[300px] flex-shrink-0">
          <ProfileCard />
        </div>
        <ContentSection />
      </main>
      <Footer />
    </div>
  );
}