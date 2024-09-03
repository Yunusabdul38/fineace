export default function TableRow({sn,department,budget,spend}) {
  return (
    <div
      className="grid grid-cols-[0.3fr_2fr_1fr_1fr] text-sm sm:text-base font-LexendDeca capitalize border place-content-center"
      role="row"
    >
      <div className="border-r text-center h-10 place-content-center">{sn}</div>
      <div className="border-r text-center h-10 place-content-center">{department}</div>
      <div className="border-r text-center h-10 place-content-center">{budget}</div>
      <div className="text-center h-10 place-content-center">{spend}</div>
    </div>
  );
}
