const checkImageSize = (file: File): Promise<boolean> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const isValid = img.width >= 1560 && img.height >= 560;
        resolve(isValid);
      };
      img.onerror = () => resolve(false);
      if (e.target?.result) {
        img.src = e.target.result as string;
      }
    };
    reader.onerror = () => resolve(false);
    reader.readAsDataURL(file);
  });
};

export default checkImageSize;
