
"use client";

import type { Certificate } from "@/data/constants";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="bg-card flex flex-col w-full h-full hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden card-hover-shimmer rounded-2xl cursor-pointer">
                    <CardHeader className="p-0 relative">
                        <Image
                            src={certificate.image}
                            alt={certificate.title}
                            width={600}
                            height={400}
                            className="rounded-t-2xl object-cover aspect-[3/2] group-hover:scale-105 transition-transform duration-500"
                            data-ai-hint="certificate document"
                        />
                    </CardHeader>
                    <div className="p-4 flex flex-col flex-grow">
                        <CardTitle className="text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300">{certificate.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{certificate.issuingOrganization}</p>
                        <CardContent className="flex-grow p-0 pt-2">
                            <p className="text-xs text-muted-foreground">{certificate.date}</p>
                        </CardContent>
                        <CardFooter className="p-0 pt-4 mt-auto">
                            <Button asChild className="w-full rounded-full" onClick={(e) => e.stopPropagation()}>
                                <Link href={certificate.credentialURL} target="_blank">
                                    <Award className="mr-2" />
                                    View Credential
                                </Link>
                            </Button>
                        </CardFooter>
                    </div>
                </Card>
            </DialogTrigger>
            <DialogContent className="p-0 max-w-4xl bg-transparent border-none">
                 <DialogHeader className="sr-only">
                    <DialogTitle>{certificate.title}</DialogTitle>
                    <DialogDescription>
                        Certificate from {certificate.issuingOrganization}, issued on {certificate.date}.
                    </DialogDescription>
                </DialogHeader>
                <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={1200}
                    height={800}
                    className="rounded-lg object-contain"
                />
            </DialogContent>
        </Dialog>
    );
};

export default CertificateCard;
