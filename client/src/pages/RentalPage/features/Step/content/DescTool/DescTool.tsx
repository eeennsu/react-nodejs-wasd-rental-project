import type { FC } from 'react';
import { useToolStore } from  '../../../../../../zustand';
import { dateFormmat } from '../../../../utils/step';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import ToolState from '../../templates/ToolState';
import DescToolButtons from './DescToolButtons';
import useOneViewTool from '../../../../queries/tool/useOneViewTool';

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
            <div className='w-full h-full'>
                {
                    data && (
                        <img src={src} className='object-contain w-full h-full shadow-lg hover:shadow-2xl' alt={`${tool?.tool_content} 이미지` } />
                    )
                }
            </div>              
            <div className='flex flex-col justify-between '>
                <div className='mt-8'>
                    <h3 className='font-[800] text-lg'>
                        {tool?.tool_name}
                    </h3>
                    <ToolState status={tool?.tool_state} />
                    <div className='flex flex-col gap-4 mt-6'>
                        <Paragraph title='툴 standard' text={tool?.tool_standard} />
                        <Paragraph title='기자재 사양' text={tool?.tool_spec} />
                        <Paragraph title='업데이트 날짜' text={dateFormmat(tool?.tool_update_at)} />                     
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