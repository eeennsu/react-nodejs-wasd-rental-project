import type { FC } from 'react';
import { classRoom } from '../../RentalPage/constants';

const Descriptions: FC = () => {

    return (
        <section className='absolute left-0 right-0 flex w-full max-w-5xl mx-auto font-semibold text-center -bottom-[360px]'>
            <div className='flex-1 border-l-[2px] px-7 border-gray-300'>
                <h4>
                    오큘러스
                </h4>
                <p className='mt-2'>
                오큘러스 VR은 사용자를 현실에서 벗어난 가상 세계로 안내하는 혁신적인 가상 현실 기기입니다. 고해상도 디스플레이와 최첨단 추적 기술을 활용하여 사용자들에게 몰입감 높은 게임, 교육, 엔터테인먼트 경험을 선사하며, 손쉬운 사용성과 다양한 콘텐츠로 다양한 사용자들에게 즐거움을 선사합니다.
                </p>
            </div>
            <div className='flex-1 border-x-[2px] px-7 border-gray-300'>
                <h4>
                    타블렛
                </h4>
                <p className='mt-2'>
                태블릿은 휴대성이 뛰어나며 터치스크린을 통해 다양한 앱, 웹 브라우징, 미디어 소비, 그래픽 작업 등을 편리하게 이용할 수 있는 휴대용 컴퓨팅 장치입니다. 키보드나 마우스 없이도 다양한 작업을 간편하게 수행할 수 있으며, 이동 중에도 쉽게 사용할 수 있는 다목적 장치입니다.
                </p>
            </div>
            <div className='flex-1 border-r-[2px] px-7 border-gray-300'>
                <h4>
                    강의실
                </h4>
                <p className='mt-2'>
                    명지전문대학교 소프트웨어 콘텐츠과의 강의실은 공학관과 본관이 있습니다. 공학관에는 {classRoom.room_mainBuilding.join(' / ')}를 이용할 수 있고, 본관에는 {classRoom.enginerringBuilding.join(' / ')}을 이용할 수 있습니다. 
                </p>
            </div>
        </section>
    );
}

export default Descriptions;