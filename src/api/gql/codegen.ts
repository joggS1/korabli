import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  config: {
    immutableTypes: true,
    maybeValue: 'T'
  },
  documents: './src/api/gql/documents/**/*.gql',
  generates: {
    './src/api/gql/__generated__.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
    }
  },
  schema: {
    [process.env.VITE_BACKEND_API_URL as string]: {}
  }
};

export default config;
