import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {$fetch, api} from "@/libs";
import {TContact, TMessage} from "@/types";
import {ENDPOINTS} from "@/constants";
import {successMessage} from "@/utils";

export const useGetContact = () => {
    return useQuery({
        queryKey: ["contacts"],
        queryFn: async () => {
            return (
                await $fetch<TContact>({
                    path: ENDPOINTS.contacts,
                })
            )?.data;
        },
    });
};
export const useSendMessage = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (event: TMessage) => {
            const {data} = await api.post<TMessage>(ENDPOINTS.message, event);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['message']});
            successMessage("Xabar jo'natildi");
            history.back();
        },
    });
};
