const { makeExecutableSchema } = require('@graphql-tools/schema');

const removeMovie = (parent, params) => {
  const { movie } = params;
  const { id } = movie;

  const filters = {
    _id: id,
  };

  return Movies.remove(filters);
};

const fetchMovies = (parent, params) => {
  const { filters = {} } = params;
  const { title, star, id } = filters;

  const newFilters = {};

  if (star) {
    newFilters.stars = {
      $regex: star,
      $options: 'i',
    };
  }

  if (title) {
    newFilters.title = {
      $regex: title,
      $options: 'i',
    };
  }

  if (id) {
    newFilters['_id'] = id;
  }

  return Movies.find(newFilters).sort({ title: 'asc' });
};

const createMovie = (parent, params) => {
  const { movie } = params;

  const {
    title,
    releaseYear,
    stars,
    format,
  } = movie;

  const instance = new Movies({
    title,
    releaseYear,
    stars,
    format,
  });

  return instance.save();
};

const resolvers = {
  Query: {
    movies: fetchMovies,
  },

  Mutation: {
    createMovie,
    removeMovie,
  },
};

const typeDefs = `
  type Movie {
    _id: String,
    title: String,
    releaseYear: String,
    stars: [String],
    format: String,
  }

  input MovieInput {
    _id: String,
    title: String,
    releaseYear: String,
    stars: [String],
    format: String,
  }

  input MovieFilters {
    _id: String,
    title: String,
    star: String,
  }

  type CreateMovieResponse {
    _id: String,
    title: String,
    releaseYear: String,
    stars: [String],
    format: String,
  }

  type RemoveMovieResponse {
    _id: String,
    title: String,
    releaseYear: String,
    stars: [String],
    format: String,
  }

  type Query {
    movies(filters: MovieFilters): [Movie],
  }

  type Mutation {
    createMovie(movie: MovieInput): CreateMovieResponse,
    removeMovie(movie: MovieInput): RemoveMovieResponse,
  }
`;

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
