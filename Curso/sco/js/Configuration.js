// Copyright SPIRA-México 2023 - Software que cambia vidas! github.com/jussef

/* Listado de pantalla del curso */
var course = new Object();
var audioCurrent = 0;

course.pages = [
	{ title: 'Inicio', url: 'pantallaAudios.html', navegacion: true, menu: false },
	{ title: 'Pantalla_portada', url: 'pantalla_portada.html', navegacion: false, menu: false },
	{ title: 'Pantalla_01', url: 'pantalla_01.html', navegacion: true, menu: true },
	{ title: 'Pantalla_02', url: 'pantalla_02.html', navegacion: true, menu: true },
	{ title: 'Pantalla_03', url: 'pantalla_03.html', navegacion: true, menu: true },
	{ title: 'Pantalla_04', url: 'pantalla_04.html', navegacion: true, menu: true },
	{ title: 'Pantalla_05', url: 'pantalla_05.html', navegacion: true, menu: true },
	{ title: 'Pantalla_06', url: 'pantalla_06.html', navegacion: true, menu: true },
	{ title: 'Pantalla_06', url: 'pantalla_06B.html', navegacion: true, menu: true },
	{ title: 'Pantalla_07', url: 'pantalla_07.html', navegacion: true, menu: true },
	{ title: 'Pantalla_08', url: 'pantalla_08.html', navegacion: true, menu: true },
	{ title: 'Pantalla_09', url: 'pantalla_09.html', navegacion: true, menu: true },
	{ title: 'Pantalla_10', url: 'pantalla_10.html', navegacion: true, menu: true },
	{ title: 'Pantalla_11', url: 'pantalla_11.html', navegacion: true, menu: true },
	{ title: 'Pantalla_12', url: 'pantalla_12.html', navegacion: true, menu: true },
	{ title: 'Pantalla_13', url: 'pantalla_13.html', navegacion: true, menu: true },
	{ title: 'Pantalla_14', url: 'pantalla_14.html', navegacion: true, menu: true },
	{ title: 'Pantalla_15', url: 'pantalla_15.html', navegacion: true, menu: true },
	{ title: 'Pantalla_16', url: 'pantalla_16.html', navegacion: true, menu: true },
	{ title: 'Pantalla_17', url: 'pantalla_17.html', navegacion: true, menu: true },
	{ title: 'Pantalla_18', url: 'pantalla_18.html', navegacion: false, menu: false },
	{ title: 'Pantalla_19', url: 'pantalla_19.html', navegacion: false, menu: false },
];

// Musica Fondo
var Audios = new Array();
// Musica Fondo
Audios[0] = new Howl({ src: './contenido/audios/audiovacio.mp3' });

Audios['1_0'] = new Howl({ src: './contenido/audios/p01.mp3' });

//Pantalla 2
Audios['1_1'] = new Howl({ src: './contenido/audios/P1.mp3' });
//Pantalla 2
Audios['2_1'] = new Howl({ src: './contenido/audios/P2.mp3' });
//Pantalla 3
Audios['3_1'] = new Howl({ src: './contenido/audios/P3_01.mp3' });
Audios['3_2'] = new Howl({ src: './contenido/audios/P3_02.mp3' });
//Pantalla 4
Audios['4_1'] = new Howl({ src: './contenido/audios/P4_01.mp3' });
//Pantalla 5
Audios['5_1'] = new Howl({ src: './contenido/audios/P5_01.mp3' });
Audios['5_2'] = new Howl({ src: './contenido/audios/P5_02.mp3' });
Audios['5_3'] = new Howl({ src: './contenido/audios/P5_03.mp3' });
//Pantalla 6
Audios['6_1'] = new Howl({ src: './contenido/audios/P6_01.mp3' });
Audios['6_2'] = new Howl({ src: './contenido/audios/P6_03.mp3' });
Audios['6_3'] = new Howl({ src: './contenido/audios/P6_04.mp3' });
Audios['6_4'] = new Howl({ src: './contenido/audios/P6_05.mp3' });
Audios['6_5'] = new Howl({ src: './contenido/audios/P6_06.mp3' });
Audios['6_6'] = new Howl({ src: './contenido/audios/P6_07.mp3' });
Audios['6_7'] = new Howl({ src: './contenido/audios/P6_08.mp3' });
Audios['6_8'] = new Howl({ src: './contenido/audios/P6_09.mp3' });
Audios['6_9'] = new Howl({ src: './contenido/audios/P6_10.mp3' });
Audios['6_10'] = new Howl({ src: './contenido/audios/P6_11.mp3' });
Audios['6_12'] = new Howl({ src: './contenido/audios/P6_13.mp3' });
Audios['6_13'] = new Howl({ src: './contenido/audios/P6_14.mp3' });

