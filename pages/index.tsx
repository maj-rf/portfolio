import type { NextPage } from 'next';
import { Stack } from '../components/Stack';
import { Projects } from '../components/project/Projects';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Stack />
      <Projects />
    </div>
  );
};

export default Home;
