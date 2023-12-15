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
import Paragraph from './Paragraph';
import { getImgURL } from '../../../../utils/step';

const DescTool: FC = () => {

    const { tool, setToolImg } = useToolStore(state => ({
        tool: state.tool,
        setToolImg: state.setToolImg
    }), shallow);

    const { data, isLoading, error } = useOneViewTool(tool?.tool_id as string);
    const src = getImgURL(data?.result?.img?.img_url);

    useEffect(() => {
        data?.result?.img && setToolImg(data?.result?.img);
    }, [data]);
    
    return (
        <section className='h-[580px] md:h-[480px] flex flex-col'>
            <div className='flex h-full md:gap-8 max-md:flex-col'>
                {
                    isLoading ? (
                        <ImageLoading />
                    ) : error ? (
                        <FetchDatasError type='warning' msg='이미지를 불러오는데 실패하였습니다. 관리자에게 문의해 주세요.' />
                    ) : (
                        <div className='flex items-center w-full h-full'>
                            {
                                data && (
                                    <img src={src} className='object-cover w-full h-full rounded-md shadow-xl' alt={`${tool?.tool_content} 이미지` } />
                                )
                            }
                        </div> 
                    )
                }           
                <div className='flex flex-col justify-between w-full h-full md:py-10'>
                    <div className='flex flex-row md:flex-col max-md:justify-between max-md:mt-6'>
                        <h3 className='font-[800] text-lg flex max-md:items-center'>
                            {tool?.tool_name}
                        </h3>
                        <ToolState status={tool?.tool_state} />
                    </div>
                    <div className='flex flex-col h-full gap-1 mt-8'>                
                        <Paragraph title='툴 standard' text={tool?.tool_standard} />
                        <Paragraph title='기자재 사양' text={tool?.tool_spec} />
                        <Paragraph title='업데이트 날짜' text={getDateFormat(tool?.tool_update_at)} />                     
                    </div>                     
                </div>
            </div>
            <DescToolButtons />   
        </section>
    );
}

export default DescTool;



const ImageLoading: FC = () => {

    return (
        <div className='flex items-center justify-center h-full'>
            <Spin size='large' />         
        </div>
    );
}