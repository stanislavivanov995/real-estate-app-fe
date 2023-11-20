export default function DealCard({
                                     name,
                                     imgUrl,
                                     city,
                                     property,
                                     rating,
                                     reviews
                                 }) {
    return (
        <div className="rounded-lg flex gap-4 shadow-lg bg-white border border-slate-300">

            <img className={'rounded-l-lg bg-slate-300'}
                 src={imgUrl}
                 alt={'Property Image'}
                 height={170}
                 width={170}
            />

            <div className="flex-grow py-3">
                <h4 className="font-bold mb-3">{name}</h4>
                <p className={'text-[13px] mb-3'}>{property}</p>
                <p className={'text-[13px] mb-3'}>{city}</p>
                <p className={'text-[13px] mb-3'}><span className="font-bold">{rating} - Excellent</span> ({reviews} reviews)</p>
            </div>

            <div className="text-[13px] p-4 flex flex-col justify-between flex-grow border-l border-slate-300">

                <div>
                    <p className="mb-1">Free cancelation</p>
                    <p className="mb-1">Breakfast included</p>
                    <p className="mb-1"><span className="font-bold">$130</span> Per Night</p>
                    <p className="mb-1">2 nights for <span className="font-bold">$220</span></p>
                </div>

                <button className="px-2 text-lg py-1 rounded-md bg-blue-500 hover:bg-blue-600 text-white">
                    View Deal
                </button>

            </div>

        </div>
    );
};