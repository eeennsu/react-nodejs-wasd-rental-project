import type { FC, ChangeEvent } from 'react';
import { useModalStore, useTabsStore } from '../../../../../zustand';
import { getTabName } from '../../../utils/tables';
import {  Input, message } from 'antd';
import Button from '../../../../../components/Button';

const { TextArea } = Input;

const RentSupply: FC = () => { 

    const { activeTab } = useTabsStore();

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    const { detailTool, setIsModalOpen, setSystemStep, text, setText } = useModalStore();

    return (
        <section className='flex items-center justify-center gap-4'>
            <div className='grid w-1/2 h-full grid-rows-3 bg-red-600'>
                <div className='flex w-full '>
                    <div className='w-1/2'>
                        <img src='http://via.placeholder.com/300x200' className='object-cover w-full h-full' />
                    </div>
                    <div className='flex flex-col items-center justify-center w-1/2 bg-amber-500'>
                        <h3 className='text-xl font-bold'>
                            {getTabName(activeTab)}
                        </h3>
                        <p className='flex items-center justify-center w-full px-4'>
                            {detailTool?.tool_name}
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat ullam atque officia totam laborum corporis et excepturi sunt voluptatem quia!
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center bg-yellow-200'>
                    <h2 className='text-2xl'>
                        기자재 설명
                    </h2>
                    <div className='grid w-full h-full grid-cols-3 place-items-center bg-slate-500'>
                        <div>
                            {detailTool?.tool_id}   
                        </div>
                        <div>
                            {detailTool?.tool_name}
                        </div>
                        <div>
                            {detailTool?.tool_purchase_division}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center bg-red-300'>
                    <h2 className='text-2xl'>
                        반출자 설명
                    </h2>
                    <div className='grid w-full h-full grid-cols-3 place-items-center bg-slate-500'>
                        <div className='text-center break-keep'>
                            {'소프트웨어 콘텐츠학과'}
                        </div>
                        <div>
                           {2021661110}
                        </div>
                        <div>
                            {'방은수'}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center w-1/2 h-full gap-5 bg-zinc-300'>
                <div className='flex justify-evenly'>
                    
                </div>
                <div className='w-full'>
                    <TextArea 
                        rows={6} 
                        style={{ resize: 'none' }} 
                        className='p-3' 
                        placeholder='대여 사유를 입력해주세요' 
                        value={text} 
                        onChange={handleTextChange}
                    />                      
                </div>   
            </div> 
        </section>
    );
};

export default RentSupply;