import { spawn } from "child_process";
import * as React from "react";
import { useIsMobile } from "../../../../hooks/ReactiveHooks";
import { WaveBackgroundBot3 } from "../../../ui/backgrounds/WaveBackgroundBot3";
import { Button } from "../../../ui/buttons/Button";
import { Card } from "../../../ui/cards/Card";
import { MailIcon } from "../../../ui/icons/MailIcon";
import { RemoteIcon } from "../../../ui/icons/RemoteIcon";
import { TextAreaInput } from "../../../ui/text-input/TextAreaInput";
import { TextInput } from "../../../ui/text-input/TextInput";

import "./Contact.css";

interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = ({}) => {
	const isMobile = useIsMobile();
	return (
		<section id="Contact" className="Section">
			<Card id="ContactCard">
				<div className="ContactHeader">
					<span>
						<h2 className=" heading-top no-mar-top">CONTACT US</h2>
						<h5 className=" green-text heading-bottom">
							we would love to hear from you
						</h5>
					</span>
					<div id="contact-info-container">
						<address id="contact-info">
							<a title="Call us!" href="tel:+8653217523">
								<RemoteIcon className="contact-icon" width="1.8rem" />
							</a>
							<a
								title="Send us an email!"
								href="mailto:paul.eakle@driveinc.com"
							>
								<MailIcon className="contact-icon" width="1.8rem" />
							</a>
						</address>
					</div>
				</div>
				<div className="contact-container">
					<form id="contact-form">
						<div className={`${isMobile ? "flex-column" : "flex-row"}`}>
							<div id="contact-text-column">
								<TextInput
									className="contact-text-input"
									label="Name"
								></TextInput>
								<TextInput
									className="contact-text-input"
									type="email"
									label="Email"
								></TextInput>
								{!isMobile ? (
									<TextInput label="Phone Number"></TextInput>
								) : null}
							</div>
							<TextAreaInput
								containerId="contact-text-area-container"
								id="contact-text-area"
								label="How can we help?"
							/>
						</div>
						<Button id="contact-submit">Submit</Button>
					</form>
				</div>
			</Card>

			<div className="wave-background-container contact">
				<WaveBackgroundBot3 />
			</div>
		</section>
	);
};

export { ContactSection };
