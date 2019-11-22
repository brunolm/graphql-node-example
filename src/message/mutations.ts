import * as yup from 'yup'

export const messageMutations = {
  setMessage: {
    validationSchema: yup.object().shape({
      input: yup.object().shape({ message: yup.string().email() }),
    }),

    resolve(_, { input }) {
      return { id: (Math.random() * 100) | 0, message: input.message }
    },
  },
}
