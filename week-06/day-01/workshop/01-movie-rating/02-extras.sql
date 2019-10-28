-- Q1 --
SELECT
  DISTINCT reviewer.name
FROM movie,
  reviewer,
  rating
WHERE
  reviewer.rID = rating.rID
  AND rating.mID = movie.mID
  AND movie.title = 'Gone with the Wind';
--Q2--
SELECT
  reviewer.name,
  movie.title,
  rating.stars
FROM movie,
  reviewer,
  rating
WHERE
  movie.mID = rating.mID
  AND rating.rID = reviewer.rID
  AND movie.director = reviewer.name;