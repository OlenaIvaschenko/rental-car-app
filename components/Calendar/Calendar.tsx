import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import { enUS } from "date-fns/locale/en-US";

registerLocale("en-US", enUS);

export default function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleChange}
      locale="en-US"
      formatWeekDay={(day) => day.substring(0, 3).toUpperCase()}
      dateFormat="dd/MM/yyyy"
      calendarStartDay={1}
      className="calendar"
      placeholderText="Booking date"
    />
  );
}
