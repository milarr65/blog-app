//Check if url is valid
const isUrlValid = (input) => {
  try {
    new URL(input)
    return true;
  } catch (_) {
    return false;
  }
}

//check img extension
const hasImageExtension = (url) => {
  return /\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i.test(url)
}

async function isImageUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    const contentType = res.headers.get('Content-Type');
    return contentType && contentType.startsWith('image/')
  } catch (error) {
    return false;
  }
}

export async function validateImgUrl(input) {
  if (!isUrlValid(input)) return false;
  if (!hasImageExtension(input)) return false;
  return await isImageUrl(input);
}