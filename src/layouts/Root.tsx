import { Outlet } from '@tanstack/react-router';

const RootLayout = () => {
    return (
        <>
            <h1 className="text-neutral-100">Root</h1>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;
