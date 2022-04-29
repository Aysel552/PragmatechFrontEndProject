let btns = document.querySelectorAll('.btn');
let icons = document.querySelectorAll('.btn i');



function btnChecked() {
    for (let btn of btns) {
        btn.addEventListener('click', () => {
            btn.classList.toggle('checked');
            for (let icon of icons) {
                if (icon.parentNode==btn) {
                    icon.classList.toggle('inline')
                }
            }
        })
    }

}

btnChecked()