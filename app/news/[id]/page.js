export default function NewsDetailPage({ params }) {
  return (
    <>
      <h1>News Detail Page {params.id}</h1>
      <p>News ID: {params.id}</p>
    </>
  );
}
