import type { ChangeEvent, FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Input, Select, message } from 'antd';
import { useModalStore, useTabsStore } from '../../../../../../zustand';
import { repairResons } from '../../../../constants';
import { TextAreaRef } from 'antd/lib/input/TextArea';
import Template from '../../templates/Template';
import Button from '../../../../../../components/Button';

const { TextArea } = Input;

const RepairSupply: FC = () => {
    
    const textRef = useRef<TextAreaRef | null>(null);

    const { activeTab, setActiveTab } = useTabsStore();
    const { detailTool, setIsModalOpen ,setSystemStep, text, setText } = useModalStore();

    const [resonSelect, setResonSelect] = useState<string | null>(null);

    const handleSelectChange = (value: string) => {
        setResonSelect(value);
    }

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    const renderOptions = repairResons.map((reson) => ({
        label: reson,
        value: reson
    }));

    const handleRepairRequest = () => {
        if (!resonSelect) {
            message.warning('목록을 선택해주세요.');

            return;
        }

        if (text.length <= 4) {
            message.warning('수리 사유를 5자 이상 입력해주세요.');

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
            handleBack();
        }
    }

    const handleBack = () => {
        setSystemStep('INIT');
        setActiveTab(1);
        setText('');
    }

    useEffect(() => {
        textRef.current?.focus();
    })

    return (
        <Template className='mt-[74px]'>
            {/* <div className='flex items-center w-full '>
                <div className='w-2/5'>
                    <img src='http://via.placeholder.com/300x200' className='object-contain' />  
                </div>
                <p className='w-3/5'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nulla veniam facilis laboriosam fuga amet enim obcaecati quis, consectetur molestiae placeat iusto dolores quibusdam neque. Cumque est eos laudantium delectus ratione excepturi deserunt dolorum illum blanditiis enim, amet officia quam maiores qui voluptatibus perspiciatis, voluptatem eaque praesentium? Molestias, dolorem iure!             
                </p>                 
            </div>                
            <div className='flex flex-col gap-4'>
                <div className='w-full'>
                    <select className='w-24 border border-neutral-400 bg-inherit'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                    </select>
                </div>
                <TextArea rows={6} style={{ resize: 'none' }} className='p-3' placeholder='수리할 내용을 입력해주세요' />           
            </div>    */}
            <div className='grid grid-cols-2 gap-10'>
                <div className='flex flex-col gap-4'>
                    <div className='relative h-2/3'>
                        <img src='' alt='이미지' className='w-full h-full bg-slate-300 rounded-[4px]' />   
                        <img src='' alt='이미지' className='absolute bottom-0 right-0 w-20 h-20 bg-white' />  
                    </div>                            
                    <p>
                        {detailTool?.tool_spec}  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nulla eligendi natus repellendus aliquam, placeat quisquam debitis! Ea facilis officiis ex omnis officia, fugit dicta rerum quasi numquam fuga a!
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
                        <Button onClick={handleBack} bgColor='02'>
                            뒤로 가기
                        </Button>
                        <Button onClick={handleRepairRequest} bgColor='01'>
                            수리 요청
                        </Button>    
                    </footer>
                </div>            
            </div>              
        </Template>
    );
}

export default RepairSupply;