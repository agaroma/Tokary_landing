

let qa__wrapper = document.querySelectorAll('.qa__wrapper')

        qa__wrapper.forEach(el => {
            el.addEventListener('click', () => {

                let span = el.childNodes[5]
                let btn = el.childNodes[3]
                let qa__wrapper = el

                console.log(el.childNodes)
                if (span.style.maxHeight === '0px') {
                    span.style.maxHeight = span.scrollHeight + 'px'
                    qa__wrapper.style.background = '#fff'
                    btn.style.transform = 'rotate(180deg)'
                } else {
                    span.style.maxHeight = 0
                    qa__wrapper.style.background = '#fcfaff'
                    btn.style.transform = 'rotate(0deg)'
                }

            });

        });
