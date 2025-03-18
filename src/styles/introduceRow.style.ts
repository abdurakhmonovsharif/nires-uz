import { createStyles } from 'antd-style';

const useIntroduceRowStyles = createStyles(({ token }) => {
    return {
        rankingList: {
            maxHeight: '330px',
            height: 'auto',
            overflowY: 'auto',
            marginTop: '12px',
            padding: '0',
            paddingRight: '5px',
            listStyle: 'none',
            li: {
                display: 'flex',
                alignItems: 'center',
                marginTop: '16px',
                zoom: '1',
                '&:first-child': {
                    marginTop: 0,
                },
                '&::before, &::after': {
                    display: 'table',
                    content: "' '",
                },
                '&::after': {
                    clear: 'both',
                    height: '0',
                    fontSize: '0',
                    visibility: 'hidden',
                },
            },

            '::-webkit-scrollbar-thumb': {
                width: '5px',
                height: '5px',
                borderRadius: '24px',
                backgroundColor: token.colorIcon,
            },
            '::-webkit-scrollbar': {
                width: '5px',
                height: '5px',
                backgroundColor: token.colorBgLayout,
            },
            [`@media screen and (max-width: ${token.screenLG}px)`]: {
                li: {
                    'span:first-child': { marginRight: '8px' },
                },
            },
        },
        rankingItemNumber: {
            display: 'inline-block',
            width: '20px',
            height: '20px',
            marginTop: '1.5px',
            marginRight: '16px',
            fontWeight: '600',
            fontSize: '12px',
            lineHeight: '20px',
            textAlign: 'center',
            borderRadius: '20px',
            backgroundColor: token.colorBgContainerDisabled,
        },
        rankingItemTitle: {
            flex: '1',
            marginRight: '8px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        },
        rankingItemNumberActive: {
            display: 'inline-block',
            width: '20px',
            height: '20px',
            marginTop: '1.5px',
            marginRight: '16px',
            fontWeight: '600',
            fontSize: '12px',
            lineHeight: '20px',
            textAlign: 'center',
            borderRadius: '20px',
            color: '#fff',
            backgroundColor: token['red-5'],
        },

        salesBar: {
            padding: '0',
            [`@media screen and (max-width: ${token.screenMD}px)`]: {
                padding: '16px',
            },
        },
        salesRank: {
            padding: '0 0 32px 24px',
        },

        salesCard: {
            '.ant-card-head': { position: 'relative' },
            '.ant-card-head-title': { alignItems: 'normal' },
            [`@media screen and (max-width: ${token.screenMD}px)`]: {
                padding: '16px',
            },
            [`@media screen and (max-width: ${token.screenSM}px)`]: {
                '.ant-tabs-content': {
                    paddingTop: '30px',
                },
            },
        },

        salesCardExtra: {
            height: 'inherit',
        },
        salesTypeRadio: {
            position: 'absolute',
            right: '54px',
            bottom: '12px',
        },
        trendText: {
            marginLeft: '8px',
            color: token.colorTextHeading,
        },
        rankingTitle: {
            [`@media screen and (max-width: ${token.screenMD}px)`]: {
                marginTop: '16px',
            },
        },

        regions: {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        },

        regionsList: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            li: {
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
            },
        },

        regionItemNumber: {
            display: 'inline-block',
            width: '20px',
            height: '20px',
            fontWeight: '600',
            fontSize: '12px',
            lineHeight: '20px',
            textAlign: 'center',
            borderRadius: '20px',
            backgroundColor: token.colorBgContainerDisabled,
        },
        regionItemTitle: {
            flex: '1',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        },
        regionItemNumberActive: {
            display: 'inline-block',
            width: '20px',
            height: '20px',
            fontWeight: '600',
            fontSize: '12px',
            lineHeight: '20px',
            textAlign: 'center',
            borderRadius: '20px',
            color: '#fff',
            backgroundColor: token['red-5'],
        },
    };
});

export default useIntroduceRowStyles;
