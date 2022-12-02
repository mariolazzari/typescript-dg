import { ReactNode } from "react";

type SectoinProps = {
  title?: string;
  children: ReactNode;
};

const Section = ({ title = "Default title", children }: SectoinProps) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
};

export default Section;
