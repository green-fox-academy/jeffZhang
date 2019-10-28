-- Q1 --
SELECT
  title
FROM Movie
WHERE
  director = 'Steven Spielberg';
-- Q2 --
SELECT
  DISTINCT movie.year
FROM movie,
  rating
WHERE
  movie.mID = rating.mID
  AND rating.stars >= 4;
-- Q3 --
SELECT
  DISTINCT movie.title
FROM movie,
  rating
WHERE
  movie.mID NOT IN (
    SELECT
      DISTINCT mID
    FROM rating
  );
-- Q4 --
SELECT
  DISTINCT reviewer.name
FROM reviewer,
  rating
WHERE
  reviewer.rID = rating.rID
  AND rating.ratingDate IS NULL;
--Q5 --
SELECT
  DISTINCT reviewer.name AS REVIEWER_NAME,
  movie.title AS MOVIE_TITLE,
  rating.stars AS STARS,
  rating.ratingDate AS DATE
FROM movie,
  Reviewer,
  rating
WHERE
  rating.rID = reviewer.rID
  AND rating.mID = movie.mID
ORDER BY
  reviewer.name,
  movie.title,
  rating.stars;