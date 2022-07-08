const dropdown = document.querySelector('.dropdown');
const dropdownList = document.querySelector('ul.dropdown__list');

function listChange() {
	dropdown.addEventListener('click', () => {
	dropdownList.classList.toggle('dropdown__list_active');
});
	for (item of document.querySelectorAll('li.dropdown__item')) {
		item.addEventListener('click', (event) => {
			event.preventDefault();
			textBtn = event.path[1].textContent;
			document.querySelector('.dropdown__value').textContent = textBtn.trim();
			document.querySelector('a.dropdown__link').onclick = null;
		})
	}	
};

listChange();