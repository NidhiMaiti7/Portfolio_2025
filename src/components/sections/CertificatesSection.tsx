
"use client";

import { Bio } from "@/data/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CertificateCard from "../CertificateCard";

const CertificatesSection = () => {
  return (
    <section id="certificates" className="flex flex-col items-center justify-center gap-8 md:gap-12 py-16 md:py-24">
      <div className="text-center animate-fadeIn max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text animated-gradient-text">
            Certifications
        </h2>
        <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
        <p className="mt-8 text-base md:text-lg text-muted-foreground">
          My credentials and professional certifications, showcasing my commitment to continuous learning.
        </p>
      </div>
      <div className="w-full max-w-6xl px-4 md:px-0">
         <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
        >
            <CarouselContent>
                {Bio.certificates.map((certificate) => (
                    <CarouselItem key={certificate.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <CertificateCard certificate={certificate} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default CertificatesSection;
