   
import { FC, ReactNode } from 'react';
import { useTransition, animated } from '@react-spring/web';

interface Props {
    show: boolean;
    hide: () => void;
    children: ReactNode;
};

const Modal: FC<Props> = ({ show, hide, children }) => {
    const transition = useTransition(show, {
        from: { opacity: 0, top: 0 },
        enter: { opacity: 1, top: 50 },
        leave: { opacity: 0, top: 100 },
        config: { stiffness: 200, mass: 1, damping: 20 }
    });

    return (
        <>
            {transition((styles, item) => item && <>
                <animated.div
                    onClick={hide}
                    className='absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.2)]'
                    style={{
                        opacity: styles.opacity,
                        display: styles.opacity.to(o => o > 0 ? 'block' : 'none'),
                    }}
                />
                <animated.div
                    className='absolute top-0 left-1/2 bg-background-800 px-4 py-2 text-white'
                    style={{
                        opacity: styles.opacity,
                        top: styles.top.to((top: number) => `${top}%`)
                    }}
                >{children}</animated.div>
            </>)}
        </>
    )
}

export default Modal;
