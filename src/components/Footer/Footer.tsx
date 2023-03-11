import Connect from "@/components/Connect/Connect";
import OverlappingText from "@/components/OverlappingText/OverlappingText";

export default function Footer() {
  return (
    <div className="text-center my-6">
      <OverlappingText
        backgroundtext="Connect"
        toptext="Wanna Reach Out?"
        startTime={300}
      />
      <Connect />© 2023 Ujjawal Kumar
    </div>
  );
}
