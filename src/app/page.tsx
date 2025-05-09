import Hero from '@/components/Hero';
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <div className='w-full min-h-screen border-2 border-black'>
      <div className='max-w-6xl mx-auto border-red-300 border-2'>
        <Hero />
        <Banner />
      </div>
    </div>
  );
}
