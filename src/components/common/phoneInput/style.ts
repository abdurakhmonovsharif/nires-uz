import { createStyles } from 'antd-style';

const usePhoneInputStyles = createStyles(({ token }) => ({
    input: {
        marginBottom: 0,
        borderRadius: 10,
        padding: '9px 12px',
        background: token.colorBgContainer,
        borderColor: token.colorBorder,
        fontSize: 14,
        color: token.colorTextBase,
        '&:hover': {
            background: token.colorBgContainer,
            borderColor: token.colorPrimary,
        },
        '&:focus': {
            background: token.colorBgContainer,
            borderColor: token.colorPrimary,
            boxShadow: `0 0 0 2px rgba(88, 5, 255, 0.06)`,
            outline: 0,
        },
    },
}));

export default usePhoneInputStyles;
