// Copyright SPIRA-México 2024 - Software que cambia vidas! github.com/jussef

/* Listado de pantalla del curso */
var course = new Object();
var audioCurrent = 0;

course.pages = [
	{ title: 'Inicio', url: 'pantallaAudios.html', navegacion: true, menu: false },
	{ title: 'Portada', url: 'pantalla_00.html', navegacion: false, menu: false },
	{ title: 'Pantalla_01', url: 'pantalla_01.html', navegacion: true, menu: true },
	{ title: 'Pantalla_02', url: 'pantalla_02.html', navegacion: true, menu: true },
	{ title: 'Pantalla_03', url: 'pantalla_03.html', navegacion: true, menu: true },
	{ title: 'Pantalla_04', url: 'pantalla_04.html', navegacion: true, menu: true },
	{ title: 'Pantalla_05', url: 'pantalla_05.html', navegacion: true, menu: true },
	{ title: 'Pantalla_05b', url: 'pantalla_05b.html', navegacion: true, menu: true },
	{ title: 'Pantalla_06', url: 'pantalla_06.html', navegacion: true, menu: true },
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
	{ title: 'Pantalla_18', url: 'pantalla_18.html', navegacion: true, menu: true },
	{ title: 'Pantalla_19', url: 'pantalla_19.html', navegacion: true, menu: true },
	{ title: 'Pantalla_20', url: 'pantalla_20.html', navegacion: true, menu: true },
	{ title: 'Pantalla_21', url: 'pantalla_21.html', navegacion: true, menu: true },
	{ title: 'Pantalla_22', url: 'pantalla_22.html', navegacion: true, menu: true },
	{ title: 'Pantalla_23', url: 'pantalla_23.html', navegacion: true, menu: true },
	{ title: 'Pantalla_24', url: 'pantalla_24.html', navegacion: true, menu: true },
	{ title: 'Pantalla_25', url: 'pantalla_25.html', navegacion: true, menu: true },
	{ title: 'Pantalla_26', url: 'pantalla_26.html', navegacion: true, menu: true },
];

// Musica Fondo
var Audios = new Array();
// Musica Fondo
Audios[0] = new Howl({ src: './contenido/audios/audiovacio.mp3' });

//Pantalla Portada
Audios['0_1'] = new Howl({ src: './contenido/audios/P0_01.mp3' });

//Pantalla 1
Audios['1_1'] = new Howl({ src: './contenido/audios/P1_01.mp3' });

//Pantalla 2
Audios['2_1'] = new Howl({ src: './contenido/audios/P2_01.mp3' });
Audios['2_2'] = new Howl({ src: './contenido/audios/P2_02.mp3' });

//Pantalla 3
Audios['3_1'] = new Howl({ src: './contenido/audios/P3_01.mp3' });
Audios['3_2'] = new Howl({ src: './contenido/audios/P3_02.mp3' });
Audios['3_3'] = new Howl({ src: './contenido/audios/P3_03.mp3' });
Audios['3_4'] = new Howl({ src: './contenido/audios/P3_04.mp3' });

//Pantalla 4
Audios['4_1'] = new Howl({ src: './contenido/audios/P4_01.mp3' });
Audios['4_2'] = new Howl({ src: './contenido/audios/P4_02.mp3' });

//Pantalla 5
Audios['5_1'] = new Howl({ src: './contenido/audios/P5_01.mp3' });
Audios['5_2'] = new Howl({ src: './contenido/audios/P5_02.mp3' });
Audios['5_3'] = new Howl({ src: './contenido/audios/P5_03.mp3' });
Audios['5_4'] = new Howl({ src: './contenido/audios/P5_04.mp3' });
Audios['5_5'] = new Howl({ src: './contenido/audios/P5_05.mp3' });
Audios['5_6'] = new Howl({ src: './contenido/audios/P5_06.mp3' });

//Pantalla 6
Audios['6_1'] = new Howl({ src: './contenido/audios/P6_01.mp3' });
Audios['6_2'] = new Howl({ src: './contenido/audios/P6_02.mp3' });
Audios['6_3'] = new Howl({ src: './contenido/audios/P6_03.mp3' });
Audios['6_4'] = new Howl({ src: './contenido/audios/P6_04.mp3' });
Audios['6_5'] = new Howl({ src: './contenido/audios/P6_05.mp3' });
Audios['6_6'] = new Howl({ src: './contenido/audios/P6_06.mp3' });
Audios['6_7'] = new Howl({ src: './contenido/audios/P6_07.mp3' });

