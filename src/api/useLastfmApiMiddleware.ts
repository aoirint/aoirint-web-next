import React from "react";

interface LastFmApiMiddlewareV1RecentTracksResponse {
  recenttracks: {
    track: {
      artist: {
        "#text": string;
      };
      image: {
        size: string;
        "#text": string;
      }[];
      album: {
        "#text": string;
      };
      name: string;
      "@attr"?: {
        nowplaying: "true" | string;
      };
      url: string;
      date?: {
        uts: string;
        "#text": string;
      };
    }[];
  };
}

export interface LastfmTrack {
  isPlaying: boolean;
  title: string | null;
  url: string | null;
  artist: string | null;
  album: string | null;
  albumArtUrl: string | null;
}

const useLastfmApiMiddleware = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [track, setTrack] = React.useState<LastfmTrack | null>(null);

  React.useEffect(() => {
    if (loading) {
      fetch("https://lastfm-api-middleware.aoirint.com/v1/recenttracks")
        .then((data) => data.json())
        .then((data: LastFmApiMiddlewareV1RecentTracksResponse) => {
          const lastTrack =
            data != null && data?.recenttracks.track.length > 0
              ? data.recenttracks.track[0]
              : null;
          const isPlaying = lastTrack?.["@attr"]?.nowplaying === "true";

          const lastTrackUrl = lastTrack?.url ?? null;
          const lastTrackTitle = lastTrack?.name ?? null;
          const lastTrackAlbumName = lastTrack?.album["#text"] ?? null;
          const lastTrackArtist = lastTrack?.artist["#text"] ?? null;
          const lastTrackAlbumArt =
            lastTrack?.image.filter((image) => image.size === "medium")[0] ??
            null;
          const lastTrackAlbumArtUrl = lastTrackAlbumArt?.["#text"] ?? null;

          setTrack({
            isPlaying: isPlaying,
            title: lastTrackTitle,
            url: lastTrackUrl,
            artist: lastTrackArtist,
            album: lastTrackAlbumName,
            albumArtUrl: lastTrackAlbumArtUrl,
          });
          setLoading(false);
        })
        .catch((error: unknown) => {
          console.error(error);
        });
    }
  }, [loading, track]);

  return {
    loading,
    track,
  };
};

export default useLastfmApiMiddleware;
