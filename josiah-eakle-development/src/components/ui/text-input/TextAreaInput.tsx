import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";

interface TextAreaInputProps extends React.HTMLAttributes<HTMLTextAreaElement> {
	errors?: Array<string>;
	containerId?: string;
	[index: string]: any;
}

export const TextAreaInput: React.FC<TextAreaInputProps> = ({
	errors,
	containerId,
	...props
}) => {
	const [isFocued, setFocused] = useState<boolean>(false);
	const [input, setInput] = useState<string>();

	const inputRef: React.RefObject<HTMLTextAreaElement> = React.createRef();

	const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
		setInput(event.target.value);
		if (props.onChange) props.onChange(event);
	};

	const onFocus = (event: React.FocusEvent<HTMLTextAreaElement>): void => {
		setFocused(true);
	};

	const onBlur = (event: React.FocusEvent): void => {
		if (!input) {
			setFocused(false);
		}
	};

	useEffect(() => {
		if (props.reset) {
			if (inputRef.current) inputRef.current.innerHTML = "";
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
			id={`${containerId ? containerId : ""}`}
			className="TextInputContainer"
		>
			<div className={`TextInput ${errors ? "invalid" : ""}`}>
				<label className={isFocued ? "focused" : ""} htmlFor={props.id}>
					{props.label}
				</label>
				<textarea
					ref={inputRef}
					{...props}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
				></textarea>
			</div>
			{errors ? (
				<ul className="TextInput-error-list">
					{errors.map((error, i) => {
						return (
							<li key={i} className="TextInput-error">
								{error}
							</li>
						);
					})}
				</ul>
			) : null}
		</div>
	);
};
