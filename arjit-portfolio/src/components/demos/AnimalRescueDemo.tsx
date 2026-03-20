'use client';

import { useState } from 'react';

interface Animal {
  id: number;
  name: string;
  type: string;
  age: string;
  status: 'available' | 'pending' | 'adopted';
  image: string;
}

export default function AnimalRescueDemo() {
  const [animals] = useState<Animal[]>([
    { id: 1, name: 'Luna', type: 'Dog', age: '2 years', status: 'available', image: '🐕' },
    { id: 2, name: 'Max', type: 'Cat', age: '1 year', status: 'available', image: '🐈' },
    { id: 3, name: 'Bella', type: 'Dog', age: '3 years', status: 'pending', image: '🐕' },
    { id: 4, name: 'Oliver', type: 'Cat', age: '6 months', status: 'adopted', image: '🐈' },
  ]);

  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [filter, setFilter] = useState<'all' | 'available' | 'pending' | 'adopted'>('all');

  const filteredAnimals = animals.filter(animal => 
    filter === 'all' || animal.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'adopted': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-white/10 text-white/60';
    }
  };

  return (
    <div className="bg-black/50 rounded-lg p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white font-semibold">Animal Rescue Management</h4>
        <span className="text-xs text-white/50">Adoption System</span>
      </div>

      <div className="flex gap-2 mb-4">
        {['all', 'available', 'pending', 'adopted'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status as any)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
              filter === status
                ? 'bg-white/20 text-white'
                : 'bg-white/5 text-white/60 hover:bg-white/10'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {filteredAnimals.map((animal) => (
          <div
            key={animal.id}
            onClick={() => setSelectedAnimal(animal)}
            className="bg-black/30 rounded-lg p-4 border border-white/5 hover:bg-white/5 transition cursor-pointer"
          >
            <div className="text-3xl mb-2 text-center">{animal.image}</div>
            <h5 className="text-white font-medium text-sm">{animal.name}</h5>
            <p className="text-white/60 text-xs">{animal.type} • {animal.age}</p>
            <div className={`mt-2 px-2 py-1 rounded text-xs border ${getStatusColor(animal.status)}`}>
              {animal.status}
            </div>
          </div>
        ))}
      </div>

      {selectedAnimal && (
        <div className="bg-black/30 rounded-lg p-4 border border-white/5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h5 className="text-white font-medium">{selectedAnimal.name}</h5>
              <p className="text-white/60 text-sm">{selectedAnimal.type} • {selectedAnimal.age}</p>
            </div>
            <button
              onClick={() => setSelectedAnimal(null)}
              className="text-white/40 hover:text-white/60"
            >
              ×
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-white/60">Status:</span>
              <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(selectedAnimal.status)}`}>
                {selectedAnimal.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Medical:</span>
              <span className="text-white/80">Vaccinated ✓</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Temperament:</span>
              <span className="text-white/80">Friendly</span>
            </div>
          </div>
          {selectedAnimal.status === 'available' && (
            <button className="w-full mt-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:opacity-90 transition">
              Start Adoption Process
            </button>
          )}
        </div>
      )}
    </div>
  );
}
