import { User } from './user'

export class ResponseEntity {
    code: number;
    msg: string;
    data: User;
}