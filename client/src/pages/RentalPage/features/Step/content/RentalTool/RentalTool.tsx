import type { FC, ChangeEvent, FormEvent, PropsWithChildren, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { useStepStore, useTabsStore, useTimeStore, useToolStore, useUserStore } from '../../../../../../zustand';
import { Input as AntdInput, message } from 'antd';
import { useRef, useEffect, forwardRef } from 'react';
import { shallow } from 'zustand/shallow';
import Button from '../../../../../../components/Button';
import Template from '../../templates/Template';
import Picker from '../dates/DatePicker';
import useStoreController from '../../../../../../hooks/commons/useStoreController';
import { rentalTool_API } from '../../../../../../api/rental/rentalApi';

const { TextArea } = AntdInput;
const regClassNum = /^\d{10}$/;

const RentalTool: FC = () => { 
    
    const activeTab = useTabsStore(state => state.activeTab);
    const { text, setText, } = useStepStore(state => ({
        text: state.text,
        setText: state.setText,
    }), shallow);
    const rentDate = useTimeStore(state => state.rentDate);
    const returnDate = useTimeStore(state => state.returnDate);
    const userId = useUserStore(state => state.user?.user_id);
    const tool = useToolStore(state => state.tool);
    const setTool = useToolStore(state => state.setTool);
    const { setStepInit, setDateInit } = useStoreController();

    const refUserType = useRef<HTMLInputElement | null>(null);
    const refClassNum = useRef<HTMLInputElement | null>(null);
    const refUserName = useRef<HTMLInputElement | null>(null);
    
    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    const handleRentRequest = async (e: FormEvent<HTMLFormElement>) => {   
        e.preventDefault();
        
        const valUserType = refUserType.current?.value;
        const valClassNum = refClassNum.current?.value;
        const valUserName = refUserName.current?.value;

        if (valUserType!.length <= 0 || valClassNum!.length <=0 || valUserName!.length <= 0) {
            message.warning('반출자 정보를  입력해 주세요.');
            
            return;
        }

        if (valClassNum && !regClassNum.test(valClassNum)) {
            message.warning('잘못된 형식의 학번입니다.');
            
            return;
        }

        if (!rentDate) {
            message.warning('대여할 날짜를 지정해주세요.');
            
            return;
        }

        if (!returnDate) {
            message.warning('반납할 날짜를 지정해주세요.');
            
            return;
        }

        if (text.length <= 0) {
            message.warning('반출 사유를 입력해 주세요.');

            return;
        }

        try {
            fetchRentalTool();         
        } catch (error) {
            console.log(error);
            message.error('알수 없는 에러가 발생했습니다. 괸라자에게 문의해 주세요');
        } finally {
            handleBack();
        }
    }

    const fetchRentalTool = async () => {
        if (tool?.tool_id && userId) {
            const repairData: RentalTool = {
                tool_id: tool?.tool_id,
                user_id: userId
            };

            const response = await rentalTool_API(repairData);

            if (response.data[200] === 'OK') {
                message.success('대여 요청이 완료되었습니다');    
                console.log(response.data);
            } else {
                message.error('대여 요청에 실패하였습니다! 관리자에게 문의해 주세요');
            }   
        } else {
            message.error('프론트 오류가 발생하였습니다. 관리자에게 문의해 주세요!');
        }
    }

    const handleBack = () => {
        setStepInit(activeTab);
        setDateInit();
        setTool(null);
    }

    useEffect(() => {
        refUserType.current?.focus();
    }, []);

    return (  
        <Template className='h-full mt-2'>
             <form className='flex flex-col h-full gap-8' onSubmit={handleRentRequest}>    
                <div className='grid flex-1 grid-cols-3 gap-8'>
                    <div className='h-full col-span-1'> 
                        <div className='h-2/3'>
                            <img src='' alt='이미지' className='h-full bg-slate-200 rounded-sm2' />
                        </div>                 
                        <div className='flex flex-col gap-3 h-1/3'>
                            <h3 className='mt-2 text-xl font-semibold'>
                                {tool?.tool_content}
                            </h3>
                            <p className='h-full mt-2 overflow-y-auto font-semibold leading-4 text-ellipsis my-scr'> 
                                {tool?.tool_spec} Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus velit possimus accusamus omnis, eos laudantium.
                            </p>
                        </div>                                               
                    </div>
                    <div className='grid col-span-2 grid-rows-2 gap-9'>
                        <InfoContainer>
                            <TitleContainer>
                                기자재 설명
                            </TitleContainer> 
                            <DescContainer>
                                <DescBox>
                                    자산번호
                                </DescBox>
                                <DescBox isCenter>
                                    품명
                                </DescBox>
                                <DescBox>
                                    규격
                                </DescBox>
                            </DescContainer>
                        </InfoContainer>
                        <InfoContainer>
                            <TitleContainer>
                                반출자 설명
                            </TitleContainer>
                            <DescContainer>
                                <DescBox>
                                    <Input placeholder='소속을 입력해 주세요' ref={refUserType} />                                    
                                </DescBox>
                                <DescBox isCenter>
                                    <Input className='input-classnumber' minLength={10} maxLength={10} type='number' placeholder='학번을 입력해 주세요' ref={refClassNum} />
                                </DescBox>
                                <DescBox>
                                    <Input placeholder='이름을 입력해 주세요' ref={refUserName} />
                                </DescBox>
                            </DescContainer>
                        </InfoContainer>
                        <div className='flex justify-start w-full'>
                            <Picker type='range' />
                        </div>
                    </div>
                </div>   
                <div className='mt-6 3xl:mt-2'>
                    <TextArea 
                        className='h-full p-3 border-2 rounded-none bg-04 border-01 placeholder:text-02/80'
                        style={{ resize: 'none' }}
                        rows={6}
                        placeholder='대여 사유를 기입해 주세요'
                        value={text}
                        onChange={handleTextChange}
                    />
                </div>       
                <footer className='flex justify-end gap-4'>
                    <Button onClick={handleBack} bgColor='01'>
                        돌아가기
                    </Button>
                    <Button bgColor='01' type='submit'>
                        대여 하기
                    </Button>    
                </footer>      
            </form>                     
        </Template>
    );
};

export default RentalTool;



const InfoContainer: FC<PropsWithChildren> = ({ children }) => {
    
    return (
        <div className='flex flex-col w-full border border-01'>
            {children}
        </div>
    );
}

const TitleContainer: FC<PropsWithChildren> = ({ children }) => {
    
    return (
        <h3 className='py-2.5 bg-02 text-lg font-semibold text-center text-black'>
            {children}
        </h3>
    )
}

const DescContainer: FC<PropsWithChildren> = ({ children }) => {

    return (
        <div className='grid grid-cols-3 w-full h-full font-semibold border-t-[1px] border-01 bg-04 place-items-center'>
            {children}
        </div>
    );
}

const DescBox: FC<PropsWithChildren<{ isCenter?: boolean }>> = ({ isCenter, children }) => {
    
    return (
        <div className={`flex items-center justify-center w-full h-full ${isCenter && 'border-x-[1px] border-01'}`}>
            {children}
        </div>
    );
} 

const Input = forwardRef<HTMLInputElement, DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>(
    ({ className, ...props }, ref) => {

        return (
            <input 
                className={`w-full text-center outline-none placeholder:text-02/80 bg-inherit text-sm ${className}`} 
                ref={ref} 
                {...props} 
            />
        );
    }
); 