import NotFoundLayout from '@/layouts/NotFound';
import { routeTree } from '@/routeTree.gen';
import { createRouter } from '@tanstack/react-router';

const router = createRouter({
    routeTree,
    defaultNotFoundComponent: NotFoundLayout,
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

export { router };

export type Router = typeof router;
