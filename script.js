document.querySelectorAll('.pricing-box').forEach(box => {
  box.addEventListener('click', () => {
    // Remove expanded class and hide options from all boxes
    document.querySelectorAll('.pricing-box').forEach(b => {
      b.classList.remove('expanded');
      b.querySelector('.extra-options').classList.add('hidden');
      b.querySelector('.pricing-radio').checked = false;
    });

    // Add expanded class and show options for the clicked box
    box.classList.add('expanded');
    box.querySelector('.extra-options').classList.remove('hidden');
    box.querySelector('.pricing-radio').checked = true;
  });
});