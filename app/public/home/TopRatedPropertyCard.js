export default function TopRatedPropertyCard({propertyName,city,imgUrl,alt}) {
    return (
        <div className="rounded-xl border bg-white shadow-md">

            <img className={'rounded-t-xl bg-slate-300'} style={{height: '300px'}}
                 src={imgUrl}
                 alt={alt}
                 width={'100%'}
                 />

            <div className={'p-6'}>

                <h3 className="mb-3 text-lg font-bold">{propertyName}</h3>

                <p className={'flex items-center justify-between'}>
                    <span className="text-[10px] font-bold">8.5 - Very good (365)</span>
                    <span className={'text-sm'}>{city}</span>
                </p>
            </div>

        </div>
    );
};