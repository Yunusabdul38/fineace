import PropTypes from "prop-types";
export default function TableRow({
  sn,
  department,
  budget,
  spend,
  request = false,
  handler,
}) {
  return (
    <div
      className="grid grid-cols-[0.3fr_2fr_1fr_1fr_1fr] text-sm sm:text-base font-LexendDeca capitalize border place-content-center"
      role="row"
    >
      <div className="border-r text-center h-10 place-content-center">{sn}</div>
      <div className="border-r text-center h-10 place-content-center">
        {department}
      </div>
      <div className="border-r text-center h-10 place-content-center">
        {budget}
      </div>
      <div className="border-r text-center h-10 place-content-center">
        {spend}
      </div>
      {request && (
        <button
          type="button"
          className="text-[12px] items-center hover:bg-orangePrimary bg-white hover:text-white text-orangeText border-orangeText hover:border-transparent transition-all duration-500 border ease-in-out rounded-md py-1 px-2 my-1 mx-auto capitalize font-LexendDeca font-normal w-fit"
          onClick={() => handler()}
        >
          allocate funds
        </button>
      )}
    </div>
  );
}

TableRow.propTypes = {
  sn: PropTypes.number,
  department: PropTypes.string,
  budget: PropTypes.string,
  spend: PropTypes.string,
  request: PropTypes.bool,
  handler: PropTypes.func
};
