type BrandMarkProps = {
  name: string;
};

export default function BrandMark({ name }: BrandMarkProps) {
  return (
    <span className="inline-block text-xl font-extrabold uppercase tracking-wide text-muted transition-colors duration-300 hover:text-ink sm:text-2xl">
      {name}
    </span>
  );
}
