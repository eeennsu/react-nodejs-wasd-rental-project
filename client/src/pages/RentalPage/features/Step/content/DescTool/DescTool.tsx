import type { FC } from 'react';
import { useToolStore } from  '../../../../../../zustand';
import { getDateFormat } from '../../../../utils/timePicker';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { Spin } from 'antd';
import ToolState from '../../templates/ToolState';
import DescToolButtons from './DescToolButtons';
import useOneViewTool from '../../../../queries/tool/useOneViewTool';
import FetchDatasError from '../../../RentalProcessor/Main/Datas/teplate/FetchDatasError';
import Image from 'antd/es/image/index';

const DescTool: FC = () => {

    const { tool, setToolImg } = useToolStore(state => ({
        tool: state.tool,
        setToolImg: state.setToolImg
    }), shallow);

    const { data, isLoading, error } = useOneViewTool(tool?.tool_id as string);
    const src = new URL(data?.result?.img?.img_url!, import.meta.env.VITE_LOCAL_SERVER_URL)?.href;

    useEffect(() => {
        data?.result?.img && setToolImg(data?.result?.img);
    }, [data]);

    return (
        <section className='md:h-[480px] grid grid-cols-2 gap-5'>
            {
                isLoading ? (
                    <Loading />
                ) : error ? (
                    <FetchDatasError type='warning' msg='이미지를 불러오는데 실패하였습니다. 관리자에게 문의해 주세요.' />
                ) : (
                    <div className='flex items-center w-full h-full'>
                        {
                            data && (
                                <Image src={src} className='object-contain w-full h-full rounded-md shadow-xl' alt={`${tool?.tool_content} 이미지` } />
                            )
                        }
                    </div> 
                )
            }           
            <div className='flex flex-col justify-between '>
                <div className='mt-8'>
                    <h3 className='font-[800] text-lg'>
                        {tool?.tool_name}
                    </h3>
                    <ToolState status={tool?.tool_state} />
                    <div className='flex flex-col gap-4 mt-6'>
                        <Paragraph title='툴 standard' text={tool?.tool_standard} />
                        <Paragraph title='기자재 사양' text={tool?.tool_spec} />
                        <Paragraph title='업데이트 날짜' text={getDateFormat(tool?.tool_update_at)} />                     
                    </div>
                </div>
                <DescToolButtons />            
            </div>
        </section>
    );
};

export default DescTool;



const Paragraph: FC<{ title: string; text?: string }> = ({ title, text }) => {
    
    return (
        <div className='flex gap-2'>
            <div>
                {title} : 
            </div>  
            <p>
                {text}
            </p>
        </div>
    );
}

const Loading: FC = () => {

    return (
        <div className='flex items-center justify-center h-full'>
            <Spin size='large' />         
        </div>
    );
}