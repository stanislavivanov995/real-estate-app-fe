'use client';
export default function SearchProperty() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}
              className="mx-auto flex w-[99vw] items-center justify-between gap-3 rounded-lg bg-white shadow-md md:w-[90vw]">

            {/* Search Input */}
            <label className="relative m-2 block">

                <span className="sr-only">Search</span>

                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{minWidth: '24px', minHeight: '24px'}}
                             width={24}
                             height={24} viewBox="0 0 19 19" fill="none">
                        <path className={'h-5 w-5 fill-slate-300'}
                              d="M7.52083 2.375C8.88559 2.375 10.1945 2.91715 11.1595 3.88218C12.1245 4.84721 12.6667 6.15607 12.6667 7.52083C12.6667 8.79542 12.1996 9.96708 11.4317 10.8696L11.6454 11.0833H12.2708L16.2292 15.0417L15.0417 16.2292L11.0833 12.2708V11.6454L10.8696 11.4317C9.96708 12.1996 8.79542 12.6667 7.52083 12.6667C6.15607 12.6667 4.84721 12.1245 3.88218 11.1595C2.91715 10.1945 2.375 8.88559 2.375 7.52083C2.375 6.15607 2.91715 4.84721 3.88218 3.88218C4.84721 2.91715 6.15607 2.375 7.52083 2.375ZM7.52083 3.95833C5.54167 3.95833 3.95833 5.54167 3.95833 7.52083C3.95833 9.5 5.54167 11.0833 7.52083 11.0833C9.5 11.0833 11.0833 9.5 11.0833 7.52083C11.0833 5.54167 9.5 3.95833 7.52083 3.95833Z"
                              fill={'gray'}/>
                        </svg>
                    </span>

                <input
                    className="block w-full rounded-md border border-slate-300 bg-white py-3 pl-9 pr-4 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700"
                    placeholder="Search City..."
                    type="search"
                    name="city"/>
            </label>

            {/* Date Filter */}
            <label>
                <span>Date: </span>
                <input className={'rounded-md border border-slate-300 p-3'}
                       name={'date'}
                       type="date"/>
            </label>

            {/* Select Apartment Type Menu */}
            <label>
                <span>Guests and Rooms: </span>
                <select name={'guests_rooms'} className={'rounded-md border border-slate-300 bg-white p-3'}>
                    <option className={'p-3'} value="2_guests_1_room">2 Guests, 1 Room</option>
                    <option className={'p-3'} value="3_guests_1_room">3 Guests, 1 Room</option>
                    <option className={'p-3'} value="4_guests_2_room">4 Guests, 2 Rooms</option>
                </select>
            </label>

            {/* Search Button */}
            <button
                className={'h-[65px] rounded-r-lg bg-blue-500 px-8 text-lg text-gray-100 hover:bg-blue-600 hover:text-white'}
                type={'submit'}>Search
            </button>

        </form>
    );
};