import pug from 'pug';
export default function renderPugToHtml(pugPath, config) {
  try {
    return pug.renderFile(pugPath, config);
  } catch (error) {
    console.error(`⚠️ PUG rendering error:`, error.message);
    return null;
  }
}
