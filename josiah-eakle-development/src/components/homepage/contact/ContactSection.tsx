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
								className={css.TextInput}
								label="Name"
								name="name"
								type="text"
							/>
							<TextInput
								className={css.TextInput}
								name="email"
								type="email"
								label="Email"
							/>
							<TextInput
								className={`${css.TextInput}`}
								label="Phone Number"
								name="phone"
								type="text"
							/>
						</div>
						<TextAreaInput
							className={css.TextArea}
							containerId="contact-text-area-container"
							id="contact-text-area"
							label="How can I help?"
						/>
					</div>
					<Button id="contact-submit">Submit</Button>
				</form>
			</div>
		</Section>
	);
};

export { ContactSection };
