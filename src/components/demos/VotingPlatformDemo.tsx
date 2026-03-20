'use client';

import { useState } from 'react';

interface Candidate {
  id: number;
  name: string;
  party: string;
  votes: number;
}

export default function VotingPlatformDemo() {
  const [candidates, setCandidates] = useState<Candidate[]>([
    { id: 1, name: 'Alice Johnson', party: 'Progressive Party', votes: 45 },
    { id: 2, name: 'Bob Smith', party: 'Conservative Party', votes: 32 },
    { id: 3, name: 'Carol Davis', party: 'Independent', votes: 23 },
  ]);

  const [hasVoted, setHasVoted] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);

  const handleVote = () => {
    if (selectedCandidate && !hasVoted) {
      setCandidates(prev => 
        prev.map(c => 
          c.id === selectedCandidate 
            ? { ...c, votes: c.votes + 1 }
            : c
        )
      );
      setHasVoted(true);
    }
  };

  const getPercentage = (votes: number) => {
    return totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;
  };

  return (
    <div className="bg-black/50 rounded-lg p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white font-semibold">Online Voting Platform</h4>
        <span className="text-xs text-white/50">E-Voting System</span>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <h5 className="text-white text-sm font-medium">Select Candidate</h5>
          <button
            onClick={() => setShowResults(!showResults)}
            className="text-xs text-white/60 hover:text-white/80"
          >
            {showResults ? 'Hide' : 'Show'} Results
          </button>
        </div>

        <div className="space-y-2">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className={`bg-black/30 rounded-lg p-3 border cursor-pointer transition ${
                selectedCandidate === candidate.id
                  ? 'border-cyan-500/50 bg-cyan-500/10'
                  : 'border-white/5 hover:bg-white/5'
              }`}
              onClick={() => !hasVoted && setSelectedCandidate(candidate.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h6 className="text-white font-medium text-sm">{candidate.name}</h6>
                  <p className="text-white/60 text-xs">{candidate.party}</p>
                </div>
                {showResults && (
                  <div className="text-right">
                    <div className="text-white font-medium">{candidate.votes}</div>
                    <div className="text-white/60 text-xs">{getPercentage(candidate.votes)}%</div>
                  </div>
                )}
              </div>

              {showResults && (
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${getPercentage(candidate.votes)}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black/30 rounded-lg p-3 border border-white/5 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-white/60">Total Votes:</span>
          <span className="text-white font-medium">{totalVotes}</span>
        </div>
      </div>

      {!hasVoted ? (
        <button
          onClick={handleVote}
          disabled={!selectedCandidate}
          className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {selectedCandidate ? 'Cast Vote' : 'Select a Candidate'}
        </button>
      ) : (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
          <p className="text-green-400 text-sm font-medium">✓ Vote Cast Successfully</p>
          <p className="text-green-400/60 text-xs mt-1">Thank you for participating</p>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-white/40 text-xs text-center">
          Secure voting with real-time results
        </p>
      </div>
    </div>
  );
}
