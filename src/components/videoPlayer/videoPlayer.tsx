import { ENDPOINTS } from "@/constants";
import { api } from "@/libs";
import { useEffect, useState } from "react";

const fetchVideo = async (videoPath?: string) => {
  if (!videoPath) return;
  try {
    const response = await api.get(
      `${ENDPOINTS.videoGet}?videoPath=${encodeURIComponent(videoPath)}`,
      {
        headers: {
          Range: "bytes=0-",
        },
        responseType: "blob",
      },
    );

    if (response.status !== 206 && response.status !== 200) {
      throw new Error("Failed to fetch video");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching video:", error);
  }
};

export const VideoPlayer = ({
  videoPath,
  onEnd,
  loop,
}: {
  videoPath?: string;
  loop?: boolean;
  onEnd?: () => void;
}) => {
  const [videoUrl, setVideoUrl] = useState<string>("");

  useEffect(() => {
    (async () => {
      const videoData = await fetchVideo(videoPath);
      if (videoData) {
        const url = URL.createObjectURL(videoData);
        setVideoUrl(url);
      }
    })();
  }, [videoPath]);

  return (
    <video
      controls
      autoPlay
      muted
      loop={loop}
      className="relative z-10 rounded-2xl w-full h-full object-cover"
      playsInline
      src={videoUrl}
      onEnded={onEnd}
    ></video>
  );
};
