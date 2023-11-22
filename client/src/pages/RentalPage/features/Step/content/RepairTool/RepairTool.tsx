import type { FC, ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { Input, Select, message } from 'antd';
import { useStepStore, useTabsStore, useToolStore, useUserStore } from '../../../../../../zustand';
import { repairResons } from '../../../../constants';
import { shallow } from 'zustand/shallow';
import { getImgURL } from '../../../../utils/step';
import { repairTool_API } from '../../../../../../api/repair/repair';
import Template from '../../templates/Template';
import Button from '../../../../../../components/Button';
import useStoreController from '../../../../../../hooks/commons/useStoreController';

const { TextArea } = Input;

const RepairTool: FC = () => {

    const activeTab = useTabsStore(state => state.activeTab);
    const user_id = useUserStore(state => state.user?.user_id);
    const { text, setText } = useStepStore(state => ({
        text: state.text,
        setText: state.setText
    }), shallow);

    const { tool, toolImg } = useToolStore(state => ({
        tool: state.tool,
        toolImg: state.toolImg
    }), shallow);
    
    const { handleStepInit } = useStoreController();

    const [resonSelect, setResonSelect] = useState<string | null>(null);
    
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
            fetchRepairTool();        
        } catch (error) {
            console.log(error);
            message.error('서버 에러가 발생하였습니다. 괸라자에게 문의해 주세요');
        } finally {
            handleBack();
        }
    }

    const fetchRepairTool = async () => {
        if (user_id && tool?.tool_id) {
            const repairData: RepairTool = {
                user_id: user_id,
                tool_id: tool.tool_id,
                repair_part: resonSelect!,
                repair_reason: text
            }; 

            const response = await repairTool_API(repairData);

            if (response.data[200] === 'OK') {
                message.success('수리 요청이 완료되었습니다');    
                console.log(response.data);
            } else {
                message.error('수리 요청에 실패하였습니다! 관리자에게 문의해 주세요');
            }
        } else {
            message.error('프론트 오류가 발생하였습니다. 관리자에게 문의해 주세요!');
        }         
    }

    const handleBack = () => {
        handleStepInit(activeTab);
    }

    return (
        <Template className='mt-[74px]'>
            <form className='grid grid-cols-2 gap-10' onSubmit={handleRepairRequest}>
                <div className='flex flex-col gap-4'>
                    <div className='relative h-2/3'>
                        <img src={getImgURL(toolImg!.img_url)} alt='이미지' className='w-full h-full bg-slate-300 rounded-[4px]' />   
                        <img src={''} alt='이미지' className='absolute bottom-0 right-0 w-20 h-20 bg-white' />  
                    </div>                            
                    <p>
                        {tool?.tool_content}
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
                            />
                        </div>      
                    </div>                
                    <footer className='flex justify-end gap-4'>
                        <Button onClick={handleBack} bgColor='01'>
                            돌아가기
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

export default RepairTool;