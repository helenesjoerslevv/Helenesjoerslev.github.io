
  document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggleNoHover = document.querySelectorAll('.dropdown-toggle-no-hover');

    dropdownToggleNoHover.forEach(function (element) {
      element.addEventListener('click', function (e) {
        e.preventDefault();
        const parentDropdown = this.closest('.dropdown');
        const dropdownMenu = parentDropdown.querySelector('.dropdown-menu');

        if (!parentDropdown.classList.contains('show')) {
          dropdownMenu.style.display = 'block';
        } else {
          dropdownMenu.style.display = 'none';
        }
      });
    });
  });