// Helper function to handle base path for static exports
export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/singularity2.0' : ''
}

export const withBasePath = (path: string) => {
  return `${getBasePath()}${path}`
}
