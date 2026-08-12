import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Philosophy } from './components/Philosophy';
import { Programs } from './components/Programs';
import { TrialCTA } from './components/TrialCTA';
import { Gallery } from './components/Gallery';
import { Trainers } from './components/Trainers';
import { Transformations } from './components/Transformations';
import { Stats } from './components/Stats';
import { Membership } from './components/Membership';
import { Community } from './components/Community';
import { InstagramGrid } from './components/InstagramGrid';
import { Testimonials } from './components/Testimonials';
import { LocationMap } from './components/LocationMap';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className={`min-h-screen bg-dark-bg text-light transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />

        <main>
          <Hero />
          <Manifesto />
          <Philosophy />
          <Programs />
          <TrialCTA />
          <Gallery />
          <Trainers />
          <Transformations />
          <Stats />
          <Membership />
          <Community />
          <InstagramGrid />
          <Testimonials />
          <LocationMap />
          <ContactForm />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
