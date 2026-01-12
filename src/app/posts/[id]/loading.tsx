import { Recycle } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white gap-4">
      <div className="relative flex items-center justify-center">
        {/* Pulse effect behind the icon */}
        <div className="absolute inset-0 rounded-full bg-green-100 blur-xl animate-pulse" />
        
        {/* Spinning Recycle Icon */}
        <Recycle 
          className="relative h-16 w-16 text-green-600 animate-spin" 
          style={{ animationDuration: '3s' }} 
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-xl font-bold text-green-800 tracking-wide">
          Recycling
        </h2>
        <p className="text-sm font-medium text-green-600/80 animate-pulse">
          Reviving Tech...
        </p>
      </div>
    </div>
  );
}
