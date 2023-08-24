import CW from './wheelCW.svg';
import CCW from './wheelCCW.svg';

interface Props {
    cw: boolean
    rad: string
    pos: string
}

export default function Wheel({ cw, rad, pos }: Props) {

    const src = cw ? CW : CCW;
    const anim = cw ? 'animate-cw' : 'animate-ccw'

    return (
        <div className={`absolute ${rad} ${pos} overflow-x-hidden`}>
            <img src={src} className={`z-0 ${anim}`} />
        </div>
    );

}