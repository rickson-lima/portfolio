import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  title: string;
};
export function Section({ children, title }: Props) {
  return (
    <section className="space-y-5">
      <h2 className="font-bold text-xs uppercase">{title}</h2>
      {children}
    </section>
  );
}
