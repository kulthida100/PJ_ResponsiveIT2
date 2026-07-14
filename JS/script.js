document.addEventListener('DOMContentLoaded', () => {
  const loadPartial = async (targetId, file) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error('Unable to load partial');
      target.innerHTML = await response.text();
    } catch (error) {
      target.innerHTML = '<p>ไม่สามารถโหลดส่วนประกอบได้ในขณะนี้</p>';
    }
  };

  loadPartial('site-header', 'header.html');
  loadPartial('site-footer', 'footer.html');

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