//Pantalla 7
Audios['7_1'] = new Howl({ src: './contenido/audios/P7_01.mp3' });
Audios['7_2'] = new Howl({ src: './contenido/audios/P7_02.mp3' });
Audios['7_3'] = new Howl({ src: './contenido/audios/P7_03.mp3' });
Audios['7_4'] = new Howl({ src: './contenido/audios/P7_04.mp3' });
Audios['7_5'] = new Howl({ src: './contenido/audios/P7_05.mp3' });
Audios['7_6'] = new Howl({ src: './contenido/audios/P7_06.mp3' });
Audios['7_7'] = new Howl({ src: './contenido/audios/P7_07.mp3' });
Audios['7_8'] = new Howl({ src: './contenido/audios/P7_08.mp3' });
Audios['7_14'] = new Howl({ src: './contenido/audios/P7_14.mp3' });
//Pantalla 8
Audios['8_1'] = new Howl({ src: './contenido/audios/P8_01.mp3' });
Audios['8_2'] = new Howl({ src: './contenido/audios/P8_02.mp3' });
Audios['8_3'] = new Howl({ src: './contenido/audios/P8_03.mp3' });
Audios['8_4'] = new Howl({ src: './contenido/audios/P8_04.mp3' });
Audios['8_5'] = new Howl({ src: './contenido/audios/P8_05.mp3' });
Audios['8_6'] = new Howl({ src: './contenido/audios/P8_06.mp3' });
Audios['8_7'] = new Howl({ src: './contenido/audios/P8_07.mp3' });
Audios['8_8'] = new Howl({ src: './contenido/audios/P8_08.mp3' });
Audios['8_9'] = new Howl({ src: './contenido/audios/P8_09.mp3' });

//Pantalla 9
Audios['9_1'] = new Howl({ src: './contenido/audios/P9_01.mp3' });
Audios['9_2'] = new Howl({ src: './contenido/audios/P9_02.mp3' });
Audios['9_3'] = new Howl({ src: './contenido/audios/P9_03.mp3' });
//Pantalla 10
Audios['10_1'] = new Howl({ src: './contenido/audios/P10_01.mp3' });
Audios['10_2'] = new Howl({ src: './contenido/audios/P10_02.mp3' });
Audios['10_3'] = new Howl({ src: './contenido/audios/P10_03.mp3' });
Audios['10_4'] = new Howl({ src: './contenido/audios/P10_04.mp3' });
Audios['10_5'] = new Howl({ src: './contenido/audios/P10_05.mp3' });
Audios['10_6'] = new Howl({ src: './contenido/audios/P10_06.mp3' });
Audios['10_7'] = new Howl({ src: './contenido/audios/P10_07.mp3' });
Audios['10_8'] = new Howl({ src: './contenido/audios/P10_08.mp3' });

//Pantalla 11
Audios['11_0'] = new Howl({ src: './contenido/audios/P11_00.mp3' });
Audios['11_1'] = new Howl({ src: './contenido/audios/P11_01.mp3' });

