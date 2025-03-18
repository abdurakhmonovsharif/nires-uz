import {useQuery} from "@tanstack/react-query";
import {$fetch} from "@/libs";
import { TSocialMedia} from "@/types";
import {ENDPOINTS} from "@/constants";

export const useGetSocialMedias = () => {
    const query = useQuery({
        queryKey: ["socials"],
        queryFn: async () => {
            return (
                await $fetch<TSocialMedia[]>({
                    path: `${ENDPOINTS.socials}`,
                })
            )?.data;
        },
    });

    return query;
};