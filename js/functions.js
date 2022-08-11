document.addEventListener('DOMContentLoaded', function () {
    let tabTitle = document.querySelectorAll('.tab__title'), // заголовок вкладки
        tabContent = document.querySelectorAll('.tab__content'), // блок содержащий контент вкладки
        tabWrapper = document.querySelector('#tabs');

    hideTabsContent(1);

    tabWrapper.addEventListener('click', function (e) {
        let t = e.target;
        if (t.className == 'tab__title') {
            for (let i = 0; i < tabTitle.length; i++) {
                if (t == tabTitle[i]) {
                    showTabsContent(i);
                    break;
                }
            }
        }
    });

    function hideTabsContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add("hide");
            tabTitle[i].classList.remove('active');
        }
    }

    function showTabsContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabsContent(0);
            tabTitle[b].classList.add('active');
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
});



