import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <h1 className={'h1-bold text-center'}>Homepage</h1>

            <div className="my-20 text-center">
                <Link className={'px-8 py-2 border shadow rounded-md hover:bg-light-500 hover:text-light-100'}
                    href={'/register'}>
                    Get Started
                </Link>
            </div>
        </>
    );
};