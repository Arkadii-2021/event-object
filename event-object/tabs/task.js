const tabBtn = document.getElementsByClassName('tab');
const tabContents = document.getElementsByClassName('tab__content');

function managerTabs(tabsId) {
	Array.from(tabBtn).forEach(function (itemContent, indexIdReal) {
	const checkTab = document.getElementById(`tabs${tabsId}`);
		tabBtn[indexIdReal].addEventListener('click', (event) => {
		document.querySelector('.tab_active').classList.remove('tab_active');
		event.target.classList.add('tab_active');
		Array.from(tabContents).forEach(i => i.classList.remove('tab__content_active'));
		tabContents[indexIdReal].classList.add('tab__content_active')
	})})
};

managerTabs(1);