import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from 'date-fns';
import type { TimeSlot } from '../types/artist';

interface SimpleCalendarProps {
  availability: TimeSlot[];
}

const SimpleCalendar: React.FC<SimpleCalendarProps> = ({ availability }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const availableDates = availability.map(slot => slot.date);

  const isAvailable = (date: Date) => {
    return availableDates.includes(format(date, 'yyyy-MM-dd'));
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">
          {format(currentDate, 'MMMM yyyy')}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
        {days.map((day, dayIdx) => (
          <div
            key={day.toISOString()}
            className={`
              relative py-3 text-center text-sm
              ${isAvailable(day) ? 'cursor-pointer hover:bg-rose-50' : 'text-gray-400'}
              ${isToday(day) ? 'bg-rose-50' : ''}
              ${isSameMonth(day, currentDate) ? 'text-gray-900' : 'text-gray-400'}
            `}
          >
            <time dateTime={format(day, 'yyyy-MM-dd')}>
              {format(day, 'd')}
            </time>
            {isAvailable(day) && (
              <div className="h-1 w-1 bg-rose-500 rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleCalendar;