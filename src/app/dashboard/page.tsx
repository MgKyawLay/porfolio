import React from 'react';
import {Input} from "@/components/ui/input";

interface Props {

}

const Dashboard:React.FC<Props> = () => {
    return (
        <div className={'relative'}>
            <Input className={'bg-white rounded-full pl-14 placeholder:text-gray-400'} placeholder={'Account'}/>
        </div>
    );
}

export default Dashboard;
