import HeroSlider from "@/components/home/HeroSlider";
import PrayerTimesSection from "@/components/home/PrayerTimesSection";
import AnnouncementBanner from "@/components/home/AnnouncementBanner";
import DonationSection from "@/components/home/DonationSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import AboutSection from "@/components/home/AboutSection";
import { fetchPrayerTimes } from "@/lib/prayer-times";

export default async function Home() {
  const prayerData = await fetchPrayerTimes();

  return (
    <>
      <HeroSlider />
      <AnnouncementBanner />
      <PrayerTimesSection prayerData={prayerData} />
      <DonationSection />
      <ProgramsSection />
      <AboutSection />
    </>
  );
}
