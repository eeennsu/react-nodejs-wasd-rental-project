import type { FC, ChangeEvent, FormEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Input, Select, message } from 'antd';
import { useStepStore, useToolStore } from '../../../../../../zustand';
import { repairResons } from '../../../../constants';
import { TextAreaRef } from 'antd/lib/input/TextArea';
import { shallow } from 'zustand/shallow';
import Template from '../../templates/Template';
import Button from '../../../../../../components/Button';
import useStoreController from '../../../../../../hooks/commons/useStoreController';

const { TextArea } = Input;

const RepairSupply: FC = () => {

    const { text, setText } = useStepStore(state => ({
        text: state.text,
        setText: state.setText
    }), shallow);

    const { tool, imgUrl } = useToolStore(state => ({
        tool: state.tool,
        imgUrl: state.toolImg?.img_url
    }), shallow);
    
    const { handleStepInit } = useStoreController();

    const [resonSelect, setResonSelect] = useState<string | null>(null);
    const textRef = useRef<TextAreaRef | null>(null);

    const renderOptions = repairResons.map((reson) => ({
        label: reson,
        value: reson
    }));

    const handleSelectChange = (value: string) => {
        setResonSelect(value);
    }

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    const handleRepairRequest = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
            
        if (!resonSelect) {
            message.warning('수리 목록을 선택해주세요.');

            return;
        }

        if (text.length <= 0) {
            message.warning('수리 사유를 입력해주세요.');

            return;
        }

        try {
            // API 호출

            //
            message.success('수리 요청이 완료되었습니다');    
        } catch (error) {
            console.log(error);
            message.error('알수 없는 에러가 발생했습니다. 괸라자에게 문의해주세요');
        } finally {
            handleStepInit();
        }
    }

    useEffect(() => {
        textRef.current?.focus();
    }, []);

    return (
        <Template className='mt-[74px]'>
            <form className='grid grid-cols-2 gap-10' onSubmit={handleRepairRequest}>
                <div className='flex flex-col gap-4'>
                    <div className='relative h-2/3'>
                        <img src='' alt='이미지' className='w-full h-full bg-slate-300 rounded-[4px]' />   
                        <img src='' alt='이미지' className='absolute bottom-0 right-0 w-20 h-20 bg-white' />  
                    </div>                            
                    <p>
                        {tool?.tool_spec}  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nulla eligendi natus repellendus aliquam, placeat quisquam debitis! Ea facilis officiis ex omnis officia, fugit dicta rerum quasi numquam fuga a!
                    </p>
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col items-end bg-01 rounded-[4px]'>
                        <div className='w-28 h-full my-3.5 mr-3.5'>
                            <Select                      
                                placeholder='목록'
                                onChange={handleSelectChange}
                                options={renderOptions}
                                size='small'
                                className='w-full'                    
                                dropdownStyle={{ overflow: 'hidden', textOverflow: 'ellipsis' }}        
                            />
                        </div>
                        <div className='w-full px-3.5 pb-3.5'>
                            <TextArea 
                                classNames={{ textarea: 'w-full h-full p-3 rounded-none' }} 
                                value={text} 
                                onChange={handleTextChange} 
                                style={{ resize: 'none' }}  
                                placeholder='수리할 내용을 입력해주세요' 
                                rows={20} 
                                ref={textRef}
                            />
                        </div>      
                    </div>                
                    <footer className='flex justify-end gap-4'>
                        <Button onClick={handleStepInit} bgColor='02'>
                            뒤로 가기
                        </Button>
                        <Button type='submit' bgColor='01'>
                            수리 요청
                        </Button>    
                    </footer>
                </div>            
            </form>              
        </Template>
    );
}

export default RepairSupply;