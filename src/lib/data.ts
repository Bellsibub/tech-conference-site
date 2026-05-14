import data from './data.json';
import type {
    Conference,
    Speaker,
    SpeakerRaw,
    Talk,
    TalkRaw,
    TrackRaw,
} from './types';

export const getConference = (): Conference => {
    return data.conference;
};

export const getTracks = (): TrackRaw[] => {
    return data.tracks;
};

export const getTalks = (): Talk[] => {
    return data.talks.map((talk: TalkRaw) => ({
        ...talk,
        track: data.tracks.find((track) => track.id === talk.trackId),
        speaker: data.speakers.find((speaker) => speaker.id === talk.speakerId),
    }));
};

export const getSpeakers = (): Speaker[] => {
    const talks = getTalks();

    return data.speakers.map((speaker: SpeakerRaw) => {
        const talk = talks.find((talk) => talk.speakerId === speaker.id);

        if (!talk) {
            throw new Error(`No talk found for speaker ${speaker.id}`);
        }

        return {
            ...speaker,
            talk,
        };
    });
};

export const getKeynoteTalk = (): Talk | undefined => {
    return getTalks().find(
        (talk) => talk.track?.name.toLowerCase() === 'keynote',
    );
};

export const getFeaturedSpeakers = (): Speaker[] => {
    return getSpeakers().filter((speaker) => speaker.featured);
};

export const getScheduleHighlights = (): Talk[] => {
    return getTalks().filter((talk) => talk.highlighted);
};

type ScheduleFilters = {
    day?: number;
    trackIds?: string[];
    savedTalkIds?: string[];
    showSavedOnly?: boolean;
};

export const getFilteredTalks = ({
    day,
    trackIds = [],
    savedTalkIds = [],
    showSavedOnly = false,
}: ScheduleFilters): Talk[] => {
    return getTalks().filter((talk) => {
        const matchesDay = day ? talk.day === day : true;

        const matchesTrack =
            trackIds.length > 0
                ? talk.track !== undefined && trackIds.includes(talk.track.id)
                : true;

        const matchesSaved = showSavedOnly
            ? savedTalkIds.includes(talk.id)
            : true;

        return matchesDay && matchesTrack && matchesSaved;
    });
};

export const getTalkById = (talkId: string): Talk | undefined => {
    return getTalks().find((talk) => talk.id === talkId);
};

export const getSpeakerById = (speakerId: string): Speaker | undefined => {
    return getSpeakers().find((speaker) => speaker.id === speakerId);
};
