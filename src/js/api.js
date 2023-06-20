function fetchApiData() {
    fetch('https://economia.awesomeapi.com.br/USD/1')
        .then(response => response.json())
        .then(data => {
            const list = document.querySelector('#fill_list1');

            data.map((item) => {
                const li = document.createElement('span');


                li.setAttribute('id', item.id);

                li.innerHTML = item.low;

                list.appendChild(li);

            })
        })

    fetch('https://economia.awesomeapi.com.br/BTC/1')
        .then(response => response.json())
        .then(data => {
            const list = document.querySelector('#fill_list2');

            data.map((item) => {
                const li = document.createElement('span');

                li.setAttribute('id', item.id);

                li.innerHTML = item.bid;

                list.appendChild(li);

            })
        })

    fetch('https://economia.awesomeapi.com.br/EUR/1')
        .then(response => response.json())
        .then(data => {
            const list = document.querySelector('#fill_list3');

            data.map((item) => {
                const li = document.createElement('span');

                li.setAttribute('id', item.id);

                li.innerHTML = item.low;

                list.appendChild(li);

            })
        })

        fetch('https://economia.awesomeapi.com.br/ETH/1')
        .then(response => response.json())
        .then(data => {
            const list = document.querySelector('#fill_list4');

            data.map((item) => {
                const li = document.createElement('span');

                li.setAttribute('id', item.id);

                li.innerHTML = item.bid;

                list.appendChild(li);

            })
        })

        fetch('https://economia.awesomeapi.com.br/CNY/1')
        .then(response => response.json())
        .then(data => {
            const list = document.querySelector('#fill_list5');

            data.map((item) => {
                const li = document.createElement('span');

                li.setAttribute('id', item.id);

                li.innerHTML = item.bid;

                list.appendChild(li);

            })
        })

}