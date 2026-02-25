const InfoList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2">
        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default InfoList;
