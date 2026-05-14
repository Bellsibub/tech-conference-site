export type Conference = {
    name: string;
    brandCode: string;
    tagline: string;
    startDate: string;
    endDate: string;
    location: {
        venue: string;
        city: string;
        cityAbbreviation: string;
        state: string;
    };
};

export type TrackRaw = {
    id: string;
    name: string;
    description: string;
    color: string;
};

export type SpeakerRaw = {
    id: string;
    name: string;
    role: string;
    company: string;
    avatar: string;
    bio: string;
    featured: boolean;
};

export type TalkRaw = {
    id: string;
    title: string;
    speakerId: string;
    day: number;
    trackId: string;
    startTime: string;
    endTime: string;
    location: string;
    description: string;
    highlighted: boolean;
};

export type Speaker = SpeakerRaw & {
    talk: Talk;
};

export type Talk = TalkRaw & {
    track: TrackRaw | undefined;
    speaker: SpeakerRaw | undefined;
};
