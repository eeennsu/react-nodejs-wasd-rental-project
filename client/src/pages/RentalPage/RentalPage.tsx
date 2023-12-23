import type { FC } from 'react';
import { useMemo } from 'react';
import { useStepStore, useUserStore } from '../../zustand';
import { getContent } from './utils/step';
import Side from './features/Side/Side';
import './features/app.css';
import { approveUser_API } from '../../api/auth/authApi';

const RentalPage: FC = () => {

    // 로그인 여부 / 토큰 / 유저에 대한 정보 (이메일, 학번, 아이디 등등..) 얘는 필수 아님 (필요할 때 선언하면 됨)
    const { isLogin, user, token } = useUserStore();
    
    // 만약 특정 버튼이 클릭할 때 이 api를 호출하고 싶다면? 버튼의 onClick 속성에 이 함수를 넣으면 됨.
    const handleApproveUser = async () => {
        try {
            // 이 api는 매개변수로 user_id 라는 속성을 가진 객체가 있음
            // 모든 api의 매개변수는 다름. 모두 아래와 같은 형식이 아님. 컨트롤 우클릭해서 각각 어떤 형태의 매개변수가 필요한지 확인하고 그에 맞게 적용해야함
            const response = await approveUser_API({ user_id: '유저 아이디 변수를 이곳에' });       
                // user_id에 user_id 값 변수를 대입해주면 됨. 지금은 ResApproveUser라는 타입이 서버에서 받는 값의 형태임
        
            // data 라는 속성에 서버에서 전달받은 값들이 들어 있음. 어떤 값들이 전달받는지는 역시 컨트롤 우클릭해서 확인 가능 ()
            // response.data라는 곳에 무조건 200이라는 속성이 있는것도 아님. 노션에서 확인해서 각각 api마다 어떤 값(타입)이 오는지 확인해 봐야함. 
            // 만약 콘솔에 찍힌거랑 서버에서 받은 값의 형태가 다르다면 윤태한테 수정해달라고 해여함
            if (response.data[200]) {
                // 성공이후 작업을 이곳에다 하면 됨
            } else {
                // 만약 실패하면? 이곳을 타게됨.
            }
        } catch (error) {
            // 에러 발생시 이곳에서 처리가능 (주로 서버가 열리지 않았을 때 이곳을 탐.)
            console.log(error);
        }
    }


    // 이 아래는 api랑 상관 없음

    const systemStep = useStepStore(state => state.systemStep);

    const content = useMemo(() => getContent(systemStep), [systemStep]);

    return (
        <div className='flex flex-col-reverse w-full h-full mt-10 lg:flex-row gap-x-6 max-md:mt-6 max-3xl:mt-0 max-md:mb-0 max-3xl:mb-11 max-lg:px-10 max-md:px-0'>            
            <aside className='mt-4 lg:w-1/5'>
                <Side />
            </aside>
            <section className='lg:w-4/5 3xl:mb-0'>
                {content}
            </section>        
        </div>
    );
}

export default RentalPage;