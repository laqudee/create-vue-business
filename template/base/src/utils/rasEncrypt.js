import { createEncrypter } from 'common-toolbox'

const PUBLIC_KEY = 'PUBLIC_KEY'

export const setRsa = createEncrypter(PUBLIC_KEY)
