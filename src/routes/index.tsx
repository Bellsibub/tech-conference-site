import HomeLayout from '@/layouts/Home';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    component: HomeLayout,
});
