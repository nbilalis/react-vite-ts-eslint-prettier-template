import '@/components/Hello.scoped.scss';

interface HelloProps {
  name: string;
}

function Hello({ name }: HelloProps) {
  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>From your React app!</p>
    </>
  );
}

export default Hello;
