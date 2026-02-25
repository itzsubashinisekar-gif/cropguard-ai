import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  index?: number;
}

const SectionCard = ({ icon, title, children, index = 0 }: SectionCardProps) => (
  <motion.section
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-card"
  >
    <div className="flex items-center gap-3 mb-5">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary text-xl">
        {icon}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
    </div>
    <div className="space-y-4 text-muted-foreground leading-relaxed font-body text-[15px]">
      {children}
    </div>
  </motion.section>
);

export default SectionCard;
