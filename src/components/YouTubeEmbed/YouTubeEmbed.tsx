import React from "react"

import YouTube, {YouTubeProps} from "react-youtube"

type YouTubeEmbedProps = Omit<YouTubeProps, "videoId"> & {
  url: string
  width: number
  height: number
}

/**
 * Extracts the YouTube ID from the given url.
 * There are three types of YouTube urls:
 *   1. https://www.youtube.com/watch?v=YOUTUBEID
 *   2. https://youtu.be/YOUTUBEID
 *   3. https://www.youtube.com/embed/YOUTUBEID
 * @param url
 * @return The YouTubeId string for the video
 */
function extractYouTubeId(url: string): string {
  const lastPathComponent = url.slice(url.lastIndexOf("/") + 1)
  return lastPathComponent.startsWith("watch?v=")
    ? lastPathComponent.slice(8) // the length corresponding to 'watch?v='
    : lastPathComponent
}

export default function YouTubeEmbed({
  url,
  width,
  height,
  ...rest
}: YouTubeEmbedProps) {
  const youtubeId = extractYouTubeId(url)
  return (
    <YouTube
      videoId={youtubeId}
      opts={{
        width: width,
        height: height,
        playerVars: {
          autoplay: false
        }
      }}
      {...rest}
    />
  )
}
