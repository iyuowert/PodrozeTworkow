document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.gallery img');

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            var index = this.getAttribute('data-index');
            openModal(index);
        });
    });
});

function openModal(index) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = index + '.jpg';
    modalImg.onclick = function() {
        closeModal();
    };
}

// Pozostała część kodu jest taka sama
