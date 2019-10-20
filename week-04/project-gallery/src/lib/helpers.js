//----------------------------unsplash api--------------------------//
const DOMAIN = 'https://api.unsplash.com'
const API_KEY =
  'ff5297fcef9e31da1c1d0fbde27074f0dcd715ecbcdc88e0f4d4acd6a4753357'
const END_POINT = 'photos'
const FEATURE = 'random?'
const COUNT = 20

export const getImagesURL = () =>
  `${DOMAIN}/${END_POINT}/${FEATURE}&count=${COUNT}&client_id=${API_KEY}`

/*the following part is on resizing images merely via url, 
"imgix" supports all these parameters*/

const WIDTH = 1600
const HEIGHT = 900
const FIT = 'fill'
const FILL = 'blur'
export const APPENDED_PATH = `&w=${WIDTH}&h=${HEIGHT}&fit=${FIT}&fill=${FILL}`

//------------------------giphy api------------------------------//
// const DOMAIN = 'https://api.giphy.com/v1/gifs/'
// const ENDPOINT = 'trending'
// export const LIMIT = 8
// const API_KEY = 'pEXIDqLWH6tszhUIxTdup8t2zOEDBn9w'
// export const getImages = () =>
//   `${DOMAIN + ENDPOINT}?api_key=${API_KEY}&limit=${LIMIT.toString()}&rating=G`

//------------------------pixabay api------------------------------//
// const DOMAIN = 'https://pixabay.com/api/'
// const API_KEY = '13970451-04aa5592967638aa83e9865f2'
// const QUERIES = 'beautiful'
// const TYPE = 'photo'
// export const LIMIT = 8
// export const getImages = () =>
//   `${DOMAIN}?key=${API_KEY}&q=${QUERIES}&image_type=${TYPE}&orientation=vertical`
