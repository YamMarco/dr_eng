// Photos and videos for the public home page. Put the files in static/home/ and set
// the paths here (e.g. image: '/home/bus.webp', video: '/home/bus.mp4' with the image
// as its poster). A slot left empty shows its gradient art instead.
export type Media = { image?: string; video?: string };

export const homeMedia: Record<string, Media> = {
	hero: {},
	break: {},
	bus: {},
	evening: {},
	exam: {},
	oral: {}
};
