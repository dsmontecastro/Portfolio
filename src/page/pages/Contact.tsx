import React, { useEffect, useState } from "react";
import emailjs from 'emailjs-com';

import { Colors, Layout } from "../Styles";

type Submission = React.FormEvent<HTMLFormElement>;
type Input = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type Data = {
    name: string
    email: string
    feedback: string
};

const blank: Data = { name: '', email: '', feedback: '' };


export default function Contact() {

    const name = 'contact';
    const email = 'montecastrodaniel@gmail.com';

    function label(id: string) {
        return `${name}-${id}`;
    }

    /* ----------------------------------- Disables spamming via Sent State ----------------------------------- */

    const [sent, setSent] = useState<boolean>(false);

    function disableSend() {
        setSent(true);
        localStorage.setItem('sent', 'true');
        setTimeout(() => setSent(false), 300000);
    }

    useEffect(() => {
        const sentState = localStorage.getItem('sent');
        if (sentState) setSent(sentState == 'true');
    });

    /* -------------------------------- Handles Sending of Feedback via EmailJS ------------------------------- */

    const [data, setData] = useState<Data>(blank);

    function onChange(e: Input) {
        const elem = e.currentTarget;
        setData({ ...data, [elem.name]: elem.value });
    }

    function onSubmit(e: Submission) {
        e.preventDefault();

        // emailjs.sendForm(
        //     import.meta.env.VITE_SID,
        //     import.meta.env.VITE_FORM,
        //     e.currentTarget,
        //     import.meta.env.VITE_KEY)

        //     .then(
        //         (_) => disableSend(),
        //         (err) => console.log('FAILED...', err),
        //     );
    }

    /* ------------------------- Helper Function for making Input/TextArea FormFields ------------------------- */

    function makeInput(name: string, type: string, value: string) {

        const style = 'w-full mt-2 px-3 focus:outline-none';
        const inactive = 'text-grey-500';
        const active = 'text-white';

        return (
            <label htmlFor={name}> {name.toUpperCase()}

                {(name != 'feedback') ?
                    <input id={name} name={name} type={type} value={value} disabled={sent} onChange={onChange}
                        // className='w-full h-10 mt-2 px-3 flex-none focus:outline-none' />
                        className={`h-10 flex-none ${style} ${sent ? inactive : active}`} />
                    :
                    <textarea id={name} name={name} value={value} disabled={sent} onChange={onChange}
                        // className='w-full h-20 mt-2 px-3 flex-1 overflow-y-scroll focus:outline-none' />
                        className={`h-20 flex-1 overflow-y-scroll ${style} ${sent ? inactive : active}`} />
                }

            </label>
        );
    }

    return (

        <div id={name} className={`w-full h-min m-10 px-10 py-10 bg-slate-800 bg-opacity-50 ${Layout.rowC}`}>

            <div id={label('text')} className={`text-left font-black space-y-1 flex-shrink ${Layout.col}`}>

                <p className={`text-6xl`}> ANY THOUGHTS? </p>
                <p className={`text-2xl`}> Please send your feedback here! </p>

                <p className={`text-base`}> Or contact me
                    <a href={`mailto:${email}`} className={`${Colors.gradience2}`}>
                        &nbsp; @{email}
                    </a>
                </p>

            </div>

            <form id={label('form')} onSubmit={onSubmit} className={`ml-20 mr-5 flex-1 ${Layout.center}`}>
                <div className={`w-full h-min p-16 text-xl text-left flex-1 space-y-5 ${Layout.col} bg-red-500`}>

                    {makeInput('name', 'text', data.name)}
                    {makeInput('email', 'email', data.email)}
                    {makeInput('feedback', 'text', data.feedback)}

                    <button disabled={sent} className={`w-full h-12 flex-shrink bg-slate-900`}
                    > Submit </button>

                </div>
            </form>

        </div>

    );

}