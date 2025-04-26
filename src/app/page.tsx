
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 text-gray-900 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-primary">
            Unleash Your Potential
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Crafting digital experiences that inspire and transform.
          </p>
          <Button size="lg" className="px-8">
            Explore More <ArrowRight className="ml-2" />
          </Button>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-10 text-center text-primary">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Web Development
                </CardTitle>
                <CardDescription>
                  Cutting-edge solutions for web applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://picsum.photos/400/200"
                  alt="Web Development"
                  width={400}
                  height={200}
                  className="rounded-md mb-4"
                />
                <p className="text-gray-600">
                  We build responsive, scalable, and secure web applications tailored to your needs.
                </p>
              </CardContent>
            </Card>

            {/* Service Card 2 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Mobile App Development
                </CardTitle>
                <CardDescription>
                  Native and cross-platform mobile solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://picsum.photos/400/200"
                  alt="Mobile App Development"
                  width={400}
                  height={200}
                  className="rounded-md mb-4"
                />
                <p className="text-gray-600">
                  Reach your audience on the go with our innovative mobile app development services.
                </p>
              </CardContent>
            </Card>

            {/* Service Card 3 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  UI/UX Design
                </CardTitle>
                <CardDescription>
                  Intuitive and visually stunning designs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://picsum.photos/400/200"
                  alt="UI/UX Design"
                  width={400}
                  height={200}
                  className="rounded-md mb-4"
                />
                <p className="text-gray-600">
                  We craft user-centered designs that enhance usability and engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-10 text-center text-primary">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Project Alpha
                </CardTitle>
                <CardDescription>
                  A cutting-edge e-commerce platform.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://picsum.photos/600/300"
                  alt="Project Alpha"
                  width={600}
                  height={300}
                  className="rounded-md mb-4"
                />
                <div className="flex justify-between">
                  <Link href="#" className="text-accent hover:underline">
                    Live Demo
                  </Link>
                  <Link href="#" className="text-accent hover:underline">
                    GitHub Repo
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Project Card 2 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Project Beta
                </CardTitle>
                <CardDescription>
                  A revolutionary social networking app.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://picsum.photos/600/300"
                  alt="Project Beta"
                  width={600}
                  height={300}
                  className="rounded-md mb-4"
                />
                <div className="flex justify-between">
                  <Link href="#" className="text-accent hover:underline">
                    Live Demo
                  </Link>
                  <Link href="#" className="text-accent hover:underline">
                    GitHub Repo
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-primary">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Ready to bring your vision to life? Contact us today!
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-accent hover:underline">
              LinkedIn
            </Link>
            <Link href="#" className="text-accent hover:underline">
              GitHub
            </Link>
            <Link href="#" className="text-accent hover:underline">
              Email
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
