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

        <label className='pb-1 text-left font-bold flex-1
            max-sm:text-sm sm:text-base md:text-sm lg:text-xs xl:text-sm 2xl:text-base'
        >

            {property.toUpperCase()}

            {(property != 'feedback') ?

                <input
                    id={`field-${property}`} type={InputType[property]}
                    value={text} disabled={sent} onChange={onChange}
                    className={`h-8 m-0 font-semibold flex-none
                        ${valid ? '' : ErrBorder} ${Layout.form}
                        ${sent ? Colors.formInactive : Colors.formActive}
                    `}
                />

                :

                <textarea id={`field-${property}`} value={text} disabled={sent} onChange={onChange}
                    className={`h-16 pt-1 pb-4 flex-1 ${valid ? '' : ErrBorder}
                        ${Layout.form} ${sent ? Colors.formInactive : Colors.formActive}`} />

            }

            <div className={`text-red-500 font-bold ${valid ? 'hidden' : 'visible'} ${Layout.row}`}>
                <div> ⚠ &nbsp; </div>
                <div className='max-lg:hidden'> Your {property.toUpperCase()} &nbsp; </div>
                <div className='-ml-1 max-sm:hidden'> Field is &nbsp; </div>
                <div className='-ml-1 max-xs:hidden'> Empty... </div>
            </div>

        </label>
    );
}