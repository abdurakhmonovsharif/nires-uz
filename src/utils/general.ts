import { API_URL, PHONE_REGEX } from "@/constants";
import qs from "qs";
import { TReqParams } from "@/types";

export const legalEntityEmailRegex =
  /^[a-zA-Z0-9._%+-]+@(?!.*\b(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|icloud\.com|email\.ru|email\.com)\b)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const isLegalEntityEmail = (email: string): boolean => {
  return legalEntityEmailRegex.test(email);
};

export function formatTimestamp(timestamp: string) {
  const date = new Date(
    timestamp.toString().length === 13 ? timestamp : Number(timestamp) * 1000
  );

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(2);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return {
    date: `${day}.${month}.${year}`,
    time: `${hours}:${minutes}`,
  };
}

export const getFile = (url?: string): string => {
  return `${API_URL}/ap1/files/download/resource?file=/${
    url?.startsWith("/") ? url.replace("/", "") : url
  }`;
};
export const formatQueryParams = (params: TReqParams): string => {
  const formattedParams: Record<string, any> = { ...params };

  const filteredParams: Record<string, any> = {};
  Object.keys(formattedParams).forEach((key) => {
    const value = formattedParams[key];
    if (
      value !== undefined &&
      value !== null &&
      value !== "" &&
      !(
        typeof value === "object" &&
        !Array.isArray(value) &&
        Object.keys(value).length === 0
      )
    ) {
      filteredParams[key] = value;
    }
  });

  return qs.stringify(filteredParams, {
    arrayFormat: "repeat",
    skipNulls: true,
    encodeValuesOnly: true,
    allowDots: true,
  });
};

export const filterEmptyParams = (inputParams: Record<string, any>): string => {
  const filteredParams = Object.fromEntries(
    Object.entries(inputParams).filter(
      ([_, value]) => value !== "" && value !== undefined && value !== null
    )
  );
  return qs.stringify(filteredParams);
};

export const phoneFormatter = (phone?: string) => {
  if (!phone) return;
  return phone.replace(PHONE_REGEX, "+$1 ($2) $3 $4 $5");
};

export const isEmptyObject = (
  obj: object | undefined | null,
  loading?: boolean
): boolean => {
  if (loading) return false;
  if (!obj) return true;
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const capitalize = (word: string): string => {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const convertToYouTubeEmbedUrl = (url: string): string | null => {
  const videoIdPattern =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;

  const match = url.match(videoIdPattern);
  if (match && match[1]) {
    const videoId = match[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return null;
};

export function extractVideoId(url: string) {
  const match = url.match(
    /(?:youtu\.be\/|\/embed\/|\/v\/|\/watch\?v=|&v=|\/videos\/)([^"&?\/\s]{11})/
  );
  return match && match[1];
}

export const getAlt = (str: string, maxLength: number = 50): string => {
  if (!str) return "Image description not available";

  const cleanStr = str.replace(/[^a-zA-Z0-9\s]/g, " ");

  let formattedStr = cleanStr
    .trim()
    .replace(/\s+/g, " ")
    .replace(/^./, (char) => char.toUpperCase());

  if (formattedStr.length > maxLength) {
    formattedStr = formattedStr.slice(0, maxLength - 3).trim() + "...";
  }

  return formattedStr || "Image description not available";
};
