import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string | null) => {
  if (!url) {
    return noImage; // If url is null or undefined, return the default image
  }

  const mediaIndex = url.indexOf("media/");
  if (mediaIndex !== -1) {
    const index = mediaIndex + "media/".length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
  } else {
    return url; // If "media/" is not found in the URL, return the original URL
  }
};

export default getCroppedImageUrl;
