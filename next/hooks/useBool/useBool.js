'use client';
import { useState, useCallback } from 'react';

/**
 * A convenience method to handle boolean state
 * @param {boolean} [initial]
 * @returns [boolean, VoidFunction, import("react").Dispatch<import("react").SetStateAction<boolean>>]
 */
const useBool = (initial=false) => {
	const [b, setB] = useState(initial);
	const toggle = useCallback(()=>setB(b=>!b), [setB]);
	return [b, toggle, setB];
}

export default useBool;