import {languageModalMenu} from '../constants';
import {useAppStore} from '@/store';
import {LanguageDropdownProps, TLanguages} from '@/types';
import {ItemType} from 'antd/es/menu/interface';
// import {useMediaQuery} from '@/hooks';
import {CustomDropdown} from "@/components/common/dropdown";
import {useChangeLang} from "@/libs/hooks/useLang.ts";
import {Button} from "@/components";

export const LanguageDropdown = ({customBtn,variant}: LanguageDropdownProps) => {
    const {setLanguage, language} = useAppStore();
    const {change} = useChangeLang();
    // const {mobileLg, mobile, tablet} = useMediaQuery();

    const setLang = (lng: TLanguages): void => {
        setLanguage(lng as TLanguages);
        change(lng);
    };

    const items: ItemType[] = languageModalMenu.map((item) => ({
        ...item,
        onClick: () => setLang(item?.key as TLanguages),
    }));

    // const getLabel = () => {
    //     if (language == 'uz') return "O'zbekcha";
    //     if (language == 'ru') return 'Русский';
    //     if (language == 'en') return 'English';
    //     if (language == 'kr_uz') return 'Ўзбекча';
    // };
    
    const getSlug = () =>{
        if (language == 'uz') return "UZ";
        if (language == 'ru') return 'РУ';
        if (language == 'en') return 'EN';
        //if (language == 'kr_uz') return 'ЎЗ';
    }

    const getIcon = () =>  languageModalMenu.find(item => item.key === language)?.buttonLabelIcon;

    return (
        <CustomDropdown
            menu={{
                items,
                selectable: true,
                defaultSelectedKeys: [language],
            }}
            trigger={['click']}
            overlayStyle={{width: 236}}

            forceRender>
            {customBtn ? (
                customBtn
            ) : (
                <Button
                    leftIcon={getIcon()}
                    type="primary"
                    className={"w-full [&_p]:!text-white"}
                    variant={variant}
                    label={true ? getSlug() : undefined}
                    
                />
            )}
        </CustomDropdown>
    );
};
