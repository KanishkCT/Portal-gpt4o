import React from 'react';
import { Clock, DollarSign } from 'lucide-react';
import type { Service } from '../../types/artist';

interface ServiceSelectionProps {
  services: Service[];
  selectedService: Service | null;
  onSelectService: (service: Service) => void;
}

const ServiceSelection: React.FC<ServiceSelectionProps> = ({
  services,
  selectedService,
  onSelectService,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900">Select a Service</h2>
      <div className="grid gap-4">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onSelectService(service)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              selectedService?.id === service.id
                ? 'border-rose-600 bg-rose-50'
                : 'border-gray-200 hover:border-rose-200'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{service.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{service.description}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center text-gray-700">
                  <Clock size={16} className="mr-1" />
                  <span className="text-sm">{service.duration} min</span>
                </div>
                <div className="flex items-center text-gray-700 mt-1">
                  <DollarSign size={16} className="mr-1" />
                  <span className="text-sm">${service.price}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;