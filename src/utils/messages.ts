import { message } from 'antd';

export const errorMessage = (data: any): void => {
    message.open({
        type: 'error',
        content: data,
    });
};

export const successMessage = (data: any): void => {
    message.open({
        type: 'success',
        content: data,
    });
};
