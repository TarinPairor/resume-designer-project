interface Props {
  Contact: string;
  Education: string;
  Expertise: string;
  Language: string;
}

function Resume({ Contact, Education, Expertise, Language }: Props) {
  return (
    <div>
      <p>{Contact}</p>
      <p>{Education}</p>
      <p>{Expertise}</p>
      <p>{Language}</p>
    </div>
  );
}

export default Resume;
