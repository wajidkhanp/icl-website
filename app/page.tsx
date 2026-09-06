import HeroSlider from "@/components/home/HeroSlider";
import PrayerTimesSection from "@/components/home/PrayerTimesSection";
import AnnouncementBanner from "@/components/home/AnnouncementBanner";
import DonationSection from "@/components/home/DonationSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import AboutSection from "@/components/home/AboutSection";
import { fetchPrayerTimes, getMasjidDate } from "@/lib/prayer-times";
import { connection } from "next/server";
import PrayerTimesRefresh from "@/components/home/PrayerTimesRefresh";
import { readSiteContent } from "@/lib/site-content";

export default async function Home() {
  await connection();
  const now = new Date();
  const prayerData = await fetchPrayerTimes(now);
  const content = readSiteContent();

  return (
    <>
      <PrayerTimesRefresh date={getMasjidDate(now)} />
      <HeroSlider />
      <AnnouncementBanner announcement={content.announcement} />
      <PrayerTimesSection prayerData={prayerData} iqamaTimes={content.iqamaTimes} jumuah={content.jumuah} />
      <DonationSection />
      <ProgramsSection />
      <AboutSection />
    </>
  );
}
