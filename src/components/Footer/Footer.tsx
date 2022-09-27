import Connect from "@/components/Connect/Connect";
import OverlappingText from "@/components/OverlappingText/OverlappingText";

export default function Footer() {
	return (
		<div className="text-center my-6">
			<OverlappingText backgroundtext="Connect" toptext="Wanna Reach Out?" />
			<Connect />© 2022 Lohitaksha Malhotra
		</div>
	);
}
