import type { FC, PropsWithChildren } from 'react';

const TdTime: FC<PropsWithChildren> = ({ children }) => (
    <td className='overflow-x-hidden text-xs overflow-ellipsis whitespace-nowrap bg-slate-400'>
        {children}
    </td>
)

const Th: FC<PropsWithChildren> = ({ children }) => (
    <th className='w-[19%]'>
        {children}
    </th>
)

const Tr: FC<PropsWithChildren> = ({ children }) => (
    <tr>
        {children}
    </tr>
)

const Schedule: FC = () => {



    return (
        // <table className='w-full text-xs text-center border border-collapse border-gray-800 table-sm bg-slate-200'>
        //     <thead className='py-4 bg-slate-100'>
        //         <tr>
        //             <th className='w-[5%]'>/</th>
        //             <Th>월</Th>
        //             <Th>화</Th>
        //             <Th>수</Th>
        //             <Th>목</Th>
        //             <Th>금</Th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //            <TdTime>09:00 ~ 09:50</TdTime>
        //         </tr>
        //         <tr>
        //            <TdTime>10:00 ~ 10:50</TdTime>
        //         </tr>
        //         <tr>
        //            <TdTime>11:00 ~ 11:50</TdTime>
        //         </tr>
        //         <tr>
        //            <TdTime>12:00 ~ 12:50</TdTime>
        //         </tr>
        //         <tr>
        //            <TdTime>01:00 ~ 01:50</TdTime>
        //         </tr>
        //         <tr>
        //            <TdTime>02:00 ~ 02:50</TdTime>
        //         </tr>
        //         <tr>
        //            <TdTime>03:00 ~ 03:50</TdTime>
        //         </tr>
        //         <tr>
        //            <TdTime>04:00 ~ 04:50</TdTime>
        //         </tr>
        //         <tr>
        //            <TdTime>05:00 ~ 05:50</TdTime>
        //         </tr>
        //     </tbody>
        // </table>
        <img src='' alt='시간표 이미지' className='h-[280px] bg-slate-200' />
    );
};

export default Schedule;