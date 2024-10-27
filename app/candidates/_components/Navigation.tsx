"use client";

import Button from '@/app/HomePage/_components/Button';
import { usePathname, useRouter } from 'next/navigation';

const Navigation = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleNext = () => {
        if (pathname.includes('/start')) {
            router.push('./interview');
        } else if (pathname.includes('/interview')) {
            router.push('./complete');
        }
    };
    
    return (
        <div>
            <div className='flex justify-between mt-5'>
                <Button onClick={() => router.back()} classname='underline' variant='secondary'>Back</Button>
                <Button onClick={handleNext} classname='rounded-xl bg-blue-500'>Next Step</Button>
            </div>
        </div>
    );
};

export default Navigation;
