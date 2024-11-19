import React from 'react'
import Image from 'next/image'
import { urlFor, client } from '../lib/sanity'
import { Card, CardContent } from '@/components/ui/card'
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import { CarouselImages } from '../lib/interface'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const revalidate = 30 // invalidate every 30 seconds


  async function getImages():Promise<CarouselImages[]> {
    const query = `
    *[_type == "carouselImage"] {
    image,
      name,
      alt,
  }
    `;
    const images = await client.fetch(query);
    return images;
  }

export default async function About() {

const images: CarouselImages[]  = await getImages();

  return (
    <div className="container max-w-5xl mx-auto mt-8 px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl text-center font-bold mb-8">About Us</h1>
        <section className="mb-12">
            <h2 className='text-2xl mb-4 font-semibold'>Our History</h2>
            <p className="mb-4">
          Founded in 2003, our company began with a simple mission: to help retailers recover lost shopping carts and reduce their operational costs. What started as a small team with a handful of clients has grown into a nationwide service, trusted by major retail chains across the country.
        </p>
        <p className="mb-4">
          In our early days, we manually tracked and collected carts. As technology advanced, so did our methods. In 2012, we introduced GPS tracking to our services, revolutionizing the way we locate and recover shopping carts. This innovation not only improved our efficiency but also provided our clients with valuable data on cart usage and loss patterns.
        </p>
        <p className="mb-4">
          By 2015, we had expanded our services to include comprehensive inventory management and cart maintenance programs. These additions allowed us to offer a full-cycle solution to our clients, from prevention of cart loss to recovery and maintenance.
        </p>
        <p>
          Today, we're proud to be at the forefront of shopping cart recovery and management. Our team of dedicated professionals, coupled with our cutting-edge technology, including daily GPS tracking of every cart in your fleet, continues to set the industry standard for efficiency and customer satisfaction.
        </p>
        </section>
        <section className="mb-8 mx-10">
            <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-4">
                            <Image 
                                src={urlFor(image.image).url()} 
                                width={500} 
                                height={500} 
                                alt={image.alt}
                                className="rounded-t-lg object-cover w-full"
                                />
                                </CardContent>
                                </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
        <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <p className="mb-4">
          At the heart of our business is a commitment to excellence and customer satisfaction. We understand that every cart recovered is more than just an asset returned—it's a contribution to our clients' bottom line and operational efficiency.
        </p>
        <p>
          As we look to the future, we remain dedicated to innovation and continuous improvement. Whether it's developing new tracking technologies or refining our recovery processes, we're always striving to provide the best possible service to our clients.
        </p>
      </section>
      <div className="mb-12 mx-auto flex items-center justify-center">
        <Button asChild>
          <Link href="/">
            Back Home
          </Link>

        </Button>
      </div>
    </div>
  )
}
