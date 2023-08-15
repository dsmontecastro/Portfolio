/* eslint-disable space-in-parens */
import React from "react";

export type PageRef = HTMLElement | null
export type PageRefs = React.MutableRefObject<PageRef[]>;

export type SetNumber = React.Dispatch<React.SetStateAction<number>>;