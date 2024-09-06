import { useRouter } from "next/router";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log(filterData);

  if(!filterData){
    return <p className="center">Loading...</p>;
  }
  const filteredYear=filterData[0];
  const filteredMonth = filterData[1];
  //将字符串转换为数字
  const numYear=+filteredYear;
  const numMonth=+filteredMonth;

  if(
    isNaN(numYear)||
    isNaN(numMonth)||
    numYear
)
  return (
    <div>
      <h1>Filtered Events</h1>
    </div>
  );
}

export default FilteredEventsPage;
