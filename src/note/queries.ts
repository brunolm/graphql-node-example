export const noteQueries = {
  Note: (parent, args, context) => {
    console.log('args', args)

    return [{ id: 5, note: 'message 5' }]
  },
}
