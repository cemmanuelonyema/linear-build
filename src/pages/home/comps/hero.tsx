interface HeroProps {
  title: string;
  subtitle: string;
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};
