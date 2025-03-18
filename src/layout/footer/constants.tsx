import {MdLocationPin, MdLocalPhone, MdOutlineEmail, MdFax, MdDirectionsBus} from "react-icons/md";
import {ReactElement} from "react";
import {TContact} from "@/types";

type ConstantsListT = {
    icon: ReactElement,
    label: string,
    sub_label: (value: string) => ReactElement,
    key: keyof TContact

}
export const contactsList = (language: string): ConstantsListT[] => [
    {
        icon: <MdLocationPin/>,
        label: "Manzil",
        sub_label: (value) => (
            <span>
                {value}
            </span>
        ),
        key: language === "ru" ? "addressRus" : "address"
    },
    {
        icon: <MdOutlineEmail/>,
        label: "Savolingiz bormi?",
        sub_label: (value) => (
            <a
                href={`mailto:${value}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {value}
            </a>
        ),
        key: "emailForContract"

    },
    {
        icon: <MdOutlineEmail/>,
        label: "Shartnomalar uchun",
        sub_label: (value) => (
            <a
                href={`mailto:${value}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {value}
            </a>
        ),
        key: "email"

    },
    {
        icon: <MdLocalPhone/>,
        label: "Bizga qo'ng'iroq qiling",
        sub_label: (value) => (
            <a href={`tel:${value}`}>
                {value}
            </a>
        ),
        key: "phone"

    },
    {
        icon: <MdFax/>,
        label: "Faks",
        sub_label: (value) => (
            <a href={`tel:${value}`} target="_blank">
                {value}
            </a>
        ),
        key: "fax"

    },
    {
        icon: <MdDirectionsBus/>,
        label: "Avtobuslar",
        sub_label: (value) => <span>{value}</span>,
        key: "bus"
    },

];
