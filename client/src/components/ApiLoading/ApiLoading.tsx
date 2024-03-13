'use client';
import { useApiLoadingStore } from '@/utills/useApiLoadingStore';
import { Spinner } from '@nextui-org/react';
import React, { memo } from 'react';

const _Loader = ({ isLoading, laodingText }: any) => {
    return (isLoading ? <div className="overlay" style={{ zIndex: 10000000 }}>
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 select-none">
            <div className="bg-white p-6 rounded shadow-lg">
                <Spinner label="Loading..." color="primary" />
            </div>
        </div>
    </div> : false
    );
};
const Loader = memo(_Loader);

const ApiLoading = () => {
    const { isLoading, laodingText }: any = useApiLoadingStore();
    return <Loader isLoading={isLoading} laodingText={laodingText} />
}

export default ApiLoading;

