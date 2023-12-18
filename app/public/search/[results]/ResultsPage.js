'use client';
import PublicLayout from "@/components/layouts/PublicLayout";
import { useSearchParams } from "next/navigation";
import TopRatedPropertyCard from "@/app/public/home/TopRatedPropertyCard";
import { useState } from "react";
import DealCard from "@/app/public/search/[results]/DealCard";

export default function ResultsPage() {

    const searchParams = useSearchParams()

    const [results, setResults] = useState([
        {
            id: 1,
            imgUrl: '#',
            name: 'InterContinental Sofia',
            city: 'Sofia',
            property: '5 stars Hotel',
            rating: '9.4',
            reviews: 1484
        },
        {
            id: 2,
            imgUrl: '#',
            name: 'Hotel Bansko',
            city: 'Bansko',
            property: '4 stars Hotel',
            rating: '9.1',
            reviews: 484
        },
        {
            id: 3,
            imgUrl: '#',
            name: 'Hotel ZARA',
            city: 'Bansko',
            property: '4 stars Hotel',
            rating: '8.4',
            reviews: 183
        },
    ]);

    const lat = searchParams.get('lat')
    const lng = searchParams.get('lng')
    const checkIn = searchParams.get('checkIn')
    const checkOut = searchParams.get('checkOut')
    const category = searchParams.get('category')

    // console.log(lat)
    // console.log(lng)
    // console.log(checkIn)
    // console.log(checkOut)
    // console.log(category)

    return (
        <PublicLayout>

            <main className={'bg-gray-100'}>

                <h1 className={'pt-10 text-center font-bold text-3xl text-blue-950'}>Search Results:</h1>

                <section className="p-12 flex flex-col gap-4">

                    {results.map(p =>
                        <DealCard key={p.id}
                            name={p.name}
                            imgUrl={p.imgUrl}
                            city={p.city}
                            property={p.property}
                            rating={p.rating}
                            reviews={p.reviews} />
                    )}

                </section>

            </main>

        </PublicLayout>
    );
};