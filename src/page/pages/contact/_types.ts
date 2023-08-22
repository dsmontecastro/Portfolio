/* eslint-disable space-in-parens */
import React from 'react'

export type Submission = React.FormEvent<HTMLFormElement>;

export type Input = HTMLInputElement | HTMLTextAreaElement;
export type InputEvent = React.ChangeEvent<Input>;

export type Setter = ( property: Property, value: string ) => void;

export type Property = 'name' | 'email' | 'feedback';

export type Data = {
    name: string
    email: string
    feedback: string
};
export const DATA_DEF: Data = { name: '', email: '', feedback: '' }

export type Validation = {
    name: boolean
    email: boolean
    feedback: boolean
};
export const VALIDATION_DEF: Validation = { name: true, email: true, feedback: true }