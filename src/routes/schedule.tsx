import ScheduleLayout from '@/layouts/Schedule';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/schedule')({
    component: ScheduleLayout,
});
