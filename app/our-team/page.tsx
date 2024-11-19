import React from 'react'
import { client, urlFor } from '../lib/sanity'
import { EmployeeCard } from '../lib/interface';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 30 // invalidate every 30 seconds


async function getData() {
  const query = `*[_type == 'employee'] | order(_createdAt desc) {
  name,
  jobTitle,
  smallBio,
  "currentSlug": slug.current,
  cardImage
}`

const data = await client.fetch(query);
return data;
}

export default async function OurTeam() {
  const data: EmployeeCard[] = await getData();
  return (
    <div className="container mx-auto px-8 lg:px-12 py-8 max-w-6xl mb-12">
      <h1 className="text-3xl md:text-4xl mb-16 text-center font-bold">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-5">
      {data.map((employee, idx) => (
        <Card key={idx}>
          <Image 
            src={urlFor(employee.cardImage).url()} 
            width={500} 
            height={500} 
            alt={employee.name}
            className="rounded-t-lg object-cover w-full"
            />
            <CardContent className="mt-2">
              <h3 className="text-lg font-bold line-clamp-2">{employee.name}</h3>
              <p className="text-xs text-gray-500 font-semibold">{employee.jobTitle}</p>
              <p className="line-clamp-3 text-sm mt-3 text-gray-500">{employee.smallBio}</p>
              <Button asChild className="w-full mt-7">
                <Link href={`/our-team/${employee.currentSlug}`}>Read Full Biography</Link>
              </Button>
            </CardContent>
        </Card>
      ))}
      </div>
    </div>
  )
}
