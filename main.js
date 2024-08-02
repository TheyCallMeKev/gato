document.addEventListener('DOMContentLoaded', function() {
    const open_button = document.querySelector('#open_button');
    const open_letter = document.querySelector('#open_letter');
    const note = document.querySelector('#note');

    function dissapearItem(item) {
        item.classList.remove('appear');
        item.classList.add('dissapear');
    }

    function appearItem(item) {
        item.classList.remove('dissapear');
        item.classList.add('appear');
    }

    function showNote(note) {
        note.style.transform = 'translateY(-200px)'
        setTimeout(() => {
            dissapearItem(open_letter);
            setTimeout(() => {
                note.style.transform = 'translateY(0px)';
                setTimeout(() => {
                    note.style.transform = 'scale(2.5, 4.7)'
                    setTimeout(() => {
                        document.querySelector('#text').style.opacity = '1';
                    },1500)
                }, 1000)
            }, 1000)
        }, 1000);
    }

    open_button.addEventListener('click', function() {
        dissapearItem(this);

        setTimeout(() => {
            appearItem(open_letter);
            appearItem(note);
            setTimeout(() => {
                showNote(note);
            }, 1000);
        }, 1000);
    });
})