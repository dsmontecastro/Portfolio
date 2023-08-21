import React, { useEffect, useState } from "react";
import EMAILjs from 'EMAILjs-com';

import { Colors, Layout } from "../Styles";

type Submission = React.FormEvent<HTMLFormElement>;
type Input = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type Property = 'name' | 'email' | 'feedback';

type Data = {
    name: string
    email: string
    feedback: string
};
const DATA_DEF: Data = { name: '', email: '', feedback: '' }

type Errs = {
    name: boolean
    email: boolean
    feedback: boolean
};
const ERRS_DEF: Errs = { name: false, email: false, feedback: false }

const EMAIL = 'montecastrodaniel@gmail.com';


// const COUNTDOWN = 300;
const COUNTDOWN = 3;
const TIMER_KEY = 'timer';
const SENT_KEY = 'sent';


export default function Contact() {

    const name = 'contact';

    function label(id: string) {
        return `${name}-${id}`;
    }

    /* ---------------------------------- Disables spamming via Sent & Timer ---------------------------------- */

    const [sent, setSent] = useState<boolean>(getStoredSent());

    function enableSend() {
        setSent(false);
        localStorage.removeItem(SENT_KEY);
        localStorage.removeItem(TIMER_KEY);
    }

    function disableSend() {
        setSent(true);
        setTimer(COUNTDOWN);
        localStorage.setItem(SENT_KEY, 'true');
    }

    /* ---------------------------- Re-enables Sending of Feedback after Timer ends --------------------------- */

    const [timer, setTimer] = useState<number>(getStoredTimer());

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
        console.log(timer);
    }

    useEffect(() => {
        const interval = setInterval(countdown, 1000);
        return () => clearInterval(interval);
    }, [timer]);


    /* -------------------------------- Save & Retrieve data from Local Storage ------------------------------- */

    function getStoredSent() {
        return localStorage.getItem(SENT_KEY) == 'true';
    }

    function getStoredTimer() {
        const timerState = localStorage.getItem(TIMER_KEY);
        if (timerState) return parseInt(timerState);
        else return 0;
    }

    function saveKeys() {
        if (!sent) localStorage.setItem(SENT_KEY, sent.toString());
        if (timer > 0) localStorage.setItem(TIMER_KEY, timer.toString());
    }

    useEffect(() => {
        window.addEventListener("beforeunload", saveKeys);
        return () => window.removeEventListener("beforeunload", saveKeys);
    });

    /* ----------------------------- Validation & Sending of Feedback via EMAILJS ----------------------------- */

    const [data, setData] = useState<Data>(DATA_DEF);
    const [errs, setErrs] = useState<Errs>(ERRS_DEF);

    function validate() {
        const _errs = {
            ...errs,
            name: data.name == '',
            email: data.email == '',
            feedback: data.feedback == '',
        }
        setErrs(_errs);
        return Object.values(_errs).every(p => !p);
    }

    function onChange(e: Input) {
        const elem = e.currentTarget;
        setData({ ...data, [elem.name]: elem.value });
    }

    function onSubmit(e: Submission) {
        e.preventDefault();

        if (validate()) {
            console.log('VALIDATED!');
            disableSend();

            // EMAILjs.sendForm(
            //     import.meta.env.VITE_SID,
            //     import.meta.env.VITE_FORM,
            //     e.currentTarget,
            //     import.meta.env.VITE_KEY)
            //     .then(
            //         (_) => disableSend(),
            //         (err) => console.log('FAILED...', err),
            //     );
        }
    }

    /* ------------------------- Helper Function for making Input/TextArea FormFields ------------------------- */


    function makeInput(prop: Property, type: string) {

        const style = 'w-full mt-2 px-3 focus:outline-none';
        const active = 'text-white bg-slate-800';
        const inactive = 'text-grey-500 bg-slate-900';

        const value = data[prop];

        return (
            <label htmlFor={prop} className='font-bold'>

                {prop.toUpperCase()}

                {(prop != 'feedback') ?
                    <input id={prop} name={prop} type={type} value={value} disabled={sent} onChange={onChange}
                        className={`h-10 font-semibold flex-none ${style} ${sent ? inactive : active}`} />
                    :
                    <textarea id={prop} name={prop} value={value} disabled={sent} onChange={onChange}
                        className={`h-24 py-2 flex-1 overflow-y-scroll ${style}
                        ${errs[prop] ? 'border-2 border-red-500' : ''}
                        ${sent ? inactive : active}`} />
                }

                <div className='h-5' >
                    {errs[prop] && <p className='text-sm text-red-500 font-bold'>
                        ⚠ Your {prop} must not be empty...
                    </p>}
                </div>

            </label>
        );
    }

    return (

        <div id={name} className={`w-full h-min m-10 px-10 py-10 overflow-x-clip ${Colors.bgMain} ${Layout.rowC}`}>

            <div id={label('text')} className={`text-left font-black space-y-1 flex-shrink ${Layout.col}`}>

                <p className={`text-6xl`}> ANY THOUGHTS? </p>
                <p className={`text-2xl`}> Please send your feedback here! </p>

                <p className={`text-base`}> Or contact me
                    <a href={`mailto:${EMAIL}`} className={`${Colors.gradience2}`}>
                        &nbsp; @{EMAIL}
                    </a>
                </p>

                <div className='h-32' />

            </div>

            <form id={label('form')} onSubmit={onSubmit} className={`ml-20 mr-5 flex-1 ${Layout.center}`}>
                <div className={`w-full h-min p-16 text-xl text-left flex-1 space-y-5 bg-slate-700 ${Layout.col}`}>

                    {makeInput('name', 'text')}
                    {makeInput('email', 'email')}
                    {makeInput('feedback', 'text')}

                    <button disabled={sent}
                        className={`w-full h-12 font-bold flex-shrink ${sent ? 'bg-slate-900' : 'bg-slate-800'}
                    `}> {sent ? getTime() : 'Submit'} </button>

                </div>
            </form>

        </div>

    );

}