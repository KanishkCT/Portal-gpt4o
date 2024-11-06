import React from 'react';
import { format, parseISO } from 'date-fns';
import type { TimeSlot } from '../../types/artist';

interface TimeSlotPickerProps {
  availability: TimeSlot[];
  selectedSlot: { date: string; time: string } | null;
  onSelectSlot: (date: string, time: string) => void;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  availability,
  selectedSlot,
  onSelectSlot,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900">Select a Time</h2>
      <div className="space-y-6">
        {availability.map((day) => (
          <div key={day.date}>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {format(parseISO(day.date), 'EEEE, MMMM d')}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {day.slots.map((time) => (
                <button
                  key={`${day.date}-${time}`}
                  onClick={() => onSelectSlot(day.date, time)}
                  className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                    selectedSlot?.date === day.date && selectedSlot?.time === time
                      ? 'bg-rose-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-rose-100'
                  }`}
                >
                  {format(parseISO(`${day.date}T${time}`), 'h:mm a')}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotPicker;