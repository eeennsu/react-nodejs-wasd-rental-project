import type { FC } from 'react';
import { Alert } from 'antd';

const FetchDatasError: FC = () => {

    return (
        <Alert message='Error' description='데이터를 가져오는 데 실패하였습니다. 관리자에게 문의해 주세요.' type='error' showIcon />
    );
};

export default FetchDatasError;