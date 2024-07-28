const toggle_butt = document.querySelector('.toggle_button')
        const toggle_but_icon = document.querySelector('.toggle_button i')
        const dropDownMenu = document.querySelector('.dropdown')

        toggle_butt.onclick = function () {
            dropDownMenu.classList.toggle('open')
            const isopen = dropDownMenu.classList.contains('open')
            toggle_but_icon.classList = isopen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
        }

        var loading = document.querySelector(".loader");
        var frontSection = document.getElementById("front");

        function initDelay() {
            var frontElements = frontSection.querySelectorAll('[data-aos]');
            frontElements.forEach(function (element) {
                element.setAttribute('data-aos-delay', '0');
            });

            AOS.init({
                offset: 1,
                once: false,
                mirror: true
            });
        }

        setTimeout(function () {
            loading.style.top = "-120%";
            setTimeout(function () {
                initDelay();
                AOS.refresh();
            }, 0);
        }, 3300);

        const counters = document.querySelectorAll('.counter');
        const speed = 200;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = Math.ceil(target / speed);
                if (count < target) {
                    counter.innerText = count + inc;
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });