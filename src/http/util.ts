import axios from 'axios';
import type {z} from 'zod';

export const getRequest = requestByMethod('GET');
export const postRequest = requestByMethod('POST');
export const putRequest = requestByMethod('PUT');
export const deleteRequest = requestByMethod('DELETE');

function requestByMethod(method: 'GET' | 'POST' | 'PUT' | 'DELETE') {
  return <Request extends ApiRequest, Response>(endpoint: string, responseSchema: z.ZodType<Response>) => {
    return async ({paths, queries, data: requestData}: Request) => {
      if (paths?.length) {
        endpoint += `/${paths.join('/')}`;
      }

      const {data} = await axios<Response>(endpoint, {
        method,
        headers: {accept: 'application/json'},
        ...(queries ? {params: queries} : {}),
        ...(requestData ? {data: requestData} : {}),
      });

      responseSchema.safeParseAsync(data).then(result => {
        if (!result.success) {
          console.warn(result.error.issues);
        }
      });

      return data;
    };
  };
}
