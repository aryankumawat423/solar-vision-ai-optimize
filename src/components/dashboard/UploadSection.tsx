
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const UploadSection = ({ onImageUpload }: { onImageUpload: (imageUrl: string) => void }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.match('image.*')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);
    
    // Simulate API upload with a timeout
    setTimeout(() => {
      // Using sample URLs since we can't actually upload in this demo
      const sampleUrls = [
        'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ];
      
      // Get a random sample URL
      const imageUrl = sampleUrls[Math.floor(Math.random() * sampleUrls.length)];
      
      onImageUpload(imageUrl);
      setIsUploading(false);
      
      toast({
        title: "Image uploaded successfully",
        description: "Processing your solar panel image..."
      });
    }, 1500);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Upload a Solar Panel Image</h2>
      <p className="text-gray-600 mb-6">
        Upload an image of your solar panels for AI analysis. The system will detect damage, dirt, and efficiency issues.
      </p>
      
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-xl p-10 text-center transition-colors ${
          isDragging ? 'border-primary bg-primary/5' : 'border-gray-300'
        }`}
      >
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept="image/*"
          onChange={handleFileInput}
        />
        
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-4 rounded-full mb-4">
            <ImageIcon size={32} className="text-gray-500" />
          </div>
          <p className="text-lg mb-2">
            {isDragging ? 'Drop image here' : 'Drag & drop your image here'}
          </p>
          <p className="text-gray-500 mb-4">or</p>
          <Button
            onClick={() => document.getElementById('file-upload')?.click()}
            disabled={isUploading}
            className="flex items-center"
          >
            <Upload size={18} className="mr-2" />
            {isUploading ? 'Uploading...' : 'Browse Files'}
          </Button>
        </div>
      </div>
      
      <div className="mt-4 flex items-center text-sm text-gray-500">
        <AlertCircle size={16} className="mr-2" />
        <p>For demonstration purposes, we'll use a pre-selected sample image.</p>
      </div>
    </div>
  );
};

export default UploadSection;
