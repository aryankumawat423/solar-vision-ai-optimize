
import { useState } from 'react';
import { motion } from 'framer-motion';
import UploadSection from '../components/dashboard/UploadSection';
import ResultsDisplay from '../components/dashboard/ResultsDisplay';

const Dashboard = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImageUrl(imageUrl);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Solar Panel Analysis Dashboard</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Upload an image of your solar panels to detect potential issues, analyze efficiency,
              and receive optimization recommendations.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <UploadSection onImageUpload={handleImageUpload} />
            
            <div className="border-t border-gray-200 pt-8">
              <ResultsDisplay imageUrl={uploadedImageUrl} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
