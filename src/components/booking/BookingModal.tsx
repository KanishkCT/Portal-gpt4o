import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { Artist, Service } from '../../types/artist';
import ServiceSelection from './ServiceSelection';
import TimeSlotPicker from './TimeSlotPicker';

interface BookingModalProps {
  artist: Artist;
  onClose: () => void;
  onBook: (booking: {
    artist: Artist;
    service: Service;
    date: string;
    time: string;
  }) => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ artist, onClose, onBook }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<{ date: string; time: string } | null>(
    null
  );

  const handleNext = () => {
    if (step === 1 && selectedService) {
      setStep(2);
    } else if (step === 2 && selectedSlot) {
      onBook({
        artist,
        service: selectedService!,
        date: selectedSlot.date,
        time: selectedSlot.time,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Book with {artist.name}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {step === 1 ? (
              <ServiceSelection
                services={artist.services}
                selectedService={selectedService}
                onSelectService={setSelectedService}
              />
            ) : (
              <TimeSlotPicker
                availability={artist.availability}
                selectedSlot={selectedSlot}
                onSelectSlot={(date, time) => setSelectedSlot({ date, time })}
              />
            )}
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={handleNext}
              disabled={step === 1 ? !selectedService : !selectedSlot}
              className="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-rose-600 text-base font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === 1 ? 'Next' : 'Book Appointment'}
            </button>
            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="mt-3 sm:mt-0 w-full inline-flex justify-center rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Back
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;