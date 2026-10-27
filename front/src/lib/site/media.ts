// Photos and videos for the public home page. Put the files in static/home/ and set
// the paths here (e.g. image: '/home/bus.webp', video: '/home/bus.mp4' with the image
// as its poster). A slot left empty shows its gradient art instead.
export type Media = { image?: string; video?: string };

// All photos: Unsplash License.
export const homeMedia: Record<string, Media> = {
	hero: { image: '/home/hero.webp' }, // Luke Porter, unsplash.com/photos/UGX2qdjdKkw
	break: { image: '/home/break.webp' }, // Juice Mendez, unsplash.com/photos/0wPugJfKafQ
	bus: { image: '/home/bus.webp' }, // Jadon Johnson, unsplash.com/photos/tD8iyxepip8
	evening: { image: '/home/evening.webp' }, // Marina Marcato, unsplash.com/photos/VsAapWHvex4
	exam: { image: '/home/exam.webp' }, // Yustinus Tjiuwanda, unsplash.com/photos/BCBGahg0MH0
	oral: { image: '/home/oral.webp' } // Sincerely Media, unsplash.com/photos/dxnEyQszbUo
};
