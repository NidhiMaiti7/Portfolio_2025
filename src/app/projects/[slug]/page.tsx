
'use client';

import { Bio } from '@/data/constants';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Github, Link as LinkIcon, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProjectDetailPage() {
  const params = useParams<{ slug: string }>();
  const project = Bio.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Button asChild variant="ghost" className="mb-8">
            <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
            </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
                <Card className="w-full overflow-hidden rounded-2xl shadow-lg">
                    <CardHeader className="p-0">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={1200}
                            height={600}
                            className="object-cover aspect-video w-full"
                            data-ai-hint="project image"
                        />
                    </CardHeader>
                    <CardContent className="p-6 md:p-8">
                        <CardTitle className="text-3xl font-bold text-primary mb-2">{project.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mb-6">{project.date}</p>
                        
                        <div className="prose prose-invert max-w-full text-foreground/90 leading-relaxed whitespace-pre-line">
                           {project.description}
                        </div>
                    </CardContent>
                </Card>
            </div>
             <div className="lg:col-span-2">
                <Card className="sticky top-24 rounded-2xl shadow-lg">
                    <CardHeader>
                        <CardTitle>Project Details</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-6">
                        <div>
                            <h4 className="font-semibold mb-3">Tools & Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">{tag}</Badge>
                                ))}
                            </div>
                        </div>

                        {project.achievements && project.achievements.length > 0 && (
                            <div>
                                <h4 className="font-semibold mb-3">Key Achievements</h4>
                                <ul className="space-y-2">
                                {project.achievements.map((ach, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{ach}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        )}

                        {project.member && project.member.length > 0 && (
                        <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2"><Users className="h-5 w-5" /> Team Members</h4>
                            <div className="flex items-center -space-x-2">
                            {project.member.map((member) => (
                                <Image
                                    key={member.name}
                                    src={member.img}
                                    alt={member.name}
                                    title={member.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full border-2 border-background"
                                />
                            ))}
                            </div>
                        </div>
                        )}

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-border/20">
                           {project.github && (
                                <Button asChild variant="outline" className="border-primary text-primary hover:text-primary hover:bg-primary/10 rounded-full flex-1">
                                <Link href={project.github} target="_blank">
                                    <Github className="mr-2 h-4 w-4" />
                                    View Code
                                </Link>
                                </Button>
                            )}
                            {project.webapp && (
                                <Button asChild className="bg-primary text-primary-foreground hover:bg-accent rounded-full flex-1">
                                    <Link href={project.webapp} target="_blank">
                                    <LinkIcon className="mr-2 h-4 w-4" />
                                    Live App
                                    </Link>
                                </Button>
                            )}
                        </div>

                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
