import * as superagent from 'superagent';

const methods = ['get', 'post', 'put', 'delete'];

interface IHttpErrorResponse extends Error {
  response: any;
}

class ApiClient {
  private defaults = {};

  constructor() {
    methods.forEach(method =>
      this[method] = (
        path: string,
        { headers, query, data, type }: any = {},
        isDHeadersWanted = true,
      ): Promise<object> =>
          new Promise((resolve, reject) => {
            const request = superagent[method](path);

            // set default headers
            if (isDHeadersWanted) {
              request.set(this.defaults);
            }

            if (type) {
              request.type(type);
            }

            if (headers) {
              request.set(headers);
            }

            if (query) {
              request.query(query);
            }

            if (data) {
              request.send(data);
            }

            request.end(
              (err: IHttpErrorResponse, res: superagent.Response) => {
                if (err) reject(err.response);
                else setTimeout(() => resolve(res.body || res), 1500);
              },
            );
          }),
    );
  }

  public get(path: string, params?: any, defaultHeaders?: boolean): Promise<object> {
    // Overrided in constructor
    return new Promise(resolve => resolve({}));
  }

  public post(path: string, params?: any, defaultHeaders?: boolean): Promise<object> {
    // Overrided in constructor
    return new Promise(resolve => resolve({}));
  }

  public put(path: string, params?: any, defaultHeaders?: boolean): Promise<object> {
    // Overrided in constructor
    return new Promise(resolve => resolve({}));
  }

  public delete(path: string, params?: any, defaultHeaders?: boolean): Promise<object> {
    // Overrided in constructor
    return new Promise(resolve => resolve({}));
  }

  public set(key: string, value: string) {
    this.defaults[key] = value;
  }
}

export default new ApiClient();
