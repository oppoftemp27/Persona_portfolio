'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
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

const ProjectCard = ({title, description, imageUrl, link}: {
  title: string,
  description: string,
  imageUrl: string,
  link: string
}) => (
  <Card className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      <CardDescription className="text-gray-400">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
        className="rounded-md mb-4"
      />
      <div className="flex justify-between">
        <Link href={link} className="text-coral hover:underline">
          Learn More
        </Link>
      </div>
    </CardContent>
  </Card>
);

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

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Parallax offset={20}>
          <h1 className="text-6xl font-bold tracking-tight leading-none md:text-7xl lg:text-8xl">
            Innovation. Simplicity. Excellence.
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-400">
            A portfolio dedicated to creating impactful digital experiences.
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
                  Driven by a passion for technology and design, I strive to create solutions that are not only
                  functional but also beautiful. With a focus on user experience and simplicity, my goal is to make a
                  meaningful impact through every project.
                </p>
                <p className="text-lg text-gray-300">
                  From web development to mobile applications, I bring a unique blend of creativity and technical
                  expertise to every challenge.
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
      <section className="relative py-24 bg-gray-900">
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

      {/* Contact Section */}
      <section className="relative py-24">
        <Parallax offset={5}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold mb-8">Connect With Me</h2>
            <p className="text-lg text-gray-300 mb-12">
              Let's collaborate and bring innovative ideas to life.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="#" className="text-coral hover:underline">
                LinkedIn
              </Link>
              <Link href="#" className="text-coral hover:underline">
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
