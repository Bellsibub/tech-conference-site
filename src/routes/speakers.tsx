import SpeakersLayout from '@/layouts/Speakers';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/speakers')({
    component: SpeakersLayout,
});
