/* Description: Main JavaScript File */

/**************************
** Navigation on Mobile **
*************************/

const toggle = document.querySelector('.toggle-menu');
const nav = document.querySelector('nav>ul')

// show or hide navigation when toggle is clicked
toggle.addEventListener('click', () => {
    nav.classList.toggle('show-nav')
});


/************************
** Back To Top Button **
***********************/

// Get the button
const backToTopBtn = document.querySelector('#back-to-top')

// onscroll, execute showButtonOnScroll function
window.onscroll = function() {
    showButtonOnScroll()
}

// When the user scrolls down 20px from top of the document, show button
function showButtonOnScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		backToTopBtn.style.display = "block";
	} else {
		backToTopBtn.style.display = "none";
	}
}

// When the button is clicked, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

backToTopBtn.addEventListener('click', scrollToTop)