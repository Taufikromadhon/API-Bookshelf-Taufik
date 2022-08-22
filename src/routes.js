const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
//   getBookQueryParameterName,
//   getBookQueryParameterReading,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  //   {
  //     method: 'GET',
  //     path: '/books/{name?}',
  //     handler: getBookQueryParameterName,
  //   },
  //   {
  //     method: 'GET',
  //     path: '/books/{reading?}',
  //     handler: getBookQueryParameterReading,
  //   },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];
module.exports = routes;