//Pantalla 12
Audios['12_1'] = new Howl({ src: './contenido/audios/P12_01.mp3' });
Audios['12_2'] = new Howl({ src: './contenido/audios/P12_02.mp3' });
Audios['12_3'] = new Howl({ src: './contenido/audios/P12_03.mp3' });
Audios['12_4'] = new Howl({ src: './contenido/audios/P12_04.mp3' });
Audios['12_5'] = new Howl({ src: './contenido/audios/P12_05.mp3' });

//Pantalla 13
Audios['13_1'] = new Howl({ src: './contenido/audios/P13_01.mp3' });
Audios['13_2'] = new Howl({ src: './contenido/audios/P13_02.mp3' });

//Pantalla 14
Audios['14_1'] = new Howl({ src: './contenido/audios/P14_01.mp3' });
Audios['14_2'] = new Howl({ src: './contenido/audios/P14_02.mp3' });
Audios['14_3'] = new Howl({ src: './contenido/audios/P14_03.mp3' });
Audios['14_4'] = new Howl({ src: './contenido/audios/P14_04.mp3' });
Audios['14_5'] = new Howl({ src: './contenido/audios/P14_05.mp3' });
Audios['14_6'] = new Howl({ src: './contenido/audios/P14_06.mp3' });
Audios['14_7'] = new Howl({ src: './contenido/audios/P14_07.mp3' });
Audios['14_8'] = new Howl({ src: './contenido/audios/P14_08.mp3' });

//Pantalla 15
Audios['15_1'] = new Howl({ src: './contenido/audios/P15_01.mp3' });

//Pantalla 16
Audios['16_1'] = new Howl({ src: './contenido/audios/P16_01.mp3' });
Audios['16_2'] = new Howl({ src: './contenido/audios/P16_02.mp3' });
Audios['16_3'] = new Howl({ src: './contenido/audios/P16_03.mp3' });

//Pantalla 17
Audios['17_1'] = new Howl({ src: './contenido/audios/P16_01.mp3' });
Audios['17_2'] = new Howl({ src: './contenido/audios/P16_02.mp3' });
Audios['17_3'] = new Howl({ src: './contenido/audios/P16_03.mp3' });

//Pantalla 18 retros
Audios['18_1'] = new Howl({ src: './contenido/audios/P18_01.mp3' });
Audios['18_2'] = new Howl({ src: './contenido/audios/P18_02.mp3' });
Audios['18_3'] = new Howl({ src: './contenido/audios/P18_03.mp3' });
Audios['18_mal1'] = new Howl({ src: './contenido/audios/P18_mal1.mp3' });
Audios['18_mal2'] = new Howl({ src: './contenido/audios/P18_mal2.mp3' });

var timeAudio = 0;
function reproducir(audio, tiempo) {
	audioCurrent = audio;
	timeAudio = setTimeout(function () {
		DEBUG ? console.log('%c Audio: ' + audio, 'font-size: 100%; color: #ff7e29; font-weight: 700;') : '';
		Audios[audio].play();
	}, tiempo * 1000);
}

function stopAudio(audio, tiempo) {
	console.log('parar');
	audioCurrent = audio;
	timeAudio = setTimeout(function () {
		DEBUG ? console.log('%c Audio: ' + audio, 'font-size: 100%; color: #ff7e29; font-weight: 700;') : '';
		Audios[audio].stop();
	}, tiempo * 1000);
}

function changeVolumen(volumens) {
	volPage = volumens;
	setVolumen();
}

function setVolumen(volPage) {
	Howler.volume(volPage);
}

function silencio(bool) {
	Howler.mute(bool);
}

function audioStop() {
	clearTimeout(timeAudio);
	Howler.stop();
}

// Presiona "F" para avanzar siguiente audio
$(document).keydown(function (e) {
	e.preventDefault();
	console.log(e.keyCode);
	if (e.keyCode === 70) {
		let totalDuration = Audios[audioCurrent].duration();
		Audios[audioCurrent].seek(totalDuration);
	}
});
