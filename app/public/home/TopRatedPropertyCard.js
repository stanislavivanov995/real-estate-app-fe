export default function TopRatedPropertyCard({propertyName,city}) {
    return (
        <div className="rounded-xl border bg-white shadow-md">

            <img className={'bg-slate-300 rounded-t-xl'} style={{height: '300px'}}
                 src={'/assets/propertyone.png'}
                 width={'100%'}
                 alt={'Property One Image'}/>

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