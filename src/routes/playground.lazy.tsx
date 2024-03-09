import { createLazyFileRoute } from '@tanstack/react-router';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import 'graphiql/graphiql.css';

export const Route = createLazyFileRoute('/playground')({
  component: Playground
});

const fetcher = createGraphiQLFetcher({ url: 'https://vortex.korabli.su/api/graphql/glossary/' });

function Playground() {
  return (
    <div className='h-full max-h-full'>
      <GraphiQL fetcher={fetcher} />
    </div>
  );
}
