ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),


	map.addControl(new ymaps.Zoom());
	map.addControl(new ymaps.TypeControl());
	map.addControl(new ymaps.ToolBar());

    // Создание и добавление YMapsML-документа на карту
  var ml = new ymaps.YMapsML("https://github.com/mininamaria/slexp/blob/main/YMapsML.xml");
map.addOverlay(ml);

   ymaps.Events.observe(ml, ml.Events.Fault, function (ml, error) {
    alert("Произошла ошибка: " + error);
});
