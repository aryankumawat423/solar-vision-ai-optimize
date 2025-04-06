
import { useEffect, useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { Zap, Sun, AlertTriangle, Check, HelpCircle } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface ResultsDisplayProps {
  imageUrl: string | null;
}

// Sample data for charts
const energyData = [
  { month: 'Jan', current: 65, optimized: 82 },
  { month: 'Feb', current: 72, optimized: 90 },
  { month: 'Mar', current: 85, optimized: 95 },
  { month: 'Apr', current: 78, optimized: 94 },
  { month: 'May', current: 90, optimized: 98 },
  { month: 'Jun', current: 95, optimized: 100 },
  { month: 'Jul', current: 92, optimized: 99 },
  { month: 'Aug', current: 88, optimized: 97 },
  { month: 'Sep', current: 80, optimized: 93 },
  { month: 'Oct', current: 74, optimized: 91 },
  { month: 'Nov', current: 68, optimized: 85 },
  { month: 'Dec', current: 62, optimized: 80 },
];

const issuesData = [
  { name: 'Dirt', current: 15 },
  { name: 'Shade', current: 8 },
  { name: 'Angle', current: 12 },
  { name: 'Damage', current: 4 },
];

const ResultsDisplay = ({ imageUrl }: ResultsDisplayProps) => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentEfficiency, setCurrentEfficiency] = useState(78);
  const [potentialEfficiency, setPotentialEfficiency] = useState(94);
  const [annualSavings, setAnnualSavings] = useState(0);

  useEffect(() => {
    if (imageUrl) {
      setIsProcessing(true);
      setProgress(0);
      
      // Simulate AI processing with progress
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 5;
          if (newProgress >= 100) {
            clearInterval(interval);
            setIsProcessing(false);
            // Calculate annual savings
            setAnnualSavings(Math.floor(Math.random() * 400) + 300);
            return 100;
          }
          return newProgress;
        });
      }, 200);
      
      return () => clearInterval(interval);
    }
  }, [imageUrl]);

  if (!imageUrl) {
    return (
      <div className="text-center py-10">
        <HelpCircle size={48} className="mx-auto text-gray-400 mb-4" />
        <h3 className="text-xl text-gray-600">Upload an image to see AI analysis results</h3>
      </div>
    );
  }

  return (
    <div>
      {isProcessing ? (
        <div className="text-center py-10">
          <div className="mb-8">
            <img
              src={imageUrl}
              alt="Uploaded solar panel"
              className="max-h-64 mx-auto rounded-lg shadow-lg mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">Analyzing solar panel image...</h3>
            <div className="max-w-md mx-auto">
              <Progress value={progress} className="mb-2 h-2" />
              <p className="text-gray-500 text-sm">{progress}% complete</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="relative">
                <img 
                  src={imageUrl} 
                  alt="Analyzed solar panel" 
                  className="w-full rounded-lg shadow-lg"
                />
                {/* AI detection overlay */}
                <div className="absolute inset-0">
                  {/* Dirt detection */}
                  <div className="absolute top-[20%] left-[30%] w-[100px] h-[80px] border-2 border-red-500 rounded-md">
                    <div className="absolute -top-6 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      Dirt: 92%
                    </div>
                  </div>
                  
                  {/* Efficiency issue */}
                  <div className="absolute top-[40%] left-[60%] w-[120px] h-[90px] border-2 border-yellow-500 rounded-md">
                    <div className="absolute -top-6 left-0 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                      Efficiency: 76%
                    </div>
                  </div>
                  
                  {/* Good panel */}
                  <div className="absolute top-[60%] left-[25%] w-[110px] h-[85px] border-2 border-green-500 rounded-md">
                    <div className="absolute -top-6 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Optimal: 98%
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold">Issues Detected</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <AlertTriangle size={20} className="text-red-500 mr-2" />
                    <span>Dust accumulation on top-left panel (reducing efficiency by ~15%)</span>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle size={20} className="text-yellow-500 mr-2" />
                    <span>Sub-optimal panel angle on right side (reducing efficiency by ~8%)</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={20} className="text-green-500 mr-2" />
                    <span>Bottom panels performing well with 98% efficiency</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button>View Detailed Report</Button>
                </div>
              </div>
            </div>
            
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <GlassCard className="text-center">
                  <Zap size={32} className="text-solar mx-auto mb-2" />
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Current Efficiency</h4>
                  <p className="text-3xl font-bold">{currentEfficiency}%</p>
                </GlassCard>
                
                <GlassCard className="text-center">
                  <Sun size={32} className="text-primary mx-auto mb-2" />
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Potential Efficiency</h4>
                  <p className="text-3xl font-bold">{potentialEfficiency}%</p>
                </GlassCard>
                
                <GlassCard className="text-center col-span-2">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Estimated Annual Savings</h4>
                  <p className="text-3xl font-bold text-green-600">${annualSavings}</p>
                  <p className="text-xs text-gray-500 mt-1">After implementing recommended changes</p>
                </GlassCard>
              </div>
              
              <GlassCard className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Detected Issues Breakdown</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={issuesData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 20]} />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip />
                      <Bar dataKey="current" fill="#ff9800" name="Efficiency Loss %" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>
              
              <GlassCard>
                <h3 className="text-lg font-semibold mb-4">Energy Production Forecast</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={energyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[50, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="current" 
                        stroke="#ff9800" 
                        name="Current Efficiency (%)"
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="optimized" 
                        stroke="#0088fe" 
                        name="After Optimization (%)" 
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Optimization Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GlassCard className="flex flex-col h-full">
                <h4 className="font-medium mb-2 text-lg">Cleaning</h4>
                <p className="text-gray-600 mb-4 flex-grow">Remove dust and dirt accumulation from top-left panel sector to restore optimal efficiency.</p>
                <div className="text-sm text-green-600 font-medium">+15% Efficiency Gain</div>
              </GlassCard>
              
              <GlassCard className="flex flex-col h-full">
                <h4 className="font-medium mb-2 text-lg">Angle Adjustment</h4>
                <p className="text-gray-600 mb-4 flex-grow">Adjust right side panels to optimal 32° angle facing South for maximum sun exposure.</p>
                <div className="text-sm text-green-600 font-medium">+8% Efficiency Gain</div>
              </GlassCard>
              
              <GlassCard className="flex flex-col h-full">
                <h4 className="font-medium mb-2 text-lg">Shade Management</h4>
                <p className="text-gray-600 mb-4 flex-grow">Trim nearby tree branches casting occasional shadows on panel corners during midday.</p>
                <div className="text-sm text-green-600 font-medium">+3% Efficiency Gain</div>
              </GlassCard>
            </div>
          </div>
          
          <div className="text-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">View AR Placement Simulator</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay;
