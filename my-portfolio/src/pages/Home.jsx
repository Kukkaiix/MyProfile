import Header from "../components/Home/Header";
import ProfileCard from "../components/Home/ProfileCard";
import ContentSection from "../components/Home/ContentSection";
import Footer from "../components/Home/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono">
      <Header />
      <main className="flex flex-col flex-1 gap-10 px-4 py-10 lg:flex-row md:px-10">
        <div className="lg:w-[320px] flex-shrink-0">
          <ProfileCard />
        </div>
        <ContentSection />
      </main>
      <Footer />
    </div>
  );
}