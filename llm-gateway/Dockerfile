# LiteLLM proxy for the app's AI grading. Deploy anywhere that runs a container
# (Railway, Fly, Render); Vercel can't host it (long-lived Python server).
FROM python:3.12-slim

RUN pip install --no-cache-dir "litellm[proxy]==1.104.0"
WORKDIR /app
COPY config.yaml .

# $PORT is set by the host; 4000 locally.
CMD litellm --config /app/config.yaml --host 0.0.0.0 --port ${PORT:-4000}
