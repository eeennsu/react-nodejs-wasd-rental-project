import type { FC } from 'react';

const MyDetails: FC = () => {

    return (
        <div className='p-6 bg-yellow-200'>
            <h2>나의 연체 현황</h2>
            <ul className='list-disc list-inside'>
                <li>Lorem ipsum dolor sit.</li>
                <li>Atque laudantium quisquam tempora.</li>
                <li>Porro quas deleniti harum.</li>
                <li>Earum id dignissimos fugit!</li>
                <li>Aperiam accusantium ipsam delectus!</li>
                <li>Dignissimos blanditiis cum sapiente.</li>
            </ul>
        </div>
    );
};

export default MyDetails;