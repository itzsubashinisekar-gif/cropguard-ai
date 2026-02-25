import { ReactNode } from "react";

interface HighlightBoxProps {
  children: ReactNode;
  variant?: "primary" | "accent";
}

const HighlightBox = ({ children, variant = "primary" }: HighlightBoxProps) => (
  <div
    className={`rounded-lg border-l-4 px-5 py-4 text-sm font-medium ${
      variant === "primary"
        ? "border-primary bg-primary/5 text-foreground"
        : "border-accent bg-accent/10 text-foreground"
    }`}
  >
    {children}
  </div>
);

export default HighlightBox;
