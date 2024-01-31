import Cabecalho from "./Cabecalho";

export default function Layout({ children }) {
  /* ss */
  return (
    <>
      <Cabecalho />
      <main className="limitador">{children}</main>
    </>
  );
}
