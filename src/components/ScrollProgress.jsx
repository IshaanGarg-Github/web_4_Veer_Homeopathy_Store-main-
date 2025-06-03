import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const progressBar = document.getElementById("scroll-progress");

    const onScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = progress + "%";
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="scroll-progress"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        background: "var(--royal_purple)",
        width: "0%",
        zIndex: 1001,
        transition: "width 0.1s ease",
      }}
    />
  );
}
