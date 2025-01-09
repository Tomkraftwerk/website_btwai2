import { useState } from 'react';
import { visions } from '../data/visions';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function VisionGrid() {
  const [expandedVision, setExpandedVision] = useState<string | null>(null);
  const [expandedChallenges, setExpandedChallenges] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16">
      <div className="text-center mb-12">
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          "Wie würde unsere Zukunft aussehen, wenn 100% der jeweiligen Wahlprogramme vollständig umgesetzt werden?"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visions.map((vision) => (
          <div key={vision.party} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative aspect-w-16 aspect-h-9">
              <img
                src={vision.imageUrl}
                alt={`Vision ${vision.party}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                <span className="font-semibold text-sm">{vision.party}</span>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <button
                  onClick={() => setExpandedVision(expandedVision === vision.party ? null : vision.party)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-medium">KI Erklärung</span>
                  {expandedVision === vision.party ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {expandedVision === vision.party && (
                  <p className="mt-4 text-sm text-gray-600">
                    {vision.description}
                  </p>
                )}
              </div>

              <div>
                <button
                  onClick={() => setExpandedChallenges(expandedChallenges === vision.party ? null : vision.party)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-medium">Was war schwer darzustellen?</span>
                  {expandedChallenges === vision.party ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {expandedChallenges === vision.party && (
                  <div className="mt-4 text-sm text-gray-600">
                    {vision.challenges.map((challenge, index) => (
                      <div key={index} className="mb-4">
                        <h4 className="font-medium mb-2">{challenge.category}</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {challenge.points.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      

    </div>
  );
}