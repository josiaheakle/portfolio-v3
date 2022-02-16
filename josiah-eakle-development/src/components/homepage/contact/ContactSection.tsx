import * as React from "react";

import { Section } from "../../ui/section/Section";
import { Button } from "../../ui/buttons/Button";
import { TextAreaInput } from "../../ui/text-input/TextAreaInput";
import { TextInput } from "../../ui/text-input/TextInput";
import { MailIcon } from "../../ui/icons/MailIcon";
import { RemoteIcon } from "../../ui/icons/RemoteIcon";

import * as css from "./Contact.module.css";

interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = ({}) => {
	const [nameInput, setNameInput] = React.useState("");
	const [emailInput, setEmailInput] = React.useState("");
	const [phoneInput, setPhoneInput] = React.useState("");
	const [messageInput, setMessageInput] = React.useState("");

	const submitForm = (e: React.FormEvent<HTMLButtonElement>) => {};

	return (
		<Section id="Contact">
			<div className={`${css.Contact}`}>
				<div className={css.HeaderContainer}>
					<span className={css.Header}>
						<span className={css.Subtitle}>I would love to hear from you.</span>
						<h2 className={css.Title}>Contact Me</h2>
					</span>
					<address className={`${css.ContactInfo}`}>
						<a title="Call me!" href="tel:+">
							<RemoteIcon className={css.Icon} />
						</a>
						<a title="Send me an email" href="mailto:dev@josiaheakle@gmail.com">
							<MailIcon className={css.Icon} />
						</a>
					</address>
				</div>
				<form className={css.Form}>
					<div className={css.FormContainer}>
						<div className={`${css.TextContainer}`}>
							<TextInput
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setNameInput(e.target.value)
								}
								className={css.TextInput}
								label="Name"
								name="name"
								type="text"
							/>
							<TextInput
								className={css.TextInput}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setEmailInput(e.target.value)
								}
								name="email"
								type="email"
								label="Email"
							/>
							<TextInput
								className={`${css.TextInput}`}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setPhoneInput(e.target.value)
								}
								label="Phone Number"
								name="phone"
								type="text"
							/>
						</div>
						<TextAreaInput
							className={css.TextArea}
							onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
								setMessageInput(e.target.value)
							}
							containerId="contact-text-area-container"
							id="contact-text-area"
							label="How can I help?"
						/>
					</div>
					<Button onSubmit={(e) => {}} id="contact-submit">
						Submit
					</Button>
				</form>
			</div>
		</Section>
	);
};

export { ContactSection };
