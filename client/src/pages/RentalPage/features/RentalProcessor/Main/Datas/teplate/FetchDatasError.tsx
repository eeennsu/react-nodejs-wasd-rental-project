import type { FC } from 'react';
import { Alert, type AlertProps } from 'antd';

type Props = {
    type?: AlertProps['type']
    msg?: string;
}

const FetchDatasError: FC<Props> = ({ type = 'error', msg = '데이터를 불러오는데 실패했습니다. 관리자에게 문의해 주세요.' }) => {

    return (
        <div className='flex items-center justify-center flex-grow '>
            <Alert 
                message='Error' 
                description={msg} 
                type={type}
                showIcon                    
            />
        </div>
    );
}

export default FetchDatasError;