import SearchProperty from "@/app/public/home/SearchProperty";
import TopRatedPropertyCard from "@/app/public/home/TopRatedPropertyCard";
import PublicLayout from "@/components/layouts/PublicLayout";

export default function HomePage() {

    const topRatedProperties = [
        {id: 1, name: 'Property One', city: 'Plovdiv', imgUrl: '/assets/propertyone.png', alt: 'Property One Image'},
        {id: 2, name: 'Property Two', city: 'Sofia', imgUrl: '/assets/propertytwo.png', alt: 'Property Two Image'},
        {
            id: 2,
            name: 'Property Three',
            city: 'Blagoevgrad',
            imgUrl: '/assets/propertythree.png',
            alt: 'Property Three Image'
        },
    ];

    return (
        <PublicLayout>
            <main className={'min-h-screen bg-gray-100'}>

                <h1 className="pt-16 text-center text-[54px] font-bold tracking-tighter">Welcome to the best booking
                    website.</h1>

                <h3 className={'mb-16 pt-2 text-center text-[19px]'}>
                    The best platform where you can easily list, search, and book rental properties.
                </h3>

                {/* Search bar */}
                <SearchProperty/>

                {/* Top-rated properties */}
                <h3 className={'ml-12 mt-14 text-2xl font-semibold'}>Top-rated properties </h3>

                <section className={'m-12 mt-5 grid grid-cols-1 gap-4 md:grid-cols-3'}>

                    {
                        topRatedProperties.map(property =>
                            <TopRatedPropertyCard key={property.id}
                                                  imgUrl={property.imgUrl}
                                                  alt={property.alt}
                                                  propertyName={property.name}
                                                  city={property.city}/>)
                    }

                </section>

            </main>
        </PublicLayout>
    );
};