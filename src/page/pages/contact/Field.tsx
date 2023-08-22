import { useEffect, useState } from 'react';

import * as TYPE from './_types'
import { Colors, Layout } from '../../Styles';

/* -------------------------------------------- Local Constants ------------------------------------------- */

const ErrBorder = 'border-2 border-red-500';

const InputType = {
    name: 'text',
    email: 'email',
    feedback: 'text', // Unused
}

/* --------------------------------------------- Field Proper --------------------------------------------- */

interface Props {
    property: TYPE.Property
    setValue: TYPE.Setter
    validity: boolean
    sent: boolean
}

export default function Field({ property, setValue, validity: valid, sent }: Props) {

    const [text, setText] = useState<string>(getStoredText());

    function onChange(e: TYPE.InputEvent) {
        // Syncs Text & Data values

        const value = e.currentTarget.value;
        setValue(property, value);
        setText(value);
    }

    /* ------------------------------- Store and Retrieve Text in Local Storage ------------------------------- */

    function getStoredText() {
        return localStorage.getItem(property) || '';
    }

    function saveText() {
        localStorage.setItem(property, text);
    }

    useEffect(() => {
        window.addEventListener("beforeunload", saveText);
        return () => window.removeEventListener("beforeunload", saveText);
    });

    return (
        <label className='font-bold'>

            {property.toUpperCase()}

            {(property != 'feedback') ?

                <input id={`field-${property}`} type={InputType[property]} value={text}
                    disabled={sent} onChange={onChange} className={`h-10 font-semibold flex-none
                    ${valid ? '' : ErrBorder} ${Layout.form} ${sent ? Colors.formInactive : Colors.formActive}`} />

                :

                <textarea id={`field-${property}`} value={text} disabled={sent} onChange={onChange}
                    className={`h-24 py-2 flex-1 overflow-y-scroll ${valid ? '' : ErrBorder}
                        ${Layout.form} ${sent ? Colors.formInactive : Colors.formActive}`} />

            }

            <div className='h-5' >
                {!valid && <p className='text-sm text-red-500 font-bold'>
                    ⚠ Your {property} must not be empty...
                </p>}
            </div>

        </label>
    );
}