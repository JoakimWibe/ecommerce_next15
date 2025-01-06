import Image from 'next/image';
import loader from '../assets/loader.gif';

const LoadingPage = () => {
    return ( 
        <div className='flex justify-center items-center h-[100vh] w-[100vw]'>
            <Image src={loader} alt="Loading..." width={150} height={150} />
        </div>
    );
}
 
export default LoadingPage;