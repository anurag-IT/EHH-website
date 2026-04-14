/**
 * Cloudinary Optimization Utility
 * Automatically transforms raw Cloudinary URLs into highly optimized formats
 * adding auto format, auto quality, and responsive width parameters.
 */
export const optimizeCloudinaryUrl = (url: string, width?: number): string => {
  // Only process valid Cloudinary URLs
  if (!url || !url.includes("res.cloudinary.com")) return url;

  // Prevent double optimization if params already exist
  if (url.includes("f_auto") || url.includes("q_auto")) return url;

  try {
    const urlParts = url.split("/upload/");
    if (urlParts.length !== 2) return url;
    
    // Add essential auto-optimizations
    const transformations = ["f_auto", "q_auto"];
    if (width) transformations.push(`w_${width}`);
    
    return `${urlParts[0]}/upload/${transformations.join(",")}/${urlParts[1]}`;
  } catch (error) {
    return url; // Fallback to original
  }
};
