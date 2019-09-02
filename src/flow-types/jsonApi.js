// @flow

export type JsonApiDataType = {
  id: string,
  type: string,
  attributes: Object,
  relationships: Object
};

export type JsonApiObjectDataType = {
  data: JsonApiDataType,
  included: Array<Object>
};

export type JsonApiArrayDataType = {
  data: Array<JsonApiDataType>,
  included: Array<Object>,
  links: {
    first: string,
    last: string,
    next: string | null,
    prev: string | null,
    self: string
  },
  meta: {
    pagination: {
      current_page: number,
      limit_value: number,
      next_page: number | null,
      prev_page: number | null,
      total_count: number,
      total_pages: number
    }
  }
};
