import React from "react"

import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "./YouTubeBorderRadius.css"

type YouTubeEmbedProps = {
  url: string
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
}: YouTubeEmbedProps) {
  const youtubeId = extractYouTubeId(url)
  return (
    <LiteYouTubeEmbed
      id={youtubeId}
      adNetwork={false}
      title="TACL LYF Camp Video"
      noCookie={true}
    />
  )
}
