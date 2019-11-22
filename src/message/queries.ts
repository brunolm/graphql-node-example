export const messageQueries = {
  Message: (parent, { id }, context) => {
    return [
      { id: 1, message: 'message 1' },
      { id: 2, message: 'message 2' },
      { id: 3, message: 'message 3' },
      { id: 4, message: 'message 4' },
      { id: 5, message: 'message 5' },
    ].find((x) => x.id === +id)
  },
}
