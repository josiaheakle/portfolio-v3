import * as React from "react";
import { useState, useEffect } from "react";

import * as css from "./TextInput.module.css";

import "./TextInput.css";

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
	errors?: Array<string>;
	label?: string;
	reset?: boolean;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
	const [isFocued, setFocused] = useState<boolean>(false);
	const [input, setInput] = useState<string>();

	const inputRef: React.RefObject<HTMLInputElement> = React.createRef();

	const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setInput(event.target.value);
		if (props.onChange) props.onChange(event);
	};

	const onFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
		setFocused(true);
	};

	const onBlur = (event: React.FocusEvent): void => {
		if (!input) {
			setFocused(false);
		}
	};

	useEffect(() => {
		if (props.reset) {
			if (inputRef.current) inputRef.current.value = "";
			setInput(undefined);
			setFocused(false);
		}
		if (props.defaultValue) {
			setFocused(true);
		}
	}, [props]);

	useEffect(() => {
		if (input && input.length > 0) setFocused(true);
		else setFocused(false);
	}, [input]);

	return (
		<div
			className={`${css.TextInputContainer} ${
				props.className ? props.className : ""
			}`}
		>
			<span className={`${css.TextInput} ${props.errors ? "invalid" : ""}`}>
				<label className={isFocued ? "focused" : ""} htmlFor={props.id}>
					{props.label}
				</label>
				<input
					ref={inputRef}
					{...props}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
				></input>
			</span>
			{props.errors ? (
				<ul className={`${css.TextInputErrorList}`}>
					{props.errors.map((error, i) => {
						return (
							<li key={i} className={`${css.TextInputError}`}>
								{error}
							</li>
						);
					})}
				</ul>
			) : null}
		</div>
	);
};
