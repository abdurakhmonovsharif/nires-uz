import { Switch } from 'antd';
import styled from 'styled-components';

export const AntSwitch = styled(Switch)`
    min-width: ${({ size }) => (size == 'small' ? '28px' : '35px')};
    height: ${({ size }) => (size == 'small' ? '16px' : '20px')};

    & .ant-switch-handle {
        width: ${({ size }) => (size == 'small' ? '12px' : '15px')};
        height: ${({ size }) => (size == 'small' ? '12px' : '15px')};
        top: ${({ size }) => (size == 'small' ? '1.6px' : '2px')};
        inset-inline-start: auto;
        left: ${({ size }) => (size == 'small' ? '1.6px' : '2.5px')};
        &::before {
            border-radius: 100%;
        }
    }

    &.ant-switch-checked .ant-switch-handle {
        right: ${({ size }) => (size == 'small' ? '2px' : '2.5px')};
        inset-inline-start: auto;
    }
`;
