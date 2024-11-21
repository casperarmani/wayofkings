import React, { useState } from 'react';
import { Target, Clock, Zap, Brain, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { UseCaseDemo } from './UseCaseDemo';
import { cn } from '@/lib/utils';

export type UseCase = 'roas' | 'research' | 'scale' | 'creation' | 'trends';

export function MetricsBanner() {
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase>('roas');

  const buttonClasses = "w-full justify-start p-3 h-auto bg-black/20 backdrop-blur-xl border border-white/10 hover:bg-black/30 hover:border-white/20 text-white hover:text-white whitespace-normal text-left min-h-[56px]";

  return (
    <div className="max-w-7xl mx-auto px-6 mt-16 mb-8 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-light text-black leading-tight">
          Make Every Ad As Profitable As Your Best
        </h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Button 
          variant="ghost" 
          className={cn(
            buttonClasses,
            selectedUseCase === 'roas' && "bg-black/40 border-white/20"
          )}
          onClick={() => setSelectedUseCase('roas')}
        >
          <Target className="w-5 h-5 text-white/60 shrink-0 mr-3" />
          <span className="text-sm font-normal leading-tight">Inconsistent ROAS/Performance</span>
        </Button>

        <Button 
          variant="ghost" 
          className={cn(
            buttonClasses,
            selectedUseCase === 'research' && "bg-black/40 border-white/20"
          )}
          onClick={() => setSelectedUseCase('research')}
        >
          <Clock className="w-5 h-5 text-white/60 shrink-0 mr-3" />
          <span className="text-sm font-normal leading-tight">Time Waste on Research</span>
        </Button>

        <Button 
          variant="ghost" 
          className={cn(
            buttonClasses,
            selectedUseCase === 'scale' && "bg-black/40 border-white/20"
          )}
          onClick={() => setSelectedUseCase('scale')}
        >
          <Zap className="w-5 h-5 text-white/60 shrink-0 mr-3" />
          <span className="text-sm font-normal leading-tight">Scaling Winners</span>
        </Button>

        <Button 
          variant="ghost" 
          className={cn(
            buttonClasses,
            selectedUseCase === 'creation' && "bg-black/40 border-white/20"
          )}
          onClick={() => setSelectedUseCase('creation')}
        >
          <Brain className="w-5 h-5 text-white/60 shrink-0 mr-3" />
          <span className="text-sm font-normal leading-tight">Guesswork in Creation</span>
        </Button>

        <Button 
          variant="ghost" 
          className={cn(
            buttonClasses,
            selectedUseCase === 'trends' && "bg-black/40 border-white/20"
          )}
          onClick={() => setSelectedUseCase('trends')}
        >
          <TrendingUp className="w-5 h-5 text-white/60 shrink-0 mr-3" />
          <span className="text-sm font-normal leading-tight">Missing Trends</span>
        </Button>
      </div>
      <UseCaseDemo useCase={selectedUseCase} />
    </div>
  );
}