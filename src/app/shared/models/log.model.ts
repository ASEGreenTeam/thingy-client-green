import { Deserializable } from "./deserializable.model";

export class Log {
  id: string;
  direction: string;
  createdAt: string;
  url: string

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
