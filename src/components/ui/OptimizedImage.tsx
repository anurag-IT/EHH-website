import React, { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { optimizeCloudinaryUrl } from '@/lib/cloudinary';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className, 
  wrapperClassName, 
  priority = false, // Add priority prop defaulting to false
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const finalSrc = optimizeCloudinaryUrl(src); // Ensure responsive Cloudinary format

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      <img
        src={finalSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"} // Eager load if it's high priority
        {...(priority ? { fetchPriority: "high" } : {})} // Give it high fetch priority if needed
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />
    </div>
  );
};
