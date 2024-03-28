/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge, Calendar, Popover, Whisper } from "rsuite";
import EquipmentContextProvider from "../../../store/EquipmentContext";
import { useCurrentDateDay } from "../hooks/useSchedules";



export const CalendarContainer = () => {

  // const currentDate = new Date();
  // const startDate = new Date(
  //   currentDate.getFullYear(),
  //   currentDate.getMonth(),
  //   1
  // );
  // const endDate = new Date(
  //   currentDate.getFullYear(),
  //   currentDate.getMonth() + 1,
  //   0
  // );
  // const [rangeDate, _] = useState({
  //   startDate,
  //   endDate,
  // });

  // console.log(rangeDate)


  return (
    <EquipmentContextProvider>
      <Calendar bordered renderCell={renderCell} />
    </EquipmentContextProvider>
  );
};


function renderCell(date: any) {
  const { list } = useCurrentDateDay(date);

  const displayList = list.filter((item, index) => index < 2);

  if (list.length) {
    const moreCount = list.length - displayList.length;
    const moreItem = (
      <li>
        <Whisper
          placement="top"
          trigger="click"
          speaker={
            <Popover>
              {list.map((item, index) => (
                <p key={index}>
                  <b>{item.time}</b> - {item.title}
                </p>
              ))}
            </Popover>
          }
        >
          <a>{moreCount} more</a>
        </Whisper>
      </li>
    );

    return (
      <ul className="calendar-todo-list">
        {displayList.map((item, index) => (
          <li key={index}>
            <Badge /> <b>{item.time}</b> - {item.title}
          </li>
        ))}
        {moreCount ? moreItem : null}
      </ul>
    );
  }

  return null;
}