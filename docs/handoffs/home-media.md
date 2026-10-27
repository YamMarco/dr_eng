# Handoff: home page media

Photos are in for all 6 slots (`front/static/home/`, uncropped; paths, credits and `focus` (object-position) in `front/src/lib/site/media.ts`). Left:

## 1. Videos (optional)

1-2 moments (e.g. `bus`, `oral`) as 4-8 s loops, no audio. Free sources: Pexels, Mixkit. Note photographer and URL in `media.ts`.

- `ffmpeg -i in.mp4 -an -vf "scale=-2:720" -c:v libx264 -crf 28 -preset slow -movflags +faststart out.mp4` (under 1.5 MB)
- Set `video` and keep the current WebP as `image` (poster).
- CSP allows `self` for `media-src`; don't hotlink.

## 2. Look

Dark theme not yet checked.
