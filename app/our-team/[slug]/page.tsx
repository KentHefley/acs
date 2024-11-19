import { fullBio } from '@/app/lib/interface';
import { client, urlFor } from '@/app/lib/sanity'
import React from 'react'
import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const revalidate = 30 // invalidate every 30 seconds

async function getData(slug: string) {
  const query = `
  *[_type == "employee" && slug.current == '${slug}'] {
  "currentSlug": slug.current,
    name,
    jobTitle,
    longBio,
    cardImage,
    
}[0]
  `
  const data = await client.fetch(query)
  return data;

}

export default async function FullBio({params}: {params: {slug: string}}) {
  const data: fullBio = await getData(params.slug);
  return (
    <div className="mx-auto px-8 lg:px-12 py-8 max-w-6xl mb-12">
        <Image 
          src={urlFor(data.cardImage).url()}
          alt={data.name}
          width={300}
          height={300}
          className="mx-auto mt-8 mb-8 rounded-lg"
        />

        <div className="mt-16 prose mx-auto">
          <PortableText
          value={data.longBio}
          />
        </div>
        <div className="mt-10 mb-8 text-center">
        <Button asChild>
          <Link href="/our-team">Back to Team Members</Link>
        </Button>
        </div>
        
    </div>
  )
}
