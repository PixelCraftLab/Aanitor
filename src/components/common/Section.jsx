import Container from "./Container";

const Section = ({
  children,
  id,
  className = "",
  containerClassName = "",
}) => {
  return (
    <section
      id={id}
      className={`relative w-full ${className}`}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default Section;