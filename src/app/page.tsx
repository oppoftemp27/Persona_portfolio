
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Homepage Introduction */}
      <section id="introduction" className="mb-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Hello, I'm John Doe</h1>
          <p className="text-lg text-muted-foreground">
            A passionate software developer with expertise in modern web technologies.
          </p>
          <Button variant="outline" className="mt-4">
            Learn More
          </Button>
        </div>
      </section>

      {/* Project Showcase */}
      <section id="projects" className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Project Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Project Title 1</CardTitle>
              <CardDescription>Brief description of the project.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://picsum.photos/400/300"
                alt="Project 1"
                width={400}
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

          {/* Project 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Project Title 2</CardTitle>
              <CardDescription>Brief description of the project.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://picsum.photos/400/300"
                alt="Project 2"
                width={400}
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

          {/* Project 3 */}
          <Card>
            <CardHeader>
              <CardTitle>Project Title 3</CardTitle>
              <CardDescription>Brief description of the project.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://picsum.photos/400/300"
                alt="Project 3"
                width={400}
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

      {/* Contact Information */}
      <section id="contact" className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Feel free to reach out for collaborations or job opportunities.
        </p>
        <div className="flex justify-center space-x-4">
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
  );
}
