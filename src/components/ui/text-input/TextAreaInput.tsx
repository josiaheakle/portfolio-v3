import * as React from "react";
import * as css from "./TextInput.module.css";

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
	const [isFocued, setFocused] = React.useState<boolean>(false);
	const [input, setInput] = React.useState<string>();

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

	React.useEffect(() => {
		if (props.reset) {
			if (inputRef.current) inputRef.current.innerHTML = "";
			setInput(undefined);
			setFocused(false);
		}
		if (props.defaultValue) {
			setFocused(true);
		}
	}, [props]);

	React.useEffect(() => {
		if (input && input.length > 0) setFocused(true);
		else setFocused(false);
	}, [input]);

	return (
		<div
			id={`${containerId ? containerId : ""}`}
			className={`${css.TextInputContainer}`}
		>
			<div className={`${css.TextInput}`}>
				<label className={isFocued ? css.focused : ""} htmlFor={props.id}>
					{props.label}
				</label>
				<textarea
					ref={inputRef}
					{...props}
					className={`${css.Input} ${props.className ? props.className : ""} ${
						isFocued ? css.focused : ""
					}`}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
				></textarea>
			</div>
			{errors ? (
				<ul className={`${css.TextInputErrorList}`}>
					{errors.map((error, i) => {
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
