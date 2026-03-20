'use client';

import { useState, useEffect } from 'react';

export default function DeepScanDemo() {
  const [isScanning, setIsScanning] = useState(false);
  const [confidence, setConfidence] = useState(0);
  const [result, setResult] = useState<'real' | 'fake' | null>(null);

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setConfidence(prev => {
          if (prev >= 100) {
            setIsScanning(false);
            const isFake = Math.random() > 0.5;
            setResult(isFake ? 'fake' : 'real');
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isScanning]);

  const handleScan = () => {
    setIsScanning(true);
    setConfidence(0);
    setResult(null);
  };

  return (
    <div className="bg-black/50 rounded-lg p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white font-semibold">DEEPScan Demo</h4>
        <span className="text-xs text-white/50">Deepfake Detection</span>
      </div>
      
      <div className="bg-black/30 rounded-lg p-8 mb-4 border border-white/5">
        <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-12 h-12 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <p className="text-white/40 text-sm">Upload image to analyze</p>
          </div>
        </div>
      </div>

      {isScanning && (
        <div className="mb-4">
          <div className="flex justify-between text-sm text-white/60 mb-2">
            <span>Scanning...</span>
            <span>{Math.round(confidence)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${confidence}%` }}
            />
          </div>
        </div>
      )}

      {result && (
        <div className={`mb-4 p-3 rounded-lg border ${
          result === 'real' 
            ? 'bg-green-500/10 border-green-500/30 text-green-400' 
            : 'bg-red-500/10 border-red-500/30 text-red-400'
        }`}>
          <p className="text-sm font-medium">
            {result === 'real' ? '✓ Authentic Image' : '⚠ Deepfake Detected'}
          </p>
          <p className="text-xs mt-1 opacity-80">
            Confidence: {Math.round(confidence)}%
          </p>
        </div>
      )}

      <button
        onClick={handleScan}
        disabled={isScanning}
        className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isScanning ? 'Analyzing...' : 'Start Deepfake Scan'}
      </button>
    </div>
  );
}
