/* eslint-disable space-in-parens */
import React from "react";

export type PageRefs = React.MutableRefObject<( HTMLLIElement | null )[]>;
export type SetNumber = React.Dispatch<React.SetStateAction<number>>;