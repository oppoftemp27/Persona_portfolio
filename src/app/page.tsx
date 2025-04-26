'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {ArrowRight} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';

const Parallax = ({children, offset = 10}: { children: React.ReactNode, offset?: number }) => {
  const [yOffset, setYOffset] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = (containerRef.current as HTMLDivElement).getBoundingClientRect();
      const visibleHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const isVisible = (elementTop <= visibleHeight) && (elementBottom >= 0);

      if (isVisible) {
        setYOffset(window.pageYOffset * offset / 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to position correctly

    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return (
    <div ref={containerRef} style={{transform: `translateY(${yOffset}px)`}}>
      {children}
    </div>
  );
};

export default function Home() {
  const projects = [
    {
      title: 'Project Vision',
      description: 'Reimagining e-commerce for the modern world.',
      imageUrl: 'https://picsum.photos/600/400',
      link: '#',
    },
    {
      title: 'Project Clarity',
      description: 'Simplifying communication through intuitive design.',
      imageUrl: 'https://picsum.photos/600/400',
      link: '#',
    },
    {
      title: 'Project Precision',
      description: 'Developing innovative solutions for data analysis.',
      imageUrl: 'https://picsum.photos/600/400',
      link: '#',
    },
    {
      title: 'Project Accelerate',
      description: 'Accelerating workflows with AI-powered tools.',
      imageUrl: 'https://picsum.photos/600/400',
      link: '#',
    },
    {
      title: 'Project Innovate',
      description: 'Innovating the future with cutting-edge technology.',
      imageUrl: 'https://picsum.photos/600/400',
      link: '#',
    },
  ];

  const itunesAlbums = [
    'https://picsum.photos/400/400',
    'https://picsum.photos/401/401',
    'https://picsum.photos/402/402',
    'https://picsum.photos/403/403',
    'https://picsum.photos/404/404',
    'https://picsum.photos/405/405',
    'https://picsum.photos/406/406',
    'https://picsum.photos/407/407',
    'https://picsum.photos/408/408',
    'https://picsum.photos/409/409',
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Parallax offset={20}>
          <h1 className="text-6xl font-bold tracking-tight leading-none md:text-7xl lg:text-8xl">
            Shashvath Bhaskar
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-400">
            Strategic Product Manager with 7+ years of expertise. Transforming complex challenges into market-winning
            solutions.
          </p>
          <Button size="lg" className="mt-8 px-8 bg-white text-black hover:bg-gray-100">
            Explore My Work <ArrowRight className="ml-2"/>
          </Button>
        </Parallax>
      </section>

      {/* About Section */}
      <section className="relative py-24">
        <Parallax offset={10}>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold mb-12 text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-6">
                  Strategic Product Manager with 7+ years of expertise transforming complex challenges into market-winning
                  solutions while consistently rallying teams to deliver exceptional user experiences and measurable
                  business results.
                </p>
                <p className="text-lg text-gray-300">
                  Driving multimodal AI software initiatives, leading release management for critical design suites, and
                  engineering consolidated data dashboards. Expertise in product strategy, AI tools, and agile
                  frameworks.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://picsum.photos/500/500"
                  alt="About Me"
                  width={400}
                  height={400}
                  className="rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </Parallax>
      </section>

      {/* Projects Section */}
      <section className="relative py-24">
        <Parallax offset={15}>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold mb-12 text-center">Featured Projects</h2>

            {/* Scrollable Project Showcase */}
            <div className="overflow-x-auto whitespace-nowrap py-6">
              <div className="inline-flex space-x-6 transition-transform duration-300">
                {projects.map((project, index) => (
                  <div key={index} className="relative w-64 shrink-0 rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover aspect-video"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                      <Link href={project.link} className="text-coral hover:underline text-lg font-semibold">
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Parallax>
      </section>

      {/* iTunes Cover Art Section */}
      <section className="relative py-24">
        <Parallax offset={10}>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold mb-12 text-center">My Inspirations</h2>
            <div className="overflow-x-auto whitespace-nowrap py-6">
              <div className="inline-flex space-x-6 transition-transform duration-300">
                {itunesAlbums.map((album, index) => (
                  <Image
                    key={index}
                    src={album}
                    alt={`Album ${index + 1}`}
                    width={200}
                    height={200}
                    className="rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </Parallax>
      </section>

      {/* Contact Section */}
      <section className="relative py-24">
        <Parallax offset={5}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold mb-8">Connect With Me</h2>
            <p className="text-lg text-gray-300 mb-12">
              Let&apos;s collaborate and bring innovative ideas to life.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="https://linkedin.com/in/sbhaskar" className="text-coral hover:underline">
                LinkedIn
              </Link>
              <Link href="https://github.com/oppoftemp27" className="text-coral hover:underline">
                GitHub
              </Link>
            </div>
            <p className="mt-8 text-gray-500">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
        </Parallax>
      </section>
    </div>
  );
}
