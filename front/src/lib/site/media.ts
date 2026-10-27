// Photos and videos for the public home page. Put the files in static/home/ and set
// the paths here (e.g. image: '/home/bus.webp', video: '/home/bus.mp4' with the image
// as its poster). A slot left empty shows its gradient art instead. Files are uncropped;
// `focus` (CSS object-position) keeps the subject in frame at every shape.
export type Media = { image?: string; video?: string; focus?: string };

// All photos: Unsplash License.
export const homeMedia: Record<string, Media> = {
	// Luke Porter, unsplash.com/photos/UGX2qdjdKkw
	hero: { image: '/home/hero.webp', focus: '30% 40%' },
	// Juice Mendez, unsplash.com/photos/0wPugJfKafQ
	break: { image: '/home/break.webp', focus: '50% 40%' },
	// Jadon Johnson, unsplash.com/photos/tD8iyxepip8
	bus: { image: '/home/bus.webp', focus: '50% 30%' },
	// Marina Marcato, unsplash.com/photos/VsAapWHvex4
	evening: { image: '/home/evening.webp', focus: '50% 45%' },
	// Yustinus Tjiuwanda, unsplash.com/photos/BCBGahg0MH0
	exam: { image: '/home/exam.webp', focus: '50% 55%' },
	// Vitaly Gariev, unsplash.com/photos/dKEP847G5Fo
	oral: { image: '/home/oral.webp', focus: '50% 22%' }
};
