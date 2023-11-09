import SearchProperty from "@/app/public/home/SearchProperty";
import TopRatedPropertyCard from "@/app/public/home/TopRatedPropertyCard";

export default function HomePage() {

    const topRatedProperties = [
        {id:1, name: 'Property One', city: 'Plovdiv', imgUrl: '/assets/propertyone.png', alt: 'Property One Image'},
        {id:2, name: 'Property Two', city: 'Sofia', imgUrl: '/assets/propertytwo.png', alt: 'Property Two Image'},
        {id:2, name: 'Property Three', city: 'Blagoevgrad', imgUrl: '/assets/propertythree.png', alt: 'Property Three Image'},
    ];

    return (
        <main className={'min-h-screen bg-gray-100'}>

            <h1 className="py-10 text-center text-3xl font-bold tracking-tighter">Welcome to the best booking website.</h1>

            {/* Search bar */}
            <SearchProperty />

            {/* Top-rated properties */}
            <h3 className={'ml-12 mt-14 text-2xl font-semibold'} >Top-rated properties </h3>

            <section className={'m-12 mt-5 grid grid-cols-1 gap-4 md:grid-cols-3'}>

                {
                    topRatedProperties.map(property =>
                    <TopRatedPropertyCard key={property.id}
                                          propertyName={property.name}
                                          city={property.city} />)
                }

            </section>

        </main>
    );
};