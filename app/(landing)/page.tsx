import AboutSection from "@/containers/landing-page/about-section";
import CompetitionsSection from "@/containers/landing-page/competition-section";
import GuidelineSection from "@/containers/landing-page/guide-line";
import HeroSection from "@/containers/landing-page/hero-section";
import TimelineSection from "@/containers/landing-page/timeline-section";
import CTA from "@/containers/landing-page/cta";
import Footer from "@/containers/landing-page/footer";

const Page = () => {
  return(
    <>
      <HeroSection/>
      <AboutSection/>
      <GuidelineSection/>
      <TimelineSection/>
      <CompetitionsSection/>
      <CTA/>
      <Footer/>
    </>
  );
}

export default Page;