import { useEffect, useState } from "react";
import emailjs from 'emailjs-com';

import Field from './Field';
import * as TYPE from './_types';
import * as CONST from './_constants';
import { Colors, Layout } from "../../Styles";


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

            emailjs.sendForm(
                import.meta.env.VITE_SID,
                import.meta.env.VITE_FORM,
                e.currentTarget,
                import.meta.env.VITE_KEY)
                .then(
                    (_) => disableSend(),
                    (error) => {
                        console.log('FAILED...', error);
                    }
                );

            // // For debugging
            // console.log(data);
            // disableSend();

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

        <div id={name} className={`w-11/12 h-5/6 p-10 ${Colors.bgMain} ${Layout.rowC}`}>


            <div id={label('text')} className={`text-left font-black space-y-1 flex-shrink ${Layout.col}`}>

                <p className={`text-6xl`}> ANY FEEDBACK? </p>
                <p className={`text-2xl`}> Please share your thoughts with me! </p>

                <p className={`text-base`}> Or contact me
                    <a href={`mailto:${CONST.EMAIL}`} className={`${Colors.gradience2}`}>
                        &nbsp; @{CONST.EMAIL}
                    </a>
                </p>

                <div className='h-32' />

            </div>

            <form id={label('form')} onSubmit={onSubmit} className={`ml-20 mr-5 flex-1 ${Layout.center}`}>
                <div className={`w-full h-min p-16 text-xl text-left flex-1 space-y-5 bg-slate-700 ${Layout.col}`}>

                    {TYPE.Properties.map(p => makeField(p))}

                    <button id={label('submit')}
                        disabled={sent}
                        className={`w-full h-12 font-bold flex-shrink
                            ${sent ? Colors.formInactive : Colors.formActive}
                    `}> {sent ? getTime() : 'Submit'} </button>

                </div>
            </form>

        </div>

    );

}