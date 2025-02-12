
function loadYandexMaps() {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ВАШ_API_КЛЮЧ&lang=ru_RU';
    script.onload = () => ymaps.ready(initMap);
    document.head.appendChild(script);
}

let map, selectedMarker = null;

function initMap() {
    const mapContainer = document.getElementById("map")
    
    if(mapContainer) {
        map = new ymaps.Map("map", {
            center: [55.751244, 37.618423], // Москва
            zoom: 14,
            controls: ["zoomControl", "geolocationControl"]
        });
    
        // Чёрно-белый стиль карты
        map.setType('yandex#map');
        map.options.set('mapType', 'yandex#dark');
    
        const markerSpans = document.querySelectorAll(".marker-data");
        const markersData = Array.from(markerSpans).map(span => ({
            lat: parseFloat(span.getAttribute("data-lat")),
            lng: parseFloat(span.getAttribute("data-lng")),
            title: span.getAttribute("data-title")
        }));
    
        // Кастомная иконка меток
        const customIcon = {
            iconLayout: "default#image",
            iconImageHref: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCAzNiA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMTggMEMxMy4yMjgxIDAuMDA2MzQ5OSA4LjY1MzM3IDEuOTA0ODEgNS4yNzkwOSA1LjI3OTA5QzEuOTA0ODEgOC42NTMzNyAwLjAwNjM0OTkgMTMuMjI4MSAwIDE4QzAgMzAuOTIyNSAxNi43NyA0Ny4xMDc1IDE3LjQ4MjUgNDcuNzlDMTcuNjIxMSA0Ny45MjQ3IDE3LjgwNjcgNDggMTggNDguMDAwMUMxOC4xOTMzIDQ4IDE4LjM3ODkgNDcuOTI0NyAxOC41MTc1IDQ3Ljc5QzE5LjIzIDQ3LjEwNzUgMzYgMzAuOTIyNSAzNiAxOEMzNS45OTM2IDEzLjIyODEgMzQuMDk1MiA4LjY1MzM3IDMwLjcyMDkgNS4yNzkwOUMyNy4zNDY2IDEuOTA0ODEgMjIuNzcxOSAwLjAwNjM0OTkgMTggMFpNMTggMjYuMjVDMTYuMzY4MyAyNi4yNSAxNC43NzMzIDI1Ljc2NjEgMTMuNDE2NSAyNC44NTk2QzEyLjA1OTggMjMuOTUzMSAxMS4wMDI0IDIyLjY2NDYgMTAuMzc4IDIxLjE1NzFDOS43NTM1NyAxOS42NDk2IDkuNTkxOSAxNy45OTA4IDkuOTA4NTIgMTYuMzkwNUMxMC4yMjUxIDE0Ljc5MDIgMTEuMDEyNiAxMy4zMjAyIDEyLjE2NjQgMTIuMTY2NEMxMy4zMjAyIDExLjAxMjYgMTQuNzkwMiAxMC4yMjUxIDE2LjM5MDUgOS45MDg1MkMxNy45OTA4IDkuNTkxOSAxOS42NDk2IDkuNzUzNTcgMjEuMTU3MSAxMC4zNzhDMjIuNjY0NiAxMS4wMDI0IDIzLjk1MzEgMTIuMDU5OCAyNC44NTk2IDEzLjQxNjVDMjUuNzY2MSAxNC43NzMzIDI2LjI1IDE2LjM2ODMgMjYuMjUgMThDMjYuMjQ4NiAyMC4xODc2IDI1LjM3OSAyMi4yODUyIDIzLjgzMjEgMjMuODMyMUMyMi4yODUyIDI1LjM3OSAyMC4xODc2IDI2LjI0ODYgMTggMjYuMjVaIiBmaWxsPSIjNTYzRjNCIi8+Cjwvc3ZnPg==",
            iconImageSize: [36, 48],
            iconImageOffset: [-18, -48]
        };
    
        markersData.forEach(markerData => {
            const marker = new ymaps.Placemark(
                [markerData.lat, markerData.lng],
                { balloonContent: markerData.title },
                customIcon
            );
    
            marker.events.add("click", function () {
                selectedMarker = markerData;
                console.log(`Выбрана точка: ${markerData.title}`); 
            });
    
            map.geoObjects.add(marker);
        });
    
        document.getElementById("route-button").addEventListener("click", function () {
            if (!selectedMarker) {
                alert("Сначала выберите точку на карте.");
                return;
            }
    
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const userLocation = [position.coords.latitude, position.coords.longitude];
    
                    ymaps.route([userLocation, [selectedMarker.lat, selectedMarker.lng]], {
                        mapStateAutoApply: true
                    }).then(route => {
                        map.geoObjects.add(route);
                    }, error => {
                        console.error("Ошибка при построении маршрута:", error);
                    });
                }, error => {
                    console.error("Ошибка при получении местоположения:", error);
                });
            } else {
                alert("Геолокация не поддерживается вашим браузером.");
            }
        });
    }
}