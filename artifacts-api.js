import { ArtifactsApi } from 'artifacts-api-client';
const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImxsY2NyciIsInBhc3N3b3JkX2NoYW5nZWQiOiIifQ.3EjfDJrs-tD7bgwg8sI3PqqABErD9I7h15fUOprHRiQ';

const artifactsApiClient = ArtifactsApi.create({
    token: token
});

export const artifactsApi = artifactsApiClient;
