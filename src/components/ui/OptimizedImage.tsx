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
  const finalSrc = optimizeCloudinaryUrl(src); 

  // Generate a basic srcSet if it's a Cloudinary URL
  const srcSet = src.includes("res.cloudinary.com") 
    ? `${optimizeCloudinaryUrl(src, 400)} 400w, ${optimizeCloudinaryUrl(src, 800)} 800w, ${optimizeCloudinaryUrl(src, 1200)} 1200w`
    : undefined;

  return (
    <div className={cn("relative overflow-hidden bg-muted/20", wrapperClassName)}>
      <img
        src={finalSrc}
        srcSet={srcSet}
        sizes={props.sizes || "(max-width: 768px) 100vw, 50vw"}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        {...(priority ? { fetchpriority: "high" } : {})}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "transition-all duration-700 ease-in-out",
          isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-lg",
          className
        )}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
           <Skeleton className="w-full h-full" />
        </div>
      )}
    </div>
  );
};
