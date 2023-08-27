import { useEffect, useState } from "react";
import emailjs from 'emailjs-com';

import { Colors, Layout } from "../../Styles";
import Wheel from "../../../assets/wheel/Wheel";

import * as CONST from './_constants';
import * as TYPE from './_types';
import Field from './Field';


export default function Contact() {

    const name = 'contact';

    function label(id: string) {
        return `${name}-${id}`;
    }

    /* ----------------------------------- Disables spamming via Sent State ----------------------------------- */

    const [sent, setSent] = useState<boolean>(getStoredSent());

    function getStoredSent() {
        return localStorage.getItem(CONST.SENT_KEY) == 'true';
    }

    function enableSend() {
        setSent(false);
        localStorage.removeItem(CONST.SENT_KEY);
        localStorage.removeItem(CONST.TIMER_KEY);
    }

    function disableSend() {
        setSent(true);
        setTimer(CONST.COUNTDOWN);
        localStorage.setItem(CONST.SENT_KEY, 'true');
    }

    /* ---------------------------- Re-enables Feedback Submission via Timer State ---------------------------- */

    const [timer, setTimer] = useState<number>(getStoredTimer());

    function getStoredTimer() {
        const timerState = localStorage.getItem(CONST.TIMER_KEY);
        if (timerState) return parseInt(timerState);
        else return 0;
    }

    function getTime() {
        let min = (timer / 60 | 0).toString();
        let sec = (timer % 60).toString();

        if (min.length == 1) min = '0' + min;
        if (sec.length == 1) sec = '0' + sec;

        return `${min}:${sec}`;
    }

    function countdown() {
        if (timer > 0) setTimer(timer - 1);
        else enableSend();
    }

    useEffect(() => {
        const interval = setInterval(countdown, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    /* ------------------------------ Sent & Timer State Saving via Local Storage ----------------------------- */

    function saveStates() {
        if (!sent) localStorage.setItem(CONST.SENT_KEY, sent.toString());
        if (timer > 0) localStorage.setItem(CONST.TIMER_KEY, timer.toString());
    }

    useEffect(() => {
        window.addEventListener("beforeunload", saveStates);
        return () => window.removeEventListener("beforeunload", saveStates);
    }, []);

    /* ---------------------------- Control & Access of Form Inputs via Data State ---------------------------- */

    const [data, setData] = useState<TYPE.Data>(getSavedData());

    function getSavedData() {
        return {
            'name': localStorage.getItem('name') || '',
            'email': localStorage.getItem('email') || '',
            'feedback': localStorage.getItem('feedback') || ''
        };
    }

    /* ---------------------------- Validation of Form Inputs via Validation State ---------------------------- */

    const [validation, setValidation] = useState<TYPE.Validation>(TYPE.VALIDATION_DEF);

    function validate() {
        const _validation = {
            ...validation,
            name: data.name != '',
            email: data.email != '',
            feedback: data.feedback != ''
        };
        setValidation(_validation);
        return Object.values(_validation).every(p => p);
    }

    /* ---------------------------------- Submission of Feedback via EMAILJS ---------------------------------- */

    function onSubmit(e: TYPE.Submission) {

        e.preventDefault();

        if (validate()) {

            if (import.meta.env.DEV) {
                console.log(data);
                disableSend();
            }

            else {
                emailjs.sendForm(
                    import.meta.env.VITE_SID,
                    import.meta.env.VITE_FORM,
                    e.currentTarget,
                    import.meta.env.VITE_KEY)
                    .then(
                        (_) => disableSend(),
                        (error) => console.log('FAILED...', error)
                    );
            }

        }
    }

    /* -------------------------------- Helper Function for making Form-Fields -------------------------------- */

    function setValue(prop: TYPE.Property, value: string) {
        console.log(prop, value);
        const _data = { ...data, [prop]: value }
        setData(_data);
        console.log(_data);
        console.log(data);
    }

    function makeField(prop: TYPE.Property) {
        return <Field
            key={label(prop)}
            property={prop}
            setValue={setValue}
            validity={validation[prop]}
            sent={sent}
        />
    }

    return (

        <div id={name} className={`w-full ${Layout.center}`}>

            <Wheel cw={true} rad={'h-11/12'} pos={'-translate-x-[25%] portrait:translate-y-[25%]'} />
            <Wheel cw={false} rad={'h-11/12'} pos={'translate-x-[25%] portrait:translate-y-[25%]'} />

            <div id={label('main')} className={`portrait:flex-col ${Layout.rowC} ${Layout.bgMain} ${Colors.bgMain}`}>

                <div className={`flex-1 ${Layout.fill}`}>

                    <div id={label('text')}
                        className={`w-full font-black
                        landscape:mb-28 portrait:py-6
                        text-left portrait:text-center
                        space-y-1 flex-initial ${Layout.col}
                    `}>

                        <p className={`p-1.5 max-2xs:text-lg
                            2xs:text-xl xs:text-3xl sm:text-5xl
                            xl:text-6xl 2xl:text-7xl`}
                        >  ANY FEEDBACK? </p>

                        <p className={`max-xs:text-[0.6rem] xs:text-[0.7rem]
                            sm:text-base lg:text-xl xl:text-2xl 2xl:text-3xl`}
                        >
                            Please share your thoughts with me <br />

                            <a href={`mailto:${CONST.EMAIL}`} className={`${Colors.gradience2}`}>
                                @{CONST.EMAIL}
                            </a>

                        </p>

                    </div>


                </div>

                <form id={label('form')} onSubmit={onSubmit} className={`w-full flex-1 ${Layout.fill}`}>

                    <div id={label('form-body')}
                        className={`w-5/6 h-5/6 mx-auto px-10 py-12
                            rounded-3xl bg-gray-900 bg-opacity-90
                            flex-1 space-y-3 ${Layout.col}
                    `}>

                        {TYPE.Properties.map(p => makeField(p))}

                        <button id={label('submit')} disabled={sent}
                            className={`w-full py-1 font-bold flex-1 ${sent ? 'bg-black' : Colors.formActive}
                        `}> {sent ? getTime() : 'SUBMIT'} </button>

                    </div>

                </form>

            </div>

        </div >

    );

}