const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');

    while (personalMovieDB.count || Number.isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
    }
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i += 1) {
      const a = prompt('Один из последних просмотренных фильмов?', '');
      const b = prompt('На сколько оцените его?', '');

      if (a && b && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i -= 1;
      }
    }
  },
  detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман!');
    } else {
      console.log('Произошла ошибка!');
    }
  },
  showMyDB(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB() {
    personalMovieDB.privat = !personalMovieDB.privat;
  },
  writeYourGenres() {
    for (let i = 1; i < 2; i += 1) {
      const genres = prompt('Введите ваши любимые жанры через запятую.').toLowerCase();

      if (genres) {
        console.log('Вы ввели некорректные данные или не ввели их.');
        i -= 1;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
