import Hero from '../sections/Hero'
import ServicesSection from '../sections/ServicesSection'
import ProcessSection from '../sections/ProcessSection'
import WorkSection from '../sections/WorkSection'
import CTASection from '../sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <div className="home-process-work-spacer" aria-hidden />
      <WorkSection />
      <CTASection />
    </>
  )
}
