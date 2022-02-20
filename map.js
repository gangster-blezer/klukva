var myMap;

ymaps.ready(init);  
function init() {
    myMap = new ymaps.Map("YMapsID", {
        center: [55.76, 37.64],
        zoom: 10,
        controls: ['zoomControl']
    }, {
        
    });
    //отключить зум колесиком мыши
    //myMap.behaviors.disable('scrollZoom');
        
    // 7. Балун.
    var myPlacemark = new ymaps.Placemark([55.609629,37.605176], {
        balloonContentHeader: 'Шоурум в ТЦ "ГРАНД ЮГ"',
        balloonContentBody: "<strong>Адрес:</strong> Москва, м.Пражская, ул. Кировоградская, д.15</br><strong>Тел. салона:</strong> +7 (909) 641 28 78</br><strong>Email:</strong> akossta.grand-south@mail.ru",
    }, {
        iconLayout: 'default#image',
        iconImageHref: "img/placeholder.png",
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -44],
        balloonOffset: [ 0, -50 ],
        hideIconOnBalloonOpen: false
    });

    myMap.geoObjects.add(myPlacemark);

    var myPlacemark = new ymaps.Placemark([55.885481,37.438037], {
        balloonContentHeader: 'Шоурум в ТЦ "ГРАНД"',
        balloonContentBody: "<strong>Адрес:</strong> МО, г. Химки, Бутаково 4</br><strong>Местоположение в комплексе:</strong> Центр детской мебели, цокольный этаж (вход рядом с маг. \"Эльдорадо\")</br><strong>Тел. салона:</strong> +7 (495) 780-33-33 доб. 44.41 <br>8-917-508-51-30</br><strong>Email:</strong> akosstagrand@mail.ru",
    }, {
        iconLayout: 'default#image',
        iconImageHref: "img/placeholder.png",
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -44],
        balloonOffset: [ 0, -50 ],
        hideIconOnBalloonOpen: false
    });

    myMap.geoObjects.add(myPlacemark);

    var myPlacemark = new ymaps.Placemark([55.702835,37.355722], {
        balloonContentHeader: 'Шоурум в ТЦ "ТРИ КИТА"',
        balloonContentBody: '<strong>Адрес:</strong> МО, Новоивановское пгт, ул. Луговая, 1</br><strong>Местоположение в комплексе:</strong> этаж 4, отдел "Детская мебель"</br><strong>Тел. салона:</strong> +7 (495) 780-37-37 доб. 2749 <br>8-991-927-95-62</br><strong>Email:</strong> akossta-kit@mail.ru',
    }, {
        iconLayout: 'default#image',
        iconImageHref: "img/placeholder.png",
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -44],
        balloonOffset: [ 0, -50 ],
        hideIconOnBalloonOpen: false
    });

    myMap.geoObjects.add(myPlacemark);
    
}

function select(a,b){
        myMap.setCenter([b, a]);  
        myMap.setZoom(15);
}