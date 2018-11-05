import { Deserializable } from "./deserializable.model";

export class User {
  id: string;
  email: string;
  username: string;
  password: string;
  url: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