//Pantalla 7
Audios['7_1'] = new Howl({ src: './contenido/audios/P7_01.mp3' });
Audios['7_2'] = new Howl({ src: './contenido/audios/P7_02.mp3' });
Audios['7_3'] = new Howl({ src: './contenido/audios/P7_03.mp3' });

//Pantalla 8
Audios['8_1'] = new Howl({ src: './contenido/audios/P8_01.mp3' });
Audios['8_2'] = new Howl({ src: './contenido/audios/P8_02.mp3' });

//Pantalla 10
Audios['10_1'] = new Howl({ src: './contenido/audios/P10_01.mp3' });
Audios['10_2'] = new Howl({ src: './contenido/audios/P10_02.mp3' });
Audios['10_3'] = new Howl({ src: './contenido/audios/P10_03.mp3' });
Audios['10_4'] = new Howl({ src: './contenido/audios/P10_04.mp3' });

//Pantalla 11
Audios['11_0'] = new Howl({ src: './contenido/audios/P11_00.mp3' });
Audios['11_1'] = new Howl({ src: './contenido/audios/P11_01.mp3' });

//Pantalla 13
Audios['13_1'] = new Howl({ src: './contenido/audios/P13_01.mp3' });
Audios['13_2'] = new Howl({ src: './contenido/audios/P13_02.mp3' });
Audios['13_3'] = new Howl({ src: './contenido/audios/P13_03.mp3' });

//Pantalla 15
Audios['15_1'] = new Howl({ src: './contenido/audios/P15_01.mp3' });
Audios['15_2'] = new Howl({ src: './contenido/audios/P15_02.mp3' });

//Pantalla 16
Audios['16_1'] = new Howl({ src: './contenido/audios/P16_01.mp3' });

//Pantalla 17
Audios['17_1'] = new Howl({ src: './contenido/audios/P17_01.mp3' });
Audios['17_2'] = new Howl({ src: './contenido/audios/P17_02.mp3' });
Audios['17_3'] = new Howl({ src: './contenido/audios/P17_03.mp3' });
Audios['17_4'] = new Howl({ src: './contenido/audios/P17_04.mp3' });

//Pantalla 18
Audios['18_1'] = new Howl({ src: './contenido/audios/P18_01.mp3' });
Audios['18_2'] = new Howl({ src: './contenido/audios/P18_02.mp3' });

//Pantalla 19
Audios['19_1'] = new Howl({ src: './contenido/audios/P19_01.mp3' });
Audios['19_2'] = new Howl({ src: './contenido/audios/P19_02.mp3' });
Audios['19_3'] = new Howl({ src: './contenido/audios/P19_03.mp3' });
Audios['19_4'] = new Howl({ src: './contenido/audios/P19_04.mp3' });
Audios['19_5'] = new Howl({ src: './contenido/audios/P19_05.mp3' });
Audios['19_6'] = new Howl({ src: './contenido/audios/P19_06.mp3' });
Audios['19_7'] = new Howl({ src: './contenido/audios/P19_07.mp3' });
Audios['19_8'] = new Howl({ src: './contenido/audios/P19_08.mp3' });

//Pantalla 21
Audios['21_1'] = new Howl({ src: './contenido/audios/P21_01.mp3' });
Audios['21_2'] = new Howl({ src: './contenido/audios/P21_02.mp3' });
Audios['21_3'] = new Howl({ src: './contenido/audios/P21_03.mp3' });

//Pantalla 22
Audios['22_1'] = new Howl({ src: './contenido/audios/P22_01.mp3' });
Audios['22_2'] = new Howl({ src: './contenido/audios/P22_02.mp3' });
Audios['22_3'] = new Howl({ src: './contenido/audios/P22_03.mp3' });
Audios['22_4'] = new Howl({ src: './contenido/audios/P22_04.mp3' });
Audios['22_5'] = new Howl({ src: './contenido/audios/P22_05.mp3' });

//Pantalla 23
Audios['23_1'] = new Howl({ src: './contenido/audios/P23_01.mp3' });
Audios['23_2'] = new Howl({ src: './contenido/audios/P23_02.mp3' });

//Pantalla 24
Audios['24_1'] = new Howl({ src: './contenido/audios/P24_01.mp3' });
Audios['24_2'] = new Howl({ src: './contenido/audios/P24_02.mp3' });

//Pantalla 26
Audios['26_1'] = new Howl({ src: './contenido/audios/P26_01.mp3' });
Audios['26_2'] = new Howl({ src: './contenido/audios/P26_02.mp3' });


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
