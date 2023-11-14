import UserNavLinks from "@/components/layouts/UserLayout/UserNavLinks";
import AvatarMenu from "@/components/layouts/UserLayout/AvatarMenu";

export default function UserLayout({children}) {
    return (
        <>
            <header className={"flex items-center justify-between border-b border-slate-300 px-12 py-3 shadow"}>

                <div className={'flex gap-20'}>

                    {/* LOGO */}
                    <div>SITE LOGO</div>

                    {/* Nav Links */}
                    <UserNavLinks />

                </div>

                {/* Avatar and menu */}
                    <AvatarMenu />

            </header>
            <main className={'min-h-screen bg-gray-100'}>
                {children}
            </main>
        </>
    );
};