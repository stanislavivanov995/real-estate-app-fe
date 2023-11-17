import Link from "next/link";

export default function Footer() {
    // TODO:
    return (
        <footer className={'text-sky-50 bg-white border-t px-10 pt-5 shadow-md bg-gradient-to-r from-blue-500 to-sky-500'}>

            <h4 className={'p-5 text-center font-bold text-4xl text-white'}>
                Everything you need in one booking app!
            </h4>

            <section className={'mx-20 mt-5 flex justify-between gap-10'}>

                <div>
                    <img src="#" alt="SITE_FOOTER_LOGO"/>
                    <p className={'text-sm italic'} >I think some short text here will be a nice idea.</p>
                    <p className={'text-sm italic'} >Just two paragraphs no more.</p>
                </div>

                <nav className={'flex flex-col gap-2'}>
                    <Link className={'text-sm hover:text-white hover:underline'}
                          href={'/public/faq'}>FAQ</Link>
                    <Link className={'text-sm hover:text-white hover:underline'}
                          href={'/public/customer-service'}>Customer Service</Link>
                    <Link className={'text-sm hover:text-white hover:underline'}
                          href={'/public/how-to-guide'}>How to guide</Link>
                    <Link className={'text-sm hover:text-white hover:underline'}
                          href={'/public/contacts'}>Contacts</Link>
                </nav>

            </section>

            <p className={'mt-5 border-t py-2 text-center text-[13px]'}>All right reserved &copy; ....</p>

        </footer>
    );
}
